import { useEffect, useRef, useState } from 'react'
import { Project, Skill } from '../../utils/types'
import { AdminInfo } from './AdminInfo'
import { Navbar } from './Navbar'
import { Projects } from './Projects'
import { Sidebar } from './Sidebar'
import { Skills } from './Skills'

interface Props {
  initialProjects: Project[]
  initialSkills: Skill[]
}
export default function AdminLanding ({ initialProjects, initialSkills }: Props): JSX.Element {
  const adminInfoRef = useRef<HTMLDivElement>()
  const projectsRef = useRef<HTMLDivElement>()
  const skillsRef = useRef<HTMLDivElement>()
  const [adminHeight, setAdminHeight] = useState(0)
  const [projectsHeight, setProjectsHeight] = useState(0)
  const [skillsHeight, setSkillsHeight] = useState(0)
  useEffect(() => {
    if (adminInfoRef.current != null) {
      setAdminHeight(adminInfoRef.current.offsetHeight)
    }
    if (projectsRef.current != null) {
      setProjectsHeight(projectsRef.current.offsetHeight)
    }
    if (skillsRef.current != null) {
      setSkillsHeight(skillsRef.current.offsetHeight)
    }
  }, [adminInfoRef, projectsRef, skillsRef])
  return (
        <>
          <Navbar />
          <Sidebar adminInfoHeight={adminHeight} projectsHeight={projectsHeight} skillsHeight={skillsHeight}/>
          <AdminInfo ref={adminInfoRef}/>
          <Projects initialProjects={initialProjects} skills={initialSkills} ref={projectsRef}/>
          <Skills initialSkills={initialSkills} ref={skillsRef}/>
        </>
  )
}
