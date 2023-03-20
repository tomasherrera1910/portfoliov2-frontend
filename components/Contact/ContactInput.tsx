import { useId, useState } from 'react'

interface Props {
  placeholder: string
  inputValue: string
  handleChange: (evt: React.ChangeEvent<HTMLInputElement>) => void
}
export default function ContactInput ({ placeholder, inputValue, handleChange }: Props): JSX.Element {
  const inputId = useId()
  const [focus, setFocus] = useState(false)

  const handleFocus = () => {
    setFocus(true)
  }
  const handleBlur = () => {
    if (inputValue === '') { setFocus(false) }
  }
  return (
        <div className='relative my-6'>
            <label className={`text-neutral-500 absolute top-0 left-0 py-1 px-2 duration-200 ease-in-out ${focus ? 'text-sky-700 -top-6 text-sm' : ''}`} htmlFor={inputId}>
                {placeholder}
            </label>
            <input
            type='text'
            id={inputId}
            className={`py-1 px-2 bg-black bg-opacity-70 rounded outline-none border-b-2 border-b-neutral-500 duration-300 ease-linear ${focus ? 'border-b-sky-700' : ''}`}
            onFocus={handleFocus}
            onBlur={handleBlur}
            value={inputValue}
            onChange={(evt) => { handleChange(evt) }}
            />
        </div>
  )
}
