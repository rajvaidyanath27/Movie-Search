import React from "react";
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "./context";

const Movies = () => {
  const { movie, isLoading } = useGlobalContext();

  console.log("Movies data:", movie); // Debugging log to check movie data

  if (!movie || movie.length === 0) {
    console.log("No movies found or movie array is empty."); // Debugging log for empty data
    return <div className="no-movies">No movies found. Please try again later.</div>;
  }

  if (isLoading) {
    return (
      <section className="">
        <div className="loading">Loading....</div>
      </section>
    );
  }

  return (
    <>
      <section className="movie-page">
        <div className="container grid grid-4-col">
          {movie.map((curMovie) => {
            const { imdbID, Title, Poster } = curMovie;
            const movieName = Title.substring(0, 15)
            return (
              <NavLink to={`movie/${imdbID}`} key={imdbID}>
                <div className="card">
                  <div className="card-info">
                    <h2>{movieName.length >= 15 ? `${movieName} ...` : movieName}</h2>
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
