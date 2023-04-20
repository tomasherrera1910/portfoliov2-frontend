import { ReactNode, createContext } from 'react'
type TranslationOption = 'es' | 'en'

const I18NContext = createContext<TranslationOption>('es')

interface Children {
  children: ReactNode
}
export function I18NProvider ({ children }: Children) {
  <I18NContext.Provider value='es'>
    {children}
  </I18NContext.Provider>
}
