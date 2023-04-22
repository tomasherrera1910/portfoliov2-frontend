import { projectsEn } from '../translations/projectsEn'
import { projectsEs } from '../translations/projectsEs'

export async function getProjects (locale: string) {
  return locale === 'es' ? projectsEs : projectsEn
}
