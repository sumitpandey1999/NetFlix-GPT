import React, { useContext } from 'react'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'
import { MovieContext } from './Browse'

function MainContainer() {

  const data = useContext(MovieContext)
  if (!data || !data.moviesData || data.moviesData.length === 0) return null

// console.log(data.moviesData[0])

const {original_title, overview, id} = data.moviesData[0];

  return (
    <div>
      <VideoTitle title={original_title} overview = {overview} />
      <VideoBackground id={id} />
    </div>
  )
}

export default MainContainer


