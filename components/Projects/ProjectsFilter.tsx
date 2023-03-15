import { faFilter, faFilterCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Skill } from '../../utils/types'

interface Props {
  skills: Skill[]
  filterToggle: (id: number) => void
  resetFilters: () => void
  results: number
  filters: number[]
}
export default function ProjectsFilter ({ skills, filterToggle, resetFilters, results, filters }: Props): JSX.Element {
  return (
        <aside className='flex flex-col self-start min-h-screen gap-1 bg-black bg-opacity-30 p-1 rounded'>
            <h3 className='flex gap-2 font-bold'>Filtrar Proyectos <FontAwesomeIcon icon={faFilter} width={20}/></h3>
            <span className='opacity-75 text-sm'>{results} resultados</span>
            {filters.length > 0 &&
            <button onClick={resetFilters} className='flex w-fit gap-1 text-sm items-center text-blue-400 underline ease-in duration-200 hover:text-blue-600'>
              Quitar filtros <FontAwesomeIcon icon={faFilterCircleXmark} width={16}/>
            </button>
            }
            {
            skills.map(skill => (
                <label key={skill.id} className='flex gap-1 cursor-pointer'>
                    <input type='checkbox' value={skill.id} onClick={() => { filterToggle(skill.id) }}/>
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
