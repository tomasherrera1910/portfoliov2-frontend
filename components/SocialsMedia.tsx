import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faFileArrowDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function SocialsMedia (): JSX.Element {
  return (
    <>
      <a href='https://www.linkedin.com/in/mauro-tomas-herrera/' target='_blank' rel='noreferrer'>
        <li className='p-2 border-[1px] border-slate-300 rounded-full ease-in-out duration-300 hover:scale-125'>
          <FontAwesomeIcon icon={faLinkedinIn as IconProp} className='w-9 h-9 text-blue-600' />
        </li>
      </a>
      <a href='https://www.github.com/tomasherrera1910' target='_blank' rel='noreferrer'>
        <li className='p-2 border-[1px] border-slate-300 rounded-full ease-in-out duration-300 hover:scale-125'>
          <FontAwesomeIcon icon={faGithub as IconProp} className='w-9 h-9' />
        </li>
      </a>
      <a href='https://www.github.com/tomasherrera1910' target='_blank' rel='noreferrer'>
        <li className='p-2 border-[1px] border-slate-300 rounded-full ease-in-out duration-300 hover:scale-125'>
          <FontAwesomeIcon icon={faFileArrowDown as IconProp} className='w-9 h-9 text-red-800' />
        </li>
      </a>
    </>
  )
}
