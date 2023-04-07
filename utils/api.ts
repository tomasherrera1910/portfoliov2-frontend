import { getProjects } from './projects'
import { getSkills } from './skills'
import { Project, Skill } from './types'

// const backendURL = process.env.NEXT_PUBLIC_BACKEND_URI ?? 'http://localhost:3001'
// const devURL = 'http://localhost:3001'

const api = {
  getSkills: async (): Promise<Skill[]> => {
    const data: Skill[] = await getSkills()
    return data
  },
  getProjects: async (): Promise<Project[]> => {
    const data: Project[] = await getProjects()
    return data
  }
}
export default api
