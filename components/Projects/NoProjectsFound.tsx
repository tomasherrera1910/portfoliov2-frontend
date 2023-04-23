import useI18N from '../../hooks/useI18N'

interface Props {
  resetFilters: () => void
}
export default function NoProjectsFound ({ resetFilters }: Props): JSX.Element {
  const { t } = useI18N()
  return (
    <article className='w-full h-full flex flex-col items-center justify-center gap-2'>
      <h3 className='font-roboto text-3xl font-extrabold max-w-sm text-center'>{t('noProjectsTitle')}</h3>
      <p className='font-barlow text-xl text-center text-slate-500 max-w-sm'>
        {t('noProjectsDescription')} <a className='text-blue-600 hover:text-blue-400 hover:underline' href='https://github.com/tomasherrera1910' target='_blank' rel='noreferrer'>{t('noProjectsLink')}</a>.
      </p>
      <button onClick={resetFilters} className='font-roboto p-1 bg-slate-400 text-gray-900 rounded duration-200 ease-in hover:bg-slate-200'>
        {t('noProjectsReset')}
      </button>
    </article>
  )
}
