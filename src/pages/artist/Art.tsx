import { Params, useParams } from 'react-router-dom'
import './art.sass'


const Artist = (): JSX.Element => {

  let artist: Readonly<Params<string>> = useParams()

  return (
    <div>
      <div> {artist.name} </div>
    </div>
  )
}

export default Artist