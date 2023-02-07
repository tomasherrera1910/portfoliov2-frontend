import { useState } from 'react'
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import api from '../../../utils/api'
import { Project } from '../../../utils/types'
import Modal from '../../Modal'
import ModalConfirm from '../../ModalConfirm'
import ProjectsForm from './ProjectsForm'

interface Props {
  project: Project
  update: () => Promise<void>
}

export function ProjectActions ({ project, update }: Props): JSX.Element {
  const [deleteModal, setDeleteModal] = useState(false)
  const [editModal, setEditModal] = useState(false)

  const handleDeleteModal = (): void => { setDeleteModal(!deleteModal) }
  const handleEditModal = (): void => { setEditModal(!editModal) }
  const handleDelete = (): void => {
    api.deleteProject(project.id)
      .then(async () => {
        await update()
      })
      .finally(() => {
        handleDeleteModal()
      })
  }
  return (
        <>
        <div className='flex gap-2'>
            <button onClick={handleDeleteModal} className={'bg-red-700 flex gap-1 text-sm p-1 rounded duration-300 ease-in-out hover:bg-red-900'}>
              Delete Project
              <FontAwesomeIcon icon={faTrash} className='w-4'/>
            </button>
            <button onClick={handleEditModal} className={'bg-blue-700 flex gap-1 text-sm p-1 rounded duration-300 ease-in-out hover:bg-blue-900'}>
              Edit Project
              <FontAwesomeIcon icon={faPenToSquare} className='w-4'/>
            </button>
        </div>
        <Modal open={deleteModal}>
        <ModalConfirm handleClose={handleDeleteModal} handleConfirm={handleDelete}>
          <h1>Want you delete the Skill {project.name} (ID: {project.id})</h1>
        </ModalConfirm>
        </Modal>
        <ProjectsForm
        open={editModal}
        handleOpen={handleEditModal}
        update={update}
        edit
        INITIAL_FORM={project}
        />
        </>
  )
}
