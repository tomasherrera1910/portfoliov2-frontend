import { useContext } from 'react'
import { I18NContext } from '../context/i18n'

const useI18N = () => {
  const { t } = useContext(I18NContext)

  if (t === undefined) {
    throw new Error('useI18N must be used within a I18NProvider')
  }
  return { t }
}

export default useI18N
