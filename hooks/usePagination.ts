import { useEffect, useState } from 'react'

const usePagination = () => {
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState<number>(0)
  const [sliceProjects, setSliceProjects] = useState({
    since: 0,
    to: 3
  })
  const nextPage = () => {
    setPage(prevPage => ++prevPage)
  }
  const prevPage = () => {
    setPage(prevPage => --prevPage)
  }
  useEffect(() => {
    setSliceProjects({
      since: page === 1 ? 0 : page * 3 - 3,
      to: page === 1 ? 3 : page * 3 + 3
    })
  }, [page])
  return { page, totalPages, setTotalPages, setPage, nextPage, prevPage, sliceProjects }
}

export default usePagination
