import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import {NavLink } from "react-router-dom";

const Header = () => {
  let activeStyle = {
    color: "#fff",
  };
  return (
    <div className="header">
      <Navbar expand="lg" fixed="top">
        <Container>
          <Navbar.Brand>SAMEEKSHA BOTHRA</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav className="ml-auto">
              <NavLink
                to="/"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                className="nav-link"
              >
                Home
              </NavLink>
              <NavLink
                to="/projects"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                className="nav-link"
              >
                Projects
              </NavLink>
              <NavLink
                to="/education"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                className="nav-link"
              >
                
              
                Education
              </NavLink>
              <NavLink
                to="/Experience"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                className="nav-link"
              >
                Experience
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;