import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function ContactInfo (): JSX.Element {
  const pStyle = 'flex flex-col items-center text-sm sm:text-base lg:flex-row gap-2'
  return (
    <>
      <p className={`${pStyle}`}><FontAwesomeIcon icon={faEnvelope} className='text-blue-800 dark:text-sky-600 w-4 h-4 lg:w-6 lg:h-6' /> tomymza10@gmail.com</p>
      <p className={`${pStyle}`}><FontAwesomeIcon icon={faLocationDot} className='text-blue-800 dark:text-sky-600 w-4 h-4 lg:w-6 lg:h-6' /> Mendoza, Argentina</p>
      <p className={`${pStyle}`}><FontAwesomeIcon icon={faPhone} className='text-blue-800 dark:text-sky-600 w-4 h-4 lg:w-6 lg:h-6' /> +54 9 261 711-6355</p>
    </>
  )
}
