
import { useContext } from 'react'
import useSkillsByCategory from '../../hooks/useSkillsByCategory'
import { Skill } from '../../utils/types'
import SkillsList from './SkillsList'
import { SidebarContext } from '../../context/sidebar'

interface Props {
  skills: Skill[]
}
export function Skills ({ skills }: Props): JSX.Element {
  const { skillsRef } = useContext(SidebarContext)
  const { fullstackSkills, frontendSkills, backendSkills, databaseSkills, testingSkills } = useSkillsByCategory({ skills })
  return (
    <section className='font-roboto flex flex-col w-full gap-3 max-w-5xl items-center sm:items-start' ref={skillsRef} id='skills'>
      <h3 className='text-5xl uppercase dark:text-sky-500 text-blue-800 font-semibold md:text-6xl md:my-6'>Skills</h3>
      <div className='flex flex-col gap-4 items-center sm:items-start'>
        <SkillsList skills={fullstackSkills} />
        <SkillsList skills={frontendSkills} />
        <SkillsList skills={backendSkills} />
        <SkillsList skills={databaseSkills} />
        <SkillsList skills={testingSkills} />
      </div>
    </section>
  )
}
