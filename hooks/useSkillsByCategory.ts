import { useEffect, useState } from 'react'
import { Skill } from '../utils/types'
interface Parameters {
  skills: Skill[]
}
const useSkillsByCategory = ({ skills }: Parameters) => {
  const [fullstackSkills, setFullstackSkills] = useState<Skill[]>([])
  const [frontendSkills, setFrontendSkills] = useState<Skill[]>([])
  const [backendSkills, setBackendSkills] = useState<Skill[]>([])
  const [databaseSkills, setDatabaseSkills] = useState<Skill[]>([])
  const [testingSkills, setTestingSkills] = useState<Skill[]>([])

  useEffect(() => {
    setFullstackSkills(skills.filter(skill => skill.technology === 'Fullstack'))
    setFrontendSkills(skills.filter(skill => skill.technology === 'Frontend'))
    setBackendSkills(skills.filter(skill => skill.technology === 'Backend'))
    setDatabaseSkills(skills.filter(skill => skill.technology === 'Database/ORM'))
    setTestingSkills(skills.filter(skill => skill.technology === 'Testing'))
  }, [])
  return { fullstackSkills, frontendSkills, backendSkills, databaseSkills, testingSkills }
}

export default useSkillsByCategory
