import { Project } from '../../utils/types'
import ProjectCard from './ProjectCard'

interface Props {
  projects: Project[]
}
export function Projects ({ projects }: Props): JSX.Element {
  return (
    <section className='flex flex-col items-center'>
        <h3>Mis proyectos</h3>
        <section className='flex flex-col gap-2 px-4'>
        {
            projects.map((project) => {
              return <ProjectCard key={project.id} project={project}/>
            })
        }
        </section>
    </section>
  )
}
