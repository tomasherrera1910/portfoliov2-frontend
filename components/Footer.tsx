import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faFilePdf } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import useI18N from '../hooks/useI18N'
import { useRouter } from 'next/router'

export function Footer (): JSX.Element {
  const { locale } = useRouter()
  const { t } = useI18N()
  const darkFooter = 'dark:bg-[#010108] dark:border-t-slate-800 dark:text-white'
  const lightFooter = 'bg-[#9f9e9e] border-t-slate-800 text-black'
  return (
    <footer className={`${lightFooter} ${darkFooter} border-t-[1px] py-2 flex flex-col items-center font-roboto`}>
      <section className='flex max-w-3xl items-center justify-center'>
        <div className='flex flex-col gap-2'>
          <p className='flex text-sm gap-1 text-gray-900 dark:text-gray-300 items-center justify-center flex-wrap'>{t('footerText')}
            <a href='https://www.linkedin.com/in/mauro-tomas-herrera/' target='_blank' rel='noreferrer' className='text-black dark:text-white font-bold text-base hover:underline'>Tomás Herrera</a>
            <span className='font-barlow font-semibold text-xs'>2022-2023</span>
          </p>
          <nav className='flex justify-around items-center xl:hidden'>
            <a
              href='https://www.linkedin.com/in/mauro-tomas-herrera/' target='_blank' rel='noreferrer'
              className='border-[1px] rounded-full p-2 duration-300 ease-in-out cursor-pointer bg-blue-600 text-white border-white grayscale hover:grayscale-0 hover:scale-110'
            >
              <FontAwesomeIcon icon={faLinkedinIn as IconProp} className='w-4' />
            </a>
            <a
              href='https://www.github.com/tomasherrera1910' target='_blank' rel='noreferrer'
              className='border-[1px] rounded-full p-2 duration-300 ease-in-out cursor-pointer bg-white text-black border-black hover:bg-black hover:text-white hover:border-white hover:scale-110'
            >
              <FontAwesomeIcon icon={faGithub as IconProp} className='w-4' />
            </a>
            <a href={locale === 'es' ? '/resumes/tomasherrera-cv.pdf' : '/resumes/tomasherrera-resume.pdf'} target='_blank' className='border-[1px] rounded-full p-2 duration-300 ease-in-out cursor-pointer bg-red-900 text-white border-white grayscale hover:grayscale-0 hover:scale-110' rel='noreferrer'>
              <FontAwesomeIcon icon={faFilePdf as IconProp} className='w-4' />
            </a>
          </nav>
        </div>
      </section>
    </footer>
  )
}
