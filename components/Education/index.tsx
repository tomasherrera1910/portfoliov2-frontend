import { education } from '../../utils/education'
import EducationCard from './EducationCard'
export function Education (): JSX.Element {
  return (
        <section>
            <h3 className="text-sky-600 uppercase font-roboto font-bold text-3xl sm:text-5xl">Educación</h3>
            <ul className="flex flex-col gap-4">
              {
                education.map(place => (
                  <EducationCard key={place.id} place={place}/>
                ))
              }
            </ul>
        </section>
  )
}
