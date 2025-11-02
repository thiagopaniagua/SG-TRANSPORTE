import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import Logo from "../assets/logo.png";

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80); // cambia después de 80px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className={`transition-navbar ${
        scrolled ? "navbar-solid" : "navbar-transparent blur-navbar"
      }`}
      variant={scrolled ? "light" : "dark"}
    >
      <Container>
        <Navbar.Brand href="#hero">
          <img src={Logo} alt="SG Transporte" width={90} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#hero">Inicio</Nav.Link>
            <Nav.Link href="#about">Nosotros</Nav.Link>
            <Nav.Link href="#services">Servicios</Nav.Link>
            <Nav.Link href="#contact">Contacto</Nav.Link>
            <Nav.Link href="#careers">Trabaja con nosotros</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
