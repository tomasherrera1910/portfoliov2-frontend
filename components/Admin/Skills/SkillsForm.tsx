import { faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import api from '../../../utils/api'

interface Props {
  open: boolean
  handleOpen: () => void
}
const INITIAL_FORM = {
  name: '',
  imageURL: '',
  technology: ''
}
export default function SkillsForm ({ open, handleOpen }: Props): JSX.Element {
  const [form, setForm] = useState(INITIAL_FORM)
  const inputStyle = 'bg-gray-900 text-white p-1 outline-none rounded ease-in-out duration-150 focus:outline-1 focus:outline-cyan-400 focus:shadow-sm focus:shadow-cyan-600'
  const labelStyle = 'flex flex-col gap-1 text-gray-300 text-sm'
  const displayModal = open ? 'block' : 'hidden'
  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>, field: string): void => {
    setForm(prevForm => {
      return { ...prevForm, [field]: evt.target.value }
    })
  }
  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>): void => {
    evt.preventDefault()
    api.createSkill(form).then(() => {})
  }
  return (
        <div className={`${displayModal} fixed top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] bg-gradient-to-bl from-slate-900 via-cyan-900 to-blue-900 py-12 px-16 rounded border-2 border-cyan-600`}>
          <button className="absolute top-2 right-2 ease-in-out duration-150 hover:text-red-900" onClick={handleOpen}>
            <FontAwesomeIcon icon={faClose} className="w-4"/>
          </button>
          <h1 className="font-bold">ADD SKILL</h1>
          <form onSubmit={handleSubmit} className={'flex flex-col gap-2 my-2 justify-center'}>
              <label className={labelStyle}>
                  Name *
                  <input value={form.name} onChange={(evt) => { handleChange(evt, 'name') }} className={`${inputStyle}`}/>
              </label>
              <label className={labelStyle}>
                  ImageURL *
                  <input value={form.imageURL} onChange={(evt) => { handleChange(evt, 'imageURL') }} className={inputStyle}/>
              </label>
              <label className={labelStyle}>
                  Technology
                  <input value={form.technology} onChange={(evt) => { handleChange(evt, 'technology') }} className={inputStyle}/>
              </label>
              <button className='border-[1px] border-cyan-600 rounded bg-gray-900 ease-in-out duration-200 hover:border-white hover:text-cyan-600'>
                ADD SKILL
              </button>
          </form>
        </div>
  )
}
