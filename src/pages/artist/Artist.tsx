import { Params, useParams } from 'react-router-dom'
import './artist.sass'
import art from '../../utils/art.json'
import { useEffect, useState } from 'react'

interface IArtist {
  nickName: string
  fullName: string
  wasBornIn: string
  diedIn: string
  description: string
  portrait?: string
  artWorks: {
    name: string
    image: string
    completedIn: string
    description: string
  }[]
}

const capitalizeFirstLetter = (string: string): any => {

  const spaceIndex = string.search(' ')

  /*
  * the page will render an artist by searching his nickname with
  * an uppercase first letter, so if an artist has two names,
  * they will be uppercased
  */
  if (spaceIndex !== -1) {
    return (
      string
        .replace(string[spaceIndex + 1], string[spaceIndex + 1].toUpperCase())
        .replace(string[0], string[0].toUpperCase())
    )
    // else, just uppercase the first letter
  } else {
    return (string.charAt(0).toUpperCase() + string.slice(1))
  }

}

const Artist = (): JSX.Element => {

  const [artist, setArtist] = useState<IArtist>()

  const { artistName }: Readonly<Params<string>> = useParams()

  const capitalizedArtistName = capitalizeFirstLetter(artistName!.replaceAll('_', ' '))

  useEffect(() => {

    for (let i = 0; i < art.artists.length; i++) {
      if (art.artists[i].nickName.indexOf(capitalizedArtistName) == 0) {
        setArtist(art.artists[i])
      }
    }

  }, [])

  return (
    <div id='artist-container'>
      <div id='artist-info-container'>
        <div id='artist-info'>
          <div>
            <h1>{artist?.nickName.toUpperCase()}</h1>
            <button>X</button>
          </div>
          <p>({artist?.fullName})</p>
          <p>{artist?.wasBornIn}</p>
          <p>{artist?.diedIn}</p>
          <p>{artist?.description}</p>
        </div>
        <div id='artist-portrait' style={{
          backgroundImage: `url('${artist?.portrait}')`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center'
        }}></div>
      </div>


      {/*<div>
        {artist?.artWorks.map((_item, index: number) => {
          return (
            <img
              key={artist?.artWorks[index].name}
              src={artist?.artWorks[index].image}
              alt={artist?.artWorks[index].name}
            />)
        })}
      </div>*/}
    </div>
  )
}

export default Artist