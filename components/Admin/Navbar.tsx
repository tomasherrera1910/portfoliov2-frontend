import { faArrowLeft, faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

export function Navbar (): JSX.Element {
  return (
        <header className="py-4 px-2 bg-zinc-900 text-white flex justify-between items-center w-screen">
            <Link href={'/'} className="flex gap-2">
                <FontAwesomeIcon icon={faArrowLeft} className="w-6"/> Portfolio
            </Link>
            <span className="flex gap-2">
                <FontAwesomeIcon icon={faCircleUser} className="w-6"/> Admin
            </span>
        </header>
  )
}
