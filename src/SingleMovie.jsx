import { NavLink, useParams } from "react-router-dom";
// import useFetch from "./useFetch";

const SingleMovie = () => {
  const { id } = useParams();
  // console.log(id);

  // const { isLoading, movie, isError } = useFetch(`&i=${id}`);

  // if (isLoading) {
  //   return (
  //     <section className="movie-section">
  //       <div className="loading">Loading....</div>
  //     </section>
  //   );
  // }

  // if (isError.show) {
  //   return (
  //     <section className="movie-section">
  //       <div className="error-message">
  //         <p>Error: {isError.msg}</p>
  //       </div>
  //     </section>
  //   );
  // }

  return (
    // <section className="movie-section">
    //   <div className="movie-card">
    //     <figure>
    //       <img src={movie.Poster} alt={movie.Title} />
    //     </figure>
    //     <div className="card-content">
    //       <p className="title">{movie.Title}</p>
    //       <p className="card-text">{movie.Released}</p>
    //       <p className="card-text">{movie.Genre}</p>
    //       <p className="card-text">{movie.imdbRating} / 10</p>
    //       <p className="card-text">{movie.Country}</p>
    //       <NavLink to="/" className="back-btn">
    //         Go Back
    //       </NavLink>
    //     </div>
    //   </div>
    // </section>
    <h1>Hiii gyh</h1>
  );
};

export default SingleMovie;
