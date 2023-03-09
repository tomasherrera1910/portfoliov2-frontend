import { Project } from '../../utils/types'

interface Props {
  project: Project
}

export default function ProjectCard ({ project }: Props): JSX.Element {
  return (
        <article className='flex justify-center items-center p-1 rounded-sm' style={{ background: `radial-gradient(circle, ${project.colors[0]} 0%, ${project.colors[1]} 100%)` }}>
          <div className={'flex-1 bg-black bg-opacity-80 flex gap-3 rounded-sm p-5 ease-linear duration-200 hover:bg-opacity-60'}>
            <section>
                <img src={project.images.mobile} alt={`${project.name} Image Mobile`} className='w-24 h-36 object-contain'/>
                <img src={project.images.desktop} alt={`${project.name} Image Desktop`} className='h-24 w-48 object-contain'/>
            </section>
            <section>
            <h3 className='font-semibold text-xl'>{project.name}</h3>
            </section>
            <ul>
              {project.technologies.map((technology) => (
                <li key={technology.id} className='flex items-center gap-2'>
                  <img src={technology.imageURL} alt={`${technology.name} logo`} className='w-5 h-5 object-contain'/>
                  <span className='font-light'>{technology.name}</span>
                </li>
              ))}
            </ul>
           </div>
        </article>
  )
}
