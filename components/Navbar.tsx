import { faBars, faBook, faClose, faFolderOpen, faHouseUser, faMessage } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useToggle } from '../hooks/useToggle'

export function Navbar (): JSX.Element {
  const { toggle, handleToggle } = useToggle()
  return (
    <header className='bg-transparent flex z-30 items-center px-3 py-1 bg-opacity-80 fixed w-full'>
      <button className='text-sky-500 z-40 bg-slate-800 bg-opacity-75 border-[1px] border-slate-500 rounded-full p-2 ease-in-out duration-200 hover:scale-110' onClick={handleToggle}>
        <FontAwesomeIcon icon={toggle ? faClose : faBars} className='h-6 w-6' />
      </button>
      <nav className={`bg-black text-white bg-opacity-80 w-full duration-300 ease-in-out absolute z-30 top-0 h-screen ${toggle ? 'left-0' : '-left-full'} flex flex-col items-center justify-center gap-8`}>
        <a className='flex gap-3 items-center justify-center w-36 rounded-full p-3 bg-sky-900 border-b-[1px] border-b-white'>
          <FontAwesomeIcon icon={faHouseUser} className='w-5 h-5' />
          Sobre Mi
        </a>
        <a className='flex gap-3 items-center justify-center w-36 rounded-full p-3 bg-sky-900 border-b-[1px] border-b-white'>
          <FontAwesomeIcon icon={faBook} className='w-5 h-5' />
          Tecnologías
        </a>
        <a className='flex gap-3 items-center justify-center w-36 rounded-full p-3 bg-sky-900 border-b-[1px] border-b-white'>
          <FontAwesomeIcon icon={faFolderOpen} className='w-5 h-5' />
          Proyectos
        </a>
        <a className='flex gap-3 items-center justify-center w-36 rounded-full p-3 bg-sky-900 border-b-[1px] border-b-white'>
          <FontAwesomeIcon icon={faMessage} className='w-5 h-5' />
          Contacto
        </a>
      </nav>
    </header>
  )
}
