import React from 'react';
import MovieCard from './moviecard';
import { movies } from '../data/movies';

const MovieList = () => {
  return (
    <div className="movie-list">
      <h1>Liste des Films</h1>
      <div className="movies-grid">
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;