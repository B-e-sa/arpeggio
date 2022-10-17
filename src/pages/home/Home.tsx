import './home.sass'

const Home = (): JSX.Element => {
  return (
    <main>
      <div id="welcome-container">
        <h1>Arpeggio</h1>
        <div>
          <p>WELCOME<br/> TO ARPEGGIO</p>
        </div>
      </div>

      <div id="presentation-container">
        <div>
          <p>ARPEGGIO IS A SITE THAT SHOWS TO YOU AN VARIETY OF ARTISTS AND THEIR ARTWORKS</p>
        </div>
      </div>
    </main>
  )
}

export default Home