import { useContext } from 'react'

import EducationCard from './EducationCard'
import { SidebarContext } from '../../context/sidebar'
import useI18N from '../../hooks/useI18N'
import { EducationPlace } from '../../utils/types'
export function Education (): JSX.Element {
  const { t } = useI18N()
  const education = t('educationsPlace') as EducationPlace[]
  const { educationRef } = useContext(SidebarContext)
  return (
    <section className='w-full flex flex-col max-w-5xl gap-3 p-2 pt-20 items-center sm:items-start' id='educacion' ref={educationRef}>
      <h3 className='dark:text-sky-600 text-blue-800 uppercase text-center font-roboto font-bold text-5xl md:text-6xl md:my-6'>{t('titleEducation')}</h3>
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
