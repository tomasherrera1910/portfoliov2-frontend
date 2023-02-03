import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useToggle } from '../../../hooks/useToggle'
import api from '../../../utils/api'
import { Technology } from '../../../utils/types'
import Modal from '../../Modal'
import ModalConfirm from '../../ModalConfirm'

interface Props {
  technology: Technology
  update: () => Promise<void>
}
export function TechnologyCard ({ technology, update }: Props): JSX.Element {
  const { toggle, handleToggle } = useToggle()
  const handleDeleteTechnology = (id: number | string): void => {
    api.deleteUnionProjectSkill(+id)
      .then(async () => {
        await update()
        handleToggle()
      })
  }
  return (
    <>
    <li className='flex gap-1 items-center'>
      <img src={technology.imageURL} alt={`${technology.name ?? ''} logo`} className='w-3 h-3 object-cover'/>
      <span className='text-xs'>{technology.name}</span>
      <button onClick={handleToggle} className='p-1 bg-red-700 rounded ease-in-out duration-200 hover:bg-red-900'>
        <FontAwesomeIcon icon={faTrash} className='w-2'/>
      </button>
    </li>
    <Modal open={toggle}>
      <ModalConfirm handleClose={handleToggle} handleConfirm={() => { handleDeleteTechnology(technology.ProjectsTechnologies.id ?? -1) }}>
        <span className='text-center'>Want you delete {technology.name} of the project?</span>
      </ModalConfirm>
    </Modal>
    </>
  )
}
