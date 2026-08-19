'use client'

import { motion } from 'framer-motion'
import { Cloud, ShieldCheck, Fingerprint, MonitorSmartphone, Radar, Lock } from 'lucide-react'

const nodes = [
  { id: 'cloud', label: 'Azure', Icon: Cloud, x: 50, y: 14 },
  { id: 'identity', label: 'Entra ID', Icon: Fingerprint, x: 15, y: 40 },
  { id: 'endpoint', label: 'Intune', Icon: MonitorSmartphone, x: 85, y: 40 },
  { id: 'defender', label: 'Defender', Icon: ShieldCheck, x: 24, y: 82 },
  { id: 'sentinel', label: 'Sentinel', Icon: Radar, x: 76, y: 82 },
]

const links: [number, number][] = [
  [0, 1],
  [0, 2],
  [1, 3],
  [2, 4],
  [1, 2],
  [3, 4],
]

export function HeroVisual() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-lg">
      {/* glow */}
      <div className="absolute inset-0 -z-10 rounded-full bg-primary/20 blur-3xl" />

      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full">
        {links.map(([a, b], i) => (
          <motion.line
            key={i}
            x1={nodes[a].x}
            y1={nodes[a].y}
            x2={nodes[b].x}
            y2={nodes[b].y}
            stroke="var(--color-primary)"
            strokeWidth="0.4"
            strokeOpacity="0.4"
            strokeDasharray="2 2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.5 }}
            transition={{ duration: 1.2, delay: 0.3 + i * 0.15, ease: 'easeOut' }}
          />
        ))}
        {links.map(([a, b], i) => (
          <motion.circle
            key={`p-${i}`}
            r="0.9"
            fill="var(--color-azure-soft)"
            initial={{ cx: nodes[a].x, cy: nodes[a].y }}
            animate={{ cx: [nodes[a].x, nodes[b].x], cy: [nodes[a].y, nodes[b].y] }}
            transition={{
              duration: 2.4,
              delay: 1 + i * 0.3,
              repeat: Infinity,
              repeatDelay: 1.5,
              ease: 'easeInOut',
            }}
          />
        ))}
      </svg>

      {nodes.map((node, i) => (
        <motion.div
          key={node.id}
          className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2"
          style={{ left: `${node.x}%`, top: `${node.y}%` }}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 + i * 0.12, ease: 'backOut' }}
        >
          <motion.div
            className="flex size-14 items-center justify-center rounded-2xl border border-border bg-card/80 shadow-lg backdrop-blur-sm sm:size-16"
            animate={{ y: [0, -6, 0] }}
            transition={{
              duration: 4,
              delay: i * 0.4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <node.Icon className="size-6 text-primary sm:size-7" />
          </motion.div>
          <span className="rounded-full border border-border bg-background/70 px-2 py-0.5 text-[11px] font-medium text-muted-foreground backdrop-blur-sm">
            {node.label}
          </span>
        </motion.div>
      ))}

      {/* center core */}
      <motion.div
        className="absolute left-1/2 top-1/2 flex size-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-primary/40 bg-primary/10 backdrop-blur-sm sm:size-24"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.8, ease: 'backOut' }}
      >
        <motion.span
          className="absolute inset-0 rounded-full border border-primary/30"
          animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeOut' }}
        />
        <Lock className="size-8 text-primary sm:size-9" />
      </motion.div>
    </div>
  )
}
