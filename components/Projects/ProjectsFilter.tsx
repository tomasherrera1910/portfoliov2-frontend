import { faFilter } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Skill } from '../../utils/types'

interface Props {
  skills: Skill[]
}
export default function ProjectsFilter ({ skills }: Props): JSX.Element {
  return (
        <aside className='flex flex-col self-start min-h-screen gap-1'>
            <h3 className='flex gap-2'>Filtrar Proyectos <FontAwesomeIcon icon={faFilter} width={20}/></h3>
            {
            skills.map(skill => (
                <label key={skill.id} className='flex gap-1 cursor-pointer'>
                    <input type='checkbox' value={skill.id}/>
                    <picture className='flex items-center gap-2'>
                        <img src={skill.imageURL} alt={`${skill.name} logo`} className='w-5 h-5 object-contain'/>
                        <span className='font-light'>{skill.name}</span>
                    </picture>
                </label>
            ))
            }
        </aside>
  )
}
