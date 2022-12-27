import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Menu from '../../components/Menu/Menu'
import art from '../../utils/art.json'
import getArtistsAndPaintings from '../../utils/getArtistAndPaintings'
import './artists.sass'

const Artist = (): JSX.Element => {

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [artInfo, setArtInfo] = useState([''])
  const [artInfoIsClosed, setArtInfoIsClosed] = useState(false)

  useEffect(() => {

    const getScrollLastPosition: number =
      Number(sessionStorage.getItem('scrollLastPosition'))

    document.documentElement.scrollTop = getScrollLastPosition

  }, [artInfoIsClosed])

  const handleImageClick = (e: any) => {

    handleSetLastScrollPosition()

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

  const handleSetLastScrollPosition = () => {

    const currentScrollPosition = JSON.stringify(document.documentElement.scrollTop)

    sessionStorage.setItem('scrollLastPosition', currentScrollPosition)

  }

  const artistAndPaintings = getArtistsAndPaintings(handleImageClick)

  const closeArtInfo = () => {
    setArtInfo([''])
    artInfoIsClosed ?
      setArtInfoIsClosed(false)
      :
      setArtInfoIsClosed(true)
  }

  return (
    <>
      {artistAndPaintings[0][1].map((item: { props: { src: string, alt: string } }) => {
        return (<link
          key={item.props.alt}
          rel='preload'
          href={item.props.src}
          as='image'
        />)
      })}
      <div
        id='artists-container'
        style={{ height: artInfo.length !== 1 ? '100vh' : 'fit-content', }}
      >
        <button
          style={isMenuOpen ? { transform: 'rotate(90deg)' } : {}}
          id='artists-button'
          onClick={handleMenuClick}
          title='menu'
          aria-label='menu'
        ></button>
        {isMenuOpen &&
          <Menu props={[artistAndPaintings, handleSetLastScrollPosition]} />}
        <div>
          {artInfo.length === 1 &&
            artistAndPaintings.map(([name, arts]: any) => {
              return (
                <div
                  key={name.props?.children}
                  id={name.props?.children.replaceAll(' ', '_')}
                  className='artist-container'
                >
                  <Link
                    to={name.props?.children.toLowerCase().replaceAll(' ', '_')}
                    onClick={handleSetLastScrollPosition}
                  >
                    {name}
                  </Link>
                  <div id='image-container'>
                    {arts}
                  </div>
                </div>
              )
            })
          }
        </div>
        {artInfo.length !== 1 &&
          <div id='artwork-info-container'>
            <button onClick={closeArtInfo}>X</button>
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
    </>
  )
}

export default Artist