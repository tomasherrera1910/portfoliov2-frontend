import { forwardRef, MutableRefObject, useState } from 'react'
import api from '../../../utils/api'
import { Skill } from '../../../utils/types'
import SkillsForm from './SkillsForm'
import { faBook, faFileCirclePlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SkillCard } from './SkillCard'

interface Props {
  initialSkills: Skill[]
}
// eslint-disable-next-line react/display-name
export const Skills = forwardRef(({ initialSkills }: Props, ref): JSX.Element => {
  const [skills, setSkills] = useState(initialSkills)
  const [isFormOpen, setFormOpen] = useState(false)
  const updateSkills = async (): Promise<void> => {
    const updatedSkills = await api.getSkills()
    setSkills(updatedSkills)
  }
  const handleForm = (): void => { setFormOpen(prev => !prev) }
  return (
        <section className='pt-10 pb-6' ref={ref as MutableRefObject<HTMLDivElement>} id='skills'>
            <h1 className="text-3xl flex items-center gap-4 py-4"><FontAwesomeIcon icon={faBook} className="w-8"/> Skills</h1>
            <button onClick={handleForm} className="flex items-center gap-2 border-gray-50 rounded border-solid border-[1px] p-2 ease-in-out duration-100 hover:text-black hover:bg-zinc-200">Add Skill <FontAwesomeIcon icon={faFileCirclePlus} className="w-6"/></button>
            <SkillsForm open={isFormOpen} handleOpen={handleForm} update={updateSkills}/>
            <section className="flex flex-wrap gap-2 py-2">
            {skills.map(({ id, imageURL, name, technology }) => {
              return (
                <SkillCard key={id} id={id} imageURL={imageURL} name={name} technology={technology} update={updateSkills}/>
              )
            })}
            </section>
        </section>
  )
}
)
