import { useEffect, useState } from 'react'
import getSortedArtworksByDate from '../../utils/getSortedArtworksByArtworks'
import './gallery.sass'
import arrow from '../../assets/arrow.svg'

const sortedArtworks = getSortedArtworksByDate()

const Gallery = (): JSX.Element => {

  const [scrollPosition, setScrollPosition] = useState(0)
  const [artworkElement, setArtworkElement] = useState<HTMLElement | null>()

  useEffect(() => {

    const scrollX: HTMLElement | null = document?.getElementById('artwork-container')
    setArtworkElement(scrollX)

    const handleWheel = (e: WheelEvent): void => {

      // wheel up
      if (e.deltaY === -100) {

        scrollX!.scrollLeft += 350

      } else {

        scrollX!.scrollLeft -= 350

      }

    }

    document.addEventListener('wheel', handleWheel)

    return () => {
      document.removeEventListener('wheel', handleWheel)
    }

  }, [])

  const handleArrowLeftClick = (): void => {
    artworkElement!.scrollLeft -= 350
  }

  const handleArrowRightClick = (): void => {
    artworkElement!.scrollLeft += 350
  }

  return (
    <>
      <div id='gallery-container'>
        <div id='artwork-container'>
          {sortedArtworks.map((_item: string[], index: number) => {
            return (
              <div key={Math.random()} className='image-container'>
                <img
                  src={sortedArtworks[index][1]}
                  draggable='false'
                  alt=""
                /><span>{sortedArtworks[index][0]}</span>
              </div>
            )
          })}
        </div>
      </div>
      <div id='scroll-container'>
        <div>
          <input
            type="image"
            src={arrow}
            alt="left-arrow"
            width="35px"
            height="35px"
            onClick={handleArrowLeftClick}
          />
          <span>{sortedArtworks && sortedArtworks[0][0]}</span>
          <div id='scroll'>
            <div id='scroll-tumb'></div>
          </div>
          <span>{sortedArtworks && sortedArtworks[sortedArtworks.length - 1][0]}</span>
          <input
            type="image"
            src={arrow}
            alt="rigth-arrow"
            width="35px"
            height="35px"
            onClick={handleArrowRightClick}
          />
        </div>
        <p>CLICK/SCROLL TO EXPLORE</p>
      </div>

    </>
  )
}

export default Gallery