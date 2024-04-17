import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import { addPopularMovies } from '../utils/movieSlice';

const usePopularMovies = () => {
    const dispatch = useDispatch()

    const getPopularMovies = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/movie/popular
        `, API_OPTIONS);

        const data = await response.json();
        dispatch(addPopularMovies(data.results))
    }

    useEffect(() => {
        getPopularMovies()
    }, [])
}

export default usePopularMovies;