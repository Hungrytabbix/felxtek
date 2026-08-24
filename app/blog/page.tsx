import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Reveal } from '@/components/reveal'
import { getAllPosts, formatPostDate } from '@/lib/blog'

export const metadata: Metadata = {
  title: 'Insights on Microsoft Cloud & Cybersecurity',
  description:
    'Practical guidance on Microsoft Azure, Microsoft 365, Zero Trust, compliance (CMMC, HIPAA, SOC 2), and cybersecurity from the FelxTek consulting team.',
  keywords: [
    'Microsoft Azure blog',
    'Microsoft 365 security',
    'Zero Trust',
    'CMMC compliance',
    'Microsoft Sentinel',
    'Azure cost optimization',
  ],
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    title: 'FelxTek Insights | Microsoft Cloud & Cybersecurity',
    description:
      'Practical guidance on Microsoft Azure, Microsoft 365, Zero Trust, compliance, and cybersecurity from the FelxTek consulting team.',
    url: 'https://felxtek.com/blog',
    type: 'website',
  },
}

export default function BlogIndexPage() {
  const posts = getAllPosts()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'FelxTek Insights',
    description:
      'Practical guidance on Microsoft Azure, Microsoft 365, Zero Trust, compliance, and cybersecurity.',
    url: 'https://felxtek.com/blog',
    blogPost: posts.map((post) => ({
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.description,
      datePublished: post.date,
      author: { '@type': 'Organization', name: post.author },
      url: `https://felxtek.com/blog/${post.slug}`,
    })),
  }

  const [featured, ...rest] = posts

  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader />
      <main className="pt-16">
        <section className="relative overflow-hidden border-b border-border">
          <div
            className="pointer-events-none absolute inset-0 opacity-60"
            aria-hidden="true"
            style={{
              background:
                'radial-gradient(60% 60% at 50% 0%, color-mix(in oklch, var(--primary) 18%, transparent) 0%, transparent 70%)',
            }}
          />
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
            <Reveal className="flex flex-col items-start gap-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium tracking-wide text-azure-soft uppercase">
                <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" />
                Insights
              </span>
              <h1 className="text-balance text-4xl font-semibold text-foreground sm:text-5xl md:text-6xl">
                Microsoft cloud & cybersecurity, explained
              </h1>
              <p className="max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
                Practical guidance on Azure, Microsoft 365, Zero Trust, and compliance—written
                by the FelxTek team for the leaders and IT pros who run modern environments.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          {featured ? (
            <Reveal>
              <Link
                href={`/blog/${featured.slug}`}
                className="group grid gap-6 rounded-3xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_0_50px_-16px] hover:shadow-primary/40 sm:p-8 lg:grid-cols-[1.4fr_1fr] lg:items-center"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="rounded-full border border-primary/25 bg-primary/10 px-2.5 py-1 font-medium text-azure-soft">
                      {featured.category}
                    </span>
                    <time dateTime={featured.date}>{formatPostDate(featured.date)}</time>
                    <span aria-hidden="true">&middot;</span>
                    <span>{featured.readingTime}</span>
                  </div>
                  <h2 className="text-balance text-2xl font-semibold text-foreground sm:text-3xl">
                    {featured.title}
                  </h2>
                  <p className="text-pretty leading-relaxed text-muted-foreground">
                    {featured.description}
                  </p>
                  <span className="mt-1 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                    Read article
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
                <div className="hidden lg:block">
                  <div
                    className="flex aspect-[4/3] items-center justify-center rounded-2xl border border-border"
                    style={{
                      background:
                        'linear-gradient(135deg, color-mix(in oklch, var(--primary) 22%, var(--card)) 0%, var(--card) 60%)',
                    }}
                    aria-hidden="true"
                  >
                    <span className="text-5xl font-bold tracking-tight text-foreground/90">
                      Felx<span className="text-primary">Tek</span>
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ) : null}

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((post, i) => (
              <Reveal key={post.slug} delay={i * 0.06} className="h-full">
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_0_40px_-12px] hover:shadow-primary/40"
                >
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="rounded-full border border-primary/25 bg-primary/10 px-2.5 py-1 font-medium text-azure-soft">
                      {post.category}
                    </span>
                    <span>{post.readingTime}</span>
                  </div>
                  <h2 className="mt-4 text-balance text-lg font-semibold text-foreground">
                    {post.title}
                  </h2>
                  <p className="mt-2 flex-1 text-pretty text-sm leading-relaxed text-muted-foreground">
                    {post.description}
                  </p>
                  <div className="mt-5 flex items-center justify-between border-t border-border pt-4 text-xs text-muted-foreground">
                    <time dateTime={post.date}>{formatPostDate(post.date)}</time>
                    <ArrowUpRight className="size-4 text-primary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
