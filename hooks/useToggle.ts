import { useState } from 'react'

interface ToggleInterface {
  toggle: boolean
  handleToggle: () => void
}
export const useToggle = (): ToggleInterface => {
  const [toggle, setToggle] = useState(false)
  const handleToggle = (): void => {
    setToggle(prevValue => !prevValue)
  }
  return { toggle, handleToggle }
}
