import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface Props {
  icon: IconDefinition
  text: string
  handleClick: () => void
  toggle: boolean
}

export default function ButtonSidebar ({ icon, text, toggle, handleClick = () => {} }: Props): JSX.Element {
  const buttonStyle = 'flex gap-2 items-center justify-center w-full py-4 ease-linear duration-200 hover:bg-slate-600 hover:text-gray-800'
  return (
        <button onClick={handleClick} className={buttonStyle}>
                <FontAwesomeIcon icon={icon} className="w-4"/>
                {toggle && text}
        </button>
  )
}
