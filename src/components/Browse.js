import Header from './Header'
import MainContainer from './MainContainer';
import { useState, useEffect, createContext } from 'react';
import { API_OPTIONS } from '../utils/constants';
import usePopularMovies from '../Hooks/usePopularMovies';
import SecondaryContainer from './SecondaryContainer';
import { useSelector } from 'react-redux';
import GptSearch from './GptSearch';


export const MovieContext = createContext();

const Browse = () => {

  const [moviesData, setMovieData] = useState(null)

  const showGptSearch = useSelector((store) => store.gpt.showGptSearch)

  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    const jsonData = json.results;
    setMovieData(jsonData)
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);



  usePopularMovies()



  return (
    <MovieContext.Provider value={{ moviesData, setMovieData }}>
      <div>
        <Header />

        {showGptSearch ? (
          <GptSearch />
        ) : (
          <>
            <MainContainer />
            <SecondaryContainer />
          </>
        )}

      </div>
    </MovieContext.Provider>
  )
}

export default Browse
