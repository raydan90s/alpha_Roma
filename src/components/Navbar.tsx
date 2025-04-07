import React, { useState, useRef } from "react";
import { Menu, ChevronDown, ChevronUp, Search } from "lucide-react";

function Navbar() {
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [hoveredOption, setHoveredOption] = useState(null);
  const [showSearch, setShowSearch] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);

  const timeoutRef = useRef(null);

  const handleMouseEnter = (index) => {
    clearTimeout(timeoutRef.current);
    setHoveredMenu(index);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setHoveredMenu(null);
    }, 200);
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

  const shouldShowSearch = showSearch || searchFocused;

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-14 w-full justify-between">
          {/* 🧭 Menú izquierdo */}
          <div className="hidden md:flex items-center space-x-4">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className={`flex items-center text-sm focus:outline-none transition-all duration-300 ease-in-out px-3 py-1 rounded ${
                    hoveredMenu === index
                      ? "bg-blue-600 text-white"
                      : "bg-transparent text-gray-700 hover:text-blue-600"
                  }`}
                >
                  {item.title}
                  {/* Flecha que cambia de dirección al pasar el mouse */}
                  {hoveredMenu === index ? (
                    <ChevronUp className="ml-1 h-3 w-3 transition-transform duration-200" />
                  ) : (
                    <ChevronDown className="ml-1 h-3 w-3 transition-transform duration-200" />
                  )}
                </button>

                <div
                  className={`absolute top-8 left-0 mt-1 min-w-max bg-white border border-gray-200 rounded shadow-lg z-50 transition-all duration-200 transform origin-top ${
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
                      className={`block px-4 py-1.5 text-sm whitespace-nowrap transition-colors duration-150 ${
                        hoveredOption === `${index}-${i}` 
                          ? "bg-blue-600 text-white" 
                          : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                      }`}
                      onMouseEnter={() => setHoveredOption(`${index}-${i}`)}
                      onMouseLeave={() => setHoveredOption(null)}
                    >
                      {option}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* 🔍 + 📞 TOTAL DERECHA */}
          <div className="hidden md:flex items-center gap-4 relative ml-auto">
            {/* 🔍 Búsqueda */}
            <div className="relative flex items-center">
              <input
                type="text"
                placeholder="Buscar..."
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
                className={`absolute right-10 pr-3 pl-3 py-1 border border-gray-300 rounded-md bg-white shadow-sm text-sm transition-all duration-300 ease-in-out ${
                  shouldShowSearch
                    ? "w-48 opacity-100"
                    : "w-0 opacity-0 pointer-events-none"
                }`}
                style={{ right: '2.5rem' }}
              />
              <button
                onClick={() => setShowSearch(!showSearch)}
                className="text-gray-700 hover:text-blue-600 transition-colors relative z-10"
              >
                <Search className="h-4 w-4" />
              </button>
            </div>

            {/* 📞 Teléfono */}
            <a
              href="tel:+593987654321"
              className="text-xs bg-blue-100 text-blue-700 px-3 py-1.5 rounded hover:bg-blue-200 transition-colors whitespace-nowrap"
            >
              📞 +593 987 654 321
            </a>
          </div>

          {/* 📱 Menú móvil */}
          <div className="md:hidden flex items-center ml-auto">
            <Menu className="h-5 w-5 text-gray-700" />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;