import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react'
import { Github } from '@/components/brand-icons'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { projects } from '@/lib/data'

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) return {}
  return { title: project.title, description: project.summary, openGraph: { images: [project.image] } }
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const index = projects.findIndex((p) => p.slug === slug)
  if (index === -1) notFound()
  const project = projects[index]
  const next = projects[(index + 1) % projects.length]

  return (
    <>
      <SiteHeader onHome={false} />
      <main className="relative overflow-hidden pt-28 pb-24">
        <div className="pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[760px] -translate-x-1/2 rounded-full bg-glow/15 blur-[120px]" aria-hidden="true" />
        <div className="relative mx-auto max-w-4xl px-5 md:px-8">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            Back to projects
          </Link>

          <p className="mt-8 font-mono text-xs uppercase tracking-wider text-primary">{project.category}</p>
          <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight md:text-5xl">{project.title}</h1>
          <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">{project.summary}</p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            {project.github ? (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="bg-gradient-brand inline-flex h-10 items-center gap-2 rounded-full px-5 text-sm font-medium"
              >
                <Github className="size-4" aria-hidden="true" />
                View on GitHub
              </a>
            ) : null}
            {project.context ? <span className="text-sm text-muted-foreground">{project.context}</span> : null}
          </div>

          <div className="glass relative mt-10 aspect-[16/9] overflow-hidden rounded-2xl">
            <Image
              src={project.image}
              alt={`Illustration for ${project.title}`}
              fill
              priority
              sizes="(min-width: 896px) 896px, 100vw"
              className="object-cover"
            />
          </div>

          {project.metrics ? (
            <dl className="mt-8 grid gap-4 sm:grid-cols-2">
              {project.metrics.map((m) => (
                <div key={m.label} className="glass rounded-2xl p-6">
                  <dt className="text-sm text-muted-foreground">{m.label}</dt>
                  <dd className="text-gradient mt-1 text-4xl font-semibold tracking-tight">{m.value}</dd>
                </div>
              ))}
            </dl>
          ) : null}

          <div className="mt-12 grid gap-10 md:grid-cols-[1.6fr_1fr]">
            <section>
              <h2 className="text-xl font-semibold">Overview</h2>
              <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">{project.overview}</p>
              <h2 className="mt-10 text-xl font-semibold">Highlights</h2>
              <ul className="mt-4 space-y-3">
                {project.highlights.map((h) => (
                  <li key={h} className="flex gap-3 leading-relaxed text-muted-foreground">
                    <CheckCircle2 className="mt-1 size-4 shrink-0 text-primary" aria-hidden="true" />
                    {h}
                  </li>
                ))}
              </ul>
            </section>
            <aside>
              <h2 className="text-xl font-semibold">Tech & focus</h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((t) => (
                  <li key={t} className="rounded-md bg-secondary px-2.5 py-1 font-mono text-xs">
                    {t}
                  </li>
                ))}
              </ul>
            </aside>
          </div>

          <Link
            href={`/projects/${next.slug}`}
            className="glass group mt-16 flex items-center justify-between gap-4 rounded-2xl p-6 transition-colors hover:border-primary/40"
          >
            <span>
              <span className="block text-xs text-muted-foreground">Next project</span>
              <span className="mt-1 block font-semibold">{next.title}</span>
            </span>
            <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
