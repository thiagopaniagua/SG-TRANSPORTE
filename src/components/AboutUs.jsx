import { Container, Row, Col, Image } from "react-bootstrap";
import { motion } from "framer-motion";
import A1 from "../assets/A1.jpg";

function AboutUs() {
  return (
    <section id="about" className="py-5 bg-light">
      <Container>
        <Row className="align-items-center mb-5">
          <Col
            md={6}
            className="d-flex justify-content-center align-items-center mb-4 mb-md-0"
          >
            <Image
              src={A1}
              fluid
              rounded
              style={{ maxHeight: "350px", objectFit: "cover" }}
            />
          </Col>
          <Col md={6}>
            <h2 className="mb-3">Acerca de SG Transporte</h2>
            <p>
              En SG Transporte nos especializamos en brindar soluciones confiables y eficientes
              para el traslado de cargas. Nuestro compromiso es garantizar que cada envío
              llegue en tiempo y forma, ofreciendo seguridad y respaldo en cada kilómetro
              recorrido.
            </p>
            <p>
              Contamos con un equipo capacitado y una flota adaptada a diferentes necesidades
              logísticas, lo que nos permite responder con rapidez y flexibilidad a los requerimientos
              de nuestros clientes.
            </p>
            <p>
              Creemos que el transporte no es solo mover productos, sino generar confianza,
              construir relaciones y ser un aliado estratégico para el crecimiento de quienes
              confían en nosotros.
            </p>
            <p>
              <strong>En SG Transporte, tu carga es nuestra prioridad.</strong>
            </p>
          </Col>
        </Row>

        {/* Mapa de ubicación con animación */}
        <Row className="justify-content-center">
          <Col md={10} lg={8}>
            <h4 className="text-center mb-4">Dónde estamos</h4>

            <motion.div
              className="map-container text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              style={{ marginBottom: "40px" }}
            >
              <iframe
                title="Ubicación SG Transporte"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.3240057644355!2d-58.56704052484897!3d-34.622447572945744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb76e640cf037%3A0x78637b0ee2f507db!2sLos%20Andes%201351%2C%20B1672%20Villa%20Bernardo%20Monteagudo%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1728832078236!5m2!1ses!2sar"
                width="100%"
                height="350"
                style={{
                  border: 0,
                  borderRadius: "15px",
                  maxWidth: "100%",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
                }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AboutUs;
