import { GetServerSideProps, NextPage } from 'next'
import { Contact } from '../components/Contact'
import CustomHead from '../components/Head'
// import { Projects } from '../components/Projects'
import api from '../utils/api'
import { Project, Skill } from '../utils/types'
import { Education } from '../components/Education'

interface Props {
  skills: Skill[]
  projects: Project[]
}
// export const getServerSideProps: GetServerSideProps<Props> = async () => {
//   const skills = await (await api.getSkills()).sort((s1, s2) => s1.name.localeCompare(s2.name))
//   const projects = await api.getProjects()
//   return {
//     props: {
//       skills,
//       projects
//     }
//   }
// }
const Home: NextPage<Props> = ({ skills, projects }: Props) => {
  return (
        <>
          <CustomHead title='Portfolio Tomás Herrera'/>
          <main className='min-h-screen bg-neutral-900 text-white flex flex-col px-4 py-2 items-center'>
              {/* <Projects projects={projects} skills={skills}/> */}
              <section className='flex flex-col gap-16 my-8 lg:flex-row lg:justify-between max-w-7xl'>
                <Education/>
                <Contact/>
              </section>
          </main>
        </>
  )
}
export default Home
