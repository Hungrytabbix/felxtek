import { HeartPulse, Cpu, Factory, Plane, Truck, Briefcase } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

const industries: { Icon: LucideIcon; name: string; description: string }[] = [
  {
    Icon: HeartPulse,
    name: 'Healthcare',
    description:
      'HIPAA-aligned Microsoft 365 and Azure environments that protect patient data while enabling clinical collaboration.',
  },
  {
    Icon: Cpu,
    name: 'Technology & SaaS',
    description:
      'Scalable Azure infrastructure, identity governance, and Zero Trust security for fast-moving product teams.',
  },
  {
    Icon: Factory,
    name: 'Manufacturing',
    description:
      'Secure connectivity across plants and offices with resilient identity, endpoint, and backup strategies.',
  },
  {
    Icon: Plane,
    name: 'Aerospace & Defense',
    description:
      'CMMC and NIST-oriented Microsoft environments built for suppliers handling sensitive information.',
  },
  {
    Icon: Truck,
    name: 'Logistics',
    description:
      'Reliable, secure cloud platforms for import/export and multi-site operations that never stop.',
  },
  {
    Icon: Briefcase,
    name: 'Professional Services',
    description:
      'Modern Microsoft 365 collaboration with strong identity and data protection for client-facing firms.',
  },
]

export function IndustriesSection() {
  return (
    <section id="industries" className="relative overflow-hidden py-20 sm:py-28">
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-b from-card/40 to-background"
        aria-hidden="true"
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Industries"
          title="Expertise tuned to your industry"
          description="We apply Microsoft cloud and security expertise to the realities and regulations of the sectors we serve across Southern California."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, i) => (
            <Reveal key={industry.name} delay={i * 0.06} className="h-full">
              <article className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_0_40px_-12px] hover:shadow-primary/40">
                <span className="flex size-12 items-center justify-center rounded-xl border border-primary/25 bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                  <industry.Icon className="size-6" />
                </span>
                <h3 className="mt-5 text-xl font-semibold text-foreground">
                  {industry.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {industry.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
