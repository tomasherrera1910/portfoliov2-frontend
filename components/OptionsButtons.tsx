import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import useTheme from '../hooks/useTheme'
import { Theme } from '../utils/types'

export function OptionsButtons (): JSX.Element {
  const { theme, handleTheme } = useTheme()
  const themeButtonStyle =
  theme === Theme.Dark
    ? 'shadow-slate-500 text-slate-500 hover:shadow-slate-200 hover:text-slate-200'
    : 'shadow-slate-200 text-slate-200 hover:shadow-slate-500 hover:text-slate-500'
  return (
    <header className='absolute right-4 top-2 md:top-4 md:right-8 flex gap-4 z-10'>
      <button
        onClick={handleTheme}
        className={`p-2 rounded-full bg-black bg-opacity-20 shadow duration-200 ease-in-out ${themeButtonStyle} hover:scale-110`}
      >
        <FontAwesomeIcon icon={theme === Theme.Dark ? faMoon : faSun} className='w-8 h-8 lg:w-12 lg:h-12' />
      </button>

    </header>
  )
}
