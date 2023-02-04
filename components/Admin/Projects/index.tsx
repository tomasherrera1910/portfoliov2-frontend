import { useState } from 'react'
import { Project, Skill } from '../../../utils/types'
import { ProjectCard } from './ProjectCard'
import { faFolder, faFileCirclePlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ProjectsForm from './ProjectsForm'
import api from '../../../utils/api'

interface Props {
  initialProjects: Project[]
  skills: Skill[]
}
export function Projects ({ initialProjects, skills }: Props): JSX.Element {
  const [projects, setProjects] = useState(initialProjects)
  const [isFormOpen, setFormOpen] = useState(false)
  const updateProjects = async (): Promise<void> => {
    const updatedProjects = await api.getProjects()
    setProjects(updatedProjects)
  }
  const handleForm = (): void => { setFormOpen(prev => !prev) }
  return (
        <section className='py-6'>
            <h1 className="text-3xl flex items-center gap-4 py-4"><FontAwesomeIcon icon={faFolder} className="w-8"/> Projects</h1>
            <button
            onClick={handleForm}
            className="flex items-center gap-2 border-gray-50 rounded border-solid border-[1px] p-2 ease-in-out duration-100 hover:text-black hover:bg-zinc-200">
                Add Project <FontAwesomeIcon icon={faFileCirclePlus} className="w-6"/>
            </button>
            <ProjectsForm open={isFormOpen} handleOpen={handleForm} update={updateProjects}/>
            <section className="flex flex-wrap gap-4 py-2">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} skills={skills} update={updateProjects}/>
            ))}
            </section>
        </section>
  )
}
