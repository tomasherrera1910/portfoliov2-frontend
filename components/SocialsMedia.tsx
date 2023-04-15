import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faFileArrowDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function SocialsMedia (): JSX.Element {
  const baseLiStyle = 'p-2 border-[1px] dark:border-slate-300 border-slate-600 rounded-full ease-in-out duration-300 hover:scale-125'
  return (
    <>
      <a href='https://www.linkedin.com/in/mauro-tomas-herrera/' target='_blank' rel='noreferrer'>
        <li className={`${baseLiStyle} text-blue-600 hover:text-slate-300 hover:bg-blue-600`}>
          <FontAwesomeIcon icon={faLinkedinIn as IconProp} className='w-9 h-9' />
        </li>
      </a>
      <a href='https://www.github.com/tomasherrera1910' target='_blank' rel='noreferrer'>
        <li className={`${baseLiStyle} dark:text-slate-300 dark:hover:text-black dark:hover:bg-slate-300 text-black hover:text-slate-300 hover:bg-black`}>
          <FontAwesomeIcon icon={faGithub as IconProp} className='w-9 h-9' />
        </li>
      </a>
      <a href='https://www.github.com/tomasherrera1910' target='_blank' rel='noreferrer'>
        <li className={`${baseLiStyle} text-red-800 hover:text-slate-300 hover:bg-red-800`}>
          <FontAwesomeIcon icon={faFileArrowDown as IconProp} className='w-9 h-9' />
        </li>
      </a>
    </>
  )
}
