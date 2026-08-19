import { Resend } from "resend"

export const runtime = "nodejs"

// Destination inbox for consultation requests. Override with CONTACT_TO if needed.
const CONTACT_TO = process.env.CONTACT_TO || "socal@felxtek.com"
// Sender address. Uses the verified felxtek.com domain so email can be
// delivered to any recipient. Override with CONTACT_FROM if you use a
// different verified sender.
const CONTACT_FROM = process.env.CONTACT_FROM || "FelxTek Website <noreply@felxtek.com>"

type ContactPayload = {
  firstName?: string
  lastName?: string
  company?: string
  email?: string
  phone?: string
  companySize?: string
  topic?: string
  message?: string
  // Honeypot field — should be empty for real users.
  website?: string
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export async function POST(request: Request) {
  let body: ContactPayload
  try {
    body = await request.json()
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 })
  }

  // Honeypot: silently accept bots without sending mail.
  if (body.website && body.website.trim() !== "") {
    return Response.json({ ok: true })
  }

  const firstName = (body.firstName ?? "").trim()
  const lastName = (body.lastName ?? "").trim()
  const email = (body.email ?? "").trim()
  const company = (body.company ?? "").trim()
  const phone = (body.phone ?? "").trim()
  const companySize = (body.companySize ?? "").trim()
  const topic = (body.topic ?? "").trim()
  const message = (body.message ?? "").trim()

  if (!firstName || !lastName || !email) {
    return Response.json({ error: "Please provide your name and email." }, { status: 400 })
  }
  if (!isValidEmail(email)) {
    return Response.json({ error: "Please provide a valid email address." }, { status: 400 })
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.log("[v0] RESEND_API_KEY is not set")
    return Response.json(
      { error: "Email service is not configured yet. Please try again shortly." },
      { status: 500 },
    )
  }

  const resend = new Resend(apiKey)

  const fullName = `${firstName} ${lastName}`
  const rows: [string, string][] = [
    ["Name", fullName],
    ["Company", company || "—"],
    ["Email", email],
    ["Phone", phone || "—"],
    ["Company size", companySize || "—"],
    ["Topic", topic || "—"],
  ]

  const html = `
    <div style="font-family: ui-sans-serif, system-ui, sans-serif; color: #0f172a; line-height: 1.6;">
      <h2 style="margin: 0 0 16px;">New consultation request</h2>
      <table style="border-collapse: collapse; width: 100%; max-width: 560px;">
        ${rows
          .map(
            ([label, value]) => `
          <tr>
            <td style="padding: 6px 12px 6px 0; font-weight: 600; vertical-align: top; white-space: nowrap;">${escapeHtml(
              label,
            )}</td>
            <td style="padding: 6px 0;">${escapeHtml(value)}</td>
          </tr>`,
          )
          .join("")}
      </table>
      ${
        message
          ? `<div style="margin-top: 16px;">
               <div style="font-weight: 600; margin-bottom: 4px;">Message</div>
               <div style="white-space: pre-wrap;">${escapeHtml(message)}</div>
             </div>`
          : ""
      }
    </div>
  `

  const text = [
    "New consultation request",
    "",
    ...rows.map(([label, value]) => `${label}: ${value}`),
    "",
    message ? `Message:\n${message}` : "",
  ]
    .join("\n")
    .trim()

  try {
    const { error } = await resend.emails.send({
      from: CONTACT_FROM,
      to: [CONTACT_TO],
      replyTo: email,
      subject: `Consultation request — ${fullName}${company ? ` (${company})` : ""}`,
      html,
      text,
    })

    if (error) {
      console.log("[v0] Resend error:", error)
      // Surface Resend's own guidance (e.g. domain not verified) so setup issues
      // are actionable instead of a generic failure.
      const detail =
        typeof (error as { message?: string }).message === "string"
          ? (error as { message: string }).message
          : "Could not send your request. Please try again."
      return Response.json({ error: detail }, { status: 502 })
    }

    return Response.json({ ok: true })
  } catch (err) {
    console.log("[v0] Contact route error:", err)
    return Response.json({ error: "Something went wrong. Please try again." }, { status: 500 })
  }
}
