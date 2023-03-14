import { Project, Skill } from '../../utils/types'
import ProjectCard from './ProjectCard'
import ProjectsFilter from './ProjectsFilter'

interface Props {
  projects: Project[]
  skills: Skill[]
}
export function Projects ({ projects, skills }: Props): JSX.Element {
  return (
    <section className='w-full flex gap-4 justify-center'>
        <ProjectsFilter skills={skills}/>
        <section className='flex flex-col gap-2 grow max-w-[720px]'>
        {
            projects.map((project) => {
              return <ProjectCard key={project.id} project={project}/>
            })
        }
        </section>
    </section>
  )
}
