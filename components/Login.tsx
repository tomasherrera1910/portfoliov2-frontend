import { useState } from 'react'
import { useRouter } from 'next/router'
import api from '../utils/api'
import InputPassword from './PasswordInput'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock } from '@fortawesome/free-solid-svg-icons'

export function Login (): JSX.Element {
  const [passwordInput, setPasswordInput] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>): void => {
    evt.preventDefault()
    setLoading(true)
    api.login({ password: passwordInput })
      .then(async res => await res.json())
      .then(data => {
        typeof data.error === 'string'
          ? setErrorMessage(data.error)
          : router.push('/admin')
      })
      .finally(() => { setLoading(false) })
      .catch(e => { console.error(e) })
  }

  const handlePasswordInput = (evt: React.ChangeEvent<HTMLInputElement>): void => {
    setPasswordInput(evt.target.value)
    if (errorMessage !== '') { setErrorMessage('') }
  }
  return (
        <div className="h-screen flex justify-center items-center flex-col gap-8 bg-slate-900 text-slate-300">
            <h1 className="text-5xl uppercase font-mono">Admin</h1>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <InputPassword passwordInput={passwordInput} handlePasswordInput={handlePasswordInput}/>
                {errorMessage !== '' &&
                  <label className="text-red-500 text-sm flex gap-2"><FontAwesomeIcon icon={faLock} className="w-4"/> {errorMessage}</label>
                }
                <button type="submit" className="font-bold bg-slate-800 rounded py-2 text-slate-400 border-b-2 border-b-slate-400 hover:text-slate-800 hover:bg-slate-400">
                    {loading ? 'Cargando...' : 'INGRESAR'}
                </button>
            </form>
        </div>
  )
}
