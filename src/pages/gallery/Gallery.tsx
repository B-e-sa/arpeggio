import { useEffect, useState } from 'react'
import getSortedArtworksByDate from '../../utils/getSortedArtworksByArtworks'
import ImageMagnifier from '../../utils/ImageMagnifier'
import './gallery.sass'

const sortedArtworks = getSortedArtworksByDate()

const Gallery = (): JSX.Element => {

  const [scrollMaxPosition, setScrollMaxPosition] = useState(0)
  const [scrollTumb, setScrollTumb]: any = useState()
  const [artworkElement, setArtworkElement]: any = useState()

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

        return scrollX!.scrollLeft += 350, setScrollMaxPosition(scrollMaxPosition + 10)

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
    scrollTumb.style.left = `${artworkElement.scrollLeft / 119}px`
  }

  const handleArrowRightClick = (): void => {
    artworkElement.scrollLeft += 350
    scrollTumb.style.left = `${artworkElement.scrollLeft / 119}px`
  }

  return (
    <div id='gallery-container'>
      <div id='artwork-container'>
        {sortedArtworks.map((_item: string[], index: number) => {
          return (
            <div key={Math.random()} className='image-container'>
              
              <ImageMagnifier width='200px' src={sortedArtworks[index][1]}/>
              
              {/*<img
                src={sortedArtworks[index][1]}
                draggable='false'
                alt=""
              />
              */}<span>{sortedArtworks[index][0]}</span>
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
        <span>{sortedArtworks && sortedArtworks[0][0]}</span>
        <div id='scroll'>
          <div id='scroll-tumb' style={{  }}></div>
          <input type="range" min={0} max={100} value={scrollMaxPosition} />
        </div>
        <span>{sortedArtworks && sortedArtworks[sortedArtworks.length - 1][0]}</span>
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