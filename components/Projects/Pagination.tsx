import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import useI18N from '../../hooks/useI18N'

interface Props {
  totalPages: number | null
  page: number
  prevPage: () => void
  nextPage: () => void
}
export default function Pagination ({ totalPages, page, prevPage, nextPage }: Props): JSX.Element {
  const { t } = useI18N()
  const cantBackPage = page - 1 === 0
  const cantNextPage = page + 1 > (totalPages ?? 1)
  return (
    <footer className='w-full flex justify-around items-center py-4 bg-gray-600 dark:bg-black bg-opacity-40 border-[1px] border-slate-300 dark:border-slate-800'>
      <button onClick={prevPage} disabled={cantBackPage} className={`${cantBackPage ? 'text-slate-400 dark:text-slate-800' : 'hover:scale-110 cursor-pointer text-white'} ease-in-out duration-200`}>
        <FontAwesomeIcon icon={faArrowLeft} className='w-5' />
      </button>
      <span className='font-barlow'>{t('projectsPagination', page, totalPages)}</span>
      <button onClick={nextPage} disabled={cantNextPage} className={`${cantNextPage ? 'text-slate-400 dark:text-slate-800' : 'hover:scale-110 cursor-pointer text-white'}`}>
        <FontAwesomeIcon icon={faArrowRight} className='w-5' />
      </button>
    </footer>
  )
}
