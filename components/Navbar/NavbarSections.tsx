import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faFolderOpen, faHouseUser, faMessage } from '@fortawesome/free-solid-svg-icons'
import useSidebar from '../../hooks/useSidebar'
import useI18N from '../../hooks/useI18N'

export default function NavbarSections (): JSX.Element {
  const { t } = useI18N()
  const { active } = useSidebar()
  const anchorsStyle = 'flex font-roboto font-bold text-xl gap-3 items-center justify-center w-44 rounded-full p-3 border-b-[1px] cursor-pointer duration-300 ease-in-out hover:scale-105 hover:saturate-200'
  const anchorInactive = 'dark:text-sky-800 dark:bg-gray-400 dark:border-b-sky-800 text-blue-400 border-b-blue-400 bg-gray-800'
  const anchorActive = 'dark:bg-sky-600 dark:border-b-white dark:text-white bg-blue-400 border-b-gray-800 text-gray-800 scale-110 animate-pulse'
  return (
    <>
      <a href='#welcome' className={`${anchorsStyle} ${active === 'aboutMe' ? anchorActive : anchorInactive}`}>
        <FontAwesomeIcon icon={faHouseUser} className='w-5 h-5' />
        {t('titleHome')}
      </a>
      <a href='#skills' className={`${anchorsStyle} ${active === 'skills' ? anchorActive : anchorInactive}`}>
        <FontAwesomeIcon icon={faBook} className='w-5 h-5' />
        {t('titleSkills')}
      </a>
      <a href='#projects' className={`${anchorsStyle} ${active === 'projects' ? anchorActive : anchorInactive}`}>
        <FontAwesomeIcon icon={faFolderOpen} className='w-5 h-5' />
        {t('titleProjects')}
      </a>
      <a href='#educacion' className={`${anchorsStyle} ${active === 'education' ? anchorActive : anchorInactive}`}>
        <FontAwesomeIcon icon={faFolderOpen} className='w-5 h-5' />
        {t('titleEducation')}
      </a>
      <a href='#contact' className={`${anchorsStyle} ${active === 'contact' ? anchorActive : anchorInactive}`}>
        <FontAwesomeIcon icon={faMessage} className='w-5 h-5' />
        {t('titleContact')}
      </a>
    </>
  )
}
