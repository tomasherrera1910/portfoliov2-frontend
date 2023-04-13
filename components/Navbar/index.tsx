import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons'
import { useToggle } from '../../hooks/useToggle'
import SocialsMedia from '../SocialsMedia'
import NavbarSections from './NavbarSections'

export function Navbar (): JSX.Element {
  const { toggle, handleToggle } = useToggle()
  const navMobile = `bg-black text-white bg-opacity-80 w-full duration-300 ease-in-out absolute z-30 top-0 h-screen xl:h-auto xl:h-calc(100vh - 80px) ${toggle ? 'left-0' : '-left-full'} flex flex-col items-center justify-center gap-8`

  return (
    <div className='fixed flex z-30 w-full xl:relative xl:w-60'>
      <aside className='bg-transparent flex z-30 items-center px-3 py-1 bg-opacity-80 w-full fixed xl:w-full xl:sticky xl:top-0 xl:max-h-screen'>
        <button
          className='text-sky-500 absolute top-3 left-3 z-40 bg-slate-800 bg-opacity-75 border-[1px] border-slate-500 rounded-full p-2 ease-in-out duration-200 hover:scale-110 xl:hidden'
          onClick={handleToggle}
        >
          <FontAwesomeIcon icon={toggle ? faClose : faBars} className='h-6 w-6' />
        </button>
        <nav className={`${navMobile} xl:relative xl:top-0 xl:left-0 xl:bg-transparent`}>
          <ul className='hidden xl:flex w-full justify-around'>
            <SocialsMedia />
          </ul>
          <NavbarSections />
        </nav>
      </aside>
    </div>
  )
}
