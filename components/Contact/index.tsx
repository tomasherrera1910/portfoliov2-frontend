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
  const handleChangeInput = (input: string, evt: React.ChangeEvent<HTMLInputElement>) => {
    setInputFields({
      ...inputsFields,
      [input]: evt.target.value
    })
  }
  return (
      <section className='flex flex-col gap-2 my-8'>
        <h3>CONTACTO</h3>
        <form>
          <ContactInput placeholder={'Nombre'} inputValue={inputsFields.name} handleChange={(evt: React.ChangeEvent<HTMLInputElement>) => { handleChangeInput('name', evt) }}/>
          <ContactInput placeholder={'Email'} inputValue={inputsFields.email} handleChange={(evt: React.ChangeEvent<HTMLInputElement>) => { handleChangeInput('email', evt) }}/>
          <ContactInput placeholder={'Asunto'} inputValue={inputsFields.subject} handleChange={(evt: React.ChangeEvent<HTMLInputElement>) => { handleChangeInput('subject', evt) }}/>
          <ContactInput placeholder={'Mensaje'} inputValue={inputsFields.message} handleChange={(evt: React.ChangeEvent<HTMLInputElement>) => { handleChangeInput('message', evt) }}/>
          <button>ENVIAR</button>
        </form>
      </section>
  )
}
