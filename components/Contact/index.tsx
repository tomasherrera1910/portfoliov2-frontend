import { useContext, useState } from 'react'
import ContactInfo from './ContactInfo'
import ContactInput from './ContactInput'
import { SidebarContext } from '../../context/sidebar'

const INITIAL_FORM = {
  name: '',
  email: '',
  subject: '',
  message: ''
}
export function Contact (): JSX.Element {
  const { contactMeRef } = useContext(SidebarContext)
  const [inputsFields, setInputFields] = useState(INITIAL_FORM)
  const handleChangeInput = (input: string, value: string) => {
    setInputFields({
      ...inputsFields,
      [input]: value
    })
  }
  const buttonDark = 'dark:bg-black dark:border-b-slate-400 dark:text-slate-400 dark:hover:text-sky-900 dark:hover:border-b-sky-900'
  const buttonLight = 'bg-gray-400 border-b-slate-800 text-slate-800 hover:text-blue-900 hover:border-b-blue-900'
  const asideDark = 'dark:text-slate-200 dark:bg-black dark:border-t-sky-600 dark:sm:border-l-sky-600'
  const asideLight = 'text-slate-800 bg-gray-400 border-t-blue-800 sm:border-l-blue-800'

  return (
    <section className='w-full flex flex-col max-w-5xl items-center sm:items-start z-10 pt-20 mb-12' ref={contactMeRef} id='contact'>
      <h3 className='text-blue-800 dark:text-sky-600 font-roboto font-bold text-4xl sm:text-5xl animate-pulse'>CONTACTAME</h3>
      <section className='w-full flex flex-col max-w-5xl items-center sm:flex-row sm:justify-start'>
        <form className='dark:bg-black dark:bg-opacity-60 bg-gray-300 w-full bg-opacity-20 rounded-tr-md p-2 sm:grow sm:rounded-bl-md sm:rounded-tr-none max-w-sm sm:max-w-lg'>
          <div className='px-2'>
            <section className='md:flex md:mt-6 md:justify-between'>
              <ContactInput placeholder='Nombre' inputValue={inputsFields.name} handleChange={(value: string) => { handleChangeInput('name', value) }} />
              <ContactInput placeholder='Email' inputValue={inputsFields.email} handleChange={(value: string) => { handleChangeInput('email', value) }} />
            </section>
            <ContactInput placeholder='Asunto' inputValue={inputsFields.subject} handleChange={(value: string) => { handleChangeInput('subject', value) }} />
            <ContactInput area placeholder='Mensaje' inputValue={inputsFields.message} handleChange={(value: string) => { handleChangeInput('message', value) }} />
            <button className={`${buttonLight} ${buttonDark} font-roboto bg-opacity-70 w-full py-2 rounded-sm border-b-2 ease-linear duration-200 hover:scale-95`}>
              ENVIAR
            </button>
          </div>
        </form>
        <aside className={`${asideLight} ${asideDark} font-roboto font-medium bg-opacity-70 border-t-[1px]  sm:border-t-0 sm:border-l-[1px] max-w-sm h-full flex items-center justify-around flex-wrap p-1 gap-2 rounded-bl-md sm:flex-col sm:px-2 sm:rounded-bl-none sm:rounded-tr-md lg:px-4`}>
          <ContactInfo />
        </aside>
      </section>
    </section>
  )
}
