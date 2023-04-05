import Link from 'next/link'
import { Project } from '../../../utils/types'
interface Props {
  project: Project
}
export function ProjectInfo ({ project }: Props): JSX.Element {
  return (
    <>
      <p className='text-sm text-slate-300 max-w-xs'>{project.description}</p>
      <label className='flex items-center text-xs text-slate-300 gap-1'>
        Deploy URL:
        <Link href={project.deployURL} className='text-cyan-500 text-base hover:underline'>{project.deployURL}</Link>
      </label>
      {
          (project.backendRepo != null) &&
            <label className='flex items-center text-xs text-slate-300 gap-1'>
              Backend Repo:
              <Link href={project.backendRepo} className='text-cyan-500 text-base hover:underline'>{project.backendRepo}</Link>
            </label>
          }
      {
          (project.frontEndRepo != null) &&
            <label className='flex items-center text-xs text-slate-300 gap-1'>
              Frontend Repo:
              <Link href={project.frontEndRepo} className='text-cyan-500 text-base hover:underline'>{project.frontEndRepo}</Link>
            </label>
          }
    </>
  )
}
