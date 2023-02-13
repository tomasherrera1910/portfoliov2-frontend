import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface Props {
  icon: IconDefinition
  text: string
  handleClick: () => void
  toggle: boolean
  active: string
  nav: string | null
}

export default function ButtonSidebar ({ icon, text, toggle, handleClick, active, nav }: Props): JSX.Element {
  const asideWidth = toggle ? 'w-40' : 'w-8 min-[600px]:w-12'
  const buttonStyle = 'flex gap-2 items-center justify-center py-4 px-2 ease-linear duration-200 cursor-pointer hover:text-gray-500'
  return (
    <>
      {
        (nav != null)
          ? <a onClick={handleClick} className={`${buttonStyle} ${asideWidth} ${active}`} href={nav}>
          <FontAwesomeIcon icon={icon} className="w-4 min-[600px]:w-6"/>
          {toggle && text}
        </a>
          : <button onClick={handleClick} className={`${buttonStyle} ${asideWidth} ${active}`}>
            <FontAwesomeIcon icon={icon} className="w-4 min-[600px]:w-6"/>
        </button>
      }
    </>
  )
}
