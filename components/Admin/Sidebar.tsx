import { useToggle } from '../../hooks/useToggle'
import { faArrowLeft, faArrowRight, faBook, faHome, faList } from '@fortawesome/free-solid-svg-icons'
import { IButtonAside } from '../../utils/types'
import ButtonSidebar from './ButtonSidebar'

export function Sidebar (): JSX.Element {
  const { toggle, handleToggle } = useToggle()
  const asideWidth = toggle ? 'w-40' : 'w-6'
  const BUTTONS: IButtonAside[] = [
    {
      icon: faArrowRight,
      icon2: faArrowLeft,
      text: '',
      handleClick: handleToggle
    },
    {
      icon: faHome,
      icon2: null,
      text: 'Admin Home',
      handleClick: () => {}
    },
    {
      icon: faList,
      icon2: null,
      text: 'Projects',
      handleClick: () => {}
    },
    {
      icon: faBook,
      icon2: null,
      text: 'Skills',
      handleClick: () => {}
    }
  ]
  //   const active = ' bg-white text-black'
  return (
        <aside className={'h-screen bg-black bg-opacity-75 backdrop-blur-sm fixed top-14 left-0 flex flex-col items-center ease-linear duration-150 ' + asideWidth}>
            {BUTTONS.map((info, idx) => (
                <ButtonSidebar
                key={idx}
                handleClick={info.handleClick}
                text={info.text}
                toggle={toggle}
                icon={toggle ? (info.icon2 ?? info.icon) : info.icon}
                />
            ))}
        </aside>
  )
}
