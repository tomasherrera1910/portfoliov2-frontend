import { useState } from 'react'
import { useToggle } from '../../hooks/useToggle'
import { faArrowLeft, faArrowRight, faBook, faFolder, faHome } from '@fortawesome/free-solid-svg-icons'
import { IButtonAside } from '../../utils/types'
import ButtonSidebar from './ButtonSidebar'

export function Sidebar (): JSX.Element {
  const { toggle, handleToggle } = useToggle()
  const [activeButton, setActiveButton] = useState('INITIAL_TEXT')
  const asideWidth = toggle ? 'w-40' : 'w-6 min-[600px]:w-12'
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
      handleClick: () => {
        handleActive('Admin Home')
      }
    },
    {
      icon: faFolder,
      icon2: null,
      text: 'Projects',
      handleClick: () => {
        handleActive('Projects')
      }
    },
    {
      icon: faBook,
      icon2: null,
      text: 'Skills',
      handleClick: () => {
        handleActive('Skills')
      }
    }
  ]
  const handleActive = (buttonText: string): void => {
    setActiveButton(buttonText)
  }

  return (
        <aside className={'h-screen bg-black bg-opacity-75 backdrop-blur-sm fixed top-14 left-0 border-r-[1px] z-10 border-gray-500 flex flex-col items-center ease-linear duration-150 ' + asideWidth}>
            {BUTTONS.map((info, idx) => (
                <ButtonSidebar
                key={idx}
                handleClick={info.handleClick}
                text={info.text}
                toggle={toggle}
                active={activeButton === info.text ? 'bg-white text-black' : ''}
                icon={toggle ? (info.icon2 ?? info.icon) : info.icon}
                />
            ))}
        </aside>
  )
}
