import { deleteInfo, editInfo, getInfo, postInfo } from './CRUDfunctions'
import { Project, Skill, ProjectSkillUnion } from './types'

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
  },
  deleteSkill: async (id: number): Promise<any> => {
    return await deleteInfo('skills', id)
  },
  deleteProject: async (id: number): Promise<any> => {
    return await deleteInfo('projects', id)
  },
  editSkill: async (id: number, dataToUpdate: Partial<Skill>): Promise<Skill> => {
    const data: Skill = await editInfo('skills', id, dataToUpdate)
    return data
  },
  editProject: async (id: number, dataToUpdate: Partial<Project>): Promise<Project> => {
    const data: Project = await editInfo('projects', id, dataToUpdate)
    return data
  },
  createUnionProjectSkill: async (unionData: Partial<ProjectSkillUnion>): Promise<ProjectSkillUnion> => {
    const data: ProjectSkillUnion = await postInfo('union/project-skill', unionData)
    return data
  },
  deleteUnionProjectSkill: async (id: number): Promise<any> => {
    return await deleteInfo('union/project-skill', id)
  }
}
export default api
