import { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import bgImage from "../assets/contact-bg.jpg"; // 👉 coloca aquí tu imagen de fondo

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setError(true);
      setSubmitted(false);
      return;
    }

    setError(false);
    setSubmitted(true);

    const phoneNumber = "5491166395101"; // número oficial del negocio

    const textMessage = `📩 *Nuevo mensaje de contacto desde la web SG Transporte*%0A
👤 *Nombre:* ${formData.name}%0A
✉️ *Email:* ${formData.email}%0A
💬 *Mensaje:* ${formData.message}`;

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${textMessage}`;
    window.open(whatsappURL, "_blank");

    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="py-5"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        color: "#fff",
      }}
    >
      <Container>
        <motion.h2
          className="text-center mb-4 fw-bold"
          style={{ color: "#fff" }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Contactanos
        </motion.h2>

        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Form
                onSubmit={handleSubmit}
                className="p-4 shadow-lg rounded-4"
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.6)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255,255,255,0.2)",
                }}
              >
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label style={{ color: "#fff" }}>Nombre</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Tu nombre completo"
                    value={formData.name}
                    onChange={handleChange}
                    style={{
                      borderRadius: "10px",
                      backgroundColor: "rgba(255, 255, 255, 0.31)",
                      color: "#fff",
                    }}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label style={{ color: "#fff" }}>
                    Correo electrónico
                  </Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="tuemail@ejemplo.com"
                    value={formData.email}
                    onChange={handleChange}
                    style={{
                      borderRadius: "10px",
                      backgroundColor: "rgba(255, 255, 255, 0.31)",
                      color: "#fff",
                    }}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formMessage">
                  <Form.Label style={{ color: "#fff" }}>Mensaje</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="message"
                    rows={4}
                    placeholder="Escribí tu mensaje aquí..."
                    value={formData.message}
                    onChange={handleChange}
                    style={{
                      borderRadius: "10px",
                      backgroundColor: "rgba(255, 255, 255, 0.31)",
                      color: "#fff",
                    }}
                  />
                </Form.Group>

                <div className="text-center">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      type="submit"
                      style={{
                        backgroundColor: "#1c1c1c",
                        border: "none",
                        borderRadius: "10px",
                        padding: "10px 30px",
                        color: "#fff",
                        transition: "0.3s ease",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "10px",
                      }}
                      onMouseOver={(e) => {
                        e.target.style.backgroundColor = "#00b215ff";
                        e.target.style.color = "#000";
                      }}
                      onMouseOut={(e) => {
                        e.target.style.backgroundColor = "#1c1c1c";
                        e.target.style.color = "#fff";
                      }}
                    >
                      <FaWhatsapp size={20} /> Enviar mensaje
                    </Button>
                  </motion.div>
                </div>

                {error && (
                  <Alert
                    variant="danger"
                    className="mt-3 text-center fw-semibold"
                  >
                    ⚠️ Por favor completá todos los campos antes de enviar.
                  </Alert>
                )}

                {submitted && (
                  <Alert
                    variant="success"
                    className="mt-3 text-center fw-semibold"
                  >
                    ✅ Redirigiendo a WhatsApp...
                  </Alert>
                )}
              </Form>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;

