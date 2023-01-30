import { useState } from 'react'
import { Project } from '../../../utils/types'

interface Props {
  project: Project
}

export function ProjectCard ({ project }: Props): JSX.Element {
  const [isMobileHover, setMobileHover] = useState('')
  const [isDesktopHover, setDesktopHover] = useState('')
  const baseImageStyle = 'absolute opacity-80 border-stone-200 border-[1px] rounded ease-in-out duration-200'
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
        <article className='relative flex w-48 h-48'>
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
            <h1>{project.name}</h1>
        </article>
  )
}
