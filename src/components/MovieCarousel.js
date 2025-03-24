// src/components/MovieCarousel.js
import React from "react";
import { Carousel } from "react-bootstrap";

const movies = [
  { id: 1, title: "Oppenheimer", image: "/oppenheimer.jpeg" },
  { id: 2, title: "Avatar 2", image: "/avatar.jpeg" },
  { id: 3, title: "John Wick 4", image: "/john wick 4.jpeg" }
];

function MovieCarousel() {
  return (
    <Carousel>
      {movies.map((movie) => (
        <Carousel.Item key={movie.id}>
          <img className="d-block " src={movie.image} alt={movie.title}style={{ height: "1200px",width:"1500px", objectFit: "cover" }} />
          <Carousel.Caption>
            <h3>{movie.title}</h3>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default MovieCarousel;
