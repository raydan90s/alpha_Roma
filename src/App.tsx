import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ServicesPage from "./pages/services/ServicesPage";
import PackagePage from "./pages/Paquetes/PackagePage";
import AboutUsPage from "./pages/about/aboutUs";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CamerasPage from "./pages/securityCameras/camerasPage";
import SeguridadHogarPage from "./pages/seguridad/SeguridadHogarPage"; // <-- Importa la nueva página
import { HelmetProvider } from 'react-helmet-async';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicios" element={<ServicesPage />} />
          <Route path="/paquetes" element={<PackagePage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/camaras" element={<CamerasPage />} />
          <Route path="/seguridad-hogar" element={<SeguridadHogarPage />} />
        </Routes>
        <Footer />
      </Router>
    </HelmetProvider>
  );
}

export default App;