import { faBook } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function Skills (): JSX.Element {
  return (
        <section className='py-6'>
            <h1 className="text-3xl flex items-center gap-4"><FontAwesomeIcon icon={faBook} className="w-8"/> Skills</h1>
        </section>
  )
}
