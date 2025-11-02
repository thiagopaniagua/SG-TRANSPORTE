import { Container, Form, Button } from "react-bootstrap";
import { useState } from "react";
import bgImage from "../assets/form.jpg";

function CareersForm() {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const sendWhatsApp = (e) => {
    e.preventDefault();
    setSending(true);

    const formData = new FormData(e.target);
    const nombre = formData.get("nombre");
    const email = formData.get("email");

    // Tu número de WhatsApp (en formato internacional sin + ni 0 al principio)
    const phone = "5491166395101"; // 👈 reemplazá con tu número, ejemplo: 5491165432109

    const message = `¡Hola! Quiero postularme para trabajar con ustedes.%0A
📄 *Datos del postulante:*%0A
👤 Nombre: ${nombre}%0A
📧 Email: ${email}%0A
Por favor, te adjunto mi CV en este chat.`;

    // Abrir WhatsApp
    const url = `https://wa.me/${phone}?text=${message}`;
    window.open(url, "_blank");

    setSending(false);
    setSent(true);
    e.target.reset();
  };

  return (
    <div
      style={{
        minHeight: "86.6vh",
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <section
        className="py-5 d-flex justify-content-center"
        style={{ marginTop: "100px" }}
      >
        <Container
          className="p-5 rounded-4 shadow-lg"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255,255,255,0.2)",
            maxWidth: "600px",
          }}
        >
          <h2 className="text-center mb-4 text-white fw-bold">
            Postulate para trabajar con nosotros
          </h2>

          <Form onSubmit={sendWhatsApp}>
            <Form.Group className="mb-3">
              <Form.Label className="text-white">Nombre</Form.Label>
              <Form.Control
                type="text"
                name="nombre"
                required
                placeholder="Tu nombre completo"
                style={{
                  borderRadius: "10px",
                  backgroundColor: "rgba(255,255,255,0.1)",
                  color: "#fff",
                  border: "1px solid rgba(255,255,255,0.3)",
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="text-white">Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                required
                placeholder="tuemail@ejemplo.com"
                style={{
                  borderRadius: "10px",
                  backgroundColor: "rgba(255,255,255,0.1)",
                  color: "#fff",
                  border: "1px solid rgba(255,255,255,0.3)",
                }}
              />
            </Form.Group>

            <Form.Group className="mb-4">
              
              <Form.Text className="text-light">
                📎 El CV se adjuntará manualmente en el chat de WhatsApp.
              </Form.Text>
            </Form.Group>

            <div className="text-center">
              <Button
                type="submit"
                disabled={sending}
                className="px-5 py-2 fw-bold"
                style={{
                  backgroundColor: "#1c1c1c",
                  border: "none",
                  borderRadius: "10px",
                  color: "#fff",
                  transition: "0.3s ease",
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = "#00c600ff";
                  e.target.style.color = "#000";
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = "#1c1c1c";
                  e.target.style.color = "#fff";
                }}
              >
                {sending ? "Redirigiendo..." : "Enviar CV por WhatsApp"}
              </Button>
            </div>

            {sent && (
              <p className="text-success mt-3 text-center fw-semibold">
                ✅ ¡Redirigido a WhatsApp con éxito!
              </p>
            )}
          </Form>
        </Container>
      </section>
    </div>
  );
}

export default CareersForm;
