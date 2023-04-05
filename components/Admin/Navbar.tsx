import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

export function Navbar (): JSX.Element {
  return (
    <header className='py-4 px-4 bg-black bg-opacity-25 backdrop-blur-sm flex justify-between items-center w-full fixed top-0 left-0 border-b-[1px] border-gray-500 z-[5]'>
      <Link href='/' className='flex gap-2 ease-in-out duration-100 hover:scale-110 hover:font-bold'>
        Ir al Portfolio
      </Link>
      <span className='flex gap-2'>
        <FontAwesomeIcon icon={faCircleUser} className='w-6' /> Admin
      </span>
    </header>
  )
}
