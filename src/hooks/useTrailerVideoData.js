import React, { useEffect } from 'react';
import { API_OPTIONS } from '../utils/constants';
import { addMovieTrailer } from '../utils/movieSlice';
import {useDispatch} from 'react-redux';

const useTrailerVideoData = (movieId) => {

    const dispatch = useDispatch()

    const getMovieVideo = async () => {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos`, API_OPTIONS);
            const data = await response.json();

            const trailers = data.results.filter((video) => video.type === "Trailer")
            dispatch(addMovieTrailer(trailers.length > 0 ? trailers[0] : data.results[0]));
        }
        catch (err) {
            console.error(err)
        }
    }

    useEffect(() => {
        getMovieVideo();
    }, [])
}

export default useTrailerVideoData;
