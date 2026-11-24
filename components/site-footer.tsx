import { Mail } from 'lucide-react'
import { Github } from '@/components/brand-icons'
import { profile } from '@/lib/data'

export function SiteFooter() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 text-sm text-muted-foreground md:flex-row md:px-8">
        <p>{`© ${new Date().getFullYear()} Rahul S. Built with Next.js & Tailwind CSS.`}</p>
        <div className="flex items-center gap-4">
          <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-foreground" aria-label="GitHub">
            <Github className="size-5" aria-hidden="true" />
          </a>
          <a href={`mailto:${profile.email}`} className="hover:text-foreground" aria-label="Email">
            <Mail className="size-5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  )
}
