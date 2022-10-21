import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import art from '../../utils/art.json'
import './artists.sass'

const Artist = (): JSX.Element => {

  const [artistAndPaintings, setArtistsAndPaintings] = useState([['']])

  useEffect(() => {

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
            draggable="false"
            src={art.artists[i].artWorks[c].image}
            alt={art.artists[i].artWorks[c].name}
          />
        )
      }
    }

    setArtistsAndPaintings(artist)

  }, [])

  /* 
  * there is a error on props in item[0] that says
  * props doesn't exists on type string, but it exists
  * on item objects
  */
  return (
    <div id='artists-container'>
      {artistAndPaintings.map((item, index) => {
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
  )
}

export default Artist