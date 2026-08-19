import { Check, ArrowRight, ShieldCheck } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/reveal'

const reviewAreas = [
  'Microsoft 365',
  'Azure',
  'Entra ID',
  'Conditional Access',
  'MFA',
  'Administrative privileges',
  'Intune',
  'Defender',
  'Email security',
  'Backup & disaster recovery',
  'Cloud security',
]

export function SecurityAssessmentSection() {
  return (
    <section id="security-assessment" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/20 via-card to-card p-8 sm:p-12 lg:p-16">
            <div
              className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-primary/20 blur-3xl"
              aria-hidden="true"
            />
            <div className="relative grid gap-10 lg:grid-cols-2 lg:gap-16">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/15 px-3 py-1 text-xs font-medium uppercase tracking-wide text-azure-soft">
                  <ShieldCheck className="size-3.5" />
                  Security Assessment
                </span>
                <h2 className="mt-4 text-balance text-3xl font-semibold text-foreground sm:text-4xl md:text-5xl">
                  How Secure Is Your Microsoft Environment?
                </h2>
                <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
                  Many organizations use Microsoft 365 and Azure without fully configuring
                  the security capabilities already available to them. FelxTek can review
                  your environment and show you exactly where the gaps are.
                </p>
                <Button
                  size="lg"
                  nativeButton={false}
                  className="mt-8 h-11 bg-primary px-5 text-base text-primary-foreground shadow-[0_0_28px_-6px] shadow-primary/60 hover:bg-primary/90"
                  render={<a href="#contact" />}
                >
                  Request a Microsoft Security Assessment
                  <ArrowRight data-icon="inline-end" />
                </Button>
              </div>

              <div className="rounded-2xl border border-border bg-background/60 p-6 backdrop-blur-sm">
                <p className="mb-4 text-sm font-medium text-foreground">
                  We review your environment across:
                </p>
                <ul className="grid gap-2.5 sm:grid-cols-2">
                  {reviewAreas.map((area) => (
                    <li
                      key={area}
                      className="flex items-center gap-2 text-sm text-foreground/80"
                    >
                      <Check className="size-4 shrink-0 text-primary" />
                      {area}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
