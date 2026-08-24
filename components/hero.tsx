'use client'

import { motion } from 'framer-motion'
import { ArrowRight, ShieldCheck, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { HeroVisual } from '@/components/hero-visual'

const techBar = [
  'Microsoft Azure',
  'Microsoft 365',
  'Entra ID',
  'Intune',
  'Defender',
  'Sentinel',
]

const stats = [
  { value: '24/7', label: 'Security monitoring & response' },
  { value: '99.9%', label: 'Cloud uptime targets' },
  { value: '5+', label: 'Compliance frameworks supported' },
]

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-16">
      {/* background layers */}
      <div className="absolute inset-0 -z-10 grid-pattern opacity-60" aria-hidden="true" />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/10 via-background to-background"
        aria-hidden="true"
      />
      <div
        className="absolute -top-40 left-1/2 -z-10 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-primary/15 blur-[120px]"
        aria-hidden="true"
      />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 pb-16 pt-16 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:px-8 lg:pb-24 lg:pt-24">
        <div className="flex flex-col items-start">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur-sm"
          >
            <MapPin className="size-3.5 text-primary" />
            Southern California · Microsoft Cloud & Cybersecurity
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-6 text-balance text-4xl font-semibold leading-[1.05] text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Secure. Modernize.{' '}
            <span className="bg-gradient-to-r from-azure-soft to-primary bg-clip-text text-transparent">
              Scale.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-5 max-w-xl text-pretty text-lg font-medium text-foreground/90 sm:text-xl"
          >
            Microsoft Cloud Infrastructure & Cybersecurity Built for Modern Business
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-4 max-w-xl text-pretty leading-relaxed text-muted-foreground"
          >
            FelxTek helps organizations design, secure, optimize, and manage Microsoft
            Azure and Microsoft 365 environments—from cloud infrastructure and identity to
            endpoint security and compliance.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <Button
              size="lg"
              nativeButton={false}
              className="h-11 bg-primary px-5 text-base text-primary-foreground shadow-[0_0_28px_-6px] shadow-primary/60 hover:bg-primary/90"
              render={<a href="#contact" />}
            >
              Schedule a Consultation
              <ArrowRight data-icon="inline-end" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              nativeButton={false}
              className="h-11 border-border bg-secondary/40 px-5 text-base text-foreground hover:bg-secondary"
              render={<a href="#services" />}
            >
              Explore Our Services
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-6 flex items-center gap-2 text-sm text-muted-foreground"
          >
            <ShieldCheck className="size-4 text-primary" />
            Security-first architecture · HIPAA · SOC 2 · CMMC · FedRAMP · NIST
          </motion.div>

          <motion.dl
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-10 grid w-full max-w-xl grid-cols-3 gap-4 border-t border-border pt-8"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <dt className="sr-only">{stat.label}</dt>
                <dd className="bg-gradient-to-r from-azure-soft to-primary bg-clip-text text-3xl font-semibold tracking-tight text-transparent sm:text-4xl">
                  {stat.value}
                </dd>
                <span className="mt-1.5 text-xs leading-snug text-muted-foreground sm:text-sm">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.dl>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <HeroVisual />
        </motion.div>
      </div>

      {/* credibility bar */}
      <div className="border-y border-border bg-card/40 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <p className="mb-4 text-center text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Deep expertise across the Microsoft cloud
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 sm:gap-x-12">
            {techBar.map((tech) => (
              <span
                key={tech}
                className="text-sm font-semibold tracking-tight text-foreground/70 transition-colors hover:text-foreground sm:text-base"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
