import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function Sidebar (): JSX.Element {
  return (
        <aside className="h-screen bg-black bg-opacity-25 backdrop-blur-sm w-6 fixed top-14 left-0 flex flex-col items-center">
            <button>
                <FontAwesomeIcon icon={faArrowRight} className="w-4"/>
            </button>
        </aside>
  )
}
