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
  portrait: string
  movement: string
  artWorks: {
    name: string
    image: string
    completedIn: string
    description: string
  }[]
}

const capitalizeFirstLetter = (string: string): any => {

  const spaceCharacterIndex = string.search(' ')

  /*
  * the page will render an artist by searching his nickname with
  * an uppercase first letter, so if an artist has two names,
  * they will be uppercased
  */
  if (spaceCharacterIndex !== -1) {
    return (
      string
        .replace(string[spaceCharacterIndex + 1], string[spaceCharacterIndex + 1].toUpperCase())
        .replace(string[0], string[0].toUpperCase())
    )
    // else, just uppercase the first letter
  } else {
    return (string.charAt(0).toUpperCase() + string.slice(1))
  }

}

const Artist = (): JSX.Element => {

  const [artist, setArtist] = useState<IArtist>()
  const [leftContinerWasClosed, setLeftContainerWasClosed] = useState(false)

  const { artistName }: Readonly<Params<string>> = useParams()

  const capitalizedArtistName = capitalizeFirstLetter(artistName!.replaceAll('_', ' '))

  useEffect(() => {

    setArtist(art.artists.find(({nickName}) => nickName === capitalizedArtistName))

  }, [])

  const handleCloseLeftContainer = () => {

    leftContinerWasClosed ?
      setLeftContainerWasClosed(false)
      :
      setLeftContainerWasClosed(true)

  }

  return (
    <div id='artist-container'>
      <div id='left-container'>
        <div id='header-container'>
          <div>
            <img src={artist?.portrait} alt={artist?.nickName} />
            <p>{artist?.nickName.toUpperCase()}</p>
          </div>
          <button onClick={handleCloseLeftContainer}>x</button>
        </div>
        <div id='artist-artworks'>
          <p><b>ARTWORKS</b></p>
          <div>
            {artist?.artWorks.map((item: any, index: number) => {
              return (
                <img
                  width='122px'
                  height='150px'
                  src={artist?.artWorks[index].image}
                  alt={artist?.artWorks[index].name}
                />
              )
            })}
          </div>
        </div>
        <div id='artist-name'>
          <p><b>{artist?.nickName.toUpperCase()}</b></p>
          <p><i>({artist?.fullName})</i></p>
        </div>
        <div id='artist-info'>
          <div>
            <p><b>MOVEMENT:</b> {artist?.movement.toUpperCase()}</p>
            <p><b>BORN:</b> {
              // slicing array last index (local of birth)
              artist?.wasBornIn.split('/').slice(0, 3).join('/').toUpperCase()
            }</p>
            <p><b>DIED:</b> {
              // slicing array last index (local of death)
              artist?.diedIn.split('/').slice(0, 3).join('/').toUpperCase().toUpperCase()
            }</p>
          </div>
          <p>{artist?.description}</p>
        </div>
      </div>
      <div id='artist-portrait-container'>
        <img id='artist-portrait' src={artist?.portrait} alt="" />
      </div>
    </div >
  )
}

export default Artist