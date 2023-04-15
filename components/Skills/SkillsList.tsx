import { Skill } from '../../utils/types'

interface Props {
  skills: Skill[]
}
export default function SkillsList ({ skills }: Props): JSX.Element {
  return (
    <ul className='flex gap-2 flex-wrap items-center justify-center'>
      {skills.map(skill => (
        <li key={skill.id} className='flex flex-col items-center md:grayscale ease-in-out duration-200 hover:scale-110 hover:grayscale-0'>
          <article className='border-[1px] dark:border-slate-400 dark:bg-slate-900 border-blue-400 bg-gray-800 bg-opacity-20 rounded-full w-fit p-4'>
            <img src={skill.imageURL} alt={`${skill.name} Logo`} className='w-10 h-10 object-contain md:w-14 md:h-14 lg:w-18 lg:h-18' />
          </article>
          <span className='font-barlow font-light text-xs text-center max-w-[72px] lg:text-base lg:max-w-[96px]'>{skill.name}</span>
        </li>
      ))}
    </ul>
  )
}
