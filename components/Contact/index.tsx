import { useState } from 'react'
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
      <section className='flex flex-col gap-2 my-8'>
        <h3>CONTACTO</h3>
        <form>
          <ContactInput placeholder={'Nombre'} inputValue={inputsFields.name} handleChange={(value: string) => { handleChangeInput('name', value) }}/>
          <ContactInput placeholder={'Email'} inputValue={inputsFields.email} handleChange={(value: string) => { handleChangeInput('email', value) }}/>
          <ContactInput placeholder={'Asunto'} inputValue={inputsFields.subject} handleChange={(value: string) => { handleChangeInput('subject', value) }}/>
          <ContactInput area placeholder={'Mensaje'} inputValue={inputsFields.message} handleChange={(value: string) => { handleChangeInput('message', value) }}/>
          <button>ENVIAR</button>
        </form>
      </section>
  )
}
