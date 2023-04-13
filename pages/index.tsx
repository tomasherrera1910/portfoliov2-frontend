import { GetServerSideProps, NextPage } from 'next'
import { Contact } from '../components/Contact'
import CustomHead from '../components/Head'
import { Projects } from '../components/Projects'
import api from '../utils/api'
import { Project, Skill } from '../utils/types'
import { Education } from '../components/Education'
import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'
import { Welcome } from '../components/Welcome'
import { Skills } from '../components/Skills'
import { SidebarProvider } from '../context/sidebar'

interface Props {
  skills: Skill[]
  projects: Project[]
}
export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const skills = await api.getSkills()
  const projects = await api.getProjects()
  return {
    props: {
      skills,
      projects
    }
  }
}
const Home: NextPage<Props> = ({ skills, projects }: Props) => {
  return (
    <>
      <CustomHead title='Portfolio Tomás Herrera' />
      <div className='min-h-screen flex flex-col bg-[#010108] text-white'>
        <div className='flex grow justify-center gap-12'>
          <SidebarProvider>
            <Navbar />
            <main className='flex flex-col px-4 py-2 items-center justify-center'>
              <Welcome />
              <Skills skills={skills} />
              <Projects projects={projects} skills={skills} />
              <Education />
              <Contact />
            </main>
          </SidebarProvider>
        </div>
        <Footer />
      </div>
    </>
  )
}
export default Home
