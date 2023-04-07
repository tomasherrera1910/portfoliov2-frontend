import { GetServerSideProps, NextPage } from 'next'
import { Contact } from '../components/Contact'
import CustomHead from '../components/Head'
// import { Projects } from '../components/Projects'
import api from '../utils/api'
import { Project, Skill } from '../utils/types'
import { Education } from '../components/Education'
import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'
import { Welcome } from '../components/Welcome'

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
      <CustomHead title='Portfolio Tomás Herrera' />
      <div className='min-h-screen flex flex-col bg-[#010108] text-white'>
        <div className='flex grow justify-center gap-12'>
          <Navbar />
          <main className='flex flex-col px-4 py-2 items-center justify-center'>
            <Welcome />
            {/* <Projects projects={projects} skills={skills}/> */}
            <section className='flex flex-col gap-16 my-8 lg:flex-row xl:flex-col 2xl:flex-row lg:justify-between max-w-7xl'>
              <Education />
              <Contact />
            </section>
          </main>
        </div>
        <Footer />
      </div>
    </>
  )
}
export default Home
