import { useRouter } from 'next/router'
import { ReactNode, createContext, useCallback } from 'react'
import es from '../translations/es.json'
import en from '../translations/en.json'

export const I18NContext = createContext<any>({})
interface Children {
  children: ReactNode
}
const languages: Record<string, Record<string, any>> = { es, en }
export function I18NProvider ({ children }: Children) {
  const { locale } = useRouter()

  const t = useCallback((key: string, ...args: any[]) => {
    let translation = languages[locale as string][key]
    if (args.length === 0) return translation

    args.forEach((value, index) => {
      translation = translation.replace(`\${${index + 1}}`, value)
    })

    return translation
  }, [locale])
  return (
    <I18NContext.Provider value={{ t }}>
      {children}
    </I18NContext.Provider>
  )
}
