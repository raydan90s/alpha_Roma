import React, { useState, useRef } from "react";
import { Menu, ChevronDown } from "lucide-react";

function Navbar() {
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const timeoutRef = useRef(null);

  const handleMouseEnter = (index) => {
    clearTimeout(timeoutRef.current);
    setHoveredMenu(index);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setHoveredMenu(null);
    }, 200); // 200ms para dar chance a mover el mouse al menú
  };

  const menuItems = [
    {
      title: "Seguridad para el Hogar",
      options: ["Alarmas", "Sensores de movimiento", "Control de accesos"]
    },
    {
      title: "Seguridad empresarial",
      options: ["Monitoreo 24/7", "Sistemas de control", "Soporte técnico"]
    },
    {
      title: "Cámaras de Seguridad",
      options: ["Cámaras IP", "CCTV", "Grabación en la nube"]
    },
    {
      title: "Servicios",
      options: ["Instalación", "Mantenimiento", "Asesoría"]
    },
    {
      title: "Paquetes y Precios",
      options: ["Plan Básico", "Plan Empresarial", "Plan Premium"]
    }
  ];

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">{/* Logo aquí */}</div>

          <div className="hidden md:flex items-center space-x-8 relative">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <button className="flex items-center text-gray-700 hover:text-blue-600 focus:outline-none transition-colors duration-200">
                  {item.title}
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>

                <div
                  className={`absolute top-10 left-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg z-50 transition-all duration-200 transform origin-top ${
                    hoveredMenu === index
                      ? "scale-100 opacity-100 pointer-events-auto"
                      : "scale-95 opacity-0 pointer-events-none"
                  }`}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  {item.options.map((option, i) => (
                    <a
                      key={i}
                      href="#"
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150"
                    >
                      {option}
                    </a>
                  ))}
                </div>
              </div>
            ))}

            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 ml-4 transition-colors duration-300">
              Get Started
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <Menu className="h-6 w-6 text-gray-700" />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
