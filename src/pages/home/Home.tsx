import { useEffect, useState } from "react"
import Loader from "../../components/loader/Loader"
import HomeContainer from "./Home.style"

const Home = (): JSX.Element => {

  const [pageIsLoaded, setPageIsLoaded] = useState(false)

  useEffect(() => {

    const handlePageLoad = (): void => {
      setPageIsLoaded(true)
    }

    window.addEventListener('load', handlePageLoad)
    return () => window.removeEventListener('load', handlePageLoad)

  }, [])

  return (
    pageIsLoaded ?
      <HomeContainer>
        <main>
          <div>
            <h1>Arpeggio</h1>
            <div>
              <p>WELCOME TO ARPEGGIO</p>
            </div>
          </div>

          <div id="presentation">
            <div>
              <p>ARPEGGIO IS A SITE THAT SHOWS TO YOU AN VARIETY OF ARTISTS AND THEIR ARTWORKS</p>
            </div>
          </div>
        </main>
      </HomeContainer>
      :
      <Loader />
  )
}

export default Home