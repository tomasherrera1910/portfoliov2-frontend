import { IconDefinition } from '@fortawesome/fontawesome-svg-core'

export interface IButtonAside {
  icon: IconDefinition
  icon2: IconDefinition | null
  text: string
  handleClick: () => void
}
