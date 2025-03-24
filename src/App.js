// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import MovieDetails from "./pages/MovieDetails";
import Events from "./pages/Events";
import Offers from "./pages/Offers";
import Booking from "./pages/Booking";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
        <Route path="/events" element={<Events />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/booking/:id" element={<Booking />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
