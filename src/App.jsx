import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Contact from './components/Contact';
import Careers from './components/Careers';
import Footer from './components/Footer';
import CareersForm from './components/CareersForm'; // <-- nueva página de formulario
import Home from './components/Home';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Página principal */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Home />
              <AboutUs />
              <Services />
              <Contact />
              <Careers />
            </>
          }
        />

        {/* Página separada para postularse */}
        <Route path="/trabaja" element={<CareersForm />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
