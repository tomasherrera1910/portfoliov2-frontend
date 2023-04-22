import { faGlobe, faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import useTheme from '../hooks/useTheme'
import { Theme } from '../utils/types'
import { useRouter } from 'next/router'
import Link from 'next/link'

export function OptionsButtons (): JSX.Element {
  const { theme, handleTheme } = useTheme()
  const { locale, locales } = useRouter()
  const language = locales?.find(l => l !== locale)

  const themeButtonStyle =
  theme === Theme.Dark
    ? 'bg-black bg-opacity-50 text-slate-500 hover:text-slate-200 hover:scale-110'
    : 'bg-white bg-opacity-50 text-slate-700 hover:text-slate-900 hover:scale-110'
  return (
    <header className='absolute right-4 top-2 md:top-4 md:right-8 flex gap-4 z-10'>
      <button
        onClick={handleTheme}
        className={`p-2 shadow-slate-700 dark:shadow-slate-500 rounded-full h-fit shadow duration-200 ease-in-out ${themeButtonStyle} dark:hover:shadow-slate-200 hover:shadow-slate-900`}
      >
        <FontAwesomeIcon icon={theme === Theme.Dark ? faMoon : faSun} className='w-8 h-8 lg:w-12 lg:h-12' />
      </button>
      <div className={`flex flex-col items-center gap-1 ${themeButtonStyle} bg-transparent`}>
        <Link
          href='/'
          locale={language}
          className='p-2 rounded-full shadow shadow-slate-700 dark:shadow-slate-500 duration-200 ease-in-out dark:hover:shadow-slate-200 hover:shadow-slate-900'
        >
          <FontAwesomeIcon icon={faGlobe} className='w-8 h-8 lg:w-12 lg:h-12' />

        </Link>
        <span className='uppercase font-roboto font-semibold'>{locale}</span>
      </div>

    </header>
  )
}
