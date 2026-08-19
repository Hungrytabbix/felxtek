import { Layers, ShieldCheck, ClipboardCheck, MapPin } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

const reasons: { Icon: LucideIcon; title: string; description: string }[] = [
  {
    Icon: Layers,
    title: 'Microsoft-Focused Expertise',
    description:
      'Deep expertise across Azure, Microsoft 365, identity, security, and endpoint management.',
  },
  {
    Icon: ShieldCheck,
    title: 'Security-First Architecture',
    description:
      'Security is incorporated into infrastructure design from the beginning—never bolted on later.',
  },
  {
    Icon: ClipboardCheck,
    title: 'Compliance Experience',
    description:
      'Experience with HIPAA, SOC 2, CMMC, FedRAMP, and NIST environments.',
  },
  {
    Icon: MapPin,
    title: 'Local Partnership',
    description:
      'Southern California-based consulting with responsive, hands-on support.',
  },
]

export function WhySection() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why FelxTek"
          title="Enterprise capability, personal partnership"
          description="The technical depth of a large consultancy with the responsiveness of a dedicated local partner."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, i) => (
            <Reveal key={reason.title} delay={i * 0.08} className="h-full">
              <article className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/40">
                <span className="flex size-12 items-center justify-center rounded-xl border border-primary/25 bg-primary/10 text-primary">
                  <reason.Icon className="size-6" />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-foreground">
                  {reason.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {reason.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
