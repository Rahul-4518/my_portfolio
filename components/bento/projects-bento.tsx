import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Github } from '@/components/brand-icons'
import { BentoSection, Tile, TileLabel } from '@/components/bento/tile'
import { projects, type Project } from '@/lib/data'
import { cn } from '@/lib/utils'

const layout = ['md:col-span-2 md:row-span-2', '', '', 'md:col-span-2', '']

export function ProjectsBento() {
  return (
    <BentoSection id="projects" label="Projects" title="Selected work">
      <div className="grid gap-4 md:grid-cols-3">
        {projects.map((project, i) => (
          <ProjectTile key={project.slug} project={project} featured={i === 0} className={layout[i]} delay={i * 0.05} />
        ))}
      </div>
    </BentoSection>
  )
}

function ProjectTile({
  project,
  featured,
  className,
  delay,
}: {
  project: Project
  featured: boolean
  className?: string
  delay: number
}) {
  return (
    <Tile delay={delay} className={cn('group flex flex-col gap-5 p-4', className)}>
      <div className={cn('relative overflow-hidden rounded-2xl bg-secondary', featured ? 'aspect-[4/3] md:aspect-auto md:flex-1' : 'aspect-[16/9]')}>
        <Image
          src={project.image}
          alt={`Illustration for ${project.title}`}
          fill
          sizes={featured ? '(min-width: 768px) 66vw, 100vw' : '(min-width: 768px) 33vw, 100vw'}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col gap-3 px-2 pb-2">
        <TileLabel className="text-primary">{project.category}</TileLabel>
        <h3 className={cn('text-balance font-semibold tracking-tight', featured ? 'text-2xl' : 'text-lg')}>
          {project.title}
        </h3>
        {featured ? <p className="text-pretty leading-relaxed text-muted-foreground">{project.summary}</p> : null}
        <ul className="flex flex-wrap gap-1.5">
          {project.tags.slice(0, featured ? 4 : 3).map((tag) => (
            <li key={tag} className="rounded-full bg-secondary px-2.5 py-1 text-xs text-muted-foreground">
              {tag}
            </li>
          ))}
        </ul>
        <div className="mt-1 flex items-center gap-4 text-sm">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1 font-medium hover:text-primary"
          >
            Details
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </Link>
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground"
            >
              <Github className="size-4" aria-hidden="true" />
              GitHub
              <span className="sr-only">{` repository for ${project.title}`}</span>
            </a>
          ) : null}
        </div>
      </div>
    </Tile>
  )
}
