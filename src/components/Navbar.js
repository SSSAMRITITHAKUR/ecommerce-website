import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { FaShoppingCart, FaUser, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


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
          <Nav.Link as={Link} to="/search" className="nav-icon">
            <FaSearch />
          </Nav.Link>
          <Nav.Link as={Link} to="/account" className="nav-icon">
            <FaUser />
          </Nav.Link>
          <Nav.Link as={Link} to="/cart" className="nav-icon">
            <FaShoppingCart />
          </Nav.Link>
        </Nav>
      </Container>

      <style>
        {`
          .brand-name {
            font-size: 2rem;
            font-weight: bold;
            letter-spacing: 2px;
            color: black;
          }

          .nav-text {
            font-size: 1.2rem;
            font-weight: 500;
            color: black !important;
            margin-right: 20px;
          }

          .nav-icon {
            font-size: 1.5rem;
            color: black !important;
            margin-left: 15px;
          }

          .nav-text:hover, .nav-icon:hover {
            color: gray !important;
          }

          .left-nav {
            margin-left: 0 !important;
            padding-left: 20px;
          }

          .right-icons {
            display: flex;
            align-items: center;
          }
        `}
      </style>
    </Navbar>
  );
};

export default CustomNavbar;
