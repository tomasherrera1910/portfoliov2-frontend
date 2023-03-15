import { useEffect, useState } from 'react'
import { Project } from '../utils/types'

interface HookParameters {
  initialProjects: Project[]
}

const useFiltersProjects = ({ initialProjects }: HookParameters) => {
  const [filteredProjects, setFilteredProjects] = useState(initialProjects)

  const [filters, setFilters] = useState<number[]>([])
  function resetFilters (): void {
    const checkboxes = document.querySelectorAll<HTMLInputElement>("input[type='checkbox']")
    checkboxes.forEach(function (checkbox) {
      checkbox.checked = false
    })
    setFilters([])
  }
  function filterToggle (id: number): void {
    if (filters.includes(id)) {
      setFilters(prevState => prevState.filter(technologyId => technologyId !== id))
    } else {
      setFilters(prevState => [...prevState, id])
    }
  }

  useEffect(() => {
    console.log({ filters, filteredProjects })

    if (filters.length > 0) {
      setFilteredProjects(initialProjects.filter(project => {
        return project.technologies.some(({ id }) => filters.includes(id))
      }))
    } else {
      setFilteredProjects(initialProjects)
    }
  }, [filters])
  return { filteredProjects, resetFilters, filterToggle, filters }
}

export default useFiltersProjects
