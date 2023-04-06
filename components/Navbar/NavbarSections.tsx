import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faFolderOpen, faHouseUser, faMessage } from '@fortawesome/free-solid-svg-icons'

export default function NavbarSections (): JSX.Element {
  const anchorsStyle = 'flex font-roboto font-bold text-xl gap-3 items-center justify-center w-44 rounded-full p-3 bg-sky-600 border-b-[1px] border-b-white cursor-pointer duration-300 ease-in-out hover:scale-105 hover:saturate-200'
  const anchorActive = 'bg-gray-100 text-sky-500 border-b-sky-500 scale-110'
  return (
    <>
      <a className={`${anchorsStyle} ${anchorActive}`}>
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
    </>
  )
}
