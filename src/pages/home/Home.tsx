import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './home.sass'

const Home = (): JSX.Element => {

  const navigate = useNavigate()

  useEffect(() => {

    const presentationContainer = document.getElementById('presentation-container')

    const bottomScrollInterval = setTimeout(() => {
      presentationContainer?.scrollIntoView()
    }, 4500)

    return () => clearInterval(bottomScrollInterval);

  })

  return (
    <main>
      <div id='welcome-container'>
        <h1>Arppegio</h1>
        <div>
          <p>WELCOME</p>
          <p>TO <span><i>ARPEGGIO</i></span></p>
        </div>
      </div>
      <div id='presentation-container'>
        <div>
          <p>ARPEGGIO IS INTENDED TO SHOW YOU A WIDE VARIETY OF ARTISTS AND THEIR GREATEST WORKS</p>
        </div>
      </div>
    </main>
  )
}

export default Home