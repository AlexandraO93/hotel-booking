import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import LogoSmall from "../assets/logo-small.png";
import "./Navbar.css";
import { Link } from "react-router-dom";

function RoslagenNavBar() {
  const [expanded, setExpanded] = useState(false);
  const [foodOpen, setFoodOpen] = useState(false);

  const handleLinkClick = () => {
    setExpanded(false);
    setFoodOpen(false);
  };

  const toggleFoodMobile = (e) => {
    e.preventDefault();
    setFoodOpen(!foodOpen);
  };

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
          to="/hotel-booking"
          className="headline"
          onClick={handleLinkClick}
        >
          <img
            className="logo-small"
            src={LogoSmall}
            alt="Roslagen Escape logotyp"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto navLinks">
            <Nav.Link as={Link} to="/hotel-booking" onClick={handleLinkClick}>
              Hem
            </Nav.Link>
            <Nav.Link as={Link} to="/booking" onClick={handleLinkClick}>
              Boka
            </Nav.Link>
            <Nav.Link as={Link} to="/room" onClick={handleLinkClick}>
              Rum
            </Nav.Link>

            <div
              className={`food-dropdown-wrapper  ${foodOpen ? "is-open" : ""}`}
              onMouseEnter={() => window.innerWidth >= 768 && setFoodOpen(true)}
              onMouseLeave={() =>
                window.innerWidth >= 768 && setFoodOpen(false)
              }
            >
              <button className="nav-link-food-btn" onClick={toggleFoodMobile}>
                Mat & Dryck
                <span className="dropdown-arrow"></span>
              </button>

              <div className="food-dropdown-menu">
                <Nav.Link as={Link} to="/breakfast" onClick={handleLinkClick}>
                  Frukost
                </Nav.Link>
                <Nav.Link as={Link} to="/a-la-carte" onClick={handleLinkClick}>
                  A La Carte
                </Nav.Link>
                <Nav.Link as={Link} to="/kids-menu" onClick={handleLinkClick}>
                  Barnmeny
                </Nav.Link>
              </div>
            </div>
          </Nav>

          <Nav className="ms-auto navLinks">
            <Nav.Link as={Link} to="/about-us" onClick={handleLinkClick}>
              Om oss
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" onClick={handleLinkClick}>
              Kontakt
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default RoslagenNavBar;
