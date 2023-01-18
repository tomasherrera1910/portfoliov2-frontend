import { useState } from 'react'
import { Skill } from '../utils/types'

interface FormInterface {
  handleChange: (evt: React.ChangeEvent<HTMLInputElement>, field: string) => void
  handleSubmit: (evt: React.FormEvent<HTMLFormElement>, create: (skill: Partial<Skill>) => Promise<Skill>) => void
  errorMessage: string
  form: Partial<Skill>
}

const INITIAL_FORM = {
  name: '',
  imageURL: '',
  technology: ''
}

const useForm = (handleOpen: () => void): FormInterface => {
  const [form, setForm] = useState(INITIAL_FORM)
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>, field: string): void => {
    setForm(prevForm => {
      return { ...prevForm, [field]: evt.target.value }
    })
  }
  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>, create: (skill: Partial<Skill>) => Promise<Skill>): void => {
    evt.preventDefault()
    if (form.name === '' || form.imageURL === '') {
      setErrorMessage('The fields with * are required!')
    } else {
      create(form).then((data) => {
        handleOpen()
        setErrorMessage('')
        setForm(INITIAL_FORM)
      })
    }
  }
  return { handleChange, handleSubmit, errorMessage, form }
}

export default useForm
