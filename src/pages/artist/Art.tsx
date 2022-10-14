import React from 'react'
import { Outlet, Params, useParams } from 'react-router-dom'

const Artist = (): JSX.Element => {

  let artist: Readonly<Params<string>> = useParams()

  return (
    <>
      <div> {artist.name} </div>
      <div>

      </div>
    </>
  )
}

export default Artist