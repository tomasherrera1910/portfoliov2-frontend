import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Skill } from '../../../utils/types'

interface Props {
  technology: Partial<Skill>
}
export function TechnologyCard ({ technology }: Props): JSX.Element {
  return (
    <li className='flex gap-1 items-center'>
      <img src={technology.imageURL} alt={`${technology.name ?? ''} logo`} className='w-3 h-3 object-cover'/>
      <span className='text-xs'>{technology.name}</span>
      <button className='p-1 bg-red-700 rounded ease-in-out duration-200 hover:bg-red-900'>
        <FontAwesomeIcon icon={faTrash} className='w-2'/>
      </button>
    </li>
  )
}
