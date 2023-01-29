import { useState } from 'react'
import { Project, ProjectImage, Skill } from '../utils/types'

type SkillProject = Partial<Skill> & Partial<Project>
interface FormInterface {
  handleChange: (evt: React.ChangeEvent<HTMLInputElement>, field: string, pos?: number) => void
  postForm: () => void
  putForm: () => void
  errorMessage: string
  form: SkillProject
  setError: () => void
}
interface hookParameters {
  INITIAL_FORM: SkillProject
  handleOpen: () => void
  update: () => Promise<void>
  post: (data: SkillProject) => Promise<any>
  put: (id: number, data: SkillProject) => Promise<any>
}

const useForm = ({ INITIAL_FORM, handleOpen, update, post, put }: hookParameters): FormInterface => {
  const [form, setForm] = useState(INITIAL_FORM)
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>, field: string, pos?: number): void => {
    setForm(prevForm => {
      if (pos != null && field === 'colors') {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const newColors = [...prevForm.colors!]
        newColors[pos] = evt.target.value
        return { ...prevForm, colors: newColors }
      } else if (field === 'desktop' || field === 'mobile') {
        const { images } = prevForm
        // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
        const newImages = { ...images, [field]: evt.target.value } as ProjectImage
        return { ...prevForm, images: newImages }
      } else {
        return { ...prevForm, [field]: evt.target.value }
      }
    })
  }

  const postForm = (): void => {
    post(form).then(async (_data) => {
      await update()
      handleOpen()
      setErrorMessage('')
      setForm(INITIAL_FORM)
    })
  }
  const putForm = (): void => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    put(INITIAL_FORM.id!, form)
      .then(async (_data) => {
        await update()
        handleOpen()
        setErrorMessage('')
      })
  }
  const setError = (): void => {
    setErrorMessage('Fields with * are required')
  }
  return { handleChange, postForm, putForm, errorMessage, form, setError }
}

export default useForm
