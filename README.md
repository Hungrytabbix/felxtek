# FelxTek

Marketing website for **FelxTek** — a Southern California Microsoft Cloud consulting and cybersecurity firm. The site presents FelxTek's services (Microsoft Azure, Microsoft 365, identity, endpoint, cybersecurity, and compliance), industries served, and a working consultation request form.

## Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **UI primitives:** Base UI + shadcn-style components
- **Animation:** Framer Motion
- **Icons:** lucide-react
- **Email:** [Resend](https://resend.com/)
- **Analytics:** Vercel Analytics

## Getting Started

Install dependencies and start the dev server:

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Available Scripts

| Script       | Description                        |
| ------------ | ---------------------------------- |
| `pnpm dev`   | Start the local development server |
| `pnpm build` | Create a production build          |
| `pnpm start` | Run the production build           |

## Environment Variables

Create a `.env.local` file (or configure these in your Vercel project settings):

| Variable         | Required | Description                                                            |
| ---------------- | -------- | ---------------------------------------------------------------------- |
| `RESEND_API_KEY` | Yes      | API key from [Resend](https://resend.com/) used to send contact emails |
| `CONTACT_TO`     | No       | Destination inbox for form submissions (defaults to `socal@felxtek.com`) |
| `CONTACT_FROM`   | No       | Verified sender address (defaults to `noreply@felxtek.com`)            |

The contact form sends consultation requests via Resend. Delivery to arbitrary
recipients requires a verified sending domain at
[resend.com/domains](https://resend.com/domains).

## Project Structure

```
app/
  api/contact/route.ts   # Contact form email endpoint (Resend)
  layout.tsx             # Root layout, fonts, SEO metadata, JSON-LD
  page.tsx               # Landing page composition
  icon.png               # Favicon (browser tab icon)
  opengraph-image.png    # Social share preview image
  sitemap.ts / robots.ts # SEO crawl directives
components/               # Section components (hero, services, contact, etc.)
public/                   # Static assets and logo
```

## SEO

- Open Graph and Twitter card metadata with logo preview image
- `ProfessionalService` JSON-LD structured data
- Auto-generated `sitemap.xml` and `robots.txt`
- Canonical URL and robots indexing directives

## Deployment

The site is optimized for deployment on [Vercel](https://vercel.com/). Push to
the connected repository or use the **Publish** button in v0. Remember to set
`RESEND_API_KEY` in your project environment variables.
