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
  items: string[]
}

const services: Service[] = [
  {
    Icon: Cloud,
    title: 'Azure Infrastructure',
    description:
      'Design and optimization of secure, scalable Microsoft Azure environments.',
    items: [
      'Cloud architecture',
      'Azure networking',
      'Virtual machines',
      'Azure Virtual Desktop',
      'Private networking',
      'Backup & disaster recovery',
      'Infrastructure modernization',
    ],
  },
  {
    Icon: Boxes,
    title: 'Microsoft 365',
    description: 'Secure and optimize Microsoft 365 environments.',
    items: [
      'Microsoft 365 administration',
      'Exchange Online',
      'Teams',
      'SharePoint',
      'Licensing optimization',
      'Migration',
    ],
  },
  {
    Icon: Fingerprint,
    title: 'Identity & Endpoint Management',
    description:
      'Modern identity governance and endpoint management across your organization.',
    items: [
      'Microsoft Entra ID',
      'Conditional Access',
      'MFA',
      'Identity governance',
      'Privileged access',
      'Microsoft Intune',
      'Device compliance',
    ],
  },
  {
    Icon: ShieldCheck,
    title: 'Cybersecurity',
    description:
      'Threat protection and monitoring built on the Microsoft security stack.',
    items: [
      'Microsoft Defender',
      'Microsoft Sentinel',
      'SIEM',
      'Cloud security',
      'Threat protection',
      'Security monitoring',
      'Zero Trust architecture',
    ],
  },
  {
    Icon: ClipboardCheck,
    title: 'Compliance & Security Readiness',
    description:
      'FelxTek helps organizations align their technology environments with security and compliance requirements.',
    items: ['SOC 2', 'HIPAA', 'CMMC', 'FedRAMP', 'NIST'],
  },
  {
    Icon: Gauge,
    title: 'Managed Cloud & Security',
    description: 'Ongoing management and optimization of Microsoft environments.',
    items: [
      'Azure management',
      'Microsoft 365 management',
      'Security monitoring',
      'Identity management',
      'Endpoint management',
      'Cloud optimization',
      'Technical advisory',
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
          description="From architecture and migration to identity, endpoints, and 24/7 management—one partner across your entire Microsoft environment."
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
