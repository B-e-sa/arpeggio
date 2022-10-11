import GalleryContainer from './Gallery.style'
import art from '../../utils/art.json'
import { useCallback, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Gallery = (): JSX.Element => {

  const [sortedByDateArtworks, setSortedByDateArtworks] = useState([['']])
  const [scrollPosition, setScrollPosition] = useState(Number)

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

  const handleChange = (e: any) => {
    console.log(e.target.value)
  }

  return (
    <GalleryContainer>
      <div id='artwork-container'>
        {sortedByDateArtworks.map((item: string[], index: number) => {
          return (
            <div key={Math.random()} id='image-container'>
              <Link to={`/artists/${sortedByDateArtworks[index][3]?.replace(' ', '_')}`}>
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
        <input type="range" onChange={handleChange} />
        <span>{sortedByDateArtworks && sortedByDateArtworks[sortedByDateArtworks.length - 1][0]}</span>
      </div>
    </GalleryContainer>
  )
}

export default Gallery