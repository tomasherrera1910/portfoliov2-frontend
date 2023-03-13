import { Project, Skill } from '../../utils/types'
import ProjectCard from './ProjectCard'
import ProjectsFilter from './ProjectsFilter'

interface Props {
  projects: Project[]
  skills: Skill[]
}
export function Projects ({ projects, skills }: Props): JSX.Element {
  return (
    <section className='flex gap-4 items-center'>
        <ProjectsFilter skills={skills}/>
        <section className='flex flex-col gap-2 px-4 grow'>
        {
            projects.map((project) => {
              return <ProjectCard key={project.id} project={project}/>
            })
        }
        </section>
    </section>
  )
}
