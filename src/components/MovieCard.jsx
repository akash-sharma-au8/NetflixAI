import React from 'react';


const MovieCard = (props) => {
    const {backdrop_path, title} = props.movieDetails
  return (
    <div className='rounded-md border border-black'>
        <p className='font-bold'>{title}</p>
        <img src = {backdrop_path} />
    </div>
  )
}

export default MovieCard ;