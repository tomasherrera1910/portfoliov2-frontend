import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface Props {
  totalPages: number | null
  page: number
  prevPage: () => void
  nextPage: () => void
}
export default function Pagination ({ totalPages, page, prevPage, nextPage }: Props): JSX.Element {
  const cantBackPage = page - 1 === 0
  const cantNextPage = page + 1 > (totalPages ?? 1)
  return (
    <footer className='w-full flex justify-around items-center'>
      <button onClick={prevPage} disabled={cantBackPage}>
        <FontAwesomeIcon icon={faArrowLeft} className='w-5' />
      </button>
      <span>Page {page} of {totalPages}</span>
      <button onClick={nextPage} disabled={cantNextPage}>
        <FontAwesomeIcon icon={faArrowRight} className='w-5' />
      </button>
    </footer>
  )
}
