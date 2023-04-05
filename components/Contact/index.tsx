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
    <section className='flex flex-col sm:flex-row sm:justify-center'>
      <form className='bg-black bg-opacity-40 rounded-tr-md p-2 sm:grow sm:rounded-bl-md sm:rounded-tr-none max-w-sm'>
        <h3 className='text-sky-600 font-roboto font-bold text-3xl sm:text-5xl text-center animate-pulse'>CONTACTAME</h3>
        <section className='md:flex md:gap-2 md:mt-6'>
          <ContactInput placeholder='Nombre' inputValue={inputsFields.name} handleChange={(value: string) => { handleChangeInput('name', value) }} />
          <ContactInput placeholder='Email' inputValue={inputsFields.email} handleChange={(value: string) => { handleChangeInput('email', value) }} />
        </section>
        <ContactInput placeholder='Asunto' inputValue={inputsFields.subject} handleChange={(value: string) => { handleChangeInput('subject', value) }} />
        <ContactInput area placeholder='Mensaje' inputValue={inputsFields.message} handleChange={(value: string) => { handleChangeInput('message', value) }} />
        <button className='bg-black font-roboto bg-opacity-70 w-full py-2 rounded-sm border-b-2 border-b-slate-400 text-slate-400 ease-linear duration-200 hover:text-sky-900 hover:border-b-sky-900 hover:scale-95'>
          ENVIAR
        </button>
      </form>
      <aside className='text-slate-200 font-roboto font-medium bg-black bg-opacity-70 border-t-[1px] border-t-sky-600 sm:border-t-0 sm:border-l-[1px] sm:border-l-sky-600 max-w-sm flex items-center justify-around flex-wrap p-1 gap-2 rounded-bl-md sm:flex-col sm:px-2 sm:rounded-bl-none sm:rounded-tr-md'>
        <ContactInfo />
      </aside>
    </section>
  )
}
