import '@/styles/globals.css'
import Header from '../components/header'
import { SessionProvider } from 'next-auth/react'
export default function App({ Component, pageProps }) {
  return <div>
    <SessionProvider session={pageProps.session}> 
    <Header></Header>
    <Component {...pageProps} />

    </SessionProvider>
    </div>
}
