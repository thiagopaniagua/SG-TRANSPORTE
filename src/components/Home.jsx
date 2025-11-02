import { FaWhatsapp } from "react-icons/fa";

function Home() {
  return (
    <div style={{ position: "relative", minHeight: "0vh" }}>
 
      <a
        href="https://wa.me/5491166395101?text=¡Hola!%20Quisiera%20hacer%20una%20consulta%20sobre%20sus%20servicios."
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "fixed",
          bottom: "25px",
          right: "25px",
          backgroundColor: "#25D366",
          borderRadius: "50%",
          width: "60px",
          height: "60px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
          zIndex: "1000",
          transition: "transform 0.3s ease",
        }}
        onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
        onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1.0)")}
      >
        <FaWhatsapp size={35} color="#fff" />
      </a>
    </div>
  );
}

export default Home;
