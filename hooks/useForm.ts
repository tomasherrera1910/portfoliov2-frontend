import { useState } from 'react'
import api from '../utils/api'
import { Skill } from '../utils/types'

interface FormInterface {
  handleChange: (evt: React.ChangeEvent<HTMLInputElement>, field: string) => void
  handleSubmit: (evt: React.FormEvent<HTMLFormElement>) => void
  errorMessage: string
  form: Partial<Skill>
}
interface hookParameters {
  edit?: boolean
  INITIAL_FORM?: Partial<Skill>
  handleOpen: () => void
  update: () => Promise<void>
}
const INITIAL_FORM_ADD = {
  name: '',
  imageURL: '',
  technology: ''
}

const useForm = ({ edit, INITIAL_FORM = INITIAL_FORM_ADD, handleOpen, update }: hookParameters): FormInterface => {
  const [form, setForm] = useState(INITIAL_FORM)
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>, field: string): void => {
    setForm(prevForm => {
      return { ...prevForm, [field]: evt.target.value }
    })
  }
  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>): void => {
    evt.preventDefault()
    if (!(edit ?? false)) {
      if (form.name === '' || form.imageURL === '') {
        setErrorMessage('The fields with * are required!')
      } else {
        api.createSkill(form).then(async (_data) => {
          await update()
          handleOpen()
          setErrorMessage('')
          setForm(INITIAL_FORM)
        })
      }
    } else if (edit === true) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      api.editSkill(INITIAL_FORM.id!, form).then(async (data) => {
        await update()
        handleOpen()
        setErrorMessage('')
      })
    }
  }
  return { handleChange, handleSubmit, errorMessage, form }
}

export default useForm
