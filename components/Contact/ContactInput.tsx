import { useId, useState } from 'react'

interface Props {
  placeholder: string
  inputValue: string
  handleChange: (value: string) => void
  area?: boolean
}
export default function ContactInput ({ placeholder, inputValue, handleChange, area }: Props): JSX.Element {
  const inputId = useId()
  const [focus, setFocus] = useState({ label: false, input: false })
  const handleFocus = () => {
    setFocus({ label: true, input: true })
  }
  const handleBlur = () => {
    if (inputValue === '') { setFocus({ label: false, input: false }) } else { setFocus({ label: false, input: true }) }
  }
  return (
    <div className='relative my-6 md:my-0 md:mb-6'>
      <label className={`text-neutral-500 absolute font-barlow top-0 left-0 py-1 px-2 duration-200 ease-in-out ${focus.input ? '-top-5 text-xs' : ''} ${focus.label ? 'text-sky-500' : ''} ${focus.input && !focus.label ? 'text-sky-900' : ''}`} htmlFor={inputId}>
        {placeholder}
      </label>
      {area === true
        ? <textarea
            id={inputId}
            className={`py-1 px-2 min-h-[80px] w-full h-fit bg-black bg-opacity-70 rounded outline-none border-b-2 border-b-neutral-500 duration-300 ease-linear focus:border-b-sky-500 ${focus.input && !focus.label ? 'border-b-sky-900' : ''}`}
            onFocus={handleFocus}
            onBlur={handleBlur}
            value={inputValue}
            onChange={(evt) => { handleChange(evt.target.value) }}
            required
          />
        : <input
            type='text'
            id={inputId}
            className={`py-1 px-2 bg-black bg-opacity-70 w-full rounded outline-none border-b-2 border-b-neutral-500 duration-300 ease-linear focus:border-b-sky-500 ${focus.input && !focus.label ? 'border-b-sky-900' : ''}`}
            onFocus={handleFocus}
            onBlur={handleBlur}
            value={inputValue}
            onChange={(evt) => { handleChange(evt.target.value) }}
            required
          />}
    </div>
  )
}
