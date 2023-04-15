import { useEffect, useState } from 'react'
import { Theme } from '../utils/types'
import { getThemeFromLocalStorage, handleInitialTheme } from '../utils/theme'

const useTheme = () => {
  const [theme, setTheme] = useState<Theme.Dark | Theme.Light>(Theme.Dark)
  function handleTheme () {
    const body = document.querySelector('body') as HTMLBodyElement
    body.classList.toggle('dark')

    if (body.classList.contains('dark')) {
      document.documentElement.setAttribute('dark', 'true')
      setTheme(Theme.Dark)
      window.localStorage.setItem('theme', Theme.Dark)
    } else {
      document.documentElement.removeAttribute('dark')
      setTheme(Theme.Light)
      window.localStorage.setItem('theme', Theme.Light)
    }
  }
  useEffect(() => {
    const initialTheme = getThemeFromLocalStorage()
    handleInitialTheme(initialTheme)
    setTheme(initialTheme)
  }, [])

  return { theme, handleTheme }
}
export default useTheme
