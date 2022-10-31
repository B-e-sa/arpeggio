import art from '../../utils/art.json'
import { useEffect, useState } from 'react'

import './gallery.sass'

const Gallery = (): JSX.Element => {

  const [sortedByDateArtworks, setSortedByDateArtworks] = useState([['']])
  const [scrollMaxPosition, setScrollMaxPosition] = useState(0)
  const [scrollTumb, setScrollTumb]: any = useState()
  const [artworkElement, setArtworkElement]: any = useState()

  useEffect(() => {

    const artworkDateAndImage: string[][] = []

    for (let i = 0; i < art.artists.length; i++) {
      for (let c = 0; c < art.artists[i].artWorks.length; c++) {
        artworkDateAndImage.push([
          art.artists[i].artWorks[c].completedIn,
          art.artists[i].artWorks[c].image,
          art.artists[i].artWorks[c].name
        ])
      }
    }

    setSortedByDateArtworks(artworkDateAndImage.sort())

  }, [])

  useEffect(() => {

    const scrollX: HTMLElement | null = document.getElementById('artwork-container')

    const scrollTumb: HTMLElement | null = document.getElementById('scroll-tumb')

    setArtworkElement(scrollX)
    setScrollTumb(scrollTumb)

    const handleLoad = (): void => {
      setScrollMaxPosition(scrollX!.scrollWidth - scrollX!.clientWidth)
    }

    const handleWheel = (e: WheelEvent): any => {

      if (e.deltaY === -100) {

        return (
          scrollX!.scrollLeft += 350,
          console.log(scrollTumb)
        )

      }

      return scrollX!.scrollLeft -= 350

    }

    document.addEventListener('load', handleLoad)
    document.addEventListener('wheel', handleWheel)

    return () => {
      document.removeEventListener('load', handleLoad)
      document.removeEventListener('wheel', handleWheel)
    }

  }, [])

  const handleArrowLeftClick = (): void => {
    artworkElement.scrollLeft -= 350

    scrollTumb.style.left = `${artworkElement.scrollLeft / 126}px`
  }

  const handleArrowRightClick = (): void => {
    artworkElement.scrollLeft += 350
    scrollTumb.style.left = `350px`
    scrollTumb.style.left = `${artworkElement.scrollLeft / 126}px`
  }

  return (
    <div id='gallery-container'>
      <div id='artwork-container'>
        {sortedByDateArtworks.map((_item: string[], index: number) => {
          return (
            <div key={Math.random()} className='image-container'>
              <img
                src={sortedByDateArtworks[index][1]}
                draggable='false'
                alt=""
              />
              <span>{sortedByDateArtworks[index][0]}</span>
            </div>
          )
        })}
      </div>
      <div id='scroll-container'>
        <input
          type="image"
          src="../../src/assets/arrow.svg"
          alt="left-arrow"
          width="35px"
          height="35px"
          onClick={handleArrowLeftClick}
        />
        <span>{sortedByDateArtworks && sortedByDateArtworks[0][0]}</span>
        <div id='scroll'>
          <div id='scroll-tumb'></div>
        </div>
        <span>{sortedByDateArtworks && sortedByDateArtworks[sortedByDateArtworks.length - 1][0]}</span>
        <input
          type="image"
          src="../../src/assets/arrow.svg"
          alt="rigth-arrow"
          width="35px"
          height="35px"
          onClick={handleArrowRightClick}
        />
      </div>
      <p>CLICK/SCROLL TO EXPLORE</p>
    </div>
  )
}

export default Gallery