'use client'

import { useState } from 'react'
import type { FormEvent } from 'react'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

const inputClass =
  'w-full rounded-lg border border-border bg-background/70 px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/30'
const labelClass = 'mb-1.5 block text-sm font-medium text-foreground/90'

const helpOptions = [
  'Azure Infrastructure',
  'Microsoft 365',
  'Cybersecurity',
  'Microsoft Entra / Identity',
  'Intune / Endpoint Management',
  'SOC 2',
  'HIPAA',
  'CMMC',
  'FedRAMP',
  'Managed Services',
  'Other',
]

const companySizes = [
  '1-19 employees',
  '20-50 employees',
  '51-150 employees',
  '151-300 employees',
  '301-500 employees',
  '500+ employees',
]

export function ContactSection() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle')
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError(null)
    setStatus('submitting')

    const form = e.currentTarget
    const data = new FormData(form)
    const payload = {
      firstName: String(data.get('firstName') ?? ''),
      lastName: String(data.get('lastName') ?? ''),
      company: String(data.get('company') ?? ''),
      email: String(data.get('email') ?? ''),
      phone: String(data.get('phone') ?? ''),
      companySize: String(data.get('companySize') ?? ''),
      topic: String(data.get('help') ?? ''),
      message: String(data.get('message') ?? ''),
      website: String(data.get('website') ?? ''),
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (!res.ok) {
        const body = (await res.json().catch(() => null)) as { error?: string } | null
        throw new Error(body?.error ?? 'Something went wrong. Please try again.')
      }

      form.reset()
      setStatus('success')
    } catch (err) {
      setStatus('idle')
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    }
  }

  return (
    <section id="contact" className="relative overflow-hidden py-20 sm:py-28">
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-b from-background to-card/40"
        aria-hidden="true"
      />
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium uppercase tracking-wide text-azure-soft">
            <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" />
            Contact
          </span>
          <h2 className="mt-4 text-balance text-3xl font-semibold text-foreground sm:text-4xl md:text-5xl">
            Let&apos;s Talk About Your Microsoft Environment
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-pretty leading-relaxed text-muted-foreground">
            Tell us about your goals and current setup. We&apos;ll follow up to schedule a
            consultation or a Microsoft security assessment.
          </p>
        </div>

        <div className="mt-10 rounded-3xl border border-border bg-card p-6 sm:p-8">
          {status === 'success' ? (
            <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
              <span className="flex size-16 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-primary">
                <CheckCircle2 className="size-8" />
              </span>
              <h3 className="text-2xl font-semibold text-foreground">
                Thank you - message received
              </h3>
              <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
                A FelxTek cloud specialist will reach out shortly to schedule your
                consultation.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid gap-5">
              {/* Honeypot field — hidden from users, catches bots. */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="website">Website</label>
                <input id="website" name="website" tabIndex={-1} autoComplete="off" />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="firstName" className={labelClass}>
                    First Name
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    required
                    autoComplete="given-name"
                    className={inputClass}
                    placeholder="Jane"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className={labelClass}>
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    required
                    autoComplete="family-name"
                    className={inputClass}
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="company" className={labelClass}>
                    Company
                  </label>
                  <input
                    id="company"
                    name="company"
                    required
                    autoComplete="organization"
                    className={inputClass}
                    placeholder="Acme Inc."
                  />
                </div>
                <div>
                  <label htmlFor="email" className={labelClass}>
                    Work Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className={inputClass}
                    placeholder="jane@company.com"
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="phone" className={labelClass}>
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    className={inputClass}
                    placeholder="(555) 000-0000"
                  />
                </div>
                <div>
                  <label htmlFor="companySize" className={labelClass}>
                    Company Size
                  </label>
                  <select
                    id="companySize"
                    name="companySize"
                    required
                    defaultValue=""
                    className={inputClass}
                  >
                    <option value="" disabled>
                      Select size
                    </option>
                    {companySizes.map((size) => (
                      <option key={size} value={size}>
                        {size}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="help" className={labelClass}>
                  What Can We Help With?
                </label>
                <select id="help" name="help" required defaultValue="" className={inputClass}>
                  <option value="" disabled>
                    Select a topic
                  </option>
                  {helpOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className={labelClass}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className={`${inputClass} resize-none`}
                  placeholder="Tell us about your environment and goals..."
                />
              </div>

              {error ? (
                <p
                  role="alert"
                  className="rounded-lg border border-destructive/40 bg-destructive/10 px-3.5 py-2.5 text-sm text-destructive"
                >
                  {error}
                </p>
              ) : null}

              <Button
                type="submit"
                size="lg"
                disabled={status === 'submitting'}
                className="h-11 w-full bg-primary text-base text-primary-foreground shadow-[0_0_28px_-6px] shadow-primary/60 hover:bg-primary/90 disabled:opacity-70"
              >
                {status === 'submitting' ? 'Sending...' : 'Schedule a Consultation'}
                {status === 'submitting' ? null : <ArrowRight data-icon="inline-end" />}
              </Button>
              <p className="text-center text-xs text-muted-foreground">
                By submitting, you agree to be contacted by FelxTek about your inquiry.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
