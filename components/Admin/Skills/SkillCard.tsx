import { useState } from 'react'
import api from '../../../utils/api'
import ModalConfirm from '../../ModalConfirm'
import Modal from '../../Modal'
import SkillsForm from './SkillsForm'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'

interface Props {
  id: number
  imageURL: string
  name: string
  technology: string | undefined
  update: () => Promise<void>
}
export function SkillCard ({ id, imageURL, name, technology, update }: Props): JSX.Element {
  const [deleteModal, setDeleteModal] = useState(false)
  const [editModal, setEditModal] = useState(false)
  const [colorImage, setColorImage] = useState('grayscale')
  const actionsButtons = 'p-1 rounded ease-in-out duration-200 hover:bg-white'
  const handleDeleteModal = (): void => {
    setDeleteModal(prevState => !prevState)
  }
  const handleEditModal = (): void => {
    setEditModal(prevState => !prevState)
  }
  const handleDelete = (): void => {
    api.deleteSkill(id)
      .then(async () => {
        await update()
      })
      .finally(() => {
        handleDeleteModal()
      })
  }
  return (
    <>
    <article
    className='border-[1px] border-zinc-100 rounded p-2 bg-black bg-opacity-10 flex flex-col items-center justify-center min-w-[120px]'
    onMouseEnter={() => { setColorImage('grayscale-0') }}
    onMouseLeave={() => { setColorImage('grayscale') }}
    >
        <img src={imageURL} alt={name} className={`w-16 h-16 object-contain ${colorImage} ease-in-out duration-200`}/>
        <h1 className="font-bold">{name}</h1>
        <span className='text-gray-200 font-extralight text-xs'>{technology}</span>
        <div className='flex justify-around pt-2 w-full'>
            <button
            className={`${actionsButtons} bg-red-900 hover:text-red-900`}
            onClick={handleDeleteModal}
            >
                <FontAwesomeIcon icon={faTrash} className='w-3'/>
            </button>
            <button
            className={`${actionsButtons} bg-blue-900 hover:text-blue-900`}
            onClick={handleEditModal}
            >
                <FontAwesomeIcon icon={faPenToSquare} className='w-3'/>
            </button>
        </div>
    </article>
    <Modal open={deleteModal}>
      <ModalConfirm handleClose={handleDeleteModal} handleConfirm={handleDelete}>
        <h1>Want you delete the Skill {name} (ID: {id})</h1>
      </ModalConfirm>
    </Modal>
    <SkillsForm open={editModal} handleOpen={handleEditModal} update={update} edit INITIAL_FORM={{ id, name, imageURL, technology }}/>
    </>
  )
}
