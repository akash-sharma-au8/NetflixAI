import React from 'react';
import { poster_BASE_URL } from '../utils/constants';
// import useMoviePoster from '../hooks/useMoviePoster';


const MovieCard = ({movie}) => {
  const{poster_path, original_title,backdrop_path, id} = movie

  // useMoviePoster(id)
  return (
    <div className='w-44 pr-4 hover:transform cursor-pointer transition-all'>
        <img src = {poster_BASE_URL + poster_path} />
    </div>
  )
}

export default MovieCard ;