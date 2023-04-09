import { faBars, faClose, faFilter, faFilterCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { Skill } from '../../utils/types'

interface Props {
  skills: Skill[]
  filterToggle: (id: number) => void
  resetFilters: () => void
  results: number
  filters: number[]
}
export default function ProjectsFilter ({ skills, filterToggle, resetFilters, results, filters }: Props): JSX.Element {
  const [showFilters, setShowFilters] = useState(false)
  const menuFiltersPosition = showFilters ? 'left-0' : '-left-52'
  const handleShowFilters = () => {
    setShowFilters(!showFilters)
  }
  return (
    <>
      <button className={`flex items-center w-fit p-1 gap-1 font-bold lg:hidden ${showFilters ? 'hidden' : ''}`} onClick={handleShowFilters}>Abrir Filtros <FontAwesomeIcon icon={faBars} width={14} /></button>
      <aside className={`flex z-40 flex-col self-start min-h-full gap-1 bg-black bg-opacity-80 p-1 rounded fixed ease-in-out duration-200 top-0 ${menuFiltersPosition} lg:relative lg:left-0`}>
        <button className='text-red-700 flex items-center gap-1 p-1 font-bold lg:hidden' onClick={handleShowFilters}>Cerrar Filtros <FontAwesomeIcon icon={faClose} width={12} /></button>
        <h3 className='flex gap-2 font-bold'>Filtrar Proyectos <FontAwesomeIcon icon={faFilter} width={20} /></h3>
        <div className='flex gap-1'>
          <span className='opacity-75 text-sm'>{results} resultados</span>
          {filters.length > 0 &&
            <button onClick={resetFilters} className='flex w-fit gap-1 text-xs items-center text-blue-400 underline ease-in duration-200 hover:text-blue-600'>
              Quitar <FontAwesomeIcon icon={faFilterCircleXmark} width={12} />
            </button>}
        </div>
        {
            skills.map(skill => (
              <label key={skill.id} className='flex gap-1 cursor-pointer'>
                <input type='checkbox' value={skill.id} onClick={() => { filterToggle(skill.id) }} />
                <picture className='flex items-center gap-2'>
                  <img src={skill.imageURL} alt={`${skill.name} logo`} className='w-5 h-5 object-contain' />
                  <span className='font-light'>{skill.name}</span>
                </picture>
              </label>
            ))
            }
      </aside>
    </>
  )
}
