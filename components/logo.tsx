import { cn } from '@/lib/utils'

export function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      className={cn('shrink-0', className)}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="felxtek-logo" x1="4" y1="2" x2="28" y2="30">
          <stop offset="0%" stopColor="var(--color-azure-soft)" />
          <stop offset="100%" stopColor="var(--color-primary)" />
        </linearGradient>
      </defs>
      <path
        d="M16 2 27 8v9c0 6.6-4.6 11.5-11 13C9.6 28.5 5 23.6 5 17V8L16 2Z"
        fill="url(#felxtek-logo)"
        fillOpacity="0.16"
        stroke="url(#felxtek-logo)"
        strokeWidth="1.5"
      />
      <path
        d="M11.5 16.5 15 20l6-7"
        stroke="url(#felxtek-logo)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
