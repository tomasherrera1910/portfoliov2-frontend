import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'

interface Props {
  passwordInput: string
  handlePasswordInput: (evt: React.ChangeEvent<HTMLInputElement>) => void
}

export default function InputPassword ({ passwordInput, handlePasswordInput }: Props): JSX.Element {
  const [inputType, setInputType] = useState<'password' | 'text'>('password')

  const handleInputType = (): void => {
    setInputType(prevState => {
      return prevState === 'password' ? 'text' : 'password'
    })
  }

  return (
        <label className="text-slate-400 flex flex-col gap-1">
            Clave
            <section className='relative'>
                <input
                    type={inputType}
                    value={passwordInput}
                    onChange={handlePasswordInput}
                    className="bg-black bg-opacity-40 rounded py-2 pl-4 pr-8 outline-none focus:outline-slate-400"
                />
                <button
                className="absolute right-0 py-3 pr-2"
                onClick={handleInputType}
                type="button">
                   {inputType === 'password' && <FontAwesomeIcon icon={faEyeSlash} className="h-4"/>}
                   {inputType === 'text' && <FontAwesomeIcon icon={faEye} className="h-4"/>}
                </button>
            </section>
        </label>
  )
}
