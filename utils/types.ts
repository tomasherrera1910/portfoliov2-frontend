import { IconDefinition } from '@fortawesome/fontawesome-svg-core'

export interface IButtonAside {
  icon: IconDefinition
  icon2: IconDefinition | null
  text: string
  handleClick: () => void
  nav: string | null
}
export type SkillName = 'Javascript' | 'Typescript' | 'Next.js' | 'React' | 'Node.js'
export interface Skill {
  id: number
  name: SkillName
  imageURL: string
  technology?: string
}
export interface Project {
  id: number
  name: string
  description?: string
  images: ProjectImage
  colors: string[]
  backendRepo?: string
  frontEndRepo?: string
  deployURL: string
  technologies: Skill[]
}
export interface ProjectImage {
  mobile: string
  desktop: string
}

export interface ProjectSkillUnion {
  id: number
  skillId: number
  projectId: number
}

export interface Technology {
  id: number
  name: string
  imageURL: string
  technology?: string
  ProjectsTechnologies: ProjectSkillUnion
}

export interface EducationPlace {
  id: number
  name: string
  image: string
  url: string
  description: string
  date: string
}
