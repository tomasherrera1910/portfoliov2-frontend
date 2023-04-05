import { faAdd } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { Skill } from '../../../utils/types'
import api from '../../../utils/api'

interface Props {
  id: number
  skills: Skill[]
  update: () => Promise<void>
}
export function TechnologyForm ({ id, skills, update }: Props): JSX.Element {
  const [selected, setSelected] = useState('')
  const InputButtonStyle = 'bg-neutral-900 border-[1px] border-gray-500 rounded ease-in-out duration-200 hover:saturate-150 hover:scale-105'
  const handleSelected = (evt: React.ChangeEvent<HTMLSelectElement>): void => {
    setSelected(evt.target.value)
  }
  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>): void => {
    evt.preventDefault()
    api.createUnionProjectSkill({ projectId: id, skillId: Number(selected) })
      .then(async () => {
        await update()
      })
  }
  return (
    <form onSubmit={handleSubmit} className='flex gap-2 py-1'>
      <select className={`${InputButtonStyle} cursor-pointer text-xs`} onChange={handleSelected}>
        {skills.map(skill => (
          <option key={skill.id} value={skill.id}>
            {skill.name}
          </option>
        ))}
      </select>
      <button type='submit' className={`${InputButtonStyle} p-1`}>
        <FontAwesomeIcon icon={faAdd} className='w-2' />
      </button>
    </form>
  )
}
