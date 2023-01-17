import { getInfo, postInfo } from './CRUDfunctions'
import { Project, Skill } from './types'

// const backendURL = process.env.NEXT_PUBLIC_BACKEND_URI ?? 'http://localhost:3001'
const devURL = 'http://localhost:3001'
const api = {
  login: async (password: Record<string, string>): Promise<Response> => {
    return await fetch(`${devURL}/login`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      },
      body: JSON.stringify(password)
    })
  },
  verifyLogin: async (token: string = ''): Promise<Response> => {
    return await fetch(`${devURL}/verifyLogin/${token}`)
  },
  getSkills: async (): Promise<Skill[]> => {
    const data: Skill[] = await getInfo('skills')
    return data
  },
  getProjects: async (): Promise<Project[]> => {
    const data: Project[] = await getInfo('projects')
    return data
  },
  createSkill: async (skill: Partial<Skill>): Promise<Skill> => {
    const data: Skill = await postInfo('skills', skill)
    return data
  },
  createProject: async (project: Partial<Project>): Promise<Project> => {
    const data: Project = await postInfo('projects', project)
    return data
  }
}
export default api
