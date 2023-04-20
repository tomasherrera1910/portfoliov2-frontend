import { Skill } from '../../utils/types'
import SkillCard from './SkillCard'

interface Props {
  skills: Skill[]
}
export default function SkillsList ({ skills }: Props): JSX.Element {
  return (
    <ul className='flex gap-2 flex-wrap items-center justify-center'>
      {skills.map(skill => (
        <SkillCard key={skill.id} skill={skill} />
      ))}
    </ul>
  )
}
