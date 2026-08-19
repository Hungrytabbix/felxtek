import { Cloud, ShieldCheck, Users, Gauge } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const stats = [
  { Icon: Cloud, value: 'Azure & M365', label: 'Cloud specialization' },
  { Icon: ShieldCheck, value: 'Security-first', label: 'Architecture approach' },
  { Icon: Users, value: '20–500', label: 'Employee organizations' },
  { Icon: Gauge, value: 'Managed', label: 'Ongoing optimization' },
]

export function AboutSection() {
  return (
    <section id="about" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium uppercase tracking-wide text-azure-soft">
              <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" />
              About FelxTek
            </span>
            <h2 className="mt-4 text-balance text-3xl font-semibold text-foreground sm:text-4xl md:text-5xl">
              Enterprise Cloud Expertise. Personal Partnership.
            </h2>
            <div className="mt-6 space-y-4 text-pretty leading-relaxed text-muted-foreground">
              <p>
                FelxTek is a Southern California technology consulting company
                specializing in Microsoft cloud infrastructure and cybersecurity.
              </p>
              <p>
                We help organizations simplify complex technology environments and build
                secure, scalable Microsoft platforms that support their business. Our
                experience spans enterprise cloud architecture, cybersecurity, identity,
                endpoint management, and regulated environments.
              </p>
              <p>
                We bring enterprise-level Microsoft expertise to organizations that need
                sophisticated technology capabilities without building a large internal
                cloud and security team.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {stats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 0.08}>
                <div className="rounded-2xl border border-border bg-card p-6">
                  <span className="flex size-11 items-center justify-center rounded-xl border border-primary/25 bg-primary/10 text-primary">
                    <stat.Icon className="size-5" />
                  </span>
                  <p className="mt-4 text-xl font-semibold text-foreground">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
