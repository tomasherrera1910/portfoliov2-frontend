import { useState } from 'react'
import { Project, Skill } from '../../../utils/types'
import { TechnologyForm } from './TechnologyForm'
import { ProjectInfo } from './ProjectInfo'
import { TechnologyList } from './TechnologyList'
import { ProjectActions } from './ProjectActions'

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
        <div className='w-28 h-48'>
          <img
          id={`mobile-${project.name}`}
          src={project.images.mobile}
          alt={`Mobile Image from project: ${project.name}`}
          className={`${baseImageStyle} top-0 left-0 h-48 w-24 object-cover ${isMobileHover}`}
          onMouseEnter={handleMobileHover}
          onMouseLeave={handleMobileHover}
          />
          <img
          id={`desktop-${project.name}`}
          src={project.images.desktop}
          alt={`Desktop Image from project: ${project.name}`}
          className={`${baseImageStyle} -bottom-3 left-6 w-48 h-28 object-cover ${isDesktopHover}`}
          onMouseEnter={handleDesktopHover}
          onMouseLeave={handleDesktopHover}
          />
        </div>
      <h1 className='text-2xl font-bold max-w-[12rem]'>{project.name}</h1>
      </section>
      <section>
        <ProjectInfo project={project}/>
        <TechnologyList project={project} update={update}/>
        <TechnologyForm id={project.id} skills={skills} update={update}/>
        <ProjectActions project={project} update={update}/>
      </section>
    </article>
  )
}
