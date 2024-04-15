import { API_OPTIONS } from '../utils/constants'
import { useEffect } from 'react'
import {addNowPlayingMovies}  from '../utils/movieSlice';
import {useSelector, useDispatch} from 'react-redux';


const useNowPlayingMovies = () => {

    const dispatch = useDispatch();

    const getNowPlayingMovies = async () => {
      try{
        const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS);
        const data = await response.json();
        dispatch(addNowPlayingMovies(data.results))
      }
      catch(err){
        console.error(err)
      }
    }
    
    useEffect(()=>{
      getNowPlayingMovies();
    },[]);
}

export default useNowPlayingMovies;