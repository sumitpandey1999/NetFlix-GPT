import React from 'react'
import MoviesList from './MoviesList'
import { useSelector } from 'react-redux'

function SecondaryContainer() {
  
const moviesData = useSelector((store)=>store.movies)

if(!moviesData.popularMovies) return null
console.log(moviesData.popularMovies)

  return (
    <div className='bg-black'>
      <div className="-mt-64  relative z-20"> 
        <MoviesList title={"Popular Movies"} moviesData={moviesData.popularMovies}/>
      <MoviesList title={"Popular Movies"} moviesData={moviesData.popularMovies}/>
      <MoviesList title={"Popular Movies"} moviesData={moviesData.popularMovies}/>
      </div>
  

    </div>
  )
}

export default SecondaryContainer
