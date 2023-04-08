import { Skill } from '../../utils/types'

interface Props {
  technologies: Skill[]
}
export default function ProjectTechnologies ({ technologies }: Props): JSX.Element {
  return (
    <section className='my-3'>
      <h4>Tecnologías utilizadas:</h4>
      <ul className='flex w-full gap-x-4 flex-wrap'>
        {technologies.map((technology) => (
          <li key={technology.id} className='flex items-center gap-2'>
            <img src={technology.imageURL} alt={`${technology.name} logo`} className='w-4 h-4 object-contain' />
            <span className='font-light'>{technology.name}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
