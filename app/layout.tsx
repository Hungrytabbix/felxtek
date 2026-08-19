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
  metadataBase: new URL('https://felxtek.com'),
  title: {
    default:
      'FelxTek | Microsoft Cloud & Cybersecurity Consulting in Southern California',
    template: '%s | FelxTek',
  },
  description:
    'FelxTek is a Southern California Microsoft cloud consulting and cybersecurity firm. We design, secure, and manage Microsoft Azure, Microsoft 365, Entra ID, Intune, Defender, and Sentinel environments—with expertise in HIPAA, SOC 2, CMMC, FedRAMP, and NIST.',
  keywords: [
    'Microsoft Azure Consulting Southern California',
    'Microsoft 365 Consulting',
    'Azure Security Consulting',
    'Microsoft Cloud Consulting',
    'Microsoft Cybersecurity Consulting',
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
  icons: {
    icon: [{ url: '/icon.png', type: 'image/png' }],
    apple: [{ url: '/icon.png' }],
    shortcut: ['/icon.png'],
  },
  openGraph: {
    title: 'FelxTek | Microsoft Cloud & Cybersecurity Consulting',
    description:
      'Microsoft Cloud Infrastructure & Cybersecurity built for modern business. Secure, modernize, and scale your Azure and Microsoft 365 environment.',
    url: 'https://felxtek.com',
    type: 'website',
    locale: 'en_US',
    siteName: 'FelxTek',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FelxTek | Microsoft Cloud & Cybersecurity Consulting',
    description:
      'Microsoft Cloud Infrastructure & Cybersecurity built for modern business. Secure, modernize, and scale your Azure and Microsoft 365 environment.',
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
              name: 'FelxTek',
              image: 'https://felxtek.com/opengraph-image.png',
              logo: 'https://felxtek.com/icon.png',
              url: 'https://felxtek.com',
              email: 'socal@felxtek.com',
              description:
                'FelxTek is a Southern California Microsoft cloud consulting and cybersecurity firm specializing in Microsoft Azure, Microsoft 365, Entra ID, Intune, Defender, and Sentinel—with expertise in HIPAA, SOC 2, CMMC, FedRAMP, and NIST.',
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
                'Microsoft 365',
                'Microsoft Entra ID',
                'Microsoft Intune',
                'Microsoft Defender',
                'Microsoft Sentinel',
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
