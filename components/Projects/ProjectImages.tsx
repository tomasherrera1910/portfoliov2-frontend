import { useState } from 'react'
import Modal from '../Modal'

interface Props {
  desktopImage?: string
  mobileImage?: string
  name: string
}
export function ProjectImages ({ desktopImage, mobileImage, name }: Props): JSX.Element {
  const [isMobileHover, setMobileHover] = useState('')
  const [isDesktopHover, setDesktopHover] = useState('')
  const [openMobileImage, setOpenMobileImage] = useState(false)
  const [openDesktopImage, setOpenDesktopImage] = useState(false)

  const baseImageStyle = 'absolute ease-in-out duration-200 cursor-pointer'
  const closeButtonStyle = 'bg-red-500 border-[1px] border-slate-300 px-4 py-2 text-xl font-roboto text-slate-200 rounded-full absolute top-2 -right-4 duration-200 ease-linear hover:bg-red-700'
  const handleImageHover = (setState: React.Dispatch<React.SetStateAction<string>>): void => {
    setState((prevState: string) => {
      if (prevState === '') {
        return 'z-10 opacity-100 scale-110'
      } else {
        return ''
      }
    })
  }
  return (
    <div className='w-28 h-48'>
      {
        mobileImage != null && (
          <img
            id={`mobile-${name}`}
            src={mobileImage}
            alt={`Mobile Image from project: ${name}`}
            className={`${baseImageStyle} top-0 left-0 h-48 w-24 object-contain ${isMobileHover}`}
            onMouseEnter={() => { handleImageHover(setMobileHover) }}
            onMouseLeave={() => { handleImageHover(setMobileHover) }}
            onClick={() => { setOpenMobileImage(true) }}
          />
        )
      }
      {
        desktopImage != null && (
          <img
            id={`desktop-${name}`}
            src={desktopImage}
            alt={`Desktop Image from project: ${name}`}
            className={`${baseImageStyle} -bottom-3 left-6 w-48 h-28 object-cover ${isDesktopHover}`}
            onMouseEnter={() => { handleImageHover(setDesktopHover) }}
            onMouseLeave={() => { handleImageHover(setDesktopHover) }}
            onClick={() => { setOpenDesktopImage(true) }}
          />
        )
      }

      <Modal open={openMobileImage}>
        <picture className='relative'>
          <img
            src={mobileImage}
            alt={`Desktop Image from project: ${name}`}
            className='h-screen max-h-[768px]'
          />
          <button className={closeButtonStyle} onClick={() => { setOpenMobileImage(false) }}>
            X
          </button>
        </picture>
      </Modal>
      <Modal open={openDesktopImage}>
        <picture className='relative flex justify-center'>
          <img
            src={desktopImage}
            alt={`Desktop Image from project: ${name}`}
            className='w-screen max-w-7xl'
          />
          <button className={`${closeButtonStyle} right-12`} onClick={() => { setOpenDesktopImage(false) }}>
            X
          </button>
        </picture>
      </Modal>
    </div>
  )
}
