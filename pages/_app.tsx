import { I18NProvider } from '../context/i18n'
import '../styles/globals.css'
import type { AppProps } from 'next/app'

export default function App ({ Component, pageProps }: AppProps) {
  return <I18NProvider><Component {...pageProps} /></I18NProvider>
}
