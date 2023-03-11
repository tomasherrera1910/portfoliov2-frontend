import { Technology } from '../../utils/types'

interface Props {
  technologies: Technology[]
}
export default function ProjectTechnologies ({ technologies }: Props): JSX.Element {
  return (
        <section>
              <h4>Tecnologías utilizadas:</h4>
              <ul>
                {technologies.map((technology) => (
                  <li key={technology.id} className='flex items-center gap-2'>
                    <img src={technology.imageURL} alt={`${technology.name} logo`} className='w-5 h-5 object-contain'/>
                    <span className='font-light'>{technology.name}</span>
                  </li>
                ))}
              </ul>
              </section>
  )
}
