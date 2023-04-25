import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html
      lang="en"
      className="h-full scroll-smooth antialiased scrollbar-w-2 scrollbar-thumb-rounded-full scrollbar-thumb-blue-500 scrollbar-track-transparent"
    >
      <Head/>
      <body className="flex h-full flex-col bg-black transition-all duration-500">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
