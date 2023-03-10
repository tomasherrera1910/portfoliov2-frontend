import { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import { Projects } from '../components/Projects'
import api from '../utils/api'
import { Project, Skill } from '../utils/types'

interface Props {
  skills: Skill[]
  projects: Project[]
}
export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const skills = await (await api.getSkills()).sort((s1, s2) => s1.name.localeCompare(s2.name))
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
            <Head>
                <title>Portfolio Tomás Herrera</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className='min-h-screen bg-neutral-900 text-white flex flex-col px-4 py-2'>
                <Projects projects={projects} skills={skills}/>
            </main>
        </>
  )
}
export default Home
