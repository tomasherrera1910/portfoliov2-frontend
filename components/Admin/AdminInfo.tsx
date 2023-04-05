import { forwardRef, MutableRefObject } from 'react'

// eslint-disable-next-line react/display-name
export const AdminInfo = forwardRef((props, ref): JSX.Element => {
  return (
    <div ref={ref as MutableRefObject<HTMLDivElement>} id='adminInfo' className='pt-16'>
      <h1 className='text-3xl font-bold my-4'>Bienvenido!</h1>
      <h3 className='text-xl'>En este apartado vas a poder administrar/gestionar todas las Habilidades y Proyectos que se van a mostrar en tu portfolio!</h3>
      <h2 className='text-2xl font-bold mt-4 mb-2'>Podrás:</h2>
      <ul className='list-disc pl-4 text-xl flex flex-col gap-3'>
        <li>Terminaste tu nuevo proyecto? Agregalo rapidamente a la DB a través de un formulario.</li>
        <li>Por fin aprendiste esa tecnología nueva tan buscada por el mercado actual? Agregala a tu porfolio en simples pasos</li>
        <li>No te convenció algo? Editalo.</li>
        <li>Crees que algún proyecto sobra en el portfolio? Eliminalo.</li>
        <li>También podes agregar las habilidades que usaste en tu proyecto para que posteriormente se pueda filtrar en el portfolio.</li>
        <li>Se que quizás esto no es lo más práctico pero lo hice con fines de mantenerme activo en el desarrollo fullstack.</li>
      </ul>
    </div>
  )
})
