import { useState } from 'react'
import { useToggle } from '../hooks/useToggle'
import { getBUTTONS } from '../utils/sidebarAdminButtons'
import { IButtonAside } from '../utils/types'

interface returnHook {
  BUTTONS: IButtonAside[]
  activeButton: string
  asideWidth: string
  toggle: boolean
}
const useSidebar = (): returnHook => {
  const { toggle, handleToggle } = useToggle()
  const [activeButton, setActiveButton] = useState('INITIAL_TEXT')
  const asideWidth = toggle ? 'w-40' : 'w-6 min-[600px]:w-12'
  const handleActive = (buttonText: string): void => {
    setActiveButton(buttonText)
  }
  const BUTTONS = getBUTTONS(handleToggle, handleActive)
  return { BUTTONS, activeButton, asideWidth, toggle }
}

export default useSidebar
