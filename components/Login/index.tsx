import { useState } from 'react'
import { useRouter } from 'next/router'
import api from '../../utils/api'
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
    <div className='h-screen flex justify-center items-center flex-col gap-8 bg-gradient-to-tl from-slate-900 to-cyan-900  text-slate-300'>
      <section className='bg-black bg-opacity-40 rounded px-4 py-20 flex flex-col items-center justify-center'>
        <h1 className='text-5xl uppercase font-mono'>Admin</h1>
        <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
          <section>
            <InputPassword passwordInput={passwordInput} handlePasswordInput={handlePasswordInput} />
            {errorMessage !== '' &&
              <label className='text-red-500 text-xs pt-1 flex gap-2'><FontAwesomeIcon icon={faLock} className='w-3' /> {errorMessage}</label>}
          </section>
          <button type='submit' className='font-bold bg-black bg-opacity-40 rounded py-2 text-slate-400 shadow-sm ease-in-out duration-200 hover:from-slate-800 hover:to-black hover:bg-gradient-to-r hover:scale-95'>
            {loading ? 'Cargando...' : 'INGRESAR'}
          </button>
        </form>
      </section>
    </div>
  )
}
