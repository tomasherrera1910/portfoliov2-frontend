import styles from './welcome.module.css'
import SocialsMedia from '../SocialsMedia'
import { useContext } from 'react'
import { SidebarContext } from '../../context/sidebar'
import { OptionsButtons } from '../OptionsButtons'

export function Welcome (): JSX.Element {
  const { aboutMeRef } = useContext(SidebarContext)

  return (
    <section className='flex relative items-center h-screen w-full font-roboto justify-center' ref={aboutMeRef} id='welcome'>
      <OptionsButtons />
      <aside className='grow flex flex-col items-center justify-center gap-2'>
        <h1 className='text-6xl text-center font-semibold sm:text-7xl'>TOMÁS HERRERA</h1>
        <h3 className={`${styles.typingText} max-w-fit text-3xl text-blue-800 dark:text-sky-500 sm:text-5xl`}>Fullstack Developer</h3>
        <ul className='flex justify-around w-72 py-4 border-b-[1px] border-b-slate-700 xl:hidden'>
          <SocialsMedia />
        </ul>
        <p className='font-barlow dark:font-light font-semibold text-center text-slate-500 dark:text-slate-400 max-w-sm sm:text-lg'>Tengo 21 años, soy Técnico superior en Programación y un desarrollador web autodidacta, estoy listo para el salto laboral.</p>
      </aside>
      <picture className='hidden lg:block drop-shadow-3xl-sky'>
        <img src='/foto.png' alt='Mi foto' className='w-96' />
      </picture>
    </section>
  )
}
