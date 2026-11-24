'use client'

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, ArrowUpRight, Download, GraduationCap, MapPin } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Github } from '@/components/brand-icons'
import { Tile, TileLabel } from '@/components/bento/tile'
import { education, profile, roles } from '@/lib/data'

export function HeroBento() {
  const [index, setIndex] = useState(0)
  const reduce = useReducedMotion()

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % roles.length), 2600)
    return () => clearInterval(id)
  }, [])

  return (
    <section id="home" className="mx-auto max-w-6xl px-5 pt-24 md:px-8 md:pt-28">
      <div className="grid auto-rows-[minmax(0,auto)] gap-4 md:grid-cols-4">
        <Tile className="flex flex-col justify-between gap-10 p-8 md:col-span-3 md:row-span-2 md:p-10">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-primary" />
            </span>
            Open to opportunities
          </div>

          <div>
            <h1 className="text-balance text-5xl font-semibold tracking-tight md:text-7xl">
              {"Hi, I'm "}
              <span className="text-primary">Rahul S</span>
            </h1>
            <div className="mt-4 flex h-8 items-center font-mono text-lg text-muted-foreground md:text-xl" aria-live="polite">
              <AnimatePresence mode="wait">
                <motion.span
                  key={roles[index]}
                  initial={reduce ? false : { opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduce ? undefined : { opacity: 0, y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  {roles[index]}
                </motion.span>
              </AnimatePresence>
            </div>
            <p className="mt-5 max-w-xl text-pretty leading-relaxed text-muted-foreground">
              I build intelligent applications and modern software solutions by combining programming, AI, machine
              learning, and full-stack development.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex h-11 items-center gap-2 rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              View Projects
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
            <a
              href="#contact"
              className="inline-flex h-11 items-center gap-2 rounded-full border border-border bg-secondary px-6 text-sm font-medium transition-colors hover:bg-accent"
            >
              Contact Me
            </a>
          </div>
        </Tile>

        <Tile delay={0.05} className="min-h-80 bg-white p-0 md:row-span-2">
          <Image
            src="/rahul-s.webp"
            alt="Portrait of Rahul S"
            fill
            priority
            sizes="(min-width: 768px) 280px, 100vw"
            className="object-cover object-top"
          />
        </Tile>

        <Tile delay={0.1} className="flex flex-col justify-between gap-6">
          <MapPin className="size-5 text-primary" aria-hidden="true" />
          <div>
            <TileLabel>Based in</TileLabel>
            <p className="mt-1 font-medium">{profile.location}</p>
          </div>
        </Tile>

        <Tile delay={0.15} className="flex flex-col justify-between gap-6">
          <GraduationCap className="size-5 text-primary" aria-hidden="true" />
          <div>
            <p className="text-4xl font-semibold tracking-tight">{education[0].cgpa}</p>
            <TileLabel className="mt-1">MCA CGPA · Amity</TileLabel>
          </div>
        </Tile>

        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="group rounded-3xl focus-visible:outline-2 focus-visible:outline-offset-2"
        >
          <Tile delay={0.2} className="flex h-full flex-col justify-between gap-6 transition-colors group-hover:bg-secondary">
            <div className="flex items-center justify-between">
              <Github className="size-6" aria-hidden="true" />
              <ArrowUpRight className="size-5 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
            </div>
            <div>
              <TileLabel>GitHub</TileLabel>
              <p className="mt-1 font-medium">@Rahul-4518</p>
            </div>
          </Tile>
        </a>

        <a href={profile.resume} download className="group rounded-3xl focus-visible:outline-2 focus-visible:outline-offset-2">
          <Tile delay={0.25} className="flex h-full flex-col justify-between gap-6 border-transparent bg-primary text-primary-foreground">
            <div className="flex items-center justify-between">
              <Download className="size-6" aria-hidden="true" />
              <ArrowUpRight className="size-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-wider opacity-70">PDF</p>
              <p className="mt-1 font-medium">Download Resume</p>
            </div>
          </Tile>
        </a>
      </div>
    </section>
  )
}
