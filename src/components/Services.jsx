import { useEffect, useRef, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import NS1 from "../assets/NS1.jpg";
import NS2 from "../assets/NS2.jpg";
import NS3 from "../assets/NS3.jpg";
import NS4 from "../assets/NS4.jpg";
import H2 from "../assets/H2.jpg";

function Services() {
  const servicios = [
    { title: "Transporte Local", img: NS1 },
    { title: "Transporte Nacional", img: NS2 },
    { title: "Logística Personalizada", img: NS3 },
    { title: "Entrega Segura", img: NS4 },
  ];

  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 } // cuando el 30% de la sección es visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="services-section position-relative text-center text-white py-5"
    >
      {/* Fondo */}
      <div
        className="services-bg"
        style={{
          backgroundImage: `url(${H2})`,
        }}
      ></div>

      <Container className="position-relative">
        <div className={`animated-title mb-4 ${isVisible ? "visible" : ""}`}>
          <h2>Conocé lo que ofrecemos ↓</h2>
        </div>
        <Row className="justify-content-center">
          {servicios.map((s, index) => (
            <Col
              md={3}
              sm={6}
              xs={12}
              className={`mb-4 service-col ${isVisible ? "visible" : ""}`}
              key={index}
            >
              <Card className="service-card h-100 border-0">
                <Card.Img
                  variant="top"
                  src={s.img}
                  className="service-card-img"
                />
                <Card.Body className="d-flex align-items-center justify-content-center flex-column">
                  <Card.Title className="fw-bold text-white">
                    {s.title}
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Services;
