import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { Project } from '../../utils/types'
import { ProjectImages } from '../Admin/Projects/ProjectImages'
interface Props {
  project: Project
}

export default function ProjectCard ({ project }: Props): JSX.Element {
  return (
        <article className='flex flex-1 justify-center items-center p-1 rounded-sm' style={{ background: `radial-gradient(circle, ${project.colors[0]} 0%, ${project.colors[1]} 100%)` }}>
          <div className={'flex-1 bg-black bg-opacity-80 flex gap-3 rounded-sm p-5 ease-linear duration-200 hover:bg-opacity-60'}>
            <section className='w-56 relative'>
              <ProjectImages desktopImage={project.images.desktop} mobileImage={project.images.mobile} name={project.name}/>
            </section>
            <div className='flex flex-col grow gap-3'>
              <section>
              <h3 className='font-semibold text-3xl'>{project.name}</h3>
              </section>
              <section>
              <h4>Tecnologías utilizadas:</h4>
              <ul>
                {project.technologies.map((technology) => (
                  <li key={technology.id} className='flex items-center gap-2'>
                    <img src={technology.imageURL} alt={`${technology.name} logo`} className='w-5 h-5 object-contain'/>
                    <span className='font-light'>{technology.name}</span>
                  </li>
                ))}
              </ul>
              </section>
              <p>{project.description}</p>
              <footer className='flex justify-around grow items-center'>
              {(project.backendRepo != null) &&
              <Link href={project.backendRepo} className='flex gap-2 items-center rounded p-1 bg-opacity-50 shadow-sm ease-linear duration-150 hover:scale-105' style={{ background: `radial-gradient(circle, ${project.colors[1]} 0%, ${project.colors[0]} 100%)` }}>
                <span>Backend</span>
                <FontAwesomeIcon icon={faGithub as IconProp} width={20}/>
              </Link>}
              {(project.frontEndRepo != null) &&
              <Link href={project.frontEndRepo} className='flex gap-2 items-center rounded p-1 bg-opacity-50 shadow-sm ease-linear duration-150 hover:scale-105' style={{ background: `radial-gradient(circle, ${project.colors[1]} 0%, ${project.colors[0]} 100%)` }}>
                <span>Frontend</span>
                <FontAwesomeIcon icon={faGithub as IconProp} width={20}/>
              </Link>}
              {(project.deployURL != null) &&
              <Link href={project.deployURL} className='flex gap-2 items-center rounded p-1 bg-opacity-50 shadow-sm ease-linear duration-150 hover:scale-105' style={{ background: `radial-gradient(circle, ${project.colors[1]} 0%, ${project.colors[0]} 100%)` }}>
                <span>Deploy</span>
                <FontAwesomeIcon icon={faLink} width={20}/>
              </Link>}
              </footer>
            </div>
           </div>
        </article>
  )
}
