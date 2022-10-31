import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import art from '../../utils/art.json'
import menu from '../../assets/menu.svg'
import './artists.sass'
import Menu from '../../components/artists/menu/Menu'
import ArtInfo from '../../components/artists/ArtInfo'

const Artist = (): JSX.Element => {

  const [artistAndPaintings, setArtistsAndPaintings] = useState([['']])
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [artInfo, setArtInfo] = useState([''])

  useEffect(() => {

    const artist: any = []

    for (let i = 0; i < art.artists.length; i++) {

      /*
      * for each artist, an paragraph with his name 
      * will be pushed with an array after, that will be 
      * used to push his artworks on the loop below
      */
      artist.push([
        <p>{art.artists[i].nickName.toUpperCase()}</p>, []
      ])

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

  const handleMenuClick = (): void => {
    isMenuOpen ?
      setIsMenuOpen(false)
      :
      setIsMenuOpen(true)
  }

  /* 
  * there is a error on props in item[0] that says
  * props doesn't exists on type string, but it exists
  * on item objects
  */
  return (
    <div id='artists-container' style={{
      height: artInfo.length !== 1 ? '100vh' : 'fit-content'
    }}>
      <button
        id='artists-button'
        onClick={handleMenuClick}
      ></button>
      {isMenuOpen && < Menu props={artistAndPaintings} />}
      <div>
        {artInfo.length === 1 &&
          artistAndPaintings.map((item: string[]) => {
            return (
              <div id={item[0].props?.children.replaceAll(' ', '_')} className='artist-container'>
                <Link to={item[0].props?.children.toLowerCase().replaceAll(' ', '_')}>
                  {item[0]}
                </Link>
                <div id='image-container'>
                  {item[1]}
                </div>
              </div>
            )
          })
        }
      </div>
      {artInfo.length !== 1 &&
        <div id='artwork-info-container'>
          <button onClick={() => setArtInfo([''])}>X</button>
          <div id='artwork-image'>
            <img src={artInfo?.[0]} alt="" />
          </div>
          <div id='artwork-info'>
            <div>
              <p><b>NAME:</b>{artInfo?.[1]}</p>
              <p><b>DATE: </b>{artInfo[2]?.toUpperCase()}</p>
            </div>
            <p id='artwork-description'>{artInfo?.[3]}</p>
          </div>
        </div>
      }
    </div>
  )
}

export default Artist