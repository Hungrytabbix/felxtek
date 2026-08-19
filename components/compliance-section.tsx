import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

const frameworks = [
  {
    name: 'SOC 2',
    description:
      'Design environments with the access controls, monitoring, and evidence trails that SOC 2 audits expect.',
  },
  {
    name: 'HIPAA',
    description:
      'Configure Microsoft 365 and Azure safeguards for protected health information across healthcare workflows.',
  },
  {
    name: 'CMMC',
    description:
      'Architect Microsoft environments aligned to CMMC practices for defense supply chain requirements.',
  },
  {
    name: 'FedRAMP',
    description:
      'Support workloads that must align with FedRAMP-oriented controls and government security expectations.',
  },
  {
    name: 'NIST',
    description:
      'Map identity, endpoint, and security controls to NIST frameworks for a structured security posture.',
  },
]

export function ComplianceSection() {
  return (
    <section id="compliance" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Compliance"
          title="Technology Designed for Regulated Environments"
          description="FelxTek has experience designing and operating Microsoft environments where security controls, documentation, access controls, monitoring, and compliance matter."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {frameworks.map((fw, i) => (
            <Reveal key={fw.name} delay={i * 0.06} className="h-full">
              <article className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
                <span className="font-mono text-sm text-primary">Framework</span>
                <h3 className="mt-2 text-2xl font-semibold text-foreground">{fw.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {fw.description}
                </p>
              </article>
            </Reveal>
          ))}

          <Reveal delay={0.36} className="h-full">
            <div className="flex h-full flex-col justify-center rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/15 to-card p-6">
              <p className="text-pretty text-base font-medium leading-relaxed text-foreground">
                Compliance requirements shouldn&apos;t slow down your technology. FelxTek
                helps build cloud environments where security and compliance are part of
                the architecture from day one.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-8">
          <p className="mx-auto max-w-3xl text-center text-sm text-muted-foreground">
            FelxTek helps organizations align technology environments with compliance
            requirements. We do not certify or audit organizations.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
