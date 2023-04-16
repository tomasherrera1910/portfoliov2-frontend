import { useId, useState } from 'react'

interface Props {
  placeholder: string
  inputValue: string
  inputName: string
  handleChange: (value: string) => void
  area?: boolean
}
export default function ContactInput ({ placeholder, inputName, inputValue, handleChange, area }: Props): JSX.Element {
  const inputId = useId()
  const [focus, setFocus] = useState({ label: false, input: false })
  const handleFocus = () => {
    setFocus({ label: true, input: true })
  }
  const handleBlur = () => {
    if (inputValue === '') { setFocus({ label: false, input: false }) } else { setFocus({ label: false, input: true }) }
  }
  const darkInput = 'dark:bg-black dark:bg-opacity-70 dark:border-b-neutral-500 dark:focus:border-b-sky-500'
  const lightInput = `bg-gray-400 bg-opacity-40 border-b-neutral-700 focus:border-b-blue-600 ${focus.input && !focus.label ? 'dark:border-b-sky-900 border-b-blue-900' : ''}`
  const darkLabel = 'dark:text-neutral-500'
  const lightLabel = `text-neutral-700 ${focus.label ? 'dark:text-sky-400 text-blue-700 font-semibold' : ''} ${focus.input && !focus.label ? 'dark:text-sky-900 text-blue-900' : ''}`
  return (
    <div className='relative my-6 md:my-0 md:mb-6'>
      <label className={`${lightLabel} ${darkLabel} absolute font-barlow top-0 left-0 py-1 px-2 duration-200 ease-in-out ${focus.input ? '-top-5 text-xs lg:text-base lg:-top-7' : ''}`} htmlFor={inputId}>
        {placeholder}
      </label>
      {area === true
        ? <textarea
            id={inputId}
            className={`${lightInput} ${darkInput} py-1 px-2 min-h-[80px] w-full h-fit  rounded outline-none border-b-2  duration-300 ease-linear xl:text-lg`}
            onFocus={handleFocus}
            onBlur={handleBlur}
            value={inputValue}
            onChange={(evt) => { handleChange(evt.target.value) }}
            name={inputName}
            required
          />
        : <input
            type='text'
            id={inputId}
            className={`${lightInput} ${darkInput} py-1 px-2 w-full rounded outline-none border-b-2 duration-300 ease-linear xl:text-lg`}
            onFocus={handleFocus}
            onBlur={handleBlur}
            value={inputValue}
            onChange={(evt) => { handleChange(evt.target.value) }}
            name={inputName}
            required
          />}
    </div>
  )
}
