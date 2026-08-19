import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

const steps = [
  {
    num: '01',
    title: 'Assess',
    description:
      "Understand the customer's environment, security posture, business requirements, and risks.",
  },
  {
    num: '02',
    title: 'Design',
    description:
      'Develop the recommended Microsoft cloud and security architecture.',
  },
  {
    num: '03',
    title: 'Implement',
    description:
      'Deploy infrastructure, security controls, identity, endpoint management, and migrations.',
  },
  {
    num: '04',
    title: 'Manage',
    description:
      'Continuously manage, secure, monitor, and optimize the environment.',
  },
]

export function ProcessSection() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-card/30 to-background"
        aria-hidden="true"
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Engagement Process"
          title="A clear path from risk to resilience"
          description="A structured, transparent engagement so you always know what happens next."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <Reveal key={step.num} delay={i * 0.08} className="h-full">
              <article className="relative flex h-full flex-col rounded-2xl border border-border bg-card p-6">
                <span className="font-mono text-4xl font-semibold text-primary/40">
                  {step.num}
                </span>
                <h3 className="mt-4 text-xl font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
