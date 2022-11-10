import './home.sass'

const Home = (): JSX.Element => {
  return (
    <main>
      <div id="welcome-container">
        <h1>Arppegio</h1>
        <div>
          <p>WELCOME</p>
          <p>TO <span><i>ARPEGGIO</i></span></p>
        </div>
      </div>
      <div id="presentation-container">
        <div>
          <p>ARPEGGIO IS INTENDED TO SHOW YOU A WIDE VARIETY OF ARTISTS AND THEIR GREATEST WORKS</p>
        </div>
      </div>
    </main>
  )
}

export default Home