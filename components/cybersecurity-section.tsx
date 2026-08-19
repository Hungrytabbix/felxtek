import {
  ShieldCheck,
  KeyRound,
  Lock,
  Fingerprint,
  MonitorSmartphone,
  Radar,
  Network,
  Eye,
  ShieldAlert,
  ArrowRight,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/reveal'

const capabilities: { Icon: LucideIcon; label: string }[] = [
  { Icon: ShieldCheck, label: 'Zero Trust' },
  { Icon: KeyRound, label: 'Conditional Access' },
  { Icon: Lock, label: 'MFA' },
  { Icon: Fingerprint, label: 'Privileged Identity Management' },
  { Icon: MonitorSmartphone, label: 'Endpoint Security' },
  { Icon: ShieldAlert, label: 'Microsoft Defender' },
  { Icon: Radar, label: 'Microsoft Sentinel' },
  { Icon: Network, label: 'Network Security' },
  { Icon: Eye, label: 'Cloud Security Posture Management' },
]

export function CybersecuritySection() {
  return (
    <section id="cybersecurity" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium uppercase tracking-wide text-azure-soft">
              <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" />
              Cybersecurity
            </span>
            <h2 className="mt-4 text-balance text-3xl font-semibold text-foreground sm:text-4xl md:text-5xl">
              Security Built Into Your Infrastructure
            </h2>
            <p className="mt-5 max-w-xl text-pretty leading-relaxed text-muted-foreground">
              Security should be integrated into cloud architecture rather than added
              afterward. FelxTek designs environments where protection, identity, and
              monitoring are part of the foundation—reducing risk while keeping your teams
              productive.
            </p>
            <Button
              size="lg"
              nativeButton={false}
              className="mt-8 h-11 bg-primary px-5 text-base text-primary-foreground shadow-[0_0_28px_-6px] shadow-primary/60 hover:bg-primary/90"
              render={<a href="#security-assessment" />}
            >
              Request a Security Assessment
              <ArrowRight data-icon="inline-end" />
            </Button>
          </Reveal>

          <div className="grid gap-3 sm:grid-cols-2">
            {capabilities.map((cap, i) => (
              <Reveal key={cap.label} delay={i * 0.05}>
                <div className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/40">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-primary/20 bg-primary/10 text-primary">
                    <cap.Icon className="size-5" />
                  </span>
                  <span className="text-sm font-medium text-foreground">{cap.label}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
