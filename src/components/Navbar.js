import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { FaShoppingCart, FaUser, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";

const CustomNavbar = ({ brandName = "BOTIGA", menuItems = [] }) => {
  return (
    <Navbar expand="lg" className="bg-white py-3">
      <Container fluid className="d-flex justify-content-between align-items-center">
        
        {/* Left Navigation */}
        <Nav className="left-nav">
          {menuItems.length > 0 ? (
            menuItems.map((item, index) => (
              <Nav.Link as={Link} key={index} to={`/${item.toLowerCase()}`} className="nav-text">
                {item}
              </Nav.Link>
            ))
          ) : (
            <p className="nav-text">No Menu Items</p>
          )}
        </Nav>

        {/* Brand Name */}
        <Navbar.Brand as={Link} to="/" className="brand-name">
          {brandName}
        </Navbar.Brand>

        {/* Right Icons */}
        <Nav className="right-icons">
          {/*<Nav.Link as={Link} to="/search" className="nav-icon">
            <FaSearch />
          </Nav.Link>*/}
          <Nav.Link as={Link} to="/account" className="nav-icon">
            <FaUser />
          </Nav.Link>
          <Nav.Link as={Link} to="/cart" className="nav-icon">
            <FaShoppingCart />
          </Nav.Link>
        </Nav>
      </Container>

      
    </Navbar>
  );
};

export default CustomNavbar;
