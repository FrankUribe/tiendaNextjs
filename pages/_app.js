import '../styles/globals.css'
import stateWrapper from '../components/stateWrapper'

function MyApp({ Component, pageProps }) {
  return <stateWrapper>
     <Component {...pageProps} />
  </stateWrapper>
}

export default MyApp
