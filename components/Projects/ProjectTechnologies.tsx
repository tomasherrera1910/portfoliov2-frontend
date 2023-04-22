import useI18N from '../../hooks/useI18N'
import { Skill } from '../../utils/types'

interface Props {
  technologies: Skill[]
}
export default function ProjectTechnologies ({ technologies }: Props): JSX.Element {
  const { t } = useI18N()
  return (
    <section className='my-3 max-w-xs'>
      <h4 className='font-roboto'>{t('projectsTechnologies')}</h4>
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
