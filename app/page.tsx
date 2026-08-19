import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { ServicesSection } from '@/components/services-section'
import { MicrosoftCloudSection } from '@/components/microsoft-cloud-section'
import { CybersecuritySection } from '@/components/cybersecurity-section'
import { ComplianceSection } from '@/components/compliance-section'
import { IndustriesSection } from '@/components/industries-section'
import { SecurityAssessmentSection } from '@/components/security-assessment-section'
import { WhySection } from '@/components/why-section'
import { ProcessSection } from '@/components/process-section'
import { AboutSection } from '@/components/about-section'
import { ContactSection } from '@/components/contact-section'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <ServicesSection />
        <MicrosoftCloudSection />
        <CybersecuritySection />
        <ComplianceSection />
        <IndustriesSection />
        <SecurityAssessmentSection />
        <WhySection />
        <ProcessSection />
        <AboutSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  )
}
