import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Button } from '@/components/ui/button'
import { getAllPosts, getPostBySlug, formatPostDate } from '@/lib/blog'

type PageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    return { title: 'Article not found' }
  }

  const url = `https://felxtek.com/blog/${post.slug}`

  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      tags: post.keywords,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
    },
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const related = getAllPosts()
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: { '@type': 'Organization', name: post.author, url: 'https://felxtek.com' },
    publisher: {
      '@type': 'Organization',
      name: 'FelxTek',
      logo: { '@type': 'ImageObject', url: 'https://felxtek.com/icon.png' },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://felxtek.com/blog/${post.slug}`,
    },
    keywords: post.keywords.join(', '),
    articleSection: post.category,
  }

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://felxtek.com' },
      { '@type': 'ListItem', position: 2, name: 'Insights', item: 'https://felxtek.com/blog' },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: `https://felxtek.com/blog/${post.slug}`,
      },
    ],
  }

  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <SiteHeader />
      <main className="pt-16">
        <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-8 text-sm">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="size-4" />
              Back to Insights
            </Link>
          </nav>

          <header className="flex flex-col gap-4">
            <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
              <span className="rounded-full border border-primary/25 bg-primary/10 px-2.5 py-1 font-medium text-azure-soft">
                {post.category}
              </span>
              <time dateTime={post.date}>{formatPostDate(post.date)}</time>
              <span aria-hidden="true">&middot;</span>
              <span>{post.readingTime}</span>
            </div>
            <h1 className="text-balance text-3xl font-semibold text-foreground sm:text-4xl md:text-5xl">
              {post.title}
            </h1>
            <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
              {post.description}
            </p>
          </header>

          <div className="mt-10 flex flex-col gap-6 border-t border-border pt-10">
            {post.content.map((block, i) => {
              if (block.type === 'h2') {
                return (
                  <h2
                    key={i}
                    className="mt-4 text-balance text-2xl font-semibold text-foreground"
                  >
                    {block.text}
                  </h2>
                )
              }
              if (block.type === 'ul') {
                return (
                  <ul key={i} className="flex flex-col gap-2.5 pl-1">
                    {block.items.map((item) => (
                      <li key={item} className="flex gap-3 text-foreground/85">
                        <span
                          className="mt-2.5 size-1.5 shrink-0 rounded-full bg-primary"
                          aria-hidden="true"
                        />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                )
              }
              return (
                <p key={i} className="text-pretty leading-relaxed text-muted-foreground">
                  {block.text}
                </p>
              )
            })}
          </div>

          <div className="mt-12 rounded-2xl border border-border bg-card p-6 sm:p-8">
            <h2 className="text-xl font-semibold text-foreground">
              Ready to secure and modernize your Microsoft environment?
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              FelxTek helps Southern California organizations design, secure, and manage Azure
              and Microsoft 365. Book a consultation or a security assessment.
            </p>
            <Button
              size="lg"
              nativeButton={false}
              className="mt-6 h-11 bg-primary px-5 text-base text-primary-foreground shadow-[0_0_28px_-6px] shadow-primary/60 hover:bg-primary/90"
              render={<Link href="/#contact" />}
            >
              Schedule a Consultation
              <ArrowRight data-icon="inline-end" />
            </Button>
          </div>
        </article>

        {related.length ? (
          <section className="border-t border-border">
            <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-semibold text-foreground">More insights</h2>
              <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {related.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/blog/${p.slug}`}
                    className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_0_40px_-12px] hover:shadow-primary/40"
                  >
                    <span className="text-xs font-medium text-azure-soft">{p.category}</span>
                    <h3 className="mt-3 text-balance text-base font-semibold text-foreground">
                      {p.title}
                    </h3>
                    <p className="mt-2 flex-1 text-pretty text-sm leading-relaxed text-muted-foreground">
                      {p.description}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                      Read article
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        ) : null}
      </main>
      <SiteFooter />
    </div>
  )
}
