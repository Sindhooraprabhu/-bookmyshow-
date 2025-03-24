import React, { useState } from "react";

const Booking = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatSelection = (seat) => {
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter((s) => s !== seat));
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Book Your Seats</h2>
      <p>Select your preferred seats for the movie.</p>
      <div className="d-flex flex-wrap">
        {[...Array(20).keys()].map((seat) => (
          <button
            key={seat}
            className={`btn m-2 ${
              selectedSeats.includes(seat) ? "btn-success" : "btn-outline-primary"
            }`}
            onClick={() => handleSeatSelection(seat)}
          >
            Seat {seat + 1}
          </button>
        ))}
      </div>
      <h4 className="mt-3">Selected Seats: {selectedSeats.join(", ") || "None"}</h4>
      <button className="btn btn-primary mt-3">Proceed to Payment</button>
    </div>
  );
};

export default Booking;
