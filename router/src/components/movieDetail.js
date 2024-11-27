import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { movies } from '../data/movies';

const MovieDetail = () => {
  const { id } = useParams();
  const movie = movies.find(m => m.id === parseInt(id));

  if (!movie) return <div>Film non trouvé</div>;

  return (
    <div className="movie-detail">
      <Link to="/" className="back-button">← Retour à l'accueil</Link>
      
      <h1>{movie.title}</h1>
      <div className="movie-detail-content">
        <img src={movie.posterUrl} alt={movie.title} className="movie-poster" />
        
        <div className="movie-info">
          <h2>Description</h2>
          <p>{movie.description}</p>
          <p><strong>Année :</strong> {movie.year}</p>
          <p><strong>Genre :</strong> {movie.genre}</p>
        </div>
        
        <div className="movie-trailer">
          <h2>Bande-annonce</h2>
          <iframe 
            width="560" 
            height="315" 
            src={movie.trailerUrl} 
            title={`${movie.title} Trailer`}
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;