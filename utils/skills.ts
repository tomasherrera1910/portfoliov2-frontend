import { Skill, SkillName } from './types'

export const skills: Skill[] = [
  {
    id: 1,
    name: 'Javascript',
    imageURL: '',
    technology: ''
  }
]

export async function getSkills () {
  return skills
}

export function getSkill (name: SkillName): Skill {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  return skills.find(skill => name === skill.name)!
}
