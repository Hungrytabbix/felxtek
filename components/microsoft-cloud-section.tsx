'use client'

import { motion } from 'framer-motion'
import {
  Cloud,
  Fingerprint,
  Boxes,
  MonitorSmartphone,
  ShieldCheck,
  Radar,
  ChevronRight,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

const chain: { Icon: LucideIcon; label: string; role: string }[] = [
  { Icon: Cloud, label: 'Azure', role: 'Infrastructure' },
  { Icon: Fingerprint, label: 'Entra ID', role: 'Identity' },
  { Icon: Boxes, label: 'Microsoft 365', role: 'Collaboration' },
  { Icon: MonitorSmartphone, label: 'Intune', role: 'Endpoints' },
  { Icon: ShieldCheck, label: 'Defender', role: 'Threat protection' },
  { Icon: Radar, label: 'Sentinel', role: 'SIEM & monitoring' },
]

export function MicrosoftCloudSection() {
  return (
    <section id="microsoft-cloud" className="relative overflow-hidden py-20 sm:py-28">
      <div className="absolute inset-0 -z-10 grid-pattern opacity-40" aria-hidden="true" />
      <div
        className="absolute left-1/2 top-1/2 -z-10 h-[400px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[120px]"
        aria-hidden="true"
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="The Microsoft Cloud"
          title="Built Around the Microsoft Cloud"
          description="FelxTek integrates infrastructure, identity, endpoints, collaboration, and security into one cohesive, well-governed environment—not a collection of disconnected tools."
        />

        <Reveal className="mt-16">
          <div className="rounded-3xl border border-border bg-card/60 p-6 backdrop-blur-sm sm:p-10">
            <div className="flex flex-col items-stretch gap-4 lg:flex-row lg:items-center">
              {chain.map((node, i) => (
                <div
                  key={node.label}
                  className="flex flex-1 items-center gap-4 lg:flex-col lg:gap-4"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="group flex w-full flex-1 flex-col items-center gap-3 rounded-2xl border border-border bg-background/60 p-5 text-center transition-colors hover:border-primary/40 lg:w-auto"
                  >
                    <span className="flex size-14 items-center justify-center rounded-2xl border border-primary/25 bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                      <node.Icon className="size-7" />
                    </span>
                    <span className="font-semibold text-foreground">{node.label}</span>
                    <span className="text-xs text-muted-foreground">{node.role}</span>
                  </motion.div>
                  {i < chain.length - 1 ? (
                    <ChevronRight
                      className="mx-auto size-5 shrink-0 rotate-90 text-primary/60 lg:rotate-0"
                      aria-hidden="true"
                    />
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
