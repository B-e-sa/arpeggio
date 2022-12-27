import { useEffect, useState } from 'react'
import Loader from '../../components/Loader/Loader'
import './home.sass'

const Home = (): JSX.Element => {

  const [pageFullyLoaded, setPageFullyLoaded] = useState(false)

  useEffect(() => {

    const handlePageLoad = () => {
      sessionStorage.setItem('wasLoadedOnce', 'true')
      setPageFullyLoaded(true)
    }

    if (sessionStorage.getItem('wasLoadedOnce')) {

      setPageFullyLoaded(true)

    } else {

      window.addEventListener('load', () => handlePageLoad())

      return () => window.removeEventListener('load', () => handlePageLoad())

    }

  }, [])

  return (
    <main>
      {
        pageFullyLoaded ?
          <>
            <div id='welcome-container'>
              <h1>Arpeggio</h1>
              <div>
                <p>WELCOME</p>
                <p>TO <i>ARPEGGIO</i></p>
              </div>
            </div>
            <div id='presentation-container'>
              <div>
                <p>ARPEGGIO IS INTENDED TO SHOW YOU A WIDE VARIETY OF ARTISTS AND THEIR GREATEST WORKS</p>
              </div>
            </div>
          </>
          :
          <Loader />
      }
    </main>
  )
}

export default Home