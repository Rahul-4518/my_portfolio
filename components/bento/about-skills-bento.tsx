import { Brain, Code2, Cpu, Globe } from 'lucide-react'
import { BentoSection, Tile, TileLabel } from '@/components/bento/tile'
import { skillGroups, type SkillGroup } from '@/lib/data'

const groupIcons: Record<SkillGroup['icon'], typeof Code2> = {
  code: Code2,
  globe: Globe,
  brain: Brain,
  cpu: Cpu,
}

const stats = [
  { value: '5', label: 'Projects built' },
  { value: '87%', label: 'ML model accuracy' },
  { value: '−40%', label: 'OMR processing time' },
]

export function AboutBento() {
  return (
    <BentoSection id="about" label="About" title="Developer with an AI-first mindset">
      <div className="grid gap-4 md:grid-cols-3">
        <Tile className="md:col-span-2 md:p-8">
          <p className="text-pretty text-lg leading-relaxed">
            {"I'm an MCA student at Amity University Bengaluru and an aspiring Full-Stack Developer."}
          </p>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            I enjoy turning ideas into working software — from computer-vision systems and machine learning models to
            full-stack web applications. My internship at Askey sharpened how I approach real-world problems: measure,
            iterate, and ship solutions that make a visible difference.
          </p>
        </Tile>
        <Tile delay={0.05} className="flex flex-col justify-center gap-5">
          {stats.map((s) => (
            <div key={s.label} className="flex items-baseline justify-between gap-4 border-b border-border pb-4 last:border-0 last:pb-0">
              <span className="text-sm text-muted-foreground">{s.label}</span>
              <span className="text-2xl font-semibold tracking-tight text-primary">{s.value}</span>
            </div>
          ))}
        </Tile>
      </div>
    </BentoSection>
  )
}

export function SkillsBento() {
  return (
    <BentoSection id="skills" label="Skills" title="Tools I work with">
      <div className="grid gap-4 md:grid-cols-4">
        {skillGroups.map((group, i) => {
          const Icon = groupIcons[group.icon]
          return (
            <Tile key={group.title} delay={i * 0.05} className="md:col-span-2">
              <div className="flex items-center gap-3">
                <span className="flex size-9 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                  <Icon className="size-4" aria-hidden="true" />
                </span>
                <TileLabel className="text-foreground">{group.title}</TileLabel>
              </div>
              <ul className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li key={skill.name} className="rounded-full border border-border bg-secondary px-3 py-1.5 text-sm">
                    {skill.name}
                  </li>
                ))}
              </ul>
            </Tile>
          )
        })}
      </div>
    </BentoSection>
  )
}
