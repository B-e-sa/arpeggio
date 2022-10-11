import React from 'react'
import { Outlet, useParams } from 'react-router-dom'

const Artist = () => {

  let artist = useParams()

  return (
    <>
      <div> {artist.name} </div>
    </>
  )
}

export default Artist