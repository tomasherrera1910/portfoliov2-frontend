import { useState } from "react"
import api from "../utils/api"

export function Login(){
    const [passwordInput, setPasswordInput] = useState('')
    const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault()
        api.login({password: passwordInput})
        .then(res => res.json())
        .then(data => console.log(data))
    }
    return(
        <div className="h-screen flex justify-center items-center flex-col gap-8 bg-slate-900 text-slate-300">
            <h1 className="text-5xl">Admin Login</h1>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <label className="text-slate-400 flex flex-col gap-1">
                    Clave
                <input 
                type="password"
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)} 
                className="bg-slate-800 rounded py-2 px-4 outline-none focus:outline-slate-400"
                />
                </label>
                <button className="font-bold bg-slate-800 rounded py-2 text-slate-400 border-b-2 border-b-slate-400 hover:text-slate-800 hover:bg-slate-400">
                    INGRESAR
                </button>
            </form>
        </div>
    )
}