import { Project } from '../../utils/types'

interface Props {
  project: Project
}

export default function ProjectCard ({ project }: Props): JSX.Element {
  return (
        <article className={'p-5'} style={{ background: `radial-gradient(circle, ${project.colors[0]} 0%, ${project.colors[1]} 100%)` }}>
            <div>
                <img src={project.images.mobile} alt={`${project.name} Image Mobile`} className='w-24 h-36 object-contain'/>
                <img src={project.images.desktop} alt={`${project.name} Image Desktop`} className='h-24 w-48 object-contain'/>
            </div>
            <h3>{project.name}</h3>
        </article>
  )
}
