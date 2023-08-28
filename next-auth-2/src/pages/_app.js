import '@/styles/globals.css'
import Header from './components/header'

export default function App({ Component, pageProps }) {
  return <div>
    <Header></Header>
    <Component {...pageProps} />
    </div>
}
