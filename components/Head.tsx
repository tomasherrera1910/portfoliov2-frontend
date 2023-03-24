import Head from 'next/head'

interface Props {
  title: string
}
export default function CustomHead ({ title }: Props): JSX.Element {
  return (
    <Head>
        <title>{title}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}
