const MovieCard = ({ movie: { title, vote_average, poster_path, release_date } }) => {
    return (
      <div className="movie-card">
          {/* Ensure the poster image URL is valid */}
          <img
              src={poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : '/no-movie.png'}
              alt={title || 'Movie Poster'} // Default alt text if title is missing
          />
  
          <div className="mt-4">
              <h3>{title || 'No Title Available'}</h3>
  
              <div className="content">
                  <div className="rating">
                      {/* If the star icon doesn't exist, provide a fallback */}
                      <img src="star.png" alt="Star Icon" onError={(e) => e.target.src = '/default-star.png'} />
                      <p>{vote_average ? vote_average.toFixed(1) : 'N/A'}</p>
                  </div>
  
                  <span>•</span>
                  <p className="year">
                      {release_date ? release_date.split('-')[0] : 'N/A'}
                  </p>
              </div>
          </div>
      </div>
    );
  };
  
  export default MovieCard;
  