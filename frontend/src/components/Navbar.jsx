import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LogoSmall from "../assets/logo-small.png";
import "./Navbar.css";
import { Link } from "react-router-dom";


function RoslagenNavBar() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar 
      expanded={expanded}
      onToggle={(expand) => setExpanded(expand)}
      collapseOnSelect 
      expand="md" 
      className="navBar"
    >
      <Container fluid>
        <Navbar.Brand 
          as={Link} 
          to="/" 
          className="headline"
          onClick={() => setExpanded(false)}
        >
          <img 
            className="logo-small"
            src={LogoSmall}
            alt="Roslagen Escape logotyp"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          
          <Nav className="me-auto navLinks gap-3">
            <Nav.Link as={Link} to="/hotel-booking" onClick={() => setExpanded(false)}>Hem</Nav.Link>
            <Nav.Link as={Link} to="/booking" onClick={() => setExpanded(false)}>Boka</Nav.Link>
            <Nav.Link as={Link} to="/room" onClick={() => setExpanded(false)}>Rum</Nav.Link>
            <Nav.Link as={Link} to="/food-drinks" onClick={() => setExpanded(false)}>Mat & Dryck</Nav.Link>
          </Nav>

          <Nav className="ms-auto navLinks gap-2">
            <Nav.Link as={Link} to="/about-us" onClick={() => setExpanded(false)}>Om oss</Nav.Link>
            <Nav.Link as={Link} to="/contact" onClick={() => setExpanded(false)}>Kontakt</Nav.Link>
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default RoslagenNavBar;