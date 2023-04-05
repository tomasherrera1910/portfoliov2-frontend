import { useState } from 'react'
import { SkillActions } from './SkillActions'

interface Props {
  id: number
  imageURL: string
  name: string
  technology: string | undefined
  update: () => Promise<void>
}
export function SkillCard ({ id, imageURL, name, technology, update }: Props): JSX.Element {
  const [colorImage, setColorImage] = useState('grayscale')
  return (
    <article
      className='border-[1px] border-zinc-100 rounded p-2 bg-black bg-opacity-10 flex flex-col items-center justify-center min-w-[120px]'
      onMouseEnter={() => { setColorImage('grayscale-0') }}
      onMouseLeave={() => { setColorImage('grayscale') }}
    >
      <img src={imageURL} alt={name} className={`w-16 h-16 object-contain ${colorImage} ease-in-out duration-200`} />
      <h1 className='font-bold'>{name}</h1>
      <span className='text-gray-200 font-extralight text-xs'>{technology}</span>
      <SkillActions skill={{ id, imageURL, name, technology }} update={update} />
    </article>
  )
}
