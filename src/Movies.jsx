import React from "react";
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "./context";

const Movies = () => {
  const { movie } = useGlobalContext();

  console.log("Movies data:", movie); // Debugging log to check movie data

  if (!movie || movie.length === 0) {
    console.log("No movies found or movie array is empty."); // Debugging log for empty data
    return <div className="no-movies">No movies found. Please try again later.</div>;
  }

  return (
    <>
      <section className="movie-page">
        <div className="container grid grid-4-col">
          {movie.map((curMovie) => {
            const { imdbID, Title, Poster } = curMovie;
            return (
              <NavLink to={`movie/${imdbID}`} key={imdbID}>
                <div className="card">
                  <div className="card-info">
                    <h2>{Title}</h2>
                    <img src={Poster} alt={imdbID} />
                  </div>
                </div>
              </NavLink>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Movies;
