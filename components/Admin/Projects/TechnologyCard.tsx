import { Skill } from '../../../utils/types'

interface Props {
  technology: Partial<Skill>
}
export function TechnologyCard ({ technology }: Props): JSX.Element {
  return (
        <article>
            {technology.name}
        </article>
  )
}
