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
  const AdminInfoRef = useRef<HTMLDivElement>()
  console.log(AdminInfoRef)
  // const ProjectsRef = useRef()
  // const SkillsRef = useRef()
  return (
        <>
          <Navbar />
          <Sidebar />
          <AdminInfo ref={AdminInfoRef}/>
          <Projects initialProjects={initialProjects} skills={initialSkills}/>
          <Skills initialSkills={initialSkills}/>
        </>
  )
}
