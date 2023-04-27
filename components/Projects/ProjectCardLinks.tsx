import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

interface Props {
  backendRepo: string | null
  frontEndRepo: string | null
  deployURL: string | null
  primary: string
  secondary: string
}
export default function ProjectCardLinks ({ backendRepo, frontEndRepo, deployURL, primary, secondary }: Props): JSX.Element {
  const LinkBaseStyle = 'flex gap-2 bg-slate-500 dark:bg-slate-900 items-center rounded p-1 w-fit bg-opacity-50 shadow-sm ease-linear duration-150 dark:hover:bg-slate-500 dark:hover:text-black hover:bg-slate-700 hover:text-white hover:scale-105'
  return (
    <footer data-aos='flip-up' className='w-full flex gap-2 justify-around items-center sm:mt-2 flex-wrap sm:grow'>
      {(backendRepo != null) &&
        <Link href={backendRepo} className={`${LinkBaseStyle}`}>
          <span>Backend</span>
          <FontAwesomeIcon icon={faGithub as IconProp} width={20} />
        </Link>}
      {(frontEndRepo != null) &&
        <Link href={frontEndRepo} className={`${LinkBaseStyle}`}>
          <span>Frontend</span>
          <FontAwesomeIcon icon={faGithub as IconProp} width={20} />
        </Link>}
      {(deployURL != null) &&
        <Link href={deployURL} className={`${LinkBaseStyle}`}>
          <span>Deploy</span>
          <FontAwesomeIcon icon={faLink} width={20} />
        </Link>}
    </footer>
  )
}
