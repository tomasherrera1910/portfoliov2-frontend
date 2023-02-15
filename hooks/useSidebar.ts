import { useEffect, useState } from 'react'
import { useToggle } from '../hooks/useToggle'
import { getBUTTONS } from '../utils/sidebarAdminButtons'
import { IButtonAside } from '../utils/types'

interface returnHook {
  BUTTONS: IButtonAside[]
  activeButton: string
  asideWidth: string
  toggle: boolean
}
const useSidebar = (adminHeight: number, projectsHeight: number, skillsHeight: number): returnHook => {
  const { toggle, handleToggle } = useToggle()
  const [activeButton, setActiveButton] = useState('INITIAL_TEXT')
  const asideWidth = toggle ? 'w-40' : 'w-6 min-[600px]:w-12'
  const handleActive = (buttonText: string): void => {
    setActiveButton(buttonText)
  }
  const handleScroll = (adminHeight: number, projectsHeight: number, skillsHeight: number): void => {
    const position = Math.ceil(window.scrollY)
    if (position < adminHeight) handleActive('Admin Home')
    else if (position >= adminHeight && position < adminHeight + projectsHeight) handleActive('Projects')
    else if (position >= adminHeight + projectsHeight && position <= adminHeight + projectsHeight + skillsHeight)handleActive('Skills')
  }
  useEffect(() => {
    window.addEventListener('scroll', () => { handleScroll(adminHeight, projectsHeight, skillsHeight) })
    return () => {
      window.removeEventListener('scroll', () => { handleScroll(adminHeight, projectsHeight, skillsHeight) })
    }
  }, [])
  const BUTTONS = getBUTTONS(handleToggle, handleActive)
  return { BUTTONS, activeButton, asideWidth, toggle }
}

export default useSidebar
