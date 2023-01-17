import { useState } from 'react'
import api from '../../../utils/api'

const INITIAL_FORM = {
  name: '',
  imageURL: '',
  technology: ''
}
export default function SkillsForm (): JSX.Element {
  const [form, setForm] = useState(INITIAL_FORM)
  const inputStyle = 'bg-inherit text-white'
  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>, field: string): void => {
    setForm(prevForm => {
      return { ...prevForm, [field]: evt.target.value }
    })
  }
  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>): void => {
    evt.preventDefault()
    api.createSkill(form).then(data => { console.log(data) })
  }
  return (
        <form onSubmit={handleSubmit}>
            <label>
                Name *
                <input value={form.name} onChange={(evt) => { handleChange(evt, 'name') }} className={inputStyle}/>
            </label>
            <label>
                ImageURL *
                <input value={form.imageURL} onChange={(evt) => { handleChange(evt, 'imageURL') }} className={inputStyle}/>
            </label>
            <label>
                Technology
                <input value={form.technology} onChange={(evt) => { handleChange(evt, 'technology') }} className={inputStyle}/>
            </label>
            <button>ADD</button>
        </form>
  )
}
