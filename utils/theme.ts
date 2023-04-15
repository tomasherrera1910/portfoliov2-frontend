import { Theme } from './types'

export function getThemeFromLocalStorage (): Theme {
  if (typeof window === 'undefined') {
    return Theme.Light
  }
  const theme = window.localStorage.getItem('theme') as Theme.Dark | Theme.Light | null
  let preferScheme = Theme.Light
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    preferScheme = Theme.Dark
  }
  return theme ?? preferScheme
}

export function handleInitialTheme (initialTheme: Theme.Light | Theme.Dark) {
  const body = document.querySelector('body') as HTMLBodyElement
  if (initialTheme === Theme.Dark) {
    body.classList.add('dark')
    document.documentElement.setAttribute('dark', 'true')
  } else {
    body.classList.remove('dark')
    document.documentElement.removeAttribute('dark')
  }
}
