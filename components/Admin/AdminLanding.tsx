import useSidebar from '../../hooks/useSidebar'
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
  const {
    BUTTONS,
    activeButton,
    adminHeight,
    adminInfoRef,
    projectsHeight,
    projectsRef,
    skillsHeight,
    skillsRef,
    toggle
  } = useSidebar()
  return (
    <>
      <Navbar />
      <Sidebar BUTTONS={BUTTONS} activeButton={activeButton} adminHeight={adminHeight} projectsHeight={projectsHeight} skillsHeight={skillsHeight} toggle={toggle} />
      <AdminInfo ref={adminInfoRef} />
      <Projects initialProjects={initialProjects} skills={initialSkills} ref={projectsRef} />
      <Skills initialSkills={initialSkills} ref={skillsRef} />
    </>
  )
}
