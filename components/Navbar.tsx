import { faBars, faBook, faClose, faFolderOpen, faHouseUser, faMessage } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useToggle } from '../hooks/useToggle'
import SocialsMedia from './SocialsMedia'

export function Navbar (): JSX.Element {
  const { toggle, handleToggle } = useToggle()
  const navMobile = `bg-black text-white bg-opacity-80 w-full duration-300 ease-in-out absolute z-30 top-0 h-screen xl:h-auto xl:h-calc(100vh - 80px) ${toggle ? 'left-0' : '-left-full'} flex flex-col items-center justify-center gap-8`
  const anchorsStyle = 'flex font-roboto font-bold text-xl gap-3 items-center justify-center w-44 rounded-full p-3 bg-sky-900 border-b-[1px] border-b-white cursor-pointer duration-300 ease-in-out hover:scale-105 hover:saturate-200'
  return (
    <div className='fixed flex z-30 w-full xl:relative xl:w-40'>
      <aside className='bg-transparent flex z-30 items-center px-3 py-1 bg-opacity-80 w-full fixed xl:w-auto xl:sticky xl:top-0 xl:max-h-screen'>
        <button
          className='text-sky-500 absolute top-3 left-3 z-40 bg-slate-800 bg-opacity-75 border-[1px] border-slate-500 rounded-full p-2 ease-in-out duration-200 hover:scale-110 xl:hidden'
          onClick={handleToggle}
        >
          <FontAwesomeIcon icon={toggle ? faClose : faBars} className='h-6 w-6' />
        </button>
        <nav className={`${navMobile} xl:relative xl:top-0 xl:left-0 xl:bg-transparent`}>
          <a className={`${anchorsStyle} text-sky-600 border-b-sky-600 bg-slate-300`}>
            <FontAwesomeIcon icon={faHouseUser} className='w-5 h-5' />
            Sobre Mi
          </a>
          <a className={`${anchorsStyle}`}>
            <FontAwesomeIcon icon={faBook} className='w-5 h-5' />
            Tecnologías
          </a>
          <a className={`${anchorsStyle}`}>
            <FontAwesomeIcon icon={faFolderOpen} className='w-5 h-5' />
            Proyectos
          </a>
          <a className={`${anchorsStyle}`}>
            <FontAwesomeIcon icon={faMessage} className='w-5 h-5' />
            Contacto
          </a>
          <ul className='hidden xl:flex w-full justify-around'>
            <SocialsMedia />
          </ul>
        </nav>
      </aside>
    </div>
  )
}
