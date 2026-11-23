import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono, Space_Grotesk } from 'next/font/google'
import './globals.css'

const geist = Geist({ subsets: ['latin'], variable: '--font-geist' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' })
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.felxtek.com'),
  title: {
    default:
      'FelxTek | Southern California Cloud & Cybersecurity Consulting',
    template: '%s | FelxTek',
  },
  description:
    'Southern California cloud consulting for Azure, AWS, and Google Cloud (GCP). Plan infrastructure, protect workloads, and prepare for compliance reviews with FelxTek.',
  keywords: [
    'Southern California cloud consulting',
    'Azure infrastructure consulting',
    'AWS cloud security',
    'Google Cloud consulting',
    'Cloud compliance readiness',
    'CMMC Consulting',
    'SOC 2 Cloud Security',
    'HIPAA Microsoft 365 Security',
    'Azure Managed Services',
  ],
  authors: [{ name: 'FelxTek' }],
  creator: 'FelxTek',
  publisher: 'FelxTek',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'FelxTek | Cloud Infrastructure, Security & Compliance',
    description:
      'Build resilient infrastructure, protect cloud workloads, and prepare for compliance reviews across Azure, AWS, and Google Cloud.',
    url: 'https://www.felxtek.com',
    type: 'website',
    locale: 'en_US',
    siteName: 'FelxTek',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FelxTek | Cloud Infrastructure, Security & Compliance',
    description:
      'Build resilient infrastructure, protect cloud workloads, and prepare for compliance reviews across Azure, AWS, and Google Cloud.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  category: 'technology',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0b1020',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${geistMono.variable} ${spaceGrotesk.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ProfessionalService',
              '@id': 'https://www.felxtek.com/#organization',
              name: 'FelxTek',
              image: 'https://www.felxtek.com/opengraph-image.png',
              logo: 'https://www.felxtek.com/felxtek-wordmark.png',
              url: 'https://www.felxtek.com',
              email: 'socal@felxtek.com',
              description:
                'FelxTek provides cloud infrastructure, cloud security, and compliance readiness consulting for Azure, AWS, and Google Cloud in Southern California.',
              areaServed: {
                '@type': 'Place',
                name: 'Southern California',
              },
              address: {
                '@type': 'PostalAddress',
                addressRegion: 'CA',
                addressCountry: 'US',
              },
              knowsAbout: [
                'Microsoft Azure',
                'Amazon Web Services',
                'Google Cloud',
                'Cloud infrastructure',
                'Cloud security',
                'Cloud compliance',
                'Cybersecurity',
                'CMMC',
                'SOC 2',
                'HIPAA',
                'FedRAMP',
                'NIST',
              ],
            }),
          }}
        />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
