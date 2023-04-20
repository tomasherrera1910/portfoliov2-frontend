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
  return (
    <footer data-aos='flip-up' className='flex flex-col gap-2 justify-around items-center sm:mt-2 sm:flex-row sm:grow'>
      {(backendRepo != null) &&
        <Link href={backendRepo} className='flex gap-2 bg-slate-500 dark:bg-slate-900 items-center rounded p-1 w-fit bg-opacity-50 shadow-sm ease-linear duration-150 hover:scale-105'>
          <span>Backend</span>
          <FontAwesomeIcon icon={faGithub as IconProp} width={20} />
        </Link>}
      {(frontEndRepo != null) &&
        <Link href={frontEndRepo} className='flex gap-2 bg-slate-500 dark:bg-slate-900 items-center rounded p-1 w-fit bg-opacity-50 shadow-sm ease-linear duration-150 hover:scale-105'>
          <span>Frontend</span>
          <FontAwesomeIcon icon={faGithub as IconProp} width={20} />
        </Link>}
      {(deployURL != null) &&
        <Link href={deployURL} className='flex gap-2 bg-slate-500 dark:bg-slate-900 items-center rounded p-1 w-fit bg-opacity-50 shadow-sm ease-linear duration-150 hover:scale-105'>
          <span>Deploy</span>
          <FontAwesomeIcon icon={faLink} width={20} />
        </Link>}
    </footer>
  )
}
