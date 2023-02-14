import { useRef } from 'react'
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
  return (
        <>
          <Navbar />
          <Sidebar adminInfoHeight={adminInfoRef.current?.offsetHeight} />
          <AdminInfo ref={adminInfoRef}/>
          <Projects initialProjects={initialProjects} skills={initialSkills} ref={projectsRef}/>
          <Skills initialSkills={initialSkills} ref={skillsRef}/>
        </>
  )
}
