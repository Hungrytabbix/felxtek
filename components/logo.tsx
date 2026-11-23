import Image from 'next/image'
import { cn } from '@/lib/utils'

export function Logo({ className }: { className?: string }) {
  return (
    <Image
      src="/felxtek-wordmark.png"
      alt="FelxTek"
      width={2172}
      height={724}
      sizes="(min-width: 1024px) 240px, 144px"
      className={cn('h-auto w-36 rounded-md bg-foreground object-contain', className)}
    />
  )
}
