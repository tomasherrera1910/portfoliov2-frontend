import { useRouter } from 'next/router'
import { Project } from '../utils/types'
import { useEffect, useState } from 'react'
import api from '../utils/api'

const useProjects = (projects: Project[]) => {
  const { locale } = useRouter()
  const [projectsByLocale, setProjects] = useState(projects)
  useEffect(() => {
    api.getProjects(locale ?? 'en')
      .then(setProjects)
  }, [locale])
  return { projectsByLocale }
}
export default useProjects
