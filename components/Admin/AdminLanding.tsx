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
  return (
        <>
            <Navbar />
            <Sidebar />
            <AdminInfo/>
            <Projects initialProjects={initialProjects} skills={initialSkills}/>
            <Skills initialSkills={initialSkills}/>
        </>
  )
}
