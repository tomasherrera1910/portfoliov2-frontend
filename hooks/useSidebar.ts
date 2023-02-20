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
    console.log({ position, adminHeight, projectsHeight, skillsHeight })
    if (position < adminHeight) handleActive('Admin Home')
    else if (position >= adminHeight && position < adminHeight + projectsHeight) handleActive('Projects')
    else if (position >= adminHeight + projectsHeight && position <= adminHeight + projectsHeight + skillsHeight)handleActive('Skills')
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  const BUTTONS = getBUTTONS(handleToggle, handleActive)
  return { BUTTONS, activeButton, toggle, adminHeight, projectsHeight, skillsHeight, adminInfoRef, projectsRef, skillsRef }
}

export default useSidebar
