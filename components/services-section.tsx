import {
  Cloud,
  Boxes,
  Fingerprint,
  ShieldCheck,
  ClipboardCheck,
  Gauge,
  Check,
  ArrowRight,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

type Service = {
  Icon: LucideIcon
  title: string
  description: string
  bestFor: string
  outcome: string
  items: string[]
}

const services: Service[] = [
  {
    Icon: Cloud,
    title: 'Azure Infrastructure',
    description:
      'We architect, migrate, and harden Azure environments—landing zones, networking, and DR—so your workloads run fast, secure, and cost-controlled.',
    bestFor: 'Teams moving off on-prem or fixing a sprawling Azure setup',
    outcome: 'A resilient, well-governed Azure foundation with lower monthly spend',
    items: [
      'Azure Landing Zones & governance',
      'Hub-and-spoke networking & firewalls',
      'VM & Azure Virtual Desktop deployment',
      'Backup & disaster recovery (BCDR)',
      'Cost optimization & right-sizing',
      'On-prem to cloud migration',
    ],
  },
  {
    Icon: Boxes,
    title: 'Microsoft 365',
    description:
      'From tenant setup to Exchange, Teams, and SharePoint governance, we make M365 secure, organized, and right-licensed—no wasted seats.',
    bestFor: 'Organizations overpaying for licenses or lacking M365 governance',
    outcome: 'A tidy, secure tenant with the right licenses and clear data policies',
    items: [
      'Tenant setup & secure baseline',
      'Exchange Online & mail flow security',
      'Teams & SharePoint governance',
      'Email & data migration',
      'License audit & cost reduction',
      'Data lifecycle & retention',
    ],
  },
  {
    Icon: Fingerprint,
    title: 'Identity & Endpoint Management',
    description:
      'We deploy Entra ID and Intune with Conditional Access, MFA, and device compliance so only trusted users on trusted devices reach your data.',
    bestFor: 'Companies enforcing Zero Trust or securing remote/hybrid work',
    outcome: 'Phishing-resistant access and fully managed, compliant devices',
    items: [
      'Microsoft Entra ID configuration',
      'Conditional Access & MFA rollout',
      'Privileged access (PIM) & governance',
      'Intune device enrollment & policy',
      'App protection & BYOD controls',
      'Automated device compliance',
    ],
  },
  {
    Icon: ShieldCheck,
    title: 'Cybersecurity',
    description:
      'We stand up Microsoft Defender and Sentinel with tuned detections and response playbooks—turning raw signals into fast, actionable alerts.',
    bestFor: 'Businesses needing real threat detection, not just antivirus',
    outcome: 'Continuous threat visibility with a defined detect-and-respond process',
    items: [
      'Defender XDR deployment & tuning',
      'Sentinel SIEM & log onboarding',
      'Detection rules & automation (SOAR)',
      'Incident response playbooks',
      'Vulnerability & attack-surface review',
      'Zero Trust architecture design',
    ],
  },
  {
    Icon: ClipboardCheck,
    title: 'Compliance & Security Readiness',
    description:
      'We map your Microsoft environment to the controls that matter—closing gaps and producing the evidence auditors ask for.',
    bestFor: 'Regulated orgs preparing for an audit or customer security review',
    outcome: 'Audit-ready documentation and a clear remediation roadmap',
    items: [
      'Gap assessment against your framework',
      'Control mapping & policy authoring',
      'Evidence collection & reporting',
      'HIPAA, SOC 2, CMMC, FedRAMP, NIST',
      'Microsoft Purview data protection',
      'Ongoing compliance posture reviews',
    ],
  },
  {
    Icon: Gauge,
    title: 'Managed Cloud & Security',
    description:
      'A dedicated team monitors, patches, and optimizes your Azure, M365, and security stack 24/7—so your environment stays healthy without adding headcount.',
    bestFor: 'Lean IT teams wanting expert coverage without hiring',
    outcome: 'Proactive management, predictable costs, and a senior advisor on call',
    items: [
      '24/7 monitoring & alerting',
      'Patch & update management',
      'Identity & endpoint administration',
      'Monthly optimization & reporting',
      'Security posture management',
      'Fractional CISO & advisory',
    ],
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Services"
          title="End-to-end Microsoft cloud and security"
          description="From architecture and migration to identity, endpoints, and 24/7 management—one partner across your entire Microsoft environment. Each engagement is scoped to a clear, measurable outcome."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 0.06} className="h-full">
              <article className="group relative flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_0_40px_-12px] hover:shadow-primary/40">
                <div className="mb-5 flex size-12 items-center justify-center rounded-xl border border-primary/25 bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                  <service.Icon className="size-6" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>

                <div className="mt-4 flex flex-col gap-2">
                  <div className="flex items-start gap-2 rounded-lg border border-border bg-secondary/40 px-3 py-2">
                    <span className="mt-0.5 text-[10px] font-semibold uppercase tracking-wider text-azure-soft">
                      Best for
                    </span>
                    <span className="text-xs leading-snug text-foreground/85">
                      {service.bestFor}
                    </span>
                  </div>
                  <div className="flex items-start gap-2 rounded-lg border border-primary/20 bg-primary/5 px-3 py-2">
                    <span className="mt-0.5 text-[10px] font-semibold uppercase tracking-wider text-primary">
                      Outcome
                    </span>
                    <span className="text-xs leading-snug text-foreground/85">
                      {service.outcome}
                    </span>
                  </div>
                </div>

                <ul className="mt-5 grid gap-2 border-t border-border pt-5">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm text-foreground/80"
                    >
                      <Check className="size-4 shrink-0 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 flex justify-center" delay={0.1}>
          <Button
            size="lg"
            nativeButton={false}
            className="h-11 bg-primary px-5 text-base text-primary-foreground shadow-[0_0_28px_-6px] shadow-primary/60 hover:bg-primary/90"
            render={<a href="#contact" />}
          >
            Talk to a Cloud Expert
            <ArrowRight data-icon="inline-end" />
          </Button>
        </Reveal>
      </div>
    </section>
  )
}
