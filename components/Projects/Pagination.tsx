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
  const disabledButton = 'text-slate-400 dark:text-slate-800'
  const activeButton = 'hover:scale-110 hover:bg-black hover:bg-opacity-50 dark:hover:bg-white dark:hover:bg-opacity-10 hover:rounded-full cursor-pointer text-white'
  return (
    <footer className='w-full flex justify-around items-center py-4 bg-gray-600 dark:bg-black bg-opacity-40 border-[1px] border-slate-300 dark:border-slate-800'>
      <button onClick={prevPage} disabled={cantBackPage} className={`p-1 ease-in-out duration-200 ${cantBackPage ? disabledButton : activeButton}`}>
        <FontAwesomeIcon icon={faArrowLeft} className='w-5 h-5' />
      </button>
      <span className='font-barlow'>{t('projectsPagination', page, totalPages)}</span>
      <button onClick={nextPage} disabled={cantNextPage} className={`p-1 ease-in-out duration-200 ${cantNextPage ? disabledButton : activeButton}`}>
        <FontAwesomeIcon icon={faArrowRight} className='w-5 h-5' />
      </button>
    </footer>
  )
}
