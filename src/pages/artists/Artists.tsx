import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import art from '../../utils/art.json'
import './artists.sass'

const Artist = (): JSX.Element => {

  const [artistAndPaintings, setArtistsAndPaintings] = useState([['']])
  const [isDesktop, setIsDesktop] = useState(false)
  const [artInfo, setArtInfo] = useState([''])

  useEffect(() => {

    /* 
    * Ts doesn't ship with type declarations for 
    * the experimental Navigator.userAgentData
    * property by default, so it is marked as an error
    * (but it exists)
    */
    const ua: boolean = navigator.userAgentData.mobile;

    if (!ua) {
      setIsDesktop(true)
    }

    const artist: any = []

    for (let i = 0; i < art.artists.length; i++) {

      /*
      * for each artist, an paragraph with his name 
      * will be pushed with an array after, that will be 
      * used to push his artworks on the loop below
      */
      artist.push([<p>{art.artists[i].nickName.toUpperCase()}</p>, []])

      // pushes 3 artist artworks to his respective array
      for (let c = 0; c < art.artists[i].artWorks.length - 2; c++) {
        artist[i][1].push(
          <img
            onClick={handleImageClick}
            draggable="false"
            src={art.artists[i].artWorks[c].image}
            alt={art.artists[i].artWorks[c].name}
          />
        )
      }
    }

    setArtistsAndPaintings(artist)

  }, [])

  const handleImageClick = (e: any) => {
    for (let j = 0; j < art.artists.length; j++) {
      for (let k = 0; k < art.artists[j].artWorks.length; k++) {
        if (art.artists[j].artWorks[k].name === e.target.alt) {
          setArtInfo([
            art.artists[j].artWorks[k].image,
            art.artists[j].artWorks[k].name,
            art.artists[j].artWorks[k].completedIn,
            art.artists[j].artWorks[k].description
          ])
        }
      }
    }
  }

  /* 
  * there is a error on props in item[0] that says
  * props doesn't exists on type string, but it exists
  * on item objects
  */
  return (
    <div id='artists-container'>
      <div>
        {artistAndPaintings.map((item: string[], _index: number) => {
          return (
            <div className='artist-container'>
              <Link to={item[0].props?.children.toLowerCase().replaceAll(' ', '_')}>
                {item[0]}
              </Link>
              <div id='image-container'>
                {item[1]}
              </div>
            </div>
          )
        })}
      </div>
      {artInfo.length !== 1 &&
        <div id='artwork-info-container'>
          <div>
            <img src={artInfo?.[0]} alt={artInfo?.[1]} />
            <button onClick={() => setArtInfo([''])}> X </button>
            <p><b>NAME:</b>{artInfo?.[1]}</p>
            <p><b>DATE: </b>{artInfo[2]?.toUpperCase()}</p>
            <p>{artInfo?.[3]}</p>
          </div>
        </div>
      }
    </div>
  )
}

export default Artist