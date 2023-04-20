import { Skill } from '../../utils/types'

interface Props {
  skill: Skill
}
export default function SkillCard ({ skill }: Props): JSX.Element {
  return (
    <li className='flex flex-col items-center md:grayscale ease-in-out duration-200 hover:scale-110 hover:grayscale-0'>
      <article data-aos='zoom-in' className='border-[1px] dark:border-slate-400 dark:bg-slate-900 border-blue-400 bg-blue-900 shadow-sm shadow-blue-700 dark:bg-opacity-40 bg-opacity-20 duration-200 ease-in-out hover:bg-opacity-80 rounded-full w-fit p-4'>
        <img src={skill.imageURL} alt={`${skill.name} Logo`} className='w-10 h-10 object-contain md:w-14 md:h-14 lg:w-18 lg:h-18' />
      </article>
      <span className='font-barlow font-light text-xs text-center max-w-[72px] lg:text-base md:max-w-fit'>{skill.name}</span>
    </li>
  )
}
