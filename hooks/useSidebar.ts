import { useContext, useEffect } from 'react'
import { SidebarContext } from '../context/sidebar'

const useSidebar = () => {
  const { aboutMeRef, contactMeRef, projectsRef, skillsRef } = useContext(SidebarContext)
  useEffect(() => {
    console.log({
      aboutMeHeight: aboutMeRef.current?.clientHeight,
      contactMeHeight: contactMeRef.current?.clientHeight,
      projectsHeight: projectsRef.current?.clientHeight,
      skillsHeight: skillsRef.current?.clientHeight
    })
  }, [aboutMeRef, contactMeRef, projectsRef, skillsRef])
  return {
    aboutMeHeight: aboutMeRef.current?.clientHeight,
    contactMeHeight: contactMeRef.current?.clientHeight,
    projectsHeight: projectsRef.current?.clientHeight,
    skillsHeight: skillsRef.current?.clientHeight
  }
}

export default useSidebar
