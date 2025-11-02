import React from "react";
import { Button } from "react-bootstrap";
import { ChevronDown } from "react-bootstrap-icons"; // ícono de flecha
import H1 from "../assets/H1.jpg";
import Logo from "../assets/logo.png";
import "../HeroSection.css";

function HeroSection() {
  const handleScrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="hero-section"
      style={{
        backgroundImage: `url(${H1})`,
      }}
    >
      <div className="hero-overlay"></div>

      <div className="hero-content text-center text-light">
        <img src={Logo} alt="Logo SG Transporte" className="hero-logo mb-4" />
        <h1 className="fw-bold display-4">Confianza en cada kilómetro</h1>
        <p className="lead mb-4">
          Transporte, logística y soluciones B2B para todo el país.
        </p>
        <Button
          variant="outline-light"
          size="lg"
          className="contact-btn"
          onClick={handleScrollToContact}
        >
          Contáctanos
        </Button>
      </div>

      {/* Flecha animada hacia abajo */}
      <div className="scroll-down" onClick={handleScrollToAbout}>
        <ChevronDown size={40} />
      </div>
    </section>
  );
}

export default HeroSection;
