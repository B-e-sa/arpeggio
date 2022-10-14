import GalleryContainer from './Gallery.style'
import art from '../../utils/art.json'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Gallery = (): JSX.Element => {

  const [sortedByDateArtworks, setSortedByDateArtworks] = useState([['']])
  const [scrollPosition, setScrollPosition] = useState(0)
  const [scrollMaxPosition, setScrollMaxPosition] = useState(0)

  useEffect(() => {

    const artworkDateAndImage: string[][] = []

    for (let i = 0; i < art.artists.length; i++) {
      for (let c = 0; c < art.artists[i].artWorks.length; c++) {
        artworkDateAndImage.push([
          art.artists[i].artWorks[c].completedIn,
          art.artists[i].artWorks[c].image,
          art.artists[i].artWorks[c].description,
          art.artists[i].artWorks[c].name
        ])
      }
    }

    setSortedByDateArtworks(artworkDateAndImage.sort())

  }, [])

  useEffect(() => {

    const scrollX: HTMLElement | null = document.getElementById('artwork-container')

    const handleScroll = (): void => {
      setScrollPosition(scrollX!.scrollLeft / 117)
    }

    const handleLoad = (): void => {
      setScrollMaxPosition(scrollX!.scrollWidth - scrollX!.clientWidth)
    }

    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY !== 100) {
        console.log('up')
      } else {
        console.log('down')
      }
    }

    document.addEventListener('load', handleLoad)
    document.addEventListener('wheel', handleWheel)
    scrollX?.addEventListener('scroll', handleScroll)

    return () => {
      document.removeEventListener('load', handleLoad)
      document.removeEventListener('wheel', handleWheel)
      scrollX?.removeEventListener('scroll', handleScroll)
    }

  }, [])


  return (
    <GalleryContainer scrollPosition={scrollPosition}>
      <div id='artwork-container'>
        {sortedByDateArtworks.map((item: string[], index: number) => {
          return (
            <div key={Math.random()} id='image-container'>
              <Link to={`/artists/${sortedByDateArtworks[index][3]?.replaceAll(' ', '_')}`}>
                <div id='artwork-info'>
                  <div>
                    <p>{sortedByDateArtworks ? sortedByDateArtworks[index][2] : ''}</p>
                  </div>
                  <img src={sortedByDateArtworks[index][1]} draggable='false' alt="" />
                </div>
              </Link>
            </div>
          )
        })}
      </div>
      <div id='scroll-container'>
        <span>{sortedByDateArtworks && sortedByDateArtworks[0][0]}</span>
        <div id='scroll'>
          <div></div>
        </div>
        <span>{sortedByDateArtworks && sortedByDateArtworks[sortedByDateArtworks.length - 1][0]}</span>
      </div>
    </GalleryContainer>
  )
}

export default Gallery