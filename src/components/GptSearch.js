import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'
import { NETFLIX_BG_URL } from '../utils/constants'

function GptSearch() {
  return (
    <div>
     <img
          src={NETFLIX_BG_URL}alt="background"
          className='absolute -z-10'
        />
     <GptSearchBar/>
     <GptMovieSuggestion/>
    </div>
  )
}

export default GptSearch

