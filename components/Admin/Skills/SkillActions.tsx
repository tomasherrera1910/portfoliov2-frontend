import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import api from '../../../utils/api'
import { Skill } from '../../../utils/types'
import Modal from '../../Modal'
import ModalConfirm from '../../ModalConfirm'
import SkillsForm from './SkillsForm'

interface Props {
  skill: Skill
  update: () => Promise<void>
}
export function SkillActions ({ skill, update }: Props): JSX.Element {
  const [deleteModal, setDeleteModal] = useState(false)
  const [editModal, setEditModal] = useState(false)
  const actionsButtons = 'p-1 rounded ease-in-out duration-200 hover:bg-white'
  const handleDeleteModal = (): void => {
    setDeleteModal(prevState => !prevState)
  }
  const handleEditModal = (): void => {
    setEditModal(prevState => !prevState)
  }
  const handleDelete = (): void => {
    api.deleteSkill(skill.id)
      .then(async () => {
        await update()
      })
      .finally(() => {
        handleDeleteModal()
      })
  }
  return (
    <>
      <div className='flex justify-around pt-2 w-full'>
        <button
          className={`${actionsButtons} bg-red-900 hover:text-red-900`}
          onClick={handleDeleteModal}
        >
          <FontAwesomeIcon icon={faTrash} className='w-3' />
        </button>
        <button
          className={`${actionsButtons} bg-blue-900 hover:text-blue-900`}
          onClick={handleEditModal}
        >
          <FontAwesomeIcon icon={faPenToSquare} className='w-3' />
        </button>
      </div>
      <Modal open={deleteModal}>
        <ModalConfirm handleClose={handleDeleteModal} handleConfirm={handleDelete}>
          <h1>
            Want you delete the Skill {skill.name} (ID: {skill.id})
          </h1>
        </ModalConfirm>
      </Modal>
      <SkillsForm open={editModal} handleOpen={handleEditModal} update={update} edit INITIAL_FORM={skill} />
    </>
  )
}
