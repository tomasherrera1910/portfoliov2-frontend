import { education } from '../../utils/education'
import EducationCard from './EducationCard'
export function Education (): JSX.Element {
  return (
    <section className='w-full flex flex-col max-w-5xl gap-3 p-2 items-center sm:items-start'>
      <h3 className='text-sky-600 uppercase text-center font-roboto font-bold text-5xl animate-pulse'>Educación</h3>
      <ul className='flex flex-col gap-4'>
        {
          education.map(place => (
            <EducationCard key={place.id} place={place} />
          ))
        }
      </ul>
    </section>
  )
}
