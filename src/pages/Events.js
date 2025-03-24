import React from "react";

const Events = () => {
  return (
    <div className="container mt-4">
      <h2>Upcoming Events</h2>
      <p>Discover the latest events happening around you.</p>
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <img
              src="/music.jpeg"
              className="card-img-top"
              alt="Event 1"
              height={"500px"}
            />
            <div className="card-body">
              <h5 className="card-title">Music Concert</h5>
              <p className="card-text">Join the biggest music concert of the year!</p>
              <button className="btn btn-primary">Book Now</button>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img
              src="/comedy.jpeg"
              className="card-img-top"
              alt="Event 2"
              height={"500px"}
            />
            <div className="card-body">
              <h5 className="card-title">Comedy Show</h5>
              <p className="card-text">Laugh your heart out with the best comedians.</p>
              <button className="btn btn-primary">Book Now</button>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img
              src="/sports.jpeg"
              className="card-img-top"
              alt="Event 3"
              height={"500px"}
            />
            <div className="card-body">
              <h5 className="card-title">Football Match</h5>
              <p className="card-text">Experience the thrill of a live football game.</p>
              <button className="btn btn-primary">Book Now</button>
            </div>
          </div>
        </div>
        <div className="col-md-4 mt-4">
          <div className="card">
            <img
              src="/drama.jpeg"
              className="card-img-top"
              alt="Event 4"
              height={"500px"}
            />
            <div className="card-body">
              <h5 className="card-title">Drama Play</h5>
              <p className="card-text">Enjoy an evening of theater with a gripping drama.</p>
              <button className="btn btn-primary">Book Now</button>
            </div>
          </div>
        </div>
        <div className="col-md-4 mt-4">
          <div className="card">
            <img
              src="/workshop.jpeg"
              className="card-img-top"
              alt="Event 5"
              height={"500px"}
            />
            <div className="card-body">
              <h5 className="card-title">Art Workshop</h5>
              <p className="card-text">Learn painting and explore your creativity.</p>
              <button className="btn btn-primary">Book Now</button>
            </div>
          </div>
        </div>
        <div className="col-md-4 mt-4">
          <div className="card">
            <img
              src="/tech.jpeg"
              className="card-img-top"
              alt="Event 6"
              height={"500px"}
            />
            <div className="card-body">
              <h5 className="card-title">Tech Conference</h5>
              <p className="card-text">Explore the latest innovations in technology.</p>
              <button className="btn btn-primary">Book Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;

