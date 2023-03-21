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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Barlow:wght@100;200;300;400;600&family=Roboto:wght@100;300;400;500;700;900&display=swap" rel="stylesheet"/>
    </Head>
  )
}
