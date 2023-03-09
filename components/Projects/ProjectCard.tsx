import { Project } from '../../utils/types'

interface Props {
  project: Project
}

export default function ProjectCard ({ project }: Props): JSX.Element {
  return (
        <article className='flex justify-center items-center p-1 rounded-sm' style={{ background: `radial-gradient(circle, ${project.colors[0]} 0%, ${project.colors[1]} 100%)` }}>
          <div className={'flex-1 bg-black bg-opacity-80 flex rounded-sm p-5'}>
            <div>
                <img src={project.images.mobile} alt={`${project.name} Image Mobile`} className='w-24 h-36 object-contain'/>
                <img src={project.images.desktop} alt={`${project.name} Image Desktop`} className='h-24 w-48 object-contain'/>
            </div>
            <h3>{project.name}</h3>
            <ul>
              {project.technologies.map((technology) => (
                <li key={technology.id}>{technology.name}</li>
              ))}
            </ul>
           </div>
        </article>
  )
}
