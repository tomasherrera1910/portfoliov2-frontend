export function Education (): JSX.Element {
  return (
        <section>
            <h3 className="text-sky-600 uppercase font-roboto font-bold text-3xl sm:text-5xl">Educación</h3>
            <ul className="flex flex-col gap-4">
              <li className="flex gap-1 items-center">
                <img src="/utn-logo.jpg" alt="UTN Logo" className='rounded-full object-cover w-20 h-20'/>
                <aside className="flex flex-col max-w-sm">
                  <a href="https://www4.frm.utn.edu.ar/tecnicatura-superior-programacion/" target="_blank" rel="noreferrer">
                    <h4 className="uppercase font-bold font-roboto text-sky-800 ease-linear duration-150 hover:text-sky-600">UTN - Tecnicatura superior en Programación</h4>
                  </a>
                  <span className="font-roboto text-gray-400 font-bold text-sm">2019-2022</span>
                  <p className="font-barlow text-sm text-gray-300">Este fue mi primer contacto con la programación, donde aprendí todas las bases de la misma y ademas lenguajes tales como Java, C#, C++, Javascript, bases de datos SQL y noSQL.</p>
                </aside>
              </li>
              <li className="flex gap-1 items-center">
                <img src="/nocountry-logo.jpg" alt="UTN Logo" className='rounded-full object-cover w-20 h-20'/>
                <aside className="flex flex-col max-w-sm">
                  <a href="https://www.nocountry.tech/" target="_blank" rel="noreferrer">
                    <h4 className="uppercase font-bold font-roboto text-sky-800 ease-linear duration-150 hover:text-sky-600">NO COUNTRY</h4>
                  </a>
                  <span className="font-roboto text-gray-400 font-bold text-sm">2023-Actualidad</span>
                  <p className="font-barlow text-sm text-gray-300">Aqui realizo simulaciones de entornos laborales, ya que No Country lo que hace es juntar un grupo de Juniors y ponerlos a hacer un proyecto grupal. Y esto me sirvió muchísimo para mejorar en mi trabajo en equipo.</p>
                </aside>
              </li>
            </ul>
        </section>
  )
}
