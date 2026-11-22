import type { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/blog'

export default function sitemap(): MetadataRoute.Sitemap {
  const origin = 'https://felxtek.com'
  return [
    { url: `${origin}/` },
    { url: `${origin}/blog` },
    ...getAllPosts().map(({ slug }) => ({ url: `${origin}/blog/${slug}` })),
  ]
}
