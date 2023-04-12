import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useToggle } from '../../hooks/useToggle'
import { EducationPlace } from '../../utils/types'
import { faMinusCircle, faPlusCircle } from '@fortawesome/free-solid-svg-icons'

interface Props {
  place: EducationPlace
}
export default function EducationCard ({ place }: Props): JSX.Element {
  const { toggle, handleToggle } = useToggle()
  return (
    <li className='flex gap-2 items-center border-l-[1px] border-l-sky-800 pl-2 duration-200 ease-linear hover:border-l-sky-500'>
      <img src={place.image} alt={`${place.name} LOGO`} className='rounded-full object-cover w-20 h-20 lg:w-28 lg:h-28' />
      <aside className='flex flex-col max-w-sm lg:max-w-2xl'>
        <a href={place.url} target='_blank' rel='noreferrer'>
          <h4 className='uppercase font-bold font-roboto text-sky-700 ease-linear text-base sm:text-xl lg:text-3xl duration-150 hover:underline'>{place.name}</h4>
        </a>
        <section className='flex gap-2'>
          <span className='font-roboto text-gray-500 font-semibold text-xs sm:text-sm lg:text-base'>{place.date}</span>
          <button onClick={handleToggle} className='sm:hidden w-fit'>
            <FontAwesomeIcon icon={toggle ? faMinusCircle : faPlusCircle} width={16} className={`${toggle ? 'text-red-800' : 'text-sky-800'}`} />
          </button>
        </section>
        <section className='mt-1'>
          <p className={`font-barlow font-extralight text-xs text-gray-300 ${toggle ? 'block' : 'hidden'} sm:text-sm lg:text-lg sm:block`}>{place.description}</p>
        </section>
      </aside>
    </li>
  )
}
