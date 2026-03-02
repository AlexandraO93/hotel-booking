import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LogoSmall from "../assets/logo-small.png"
import "./Navbar.css";

function RoslagenNavBar() {
  return (
    <Navbar collapseOnSelect expand="md" className="navBar">
      <Container fluid>
        <Navbar.Brand className="headline" href="#home">
            <img className="logo-small"
                src={LogoSmall}
                alt="Roslagen Escape logotyp"
            />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto navLinks gap-3">
            <Nav.Link href="#home">Hem</Nav.Link>
            <Nav.Link href="#booking">Boka</Nav.Link>
            <Nav.Link href="#room">Rum</Nav.Link>
            <Nav.Link href="#food-drinks">Mat & Dryck</Nav.Link>
          </Nav>
          <Nav className="ms-auto navLinks gap-2">
            <Nav.Link href="#about-us">Om oss</Nav.Link>
            <Nav.Link href="#contact">Kontakt</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default RoslagenNavBar;