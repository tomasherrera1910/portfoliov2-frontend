import { useEffect, useState } from 'react'
import { Project } from '../utils/types'
import usePagination from './usePagination'

interface HookParameters {
  initialProjects: Project[]
}

const useFiltersProjects = ({ initialProjects }: HookParameters) => {
  const [filteredProjects, setFilteredProjects] = useState(initialProjects)
  const { setTotalPages, setPage, totalPages, page, nextPage, prevPage, sliceProjects } = usePagination()
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
    if (filters.length > 0) {
      setFilteredProjects(initialProjects.filter(project => {
        return project.technologies.some(({ id }) => filters.includes(id))
      }))
    } else {
      setFilteredProjects(initialProjects)
    }
  }, [filters])
  useEffect(() => {
    setTotalPages(Math.ceil(filteredProjects.length / 3))
    setPage(1)
  }, [filteredProjects])

  return { filteredProjects, resetFilters, filterToggle, filters, totalPages, page, nextPage, prevPage, sliceProjects }
}

export default useFiltersProjects
