import { Award, BadgeCheck, Briefcase, Code2, ExternalLink, GraduationCap, Presentation, Trophy, Users } from 'lucide-react'
import { BentoSection, Tile, TileLabel } from '@/components/bento/tile'
import { achievements, certifications, education, experience } from '@/lib/data'

const achievementIcons = { code: Code2, presentation: Presentation, users: Users, trophy: Trophy }

export function ExperienceBento() {
  return (
    <BentoSection id="experience" label="Experience" title="Where I've worked">
      <div className="grid gap-4 md:grid-cols-3">
        <Tile className="md:col-span-2 md:p-8">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="flex size-11 items-center justify-center rounded-2xl bg-accent text-accent-foreground">
                <Briefcase className="size-5" aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-xl font-semibold">
                  {experience.position} · {experience.company}
                </h3>
                <p className="text-sm text-muted-foreground">{experience.location}</p>
              </div>
            </div>
            <span className="rounded-full border border-border px-3 py-1 font-mono text-xs text-muted-foreground">
              {experience.duration}
            </span>
          </div>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {experience.responsibilities.map((r) => (
              <li key={r} className="flex gap-2 text-pretty text-sm leading-relaxed text-muted-foreground">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                {r}
              </li>
            ))}
          </ul>
        </Tile>
        <Tile delay={0.05} className="grid grid-cols-2 gap-4 border-transparent bg-primary text-primary-foreground">
          <div className="flex flex-col justify-end">
            <p className="text-4xl font-semibold tracking-tight">+25%</p>
            <p className="mt-1 text-sm opacity-75">Evaluation accuracy</p>
          </div>
          <div className="flex flex-col justify-end">
            <p className="text-4xl font-semibold tracking-tight">−40%</p>
            <p className="mt-1 text-sm opacity-75">Processing time</p>
          </div>
        </Tile>
      </div>
    </BentoSection>
  )
}

export function EducationBento() {
  return (
    <BentoSection id="education" label="Education & achievements" title="Learning and leadership">
      <div className="grid gap-4 md:grid-cols-4">
        {education.map((e, i) => (
          <Tile key={e.degree} delay={i * 0.05} className="flex flex-col justify-between gap-6 md:col-span-2">
            <div className="flex items-start justify-between gap-4">
              <GraduationCap className="size-6 text-primary" aria-hidden="true" />
              <span className="font-mono text-xs text-muted-foreground">{e.date}</span>
            </div>
            <div>
              <h3 className="text-balance text-lg font-semibold">{e.degree}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{e.school}</p>
              <p className="mt-4 text-3xl font-semibold tracking-tight">
                {e.cgpa}
                <span className="ml-1.5 text-sm font-normal text-muted-foreground">CGPA</span>
              </p>
            </div>
          </Tile>
        ))}

        <Tile delay={0.1} className="md:col-span-2 md:row-span-2">
          <div className="flex items-center gap-2">
            <BadgeCheck className="size-5 text-primary" aria-hidden="true" />
            <TileLabel className="text-foreground">Certifications</TileLabel>
          </div>
          <ul className="mt-5 flex flex-col divide-y divide-border">
            {certifications.map((c) => (
              <li key={c.title} className="py-3 first:pt-0 last:pb-0">
                <a
                  href={c.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${c.title} certificate (opens in a new tab)`}
                  className="inline-flex items-center gap-1.5 text-pretty font-medium underline-offset-4 hover:underline focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  {c.title}
                  <ExternalLink className="size-3.5 shrink-0" aria-hidden="true" />
                </a>
                <p className="mt-0.5 text-sm text-muted-foreground">{c.issuer}</p>
              </li>
            ))}
          </ul>
        </Tile>

        {achievements.map((a, i) => {
          const Icon = achievementIcons[a.icon] ?? Award
          return (
            <Tile key={a.title} delay={0.15 + i * 0.05}>
              <Icon className="size-5 text-primary" aria-hidden="true" />
              <h3 className="mt-4 font-semibold">{a.title}</h3>
              <p className="mt-1.5 text-pretty text-sm leading-relaxed text-muted-foreground">{a.description}</p>
            </Tile>
          )
        })}
      </div>
    </BentoSection>
  )
}
