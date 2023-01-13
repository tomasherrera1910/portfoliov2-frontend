import { useToggle } from '../../hooks/useToggle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight, faBook, faList } from '@fortawesome/free-solid-svg-icons'

export function Sidebar (): JSX.Element {
  const { toggle, handleToggle } = useToggle()
  const asideWidth = toggle ? 'w-40' : 'w-6'

  return (
        <aside className={'h-screen bg-black bg-opacity-75 backdrop-blur-sm fixed top-14 left-0 flex flex-col gap-4 items-center ease-linear duration-150 ' + asideWidth}>
            <button onClick={handleToggle}>
                <FontAwesomeIcon icon={toggle ? faArrowLeft : faArrowRight} className="w-4"/>
            </button>
            <button className="flex gap-2 items-center">
                <FontAwesomeIcon icon={faList} className="w-4"/>
                {toggle && 'Projects'}
            </button>
            <button className="flex gap-2 items-center">
                <FontAwesomeIcon icon={faBook} className="w-4"/>
                {toggle && 'Skills'}
            </button>
        </aside>
  )
}
