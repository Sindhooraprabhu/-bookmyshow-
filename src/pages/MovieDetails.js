// src/pages/MovieDetails.js
import React from "react";
import { useParams } from "react-router-dom";

const movieDetails = {
  1: { name: "Oppenheimer", description: "A movie about nuclear physicist Robert Oppenheimer.", trailer: "https://www.youtube.com/embed/bK6ldnjE3Y0" },
  2: { name: "Avatar 2", description: "Sequel to James Cameron's Avatar.", trailer: "https://www.youtube.com/embed/a8Gx8wiNbs8" },
  3: { name: "John Wick 4", description: "Keanu Reeves returns as John Wick.", trailer: "https://www.youtube.com/embed/qEVUtrk8_B4" }
};

function MovieDetails() {
  const { id } = useParams();
  const movie = movieDetails[id];

  return movie ? (
    <div className="container mt-4">
      <h2>{movie.name}</h2>
      <p>{movie.description}</p>
      <iframe width="560" height="315" src={movie.trailer} title="YouTube video player" allowFullScreen></iframe>
    </div>
  ) : (
    <h2>Movie Not Found</h2>
  );
}

export default MovieDetails;
