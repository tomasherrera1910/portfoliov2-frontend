import { useContext, useEffect, useState } from 'react'
import { SidebarContext } from '../context/sidebar'

const useSidebar = () => {
  const { aboutMeRef, contactMeRef, projectsRef, skillsRef, educationRef } = useContext(SidebarContext)
  const [active, setActive] = useState('aboutMe')

  const handleActive = (aboutMeHeight: number, educationHeight: number, projectsHeight: number, skillsHeight: number) => {
    const position = Math.ceil(window.scrollY)
    const maxScroll = window.document.documentElement.scrollHeight - window.innerHeight
    const aboutMeFinalHeight = aboutMeHeight * 0.80
    const skillsFinalHeight = aboutMeFinalHeight + (skillsHeight * 0.80)
    const projectsFinalHeight = skillsFinalHeight + (projectsHeight * 0.80)
    const educationFinalHeight = projectsFinalHeight + (educationHeight * 1.2)

    if (position < aboutMeFinalHeight) {
      setActive('aboutMe')
    } else if (position >= aboutMeFinalHeight && position < skillsFinalHeight) {
      setActive('skills')
    } else if (position >= skillsFinalHeight && position < projectsFinalHeight) {
      setActive('projects')
    } else if (position >= projectsFinalHeight && position < educationFinalHeight) {
      setActive('education')
    } else if (position >= educationFinalHeight || position === maxScroll) {
      setActive('contact')
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', () => { handleActive(aboutMeRef.current?.clientHeight ?? 0, educationRef.current?.clientHeight ?? 0, projectsRef.current?.clientHeight ?? 0, skillsRef.current?.clientHeight ?? 0) })
    return () => {
      window.removeEventListener('scroll', () => { handleActive(aboutMeRef.current?.clientHeight ?? 0, educationRef.current?.clientHeight ?? 0, projectsRef.current?.clientHeight ?? 0, skillsRef.current?.clientHeight ?? 0) })
    }
  }, [aboutMeRef, contactMeRef, projectsRef, skillsRef, educationRef])
  return {
    aboutMeHeight: aboutMeRef.current?.clientHeight,
    contactMeHeight: contactMeRef.current?.clientHeight,
    projectsHeight: projectsRef.current?.clientHeight,
    skillsHeight: skillsRef.current?.clientHeight,
    active
  }
}

export default useSidebar
