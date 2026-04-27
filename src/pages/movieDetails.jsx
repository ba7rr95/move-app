import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const API = "http://localhost:3000/movies";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`${API}/${id}`)
      .then((res) => res.json())
      .then((data) => setMovie(data));
  }, [id]);

  if (!movie) return <h2>Loading...</h2>;

  return (
    <div className="details-container">
      <div className="details-card">

        <div className="details-layout">

          <div className="details-image">
            <img
              src={movie.image}
              alt={movie.title}
            />
          </div>

          <div className="details-info">
            <h1>{movie.title}</h1>

            <p><strong>Year:</strong> {movie.year}</p>
            <p><strong>Rating:</strong> {movie.rating}</p>
            <p><strong>Genre:</strong> {movie.genre}</p>
            <p><strong>Director:</strong> {movie.director}</p>
            <p><strong>Duration:</strong> {movie.duration}</p>
            <p><strong>Language:</strong> {movie.language}</p>

            <div className="details-description">
              <p><strong>Description:</strong></p>
              <p>{movie.description}</p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default MovieDetails;