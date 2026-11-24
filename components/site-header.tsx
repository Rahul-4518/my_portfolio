'use client'

import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { ThemeToggle } from '@/components/theme-toggle'
import { navItems } from '@/lib/data'
import { cn } from '@/lib/utils'

export function SiteHeader({ onHome = true }: { onHome?: boolean }) {
  const [active, setActive] = useState<string>('home')
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!onHome) return
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null)
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id)
        }
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [onHome])

  const href = (id: string) => (onHome ? `#${id}` : `/#${id}`)

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled || open ? 'border-b border-border bg-background/75 backdrop-blur-xl' : 'bg-transparent',
      )}
    >
      <nav
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8"
        aria-label="Main navigation"
      >
        <Link href={onHome ? '#home' : '/'} className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="bg-gradient-brand flex size-8 items-center justify-center rounded-lg font-mono text-sm">
            RS
          </span>
          <span>Rahul S</span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={href(item.id)}
                aria-current={onHome && active === item.id ? 'true' : undefined}
                className={cn(
                  'relative rounded-full px-3.5 py-2 text-sm transition-colors',
                  onHome && active === item.id
                    ? 'bg-secondary text-foreground'
                    : 'text-muted-foreground hover:text-foreground',
                )}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex size-9 items-center justify-center rounded-full border border-border bg-card lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X className="size-4" aria-hidden="true" /> : <Menu className="size-4" aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {open ? (
        <ul id="mobile-menu" className="mx-auto flex max-w-6xl flex-col gap-1 px-5 pb-5 lg:hidden">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={href(item.id)}
                onClick={() => setOpen(false)}
                className={cn(
                  'block rounded-lg px-3 py-2.5 text-sm',
                  onHome && active === item.id ? 'bg-secondary text-foreground' : 'text-muted-foreground',
                )}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      ) : null}
    </header>
  )
}
