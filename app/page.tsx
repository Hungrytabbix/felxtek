import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { ServicesSection } from '@/components/services-section'
import { ComplianceSection } from '@/components/compliance-section'
import { IndustriesSection } from '@/components/industries-section'
import { SecurityAssessmentSection } from '@/components/security-assessment-section'
import { WhySection } from '@/components/why-section'
import { ProcessSection } from '@/components/process-section'
import { AboutSection } from '@/components/about-section'
import { BlogSection } from '@/components/blog-section'
import { ContactSection } from '@/components/contact-section'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'WebSite',
        '@id': 'https://felxtek.com/#website', url: 'https://felxtek.com/',
        name: 'FelxTek', inLanguage: 'en', publisher: { '@id': 'https://felxtek.com/#organization' },
      }) }} />
      <SiteHeader />
      <main>
        <Hero />
        <ServicesSection />
        <ComplianceSection />
        <IndustriesSection />
        <SecurityAssessmentSection />
        <WhySection />
        <ProcessSection />
        <AboutSection />
        <BlogSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  )
}
