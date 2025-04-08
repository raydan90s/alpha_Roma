import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"; // Asegúrate de que la ruta esté correcta
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; // Asegúrate de que la ruta esté correcta

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
