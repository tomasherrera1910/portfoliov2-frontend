import { Html, Head, Main, NextScript } from 'next/document'
export default function Document () {
  return (
    <Html lang='en'>
      <Head>
        <link href='https://unpkg.com/aos@2.3.1/dist/aos.css' rel='stylesheet' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='anonymous' />
        <link href='https://fonts.googleapis.com/css2?family=Barlow:wght@100;200;300;400;600&family=Roboto:wght@100;300;400;500;700;900&display=swap' rel='stylesheet' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
