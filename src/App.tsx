import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"; // Asegúrate de que la ruta esté correcta
import ServicesPage from "./pages/services/ServicesPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; // Asegúrate de que la ruta esté correcta
import AboutUsPage from "./pages/about/aboutUs";
import CamerasPage from "./pages/securityCameras/camerasPage";

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicios" element={<ServicesPage/>} />
        <Route path="/about" element={<AboutUsPage/>} />
        <Route path="/camaras" element={<CamerasPage/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
