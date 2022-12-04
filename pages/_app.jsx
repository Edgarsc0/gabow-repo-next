import '../styles/globals.scss'
import Animacion from '../components/Animacion'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }) {
  if (Component.name === 'index') {
    return <>
      <Component {...pageProps} />
    </>
  } else {
    return <>
      <Animacion />
      <Component {...pageProps} />
      <Footer />
    </>
  }
}

export default MyApp
