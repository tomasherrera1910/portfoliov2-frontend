import { useState } from 'react'
import Link from 'next/link'
import { Project, Skill } from '../../../utils/types'
import { TechnologyCard } from './TechnologyCard'
import { TechnologyForm } from './TechnologyForm'

interface Props {
  project: Project
  skills: Skill[]
  update: () => Promise<void>
}

export function ProjectCard ({ project, skills, update }: Props): JSX.Element {
  const [isMobileHover, setMobileHover] = useState('')
  const [isDesktopHover, setDesktopHover] = useState('')
  const baseImageStyle = 'absolute border-stone-200 border-[1px] rounded ease-in-out duration-200'
  const handleMobileHover = (): void => {
    setMobileHover(prevState => {
      if (prevState === '') {
        return 'z-10 opacity-100 scale-110'
      } else {
        return ''
      }
    })
  }
  const handleDesktopHover = (): void => {
    setDesktopHover(prevState => {
      if (prevState === '') {
        return 'z-10 opacity-100 scale-110'
      } else {
        return ''
      }
    })
  }
  return (
        <article className={'flex flex-col gap-4 py-2'}>
          <section className='flex relative'>
           <div className='w-36 h-48'>
              <img
              id={`mobile-${project.name}`}
              src={project.images.mobile}
              alt={`Mobile Image from project: ${project.name}`}
              className={`${baseImageStyle} top-0 left-0 h-48 ${isMobileHover}`}
              onMouseEnter={handleMobileHover}
              onMouseLeave={handleMobileHover}
              />
              <img
              id={`desktop-${project.name}`}
              src={project.images.desktop}
              alt={`Desktop Image from project: ${project.name}`}
              className={`${baseImageStyle} -bottom-3 left-6 w-48 ${isDesktopHover}`}
              onMouseEnter={handleDesktopHover}
              onMouseLeave={handleDesktopHover}
              />
            </div>
          <h1 className='text-3xl font-bold text-center'>{project.name}</h1>
          </section>
          <section>
            <p className='text-sm text-slate-300'>{project.description}</p>
            <label className='flex items-center text-xs text-slate-300 gap-1'>
              Deploy URL:
            <Link href={project.deployURL} className='text-cyan-500 text-base hover:underline'>{project.deployURL}</Link>
            </label>
            {
            (project.backendRepo != null) &&
            <label className='flex items-center text-xs text-slate-300 gap-1'>
              Backend Repo:
            <Link href={project.backendRepo} className='text-cyan-500 text-base hover:underline'>{project.backendRepo}</Link>
            </label>
            }
            {
            (project.frontEndRepo != null) &&
            <label className='flex items-center text-xs text-slate-300 gap-1'>
              Frontend Repo:
            <Link href={project.frontEndRepo} className='text-cyan-500 text-base hover:underline'>{project.frontEndRepo}</Link>
            </label>
            }
            {
              project.technologies.length > 0 &&
              <>
              <h3 className='font-bold'>Technologies</h3>
              {project.technologies.map(technology => (
                <TechnologyCard key={technology.name} technology={technology}/>
              ))}
              </>
            }
            <TechnologyForm id={project.id} skills={skills} update={update}/>
          </section>
        </article>
  )
}
