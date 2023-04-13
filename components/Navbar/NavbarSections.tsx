import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faFolderOpen, faHouseUser, faMessage } from '@fortawesome/free-solid-svg-icons'
import useSidebar from '../../hooks/useSidebar'

export default function NavbarSections (): JSX.Element {
  const { active } = useSidebar()
  const anchorsStyle = 'flex font-roboto font-bold text-xl gap-3 items-center justify-center w-44 rounded-full p-3 border-b-[1px] cursor-pointer duration-300 ease-in-out hover:scale-105 hover:saturate-200'
  const anchorInactive = 'text-sky-800 bg-gray-400 border-b-sky-800'
  const anchorActive = 'bg-sky-600 border-b-white text-white scale-110'
  return (
    <>
      <a href='#welcome' className={`${anchorsStyle} ${active === 'aboutMe' ? anchorActive : anchorInactive}`}>
        <FontAwesomeIcon icon={faHouseUser} className='w-5 h-5' />
        Sobre Mi
      </a>
      <a href='#skills' className={`${anchorsStyle} ${active === 'skills' ? anchorActive : anchorInactive}`}>
        <FontAwesomeIcon icon={faBook} className='w-5 h-5' />
        Tecnologías
      </a>
      <a href='#projects' className={`${anchorsStyle} ${active === 'projects' ? anchorActive : anchorInactive}`}>
        <FontAwesomeIcon icon={faFolderOpen} className='w-5 h-5' />
        Proyectos
      </a>
      <a href='#educacion' className={`${anchorsStyle} ${active === 'education' ? anchorActive : anchorInactive}`}>
        <FontAwesomeIcon icon={faFolderOpen} className='w-5 h-5' />
        Educación
      </a>
      <a href='#contact' className={`${anchorsStyle} ${active === 'contact' ? anchorActive : anchorInactive}`}>
        <FontAwesomeIcon icon={faMessage} className='w-5 h-5' />
        Contacto
      </a>
    </>
  )
}
