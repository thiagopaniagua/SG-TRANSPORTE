import { Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import bgImage from "../assets/contact-bg.jpg"; // 👉 misma imagen que usa Contact

function CareersSection() {
  const navigate = useNavigate();

  return (
    <section
      id="careers"
      className="py-5"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        color: "#fff",
      }}
    >
      <Container
        className="text-center p-5 rounded-4 shadow-lg"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255,255,255,0.2)",
        }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-4 fw-bold"
          style={{ color: "#fff" }}
        >
          ¿Querés formar parte de nuestro equipo?
        </motion.h2>

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            size="lg"
            className="px-5 py-3 fw-bold rounded-pill"
            style={{
              backgroundColor: "#1c1c1c",
              border: "none",
              color: "#fff",
              transition: "0.3s ease",
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = "#ed1919ff";
              e.target.style.color = "#000";
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = "#1c1c1c";
              e.target.style.color = "#fff";
            }}
            onClick={() => navigate("/trabaja")}
          >
            Trabajá con nosotros
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}

export default CareersSection;
