import { Project, Skill } from '../../../utils/types'
import { TechnologyForm } from './TechnologyForm'
import { ProjectInfo } from './ProjectInfo'
import { TechnologyList } from './TechnologyList'
import { ProjectActions } from './ProjectActions'
import { ProjectImages } from './ProjectImages'

interface Props {
  project: Project
  skills: Skill[]
  update: () => Promise<void>
}
export function ProjectCard ({ project, skills, update }: Props): JSX.Element {
  return (
    <article className={'flex flex-col gap-4 py-2'}>
      <section className='flex relative'>
        <ProjectImages desktopImage={project.images.desktop} mobileImage={project.images.mobile} name={project.name}/>
        <h1 className='text-2xl font-bold max-w-[12rem]'>{project.name}</h1>
      </section>
      <section>
        <ProjectInfo project={project}/>
        <TechnologyList project={project} update={update}/>
        <TechnologyForm id={project.id} skills={skills} update={update}/>
        <ProjectActions project={project} update={update}/>
      </section>
    </article>
  )
}
