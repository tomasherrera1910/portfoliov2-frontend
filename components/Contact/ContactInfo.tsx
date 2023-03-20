import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function ContactInfo (): JSX.Element {
  return (
        <>
        <p className='flex flex-col items-center'><FontAwesomeIcon icon={faEnvelope} width={16} className='text-slate-400'/> tomymza10@gmail.com</p>
        <p className='flex flex-col items-center'><FontAwesomeIcon icon={faLocationDot} width={16} className='text-slate-400'/> Mendoza, Argentina</p>
        <p className='flex flex-col items-center'><FontAwesomeIcon icon={faPhone} width={16} className='text-slate-400'/> +54 9 261 711-6355</p>
        </>
  )
}
