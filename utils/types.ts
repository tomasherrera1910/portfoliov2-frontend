import { IconDefinition } from '@fortawesome/fontawesome-svg-core'

export interface IButtonAside {
  icon: IconDefinition
  icon2: IconDefinition | null
  text: string
  handleClick: () => void
}

export interface Skill {
  id: number
  name: string
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
  techonologies: Array<Partial<Skill>>
}
export interface ProjectImage {
  mobile: string
  desktop: string
}
