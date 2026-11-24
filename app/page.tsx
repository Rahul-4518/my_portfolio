import { AboutBento, SkillsBento } from '@/components/bento/about-skills-bento'
import { ContactBento } from '@/components/bento/contact-bento'
import { HeroBento } from '@/components/bento/hero-bento'
import { EducationBento, ExperienceBento } from '@/components/bento/journey-bento'
import { ProjectsBento } from '@/components/bento/projects-bento'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main className="pb-24">
        <HeroBento />
        <AboutBento />
        <SkillsBento />
        <ProjectsBento />
        <ExperienceBento />
        <EducationBento />
        <ContactBento />
      </main>
      <SiteFooter />
    </>
  )
}
