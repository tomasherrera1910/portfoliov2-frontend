import { useContext } from 'react'
import useFiltersProjects from '../../hooks/useFiltersProjects'
import { Project, Skill } from '../../utils/types'
import Pagination from './Pagination'
import ProjectCard from './ProjectCard'
import ProjectsFilter from './ProjectsFilter'
import { SidebarContext } from '../../context/sidebar'
import NoProjectsFound from './NoProjectsFound'

interface Props {
  projects: Project[]
  skills: Skill[]
}
export function Projects ({ projects, skills }: Props): JSX.Element {
  const { projectsRef } = useContext(SidebarContext)
  const { filteredProjects, filterToggle, resetFilters, filters, totalPages, nextPage, prevPage, page, sliceProjects } = useFiltersProjects({ initialProjects: projects })
  return (
    <section className='w-full flex flex-col max-w-5xl pt-20 gap-3 items-center sm:items-start' ref={projectsRef} id='projects'>
      <h3 className='text-5xl uppercase dark:text-sky-500 text-blue-800 font-semibold md:text-6xl md:my-6'>Proyectos</h3>
      <div className='w-full flex flex-col lg:flex-row gap-4 justify-center'>
        <ProjectsFilter skills={skills} filterToggle={filterToggle} resetFilters={resetFilters} results={filteredProjects.length} filters={filters} />
        <section className='flex flex-col gap-2 grow lg:max-w-[720px]'>
          {totalPages > 0 && <Pagination totalPages={totalPages} page={page} nextPage={nextPage} prevPage={prevPage} />}
          {
            filteredProjects.slice(sliceProjects.since, sliceProjects.to).map((project) => {
              return <ProjectCard key={project.id} project={project} />
            })
          }
          {filteredProjects.length === 0 && <NoProjectsFound resetFilters={resetFilters} />}
          {totalPages > 0 && <Pagination totalPages={totalPages} page={page} nextPage={nextPage} prevPage={prevPage} />}
        </section>
      </div>
    </section>
  )
}
