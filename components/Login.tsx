import { useState } from "react"
import { setTokenLS } from '../utils/token'
import api from "../utils/api"

export function Login(){
    const [passwordInput, setPasswordInput] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    
    const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault()
        api.login({password: passwordInput})
        .then(res => res.json())
        .then(data => {
            data.error ? setErrorMessage(data.error)
                       : setTokenLS(data.token)
        })
    }
    const handlePasswordInput = (evt: React.ChangeEvent<HTMLInputElement>) => {
        setPasswordInput(evt.target.value)
        if(errorMessage)
        setErrorMessage('')
    }
    return(
        <div className="h-screen flex justify-center items-center flex-col gap-8 bg-slate-900 text-slate-300">
            <h1 className="text-5xl uppercase font-mono">Admin</h1>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <label className="text-slate-400 flex flex-col gap-1">
                    Clave
                <input 
                type="password"
                value={passwordInput}
                onChange={handlePasswordInput} 
                className="bg-slate-800 rounded py-2 px-4 outline-none focus:outline-slate-400"
                />
                </label>
                <label className="text-red-500 text-sm">{errorMessage}</label>
                <button className="font-bold bg-slate-800 rounded py-2 text-slate-400 border-b-2 border-b-slate-400 hover:text-slate-800 hover:bg-slate-400">
                    INGRESAR
                </button>
            </form>
        </div>
    )
}