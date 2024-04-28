import React from 'react'
import { CDN_MOVIE_POSTER_URL } from '../utils/constants';

function MovieCards({poster}) {
  return (
    <div className='w-40 pl-2'>
      <img src={CDN_MOVIE_POSTER_URL + poster} alt="movie_poster" />
      {/* <img src="https://image.tmdb.org/t/p/w500//cxevDYdeFkiixRShbObdwAHBZry.jpg" alt="" /> */}
    </div>
  )
}

export default MovieCards;
