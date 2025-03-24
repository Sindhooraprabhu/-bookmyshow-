// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

function CustomNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="px-3">
      <Navbar.Brand as={Link} to="/">🎬 BookMyShow 2.0</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/movies">Movies</Nav.Link>
          <Nav.Link as={Link} to="/events">Events</Nav.Link>
          <Nav.Link as={Link} to="/offers">Offers</Nav.Link>
        </Nav>
        <Form className="d-flex">
          <FormControl type="search" placeholder="Search" className="me-2" />
          <Button variant="outline-light">Search</Button>
        </Form>
        <Nav>
          <Nav.Link as={Link} to="/login">Sign In</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default CustomNavbar;
