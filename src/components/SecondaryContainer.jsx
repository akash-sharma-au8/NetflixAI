import React from 'react';
import { useSelector } from 'react-redux';
import MovieList from './MovieList';

const SecondaryContainer = () => {
  const nowPlayingMovies = useSelector(store => store.movies?.nowPlayingMovies);
  const popularMovies = useSelector(store => store.movies?.popularMovies);
  const topRatedMovies = useSelector(store => store.movies?.topRatedMovies);
  const upcomingMovies = useSelector(store => store.movies?.upcomingMovies);

  return (
    <div className='relative bottom-48'> 
      {nowPlayingMovies.length > 0 && (
        <MovieList title="Now Playing" movies={nowPlayingMovies} />
      )}
      {popularMovies.length > 0 && (
        <MovieList title="Trending" movies={popularMovies} />
      )}
      {topRatedMovies.length > 0 && (
        <MovieList title="Popular" movies={topRatedMovies} />
      )}
      {upcomingMovies.length > 0 && (
        <MovieList title="Upcoming" movies={upcomingMovies} />
      )}
    </div>
  );
};

export default SecondaryContainer;
