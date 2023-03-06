import { MutableRefObject, useEffect, useState } from 'react'
import { useToggle } from '../hooks/useToggle'
import { getBUTTONS } from '../utils/sidebarAdminButtons'
import { IButtonAside } from '../utils/types'
import useHeightRef from './useHeightRef'

export interface SidebarProps {
  BUTTONS: IButtonAside[]
  activeButton: string
  toggle: boolean
  adminHeight: number
  projectsHeight: number
  skillsHeight: number
  adminInfoRef: MutableRefObject<HTMLDivElement | undefined>
  projectsRef: MutableRefObject<HTMLDivElement | undefined>
  skillsRef: MutableRefObject<HTMLDivElement | undefined>
}
const useSidebar = (): SidebarProps => {
  const { toggle, handleToggle } = useToggle()
  const { adminHeight, projectsHeight, skillsHeight, adminInfoRef, projectsRef, skillsRef } = useHeightRef()
  const [activeButton, setActiveButton] = useState('INITIAL_TEXT')

  const handleActive = (buttonText: string): void => {
    setActiveButton(buttonText)
  }
  const handleScroll = (): void => {
    const position = Math.ceil(window.scrollY)
    const maxScroll = window.document.documentElement.scrollHeight - window.innerHeight
    const projectsTotalHeight = adminHeight + projectsHeight
    const skillsTotalHeight = projectsTotalHeight + skillsHeight
    console.log({ position, adminHeight, projectsHeight, skillsHeight, maxScroll })
    if (position === maxScroll) handleActive('Skills')
    else if (position < adminHeight - 40) handleActive('Admin Home')
    else if (position >= adminHeight && position < projectsTotalHeight - 40) handleActive('Projects')
    else if (position >= adminHeight + projectsHeight && position <= skillsTotalHeight) handleActive('Skills')
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [adminHeight, projectsHeight, skillsHeight])
  const BUTTONS = getBUTTONS(handleToggle, handleActive)
  return { BUTTONS, activeButton, toggle, adminHeight, projectsHeight, skillsHeight, adminInfoRef, projectsRef, skillsRef }
}

export default useSidebar
