import React from 'react'
import MovieCards from './MovieCards'

function MoviesList({title, moviesData}) {
// console.log(moviesData)
  return (
    <div className='px-6'>
<h2 className="text-lg md:text-3xl text-white absolute pt-2 ">{title}</h2>
<div className='flex overflow-x-scroll py-12'>
    <div className='flex'>
{moviesData.map((movie)=><MovieCards key={movie.id} title={title} poster={movie.poster_path} />)}
    </div>
    </div>
    </div>
  )
}

export default MoviesList;
