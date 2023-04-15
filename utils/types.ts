import { IconDefinition } from '@fortawesome/fontawesome-svg-core'

export interface IButtonAside {
  icon: IconDefinition
  icon2: IconDefinition | null
  text: string
  handleClick: () => void
  nav: string | null
}
export type SkillName = 'Javascript' | 'Typescript' | 'Next.js' | 'React' | 'React Native' | 'Node.js' | 'PostgreSQL' | 'MySQL' | 'MongoDB' | 'Express' | 'Sequelize' | 'HTML' | 'CSS' | 'Tailwind CSS' | 'Cypress' | 'Vitest' | 'Jest' | 'React Testing Library'
export type TechnologyType = 'Fullstack' | 'Frontend' | 'Backend' | 'Database/ORM' | 'Testing'
export interface Skill {
  id: number
  name: SkillName
  imageURL: string
  technology: TechnologyType
}
export interface Project {
  id: number
  name: string
  description?: string
  images: ProjectImage
  backendRepo: string | null
  frontEndRepo: string | null
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
export enum Theme {
  Light = 'light',
  Dark = 'dark',
}
