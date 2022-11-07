import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import art from '../../utils/art.json'
import menu from '../../assets/menu.svg'
import './artists.sass'
import Menu from '../../components/artists/menu/Menu'
import ArtInfo from '../../components/artists/ArtInfo'
import artistsAndPaintings from '../../utils/getArtistAndPaintings'
import ImageMagnifier from '../../utils/ImageMagnifier'

const Artist = (): JSX.Element => {

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [artInfo, setArtInfo] = useState([''])
  const [scrollLastPosition, setScrollLastPosition] = useState(0)

  useEffect(() => {

    const getScrollLastPosition: number = Number(sessionStorage.getItem('scrollLastPosition'))

    setScrollLastPosition(getScrollLastPosition)

    document.documentElement.scrollTop = scrollLastPosition

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

  const artistAndPaintings = artistsAndPaintings(handleImageClick)

  /* 
  * there is a error on props in item[0] that says
  * props doesn't exists on type string, but it exists
  * on item objects
  */
  return (
    <div id='artists-container' style={{
      height: artInfo.length !== 1 ? '100vh' : 'fit-content',
    }}>
      <button
        style={isMenuOpen ? { transform: 'rotate(90deg)' } : {}}
        id='artists-button'
        onClick={handleMenuClick}
      ></button>
      {isMenuOpen && < Menu props={artistAndPaintings} />}
      <div>
        {artInfo.length === 1 &&
          artistAndPaintings.map((item: any[]) => {
            return (
              <div id={item[0].props?.children.replaceAll(' ', '_')} className='artist-container'>
                <Link
                  to={item[0].props?.children.toLowerCase().replaceAll(' ', '_')}
                  onClick={() => sessionStorage.setItem('scrollLastPosition', JSON.stringify(document.documentElement.scrollTop))}
                >
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