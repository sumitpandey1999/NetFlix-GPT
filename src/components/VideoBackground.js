import React, { useEffect, useState } from 'react'
import { API_OPTIONS } from '../utils/constants'

function VideoBackground({id}) {

  const [trailerKey, setTrailerKey] = useState(null)
  // console.log(trailerKey)

const trailerVideo = async()=>{
  const data = await fetch('https://api.themoviedb.org/3/movie/'+ id +'/videos?language=en-US', API_OPTIONS)
  const json = await data.json();
  const filterData = json.results.filter((video)=>video.type ==="trailer")
  const trailer = filterData.length? filterData[0] : json.results[0]
  setTrailerKey(trailer?.key)
}

useEffect(()=>{
  trailerVideo()
},[])

  return (
    <div className='w-screen'>
  <iframe
   className='w-screen aspect-video' 
   src={"https://www.youtube.com/embed/" + trailerKey +"?&autoplay=1&mute=1&loop=1"}  
   title="YouTube video player"
   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>

    </div>
  )
}

export default VideoBackground
