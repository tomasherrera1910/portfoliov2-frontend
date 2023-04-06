import styles from './welcome.module.css'
export function Welcome (): JSX.Element {
  return (
    <section className='flex items-center h-screen w-full font-roboto justify-center'>
      <aside className='grow flex flex-col items-center justify-center gap-2'>
        <h1 className='text-6xl text-center font-semibold'>TOMÁS HERRERA</h1>
        <h3 className={`${styles.typingText} max-w-fit text-3xl text-sky-500`}>Fullstack Developer</h3>
        <p className='font-barlow font-light text-center text-slate-500 max-w-sm'>Tengo 21 años, soy Técnico superior en Programación y un desarrollador web autodidacta, estoy listo para el salto laboral.</p>
      </aside>
      <picture className='hidden lg:block drop-shadow-3xl-sky absolute bottom-0 right-0 z-0'>
        <img src='/foto.png' alt='Mi foto' className='w-96' />
      </picture>
    </section>
  )
}
