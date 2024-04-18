import React from 'react'
import {useSelector} from 'react-redux';

import Header from './Header'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import usePopularMovies from '../hooks/usePopularMovies';
import GptSearch from './GptSearch';



const Browse = () => {

  const gptSearchView = useSelector(store => store.chatGptSearchView)

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies()
  
  return (
    <div className=' '>
      <Header/>
      {gptSearchView ?<GptSearch/> : 
      <>
      <MainContainer/>
      <SecondaryContainer/>
      </> 
  }
    </div>
  )
}

export default Browse