import { useCallback, useRef, useState, useMemo, useEffect } from 'react'
import arrow from '../../assets/arrow.svg'
import getSortedArtworksByDate from '../../utils/getSortedArtworksByArtworks'
import './gallery.sass'

const Gallery = (): JSX.Element => {

  const artworkContainerElement: any = useRef(null)
  const scrollElement: any = useRef(null)

  const [maxScrollWidth, setMaxScrollWidth] = useState(0)

  const sortedArtworks = getSortedArtworksByDate()

  useEffect(() => {
    setMaxScrollWidth(
      artworkContainerElement?.current?.scrollWidth
      -
      artworkContainerElement?.current?.clientWidth
    )
  }, [])

  const handleLeftClick = () => {
    artworkContainerElement.current.scrollLeft -= 550
    scrollElement.current.value =
      Number(scrollElement.current.value) - 550
  }

  const handleRightClick = () => {
    artworkContainerElement.current.scrollLeft += 550
    scrollElement.current.value =
      Number(scrollElement.current.value) + 550
  }

  return (
    <>
      <div id='gallery-container'>
        <div id='artwork-container' ref={artworkContainerElement}>
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
            onClick={handleLeftClick}
          />
          <span>{sortedArtworks && sortedArtworks[0][0]}</span>
          <input
            ref={scrollElement}
            type="range"
            min={0}
            max={String(maxScrollWidth)}
            name="scroll range"
            id="scroll-range"
          />
          <span>{sortedArtworks && sortedArtworks[sortedArtworks.length - 1][0]}</span>
          <input
            type="image"
            src={arrow}
            alt="rigth-arrow"
            width="35px"
            height="35px"
            onClick={handleRightClick}
          />
        </div>
        <p>CLICK/SCROLL TO EXPLORE</p>
      </div>
    </>
  )
}

export default Gallery