import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ServicesPage from "./pages/services/ServicesPage";
import PackagePage from "./pages/Paquetes/PackagePage"; // <-- aquí importas tu nueva página
import AboutUsPage from "./pages/about/aboutUs"; // <-- aquí importas tu nueva página
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicios" element={<ServicesPage />} />
        <Route path="/paquetes" element={<PackagePage />} /> {/* <- nueva ruta */}
        <Route path="/about" element={<AboutUsPage/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
