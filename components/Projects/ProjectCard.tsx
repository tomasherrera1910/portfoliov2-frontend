import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useToggle } from '../../hooks/useToggle'
import { Project } from '../../utils/types'
import { ProjectImages } from './ProjectImages'
import ProjectCardLinks from './ProjectCardLinks'
import ProjectHeader from './ProjectHeader'
import ProjectTechnologies from './ProjectTechnologies'
interface Props {
  project: Project
}

export default function ProjectCard ({ project }: Props): JSX.Element {
  const { toggle, handleToggle } = useToggle()
  return (
    <article className='flex justify-center items-center p-[2px] rounded-sm' style={{ background: `radial-gradient(circle, ${project.colors[0]} 0%, ${project.colors[1]} 100%)` }}>
      <div className='flex-1 flex-col bg-black bg-opacity-90 flex gap-3 items-center sm:flex-row rounded-sm p-5 ease-linear duration-200 hover:bg-opacity-75'>
        <section className='w-60 relative'>
          <ProjectImages desktopImage={project.images.desktop} mobileImage={project.images.mobile} name={project.name} />
        </section>
        <button onClick={handleToggle} className='flex items-center gap-1 text-blue-500 underline duration-200 ease-in-out mt-1 focus:text-blue-700 sm:hidden'>
          {toggle ? 'Ver menos' : 'Ver más'} <FontAwesomeIcon icon={toggle ? faAngleUp : faAngleDown} width={16} />
        </button>
        <div className={`flex flex-col gap-3 sm:grow ${toggle ? 'block' : 'hidden'} sm:block`}>
          <ProjectHeader description={project.description} name={project.name} />
          <ProjectTechnologies technologies={project.technologies} />
          <ProjectCardLinks backendRepo={project.backendRepo} deployURL={project.deployURL} frontEndRepo={project.frontEndRepo} primary={project.colors[0]} secondary={project.colors[1]} />
        </div>
      </div>
    </article>
  )
}
