import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface Props {
  icon: IconDefinition
  text: string
  handleClick: () => void
  toggle: boolean
  active: string
}

export default function ButtonSidebar ({ icon, text, toggle, handleClick, active }: Props): JSX.Element {
  const buttonStyle = 'flex gap-2 items-center justify-center w-full py-4 ease-linear duration-200 hover:bg-slate-800 hover:text-gray-200'
  return (
        <button onClick={handleClick} className={`${buttonStyle} ${active}`}>
                <FontAwesomeIcon icon={icon} className="w-4"/>
                {toggle && text}
        </button>
  )
}
