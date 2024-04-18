import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MovieCard from './MovieCard';

const MovieList = ({ movies, title }) => {

    return (
        <div className='px-12 '>
            <h1 className='text-white text-3xl py-4'>{title}</h1>
            <div className='flex overflow-x-scroll'>
                <div className='flex '>
                    {movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
                </div>
            </div>
        </div>
    )
}

export default MovieList