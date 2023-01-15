import Head from 'next/head'
import { AdminInfo } from '../../components/Admin/AdminInfo'
import { Navbar } from '../../components/Admin/Navbar'
import { Sidebar } from '../../components/Admin/Sidebar'

export default function LoginPage (): JSX.Element {
  return (
        <>
            <Head>
                <title>ADMIN | Portfolio Tomás Herrera</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className='bg-gradient-to-r from-gray-900 via-gray-800 to-slate-800 text-white pt-16 pl-8'>
                <Navbar />
                <Sidebar />
                <AdminInfo />
            </main>
        </>
  )
}
