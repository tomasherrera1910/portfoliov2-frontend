import { TechnologyCard } from './TechnologyCard'
import { Project } from '../../../utils/types'

interface Props {
  project: Project
  update: () => Promise<void>
}
export function TechnologyList ({ project, update }: Props): JSX.Element {
  return (
    <>
      {
        project.technologies.length > 0 &&
          <>
            <h3 className='font-bold'>Technologies</h3>
            {project.technologies.map(technology => (
              <TechnologyCard key={technology.name} technology={technology} update={update} />
            ))}
          </>
        }
    </>
  )
}
