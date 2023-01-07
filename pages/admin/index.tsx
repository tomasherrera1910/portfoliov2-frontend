import Head from 'next/head'
import { Navbar } from '../../components/Admin/Navbar'

export default function LoginPage (): JSX.Element {
  return (
        <>
            <Head>
                <title>ADMIN | Portfolio Tomás Herrera</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <Navbar/>
                <h1>ADMIN</h1>
            </main>
        </>
  )
}