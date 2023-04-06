import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faFileArrowDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function SocialsMedia (): JSX.Element {
  return (
    <>
      <a href='https://www.linkedin.com/in/mauro-tomas-herrera/' target='_blank' rel='noreferrer'>
        <li className='p-2 border-[1px] border-slate-300 rounded-full ease-in-out duration-300 hover:scale-125 text-blue-600 hover:text-slate-300 hover:bg-blue-600'>
          <FontAwesomeIcon icon={faLinkedinIn as IconProp} className='w-9 h-9 xl:w-7 xl:h-7' />
        </li>
      </a>
      <a href='https://www.github.com/tomasherrera1910' target='_blank' rel='noreferrer'>
        <li className='p-2 border-[1px] border-slate-300 rounded-full ease-in-out duration-300 hover:scale-125 text-slate-300 hover:text-black hover:bg-slate-300'>
          <FontAwesomeIcon icon={faGithub as IconProp} className='w-9 h-9 xl:w-7 xl:h-7' />
        </li>
      </a>
      <a href='https://www.github.com/tomasherrera1910' target='_blank' rel='noreferrer'>
        <li className='p-2 border-[1px] border-slate-300 rounded-full ease-in-out duration-300 hover:scale-125 text-red-800 hover:text-slate-300 hover:bg-red-800'>
          <FontAwesomeIcon icon={faFileArrowDown as IconProp} className='w-9 h-9 xl:w-7 xl:h-7' />
        </li>
      </a>
    </>
  )
}
