import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

export function Navbar (): JSX.Element {
  return (
        <header className="py-4 px-2 bg-black bg-opacity-25 backdrop-blur-sm flex justify-between items-center w-screen fixed top-0 left-0">
            <Link href={'/'} className="flex gap-2">
                Ir al Portfolio
            </Link>
            <span className="flex gap-2">
                <FontAwesomeIcon icon={faCircleUser} className="w-6"/> Admin
            </span>
        </header>
  )
}
