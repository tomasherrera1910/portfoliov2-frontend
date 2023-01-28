import { Project } from '../../../utils/types'

interface Props {
  project: Project
}

export function ProjectCard ({ project }: Props): JSX.Element {
  return (
        <article>
            {project.name}
        </article>
  )
}
