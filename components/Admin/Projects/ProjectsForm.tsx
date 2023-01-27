import { faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import useForm from '../../../hooks/useForm'
import { Project } from '../../../utils/types'
import api from '../../../utils/api'
import Modal from '../../Modal'
import React from 'react'

interface Props {
  open: boolean
  edit?: boolean
  INITIAL_FORM?: Partial<Project>
  handleOpen: () => void
  update: () => Promise<void>
}

const INITIAL_FORM_ADD = {
  name: '',
  description: '',
  image: '',
  colors: ['', '', ''],
  backendRepo: '',
  frontEndRepo: '',
  deployURL: ''
}

export default function ProjectsForm ({ open, handleOpen, update, edit, INITIAL_FORM = INITIAL_FORM_ADD }: Props): JSX.Element {
  const { errorMessage, handleChange, postForm, putForm, form, setError } = useForm({
    INITIAL_FORM,
    handleOpen,
    update,
    post: api.createProject,
    put: api.editProject
  })
  const inputStyle = 'bg-gray-900 text-white p-1 outline-none rounded ease-in-out duration-150 focus:outline-1 focus:outline-cyan-400 focus:shadow-sm focus:shadow-cyan-600'
  const labelStyle = 'flex flex-col gap-1 text-gray-300 text-sm'
  const displayModal = open ? 'block' : 'hidden'
  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>): void => {
    evt.preventDefault()
    if (edit ?? false) {
      putForm()
    } else {
      if (form.name === '' || form.image === '' || ((form.colors?.includes('')) ?? false) || form.deployURL === '') {
        setError()
      } else {
        postForm()
      }
    }
  }
  return (
      <Modal open={open}>
          <div className={`${displayModal} fixed top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] bg-gradient-to-bl from-slate-900 via-cyan-900 to-blue-900 py-12 px-16 rounded border-2 border-cyan-600 max-h-[80vh] overflow-auto`}>
            <button className="absolute top-2 right-2 ease-in-out duration-150 text-white hover:text-red-900" onClick={handleOpen}>
              <FontAwesomeIcon icon={faClose} className="w-4"/>
            </button>
            <h1 className="font-bold text-white">{(edit ?? false) ? 'EDIT' : 'ADD'} PROJECT</h1>
            <form onSubmit={handleSubmit} className={'flex flex-col gap-2 my-2 justify-center'}>
                <label className={labelStyle}>
                    Name *
                    <input value={form.name} onChange={(evt) => { handleChange(evt, 'name') }} className={`${inputStyle}`}/>
                </label>
                <label className={labelStyle}>
                    Description
                    <input value={form.name} onChange={(evt) => { handleChange(evt, 'name') }} className={`${inputStyle} resize-y`}/>
                </label>
                <label className={labelStyle}>
                    Image *
                    <input value={form.imageURL} onChange={(evt) => { handleChange(evt, 'imageURL') }} className={inputStyle}/>
                </label>
                <label className={labelStyle}>
                    Primary Color *
                    <input value={form.imageURL} type='color' onChange={(evt) => { handleChange(evt, 'imageURL') }} className={inputStyle}/>
                </label>
                <label className={labelStyle}>
                    Secondary Color *
                    <input value={form.imageURL} type='color' onChange={(evt) => { handleChange(evt, 'imageURL') }} className={inputStyle}/>
                </label>
                <label className={labelStyle}>
                    Text Color *
                    <input value={form.imageURL} type='color' onChange={(evt) => { handleChange(evt, 'imageURL') }} className={inputStyle}/>
                </label>
                <label className={labelStyle}>
                    Backend Repo URL
                    <input value={form.imageURL} onChange={(evt) => { handleChange(evt, 'imageURL') }} className={inputStyle}/>
                </label>
                <label className={labelStyle}>
                    Frontend Repo URL
                    <input value={form.imageURL} onChange={(evt) => { handleChange(evt, 'imageURL') }} className={inputStyle}/>
                </label>
                <label className={labelStyle}>
                    Deploy URL *
                    <input value={form.imageURL} onChange={(evt) => { handleChange(evt, 'imageURL') }} className={inputStyle}/>
                </label>
               {errorMessage !== '' && <span className="text-xs text-red-900 font-bold bg-red-200 p-1 border-[1px] border-red-900 rounded">{errorMessage}</span>}
                <button className='text-white border-[1px] border-cyan-600 rounded bg-gray-900 ease-in-out duration-200 hover:border-white hover:text-cyan-600'>
                {(edit ?? false) ? 'EDIT' : 'ADD'} PROJECT
                </button>
            </form>
          </div>
        </Modal>
  )
}
