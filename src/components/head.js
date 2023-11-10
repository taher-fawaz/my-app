import React, { useState } from "react";
import { NavDropdown, Navbar, Nav } from "react-bootstrap";

const NavBar = () => {
  return (
    <div>
      {" "}
      <Navbar>
        <Navbar.Brand href="#home">My App</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar>
    </div>
  );
};

export default NavBar;
