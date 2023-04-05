import { faBan, faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface Props {
  children: React.ReactNode | React.ReactNode[]
  handleConfirm: () => void
  handleClose: () => void
}
export default function ModalConfirm ({ children, handleConfirm, handleClose }: Props): JSX.Element {
  const buttonStyle = 'flex items-center gap-1 p-1 rounded-full ease-in-out duration-300 font-bold'
  return (
    <div className='fixed top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] bg-gradient-to-l from-slate-800 to-cyan-900 text-white py-4 px-2 rounded border-2 border-cyan-500'>
      {children}
      <section className='flex justify-around my-3'>
        <button
          className={`${buttonStyle} bg-green-900 hover:bg-green-500`}
          onClick={handleConfirm}
        >
          <FontAwesomeIcon icon={faCircleCheck} className='w-6' /> Confirm
        </button>
        <button
          className={`${buttonStyle} bg-red-900 hover:bg-red-500`}
          onClick={handleClose}
        >
          <FontAwesomeIcon icon={faBan} className='w-6' /> Cancel
        </button>
      </section>
    </div>
  )
}
