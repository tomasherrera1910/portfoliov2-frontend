import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import api from '../../../utils/api'
import ModalConfirm from '../../ModalConfirm'
import Modal from '../../Modal'

interface Props {
  id: number
  imageURL: string
  name: string
  technology: string | undefined
  update: () => Promise<void>
}
export function SkillCard ({ id, imageURL, name, technology, update }: Props): JSX.Element {
  const [deleteModal, setDeleteModal] = useState(false)
  const handleDeleteModal = (): void => {
    setDeleteModal(prevState => !prevState)
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
    <article className='border-[1px] border-zinc-100 rounded p-2 bg-black bg-opacity-50'>
        <img src={imageURL} alt={name}/>
        <h1>{name}</h1>
        <span>{technology}</span>
        <div className='flex justify-around'>
            <button
            className='bg-red-900 p-1 rounded ease-in-out duration-200 hover:text-red-900 hover:bg-white'
            onClick={handleDeleteModal}
            >
                <FontAwesomeIcon icon={faTrash} className='w-3'/>
            </button>
            <button className='bg-blue-900 p-1 rounded ease-in-out duration-200 hover:text-blue-900 hover:bg-white'>
                <FontAwesomeIcon icon={faPenToSquare} className='w-3'/>
            </button>
        </div>
    </article>
    <Modal open={deleteModal}>
      <ModalConfirm handleClose={handleDeleteModal} handleConfirm={handleDelete}>
        <h1>Want you delete the Skill {name} (ID: {id})</h1>
      </ModalConfirm>
    </Modal>
    </>
  )
}
