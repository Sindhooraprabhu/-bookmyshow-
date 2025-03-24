// src/pages/Movies.js
import React from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const movies = [
  { id: 1, name: "Oppenheimer", genre: "Biography", release: "2023", rating: "9.0", price: "$10" },
  { id: 2, name: "Avatar 2", genre: "Sci-Fi", release: "2022", rating: "8.5", price: "$12" },
  { id: 3, name: "John Wick 4", genre: "Action", release: "2023", rating: "8.8", price: "$15" }
];

function Movies() {
  return (
    <div className="container mt-4">
      <h2>Available Movies</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Genre</th>
            <th>Release Date</th>
            <th>Ratings</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => (
            <tr key={movie.id}>
              <td>
                <Link to={`/movies/${movie.id}`}>{movie.name}</Link>
              </td>
              <td>{movie.genre}</td>
              <td>{movie.release}</td>
              <td>{movie.rating}</td>
              <td>{movie.price}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Movies;
