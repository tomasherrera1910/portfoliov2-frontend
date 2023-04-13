import { useContext } from 'react'
import useFiltersProjects from '../../hooks/useFiltersProjects'
import { Project, Skill } from '../../utils/types'
import Pagination from './Pagination'
import ProjectCard from './ProjectCard'
import ProjectsFilter from './ProjectsFilter'
import { SidebarContext } from '../../context/sidebar'

interface Props {
  projects: Project[]
  skills: Skill[]
}
export function Projects ({ projects, skills }: Props): JSX.Element {
  const { projectsRef } = useContext(SidebarContext)
  const { filteredProjects, filterToggle, resetFilters, filters, totalPages, nextPage, prevPage, page, sliceProjects } = useFiltersProjects({ initialProjects: projects })
  return (
    <section className='w-full flex flex-col max-w-5xl my-12 gap-3 items-center sm:items-start' ref={projectsRef}>
      <h3 className='text-5xl uppercase text-sky-500 font-semibold animate-pulse'>Proyectos</h3>
      <div className='w-full flex flex-col lg:flex-row gap-4 justify-center'>
        <ProjectsFilter skills={skills} filterToggle={filterToggle} resetFilters={resetFilters} results={filteredProjects.length} filters={filters} />
        <section className='flex flex-col gap-2 grow lg:max-w-[720px]'>
          <Pagination totalPages={totalPages} page={page} nextPage={nextPage} prevPage={prevPage} />
          {
            filteredProjects.slice(sliceProjects.since, sliceProjects.to).map((project) => {
              return <ProjectCard key={project.id} project={project} />
            })
        }
          <Pagination totalPages={totalPages} page={page} nextPage={nextPage} prevPage={prevPage} />
        </section>
      </div>
    </section>
  )
}
