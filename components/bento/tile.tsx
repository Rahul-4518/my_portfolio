import type { ReactNode } from 'react'
import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'

export function Tile({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode
  className?: string
  delay?: number
}) {
  return (
    <Reveal
      delay={delay}
      className={cn('relative overflow-hidden rounded-3xl border border-border bg-card p-6', className)}
    >
      {children}
    </Reveal>
  )
}

export function TileLabel({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p className={cn('font-mono text-xs uppercase tracking-wider text-muted-foreground', className)}>{children}</p>
  )
}

export function BentoSection({
  id,
  label,
  title,
  children,
}: {
  id: string
  label: string
  title: string
  children: ReactNode
}) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-5 pt-20 md:px-8">
      <div className="mb-6 flex flex-col gap-1">
        <TileLabel className="text-primary">{label}</TileLabel>
        <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">{title}</h2>
      </div>
      {children}
    </section>
  )
}
