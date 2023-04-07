import { getSkill } from './skills'
import { Project } from './types'

const projects: Project[] = [
  {
    id: 1,
    name: 'string',
    description: 'string',
    images: {
      desktop: '',
      mobile: ''
    },
    colors: ['', '', ''],
    backendRepo: 'string',
    frontEndRepo: 'string',
    deployURL: 'string',
    technologies: [getSkill('Javascript')]
  }
]

export async function getProjects () {
  return projects
}
