import { useState } from 'react'

interface Props {
  desktopImage: string
  mobileImage: string
  name: string
}
export function ProjectImages ({ desktopImage, mobileImage, name }: Props): JSX.Element {
  const [isMobileHover, setMobileHover] = useState('')
  const [isDesktopHover, setDesktopHover] = useState('')
  const baseImageStyle = 'absolute border-stone-200 border-[1px] rounded ease-in-out duration-200'
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
      <img
        id={`mobile-${name}`}
        src={mobileImage}
        alt={`Mobile Image from project: ${name}`}
        className={`${baseImageStyle} top-0 left-0 h-48 w-24 object-cover ${isMobileHover}`}
        onMouseEnter={() => { handleImageHover(setMobileHover) }}
        onMouseLeave={() => { handleImageHover(setMobileHover) }}
      />
      <img
        id={`desktop-${name}`}
        src={desktopImage}
        alt={`Desktop Image from project: ${name}`}
        className={`${baseImageStyle} -bottom-3 left-6 w-48 h-28 object-cover ${isDesktopHover}`}
        onMouseEnter={() => { handleImageHover(setDesktopHover) }}
        onMouseLeave={() => { handleImageHover(setDesktopHover) }}
      />
    </div>
  )
}
