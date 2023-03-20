import { useState } from 'react'
import ContactInfo from './ContactInfo'
import ContactInput from './ContactInput'

const INITIAL_FORM = {
  name: '',
  email: '',
  subject: '',
  message: ''
}
export function Contact (): JSX.Element {
  const [inputsFields, setInputFields] = useState(INITIAL_FORM)
  const handleChangeInput = (input: string, value: string) => {
    setInputFields({
      ...inputsFields,
      [input]: value
    })
  }
  return (
      <section className='flex flex-col sm:flex-row my-8 sm:justify-center'>
        <form className='bg-black bg-opacity-40 rounded-tr-md p-2 sm:grow sm:rounded-bl-md sm:rounded-tr-none max-w-sm'>
          <h3 className='text-sky-900 font-bold text-2xl text-center'>CONTACTAME</h3>
          <ContactInput placeholder={'Nombre'} inputValue={inputsFields.name} handleChange={(value: string) => { handleChangeInput('name', value) }}/>
          <ContactInput placeholder={'Email'} inputValue={inputsFields.email} handleChange={(value: string) => { handleChangeInput('email', value) }}/>
          <ContactInput placeholder={'Asunto'} inputValue={inputsFields.subject} handleChange={(value: string) => { handleChangeInput('subject', value) }}/>
          <ContactInput area placeholder={'Mensaje'} inputValue={inputsFields.message} handleChange={(value: string) => { handleChangeInput('message', value) }}/>
          <button className='bg-black bg-opacity-70 w-full py-2 rounded-sm border-b-2 border-b-slate-400 text-slate-400 ease-linear duration-200 hover:text-sky-900 hover:border-b-sky-900 hover:scale-95'>
            ENVIAR
          </button>
        </form>
        <aside className='text-slate-200 font-bold bg-gradient-to-b from-slate-900 via-sky-900 to-sky-800 bg-opacity-20 flex items-center justify-around flex-wrap p-1 gap-2 rounded-bl-md sm:flex-col sm:px-2 sm:bg-gradient-to-r sm:rounded-bl-none sm:rounded-tr-md'>
          <ContactInfo/>
        </aside>
      </section>
  )
}
