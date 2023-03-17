import useFiltersProjects from '../../hooks/useFiltersProjects'
import { Project, Skill } from '../../utils/types'
import ProjectCard from './ProjectCard'
import ProjectsFilter from './ProjectsFilter'

interface Props {
  projects: Project[]
  skills: Skill[]
}
export function Projects ({ projects, skills }: Props): JSX.Element {
  const { filteredProjects, filterToggle, resetFilters, filters } = useFiltersProjects({ initialProjects: projects })
  return (
    <section className='w-full flex flex-col lg:flex-row gap-4 justify-center'>
        <ProjectsFilter skills={skills} filterToggle={filterToggle} resetFilters={resetFilters} results={filteredProjects.length} filters={filters}/>
        <section className='flex flex-col gap-2 grow lg:max-w-[720px]'>
        {
            filteredProjects.map((project) => {
              return <ProjectCard key={project.id} project={project}/>
            })
        }
        </section>
    </section>
  )
}
