import { Mail, MapPin, Phone } from 'lucide-react'
import { Github, Linkedin } from '@/components/brand-icons'
import { ContactForm } from '@/components/contact-form'
import { BentoSection, Tile, TileLabel } from '@/components/bento/tile'
import { profile } from '@/lib/data'

export function ContactBento() {
  const channels = [
    { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, Icon: Mail },
    { label: 'Phone', value: profile.phone, href: profile.phoneHref, Icon: Phone },
    { label: 'GitHub', value: 'Rahul-4518', href: profile.github, Icon: Github },
    ...(profile.linkedin ? [{ label: 'LinkedIn', value: 'Rahul S', href: profile.linkedin, Icon: Linkedin }] : []),
  ]

  return (
    <BentoSection id="contact" label="Contact" title="Let's build something together">
      <div className="grid gap-4 md:grid-cols-5">
        <div className="flex flex-col gap-4 md:col-span-2">
          {channels.map(({ label, value, href, Icon }, i) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noreferrer' : undefined}
              className="group rounded-3xl focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              <Tile delay={i * 0.05} className="flex items-center gap-4 p-5 transition-colors group-hover:bg-secondary">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                  <Icon className="size-4" aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <TileLabel>{label}</TileLabel>
                  <p className="truncate font-medium">{value}</p>
                </div>
              </Tile>
            </a>
          ))}
          <Tile delay={0.2} className="flex items-center gap-4 p-5">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-accent text-accent-foreground">
              <MapPin className="size-4" aria-hidden="true" />
            </span>
            <div>
              <TileLabel>Location</TileLabel>
              <p className="font-medium">{profile.location}</p>
            </div>
          </Tile>
        </div>
        <Tile delay={0.1} className="md:col-span-3 md:p-8">
          <ContactForm />
        </Tile>
      </div>
    </BentoSection>
  )
}
