import { faArrowLeft, faArrowRight, faBook, faFolder, faHome } from '@fortawesome/free-solid-svg-icons'
import { IButtonAside } from './types'

export const getBUTTONS = (handleToggle: () => void, handleActive: (buttonText: string) => void): IButtonAside[] => (
  [
    {
      icon: faArrowRight,
      icon2: faArrowLeft,
      text: '',
      handleClick: handleToggle,
      nav: null
    },
    {
      icon: faHome,
      icon2: null,
      text: 'Admin Home',
      handleClick: () => {
        handleActive('Admin Home')
      },
      nav: '#adminInfo'
    },
    {
      icon: faFolder,
      icon2: null,
      text: 'Projects',
      handleClick: () => {
        handleActive('Projects')
      },
      nav: '#projects'
    },
    {
      icon: faBook,
      icon2: null,
      text: 'Skills',
      handleClick: () => {
        handleActive('Skills')
      },
      nav: '#skills'
    }
  ]
)
