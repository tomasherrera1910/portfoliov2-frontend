import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'

interface Props {
  imageURL: string
  name: string
  technology: string | undefined
}
export function SkillCard ({ imageURL, name, technology }: Props): JSX.Element {
  return (
    <article className='border-[1px] border-zinc-100 rounded p-2 bg-black bg-opacity-50'>
        <img src={imageURL} alt={name}/>
        <h1>{name}</h1>
        <span>{technology}</span>
        <div className='flex justify-around'>
            <button className='bg-red-900 p-1 rounded ease-in-out duration-200 hover:text-red-900 hover:bg-white'>
                <FontAwesomeIcon icon={faTrash} className='w-3'/>
            </button>
            <button className='bg-blue-900 p-1 rounded ease-in-out duration-200 hover:text-blue-900 hover:bg-white'>
                <FontAwesomeIcon icon={faPenToSquare} className='w-3'/>
            </button>
        </div>
    </article>
  )
}
