import '@/styles/globals.css'
import { Footer } from '@/components/Footer'

export default function App({ Component, pageProps }) {
  return (
    <>
      <div className="fixed inset-0 flex justify-center sm:px-8">
        <div className="flex w-full max-w-5xl lg:px-8">
          <div className="w-full ring-1 transition-all duration-500 bg-zinc-900 ring-zinc-300/20" />
        </div>
      </div>
      <div className="relative">
        <main>
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </>
  )
}
