import { useState } from 'react'
import { Project, Skill } from '../../../utils/types'
import { TechnologyForm } from './TechnologyForm'
import ProjectsForm from './ProjectsForm'
import Modal from '../../Modal'
import ModalConfirm from '../../ModalConfirm'
import api from '../../../utils/api'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { ProjectInfo } from './ProjectInfo'
import { TechnologyList } from './TechnologyList'

interface Props {
  project: Project
  skills: Skill[]
  update: () => Promise<void>
}

export function ProjectCard ({ project, skills, update }: Props): JSX.Element {
  const [isMobileHover, setMobileHover] = useState('')
  const [isDesktopHover, setDesktopHover] = useState('')
  const [deleteModal, setDeleteModal] = useState(false)
  const [editModal, setEditModal] = useState(false)
  const baseImageStyle = 'absolute border-stone-200 border-[1px] rounded ease-in-out duration-200'

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

  const handleMobileHover = (): void => {
    setMobileHover(prevState => {
      if (prevState === '') {
        return 'z-10 opacity-100 scale-110'
      } else {
        return ''
      }
    })
  }
  const handleDesktopHover = (): void => {
    setDesktopHover(prevState => {
      if (prevState === '') {
        return 'z-10 opacity-100 scale-110'
      } else {
        return ''
      }
    })
  }
  return (
    <>
      <article className={'flex flex-col gap-4 py-2'}>
        <section className='flex relative'>
          <div className='w-28 h-48'>
            <img
            id={`mobile-${project.name}`}
            src={project.images.mobile}
            alt={`Mobile Image from project: ${project.name}`}
            className={`${baseImageStyle} top-0 left-0 h-48 w-24 object-cover ${isMobileHover}`}
            onMouseEnter={handleMobileHover}
            onMouseLeave={handleMobileHover}
            />
            <img
            id={`desktop-${project.name}`}
            src={project.images.desktop}
            alt={`Desktop Image from project: ${project.name}`}
            className={`${baseImageStyle} -bottom-3 left-6 w-48 h-28 object-cover ${isDesktopHover}`}
            onMouseEnter={handleDesktopHover}
            onMouseLeave={handleDesktopHover}
            />
          </div>
        <h1 className='text-2xl font-bold max-w-[12rem]'>{project.name}</h1>
        </section>
        <section>
          <ProjectInfo project={project}/>
          <TechnologyList project={project} update={update}/>
          <TechnologyForm id={project.id} skills={skills} update={update}/>
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
        </section>
      </article>
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
