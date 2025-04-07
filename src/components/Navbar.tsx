import React, { useState, useRef } from "react";
import { Menu, ChevronDown, Search } from "lucide-react";

function Navbar() {
  const [hoveredMenu, setHoveredMenu] = useState(null);
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
        <div className="flex items-center h-16 w-full justify-between">

          {/* 🧭 Menú izquierdo */}
          <div className="hidden md:flex items-center space-x-8 flex-shrink-0">
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

            {/* ⛔️ Espacio de separación igual al input de búsqueda */}
            <div className="min-w-[192px]"></div>
          </div>

          {/* 🔍 + 📞 TOTAL DERECHA */}
          <div className="hidden md:flex items-center gap-4 relative">
            {/* 🔍 Búsqueda */}
            <div className="relative flex items-center">
              <input
                type="text"
                placeholder="Buscar..."
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
                className={`absolute right-10 pr-3 pl-3 py-1 border border-gray-300 rounded-md bg-white shadow-md text-sm transition-all duration-300 ease-in-out ${
                  shouldShowSearch
                    ? "w-48 opacity-100"
                    : "w-0 opacity-0 pointer-events-none"
                }`}
                style={{ right: '2.5rem' }} // Este es el ajuste para el espacio entre lupa y búsqueda
              />
              <button
                onClick={() => setShowSearch(!showSearch)}
                className="text-gray-700 hover:text-blue-600 transition-colors relative z-10"
              >
                <Search className="h-5 w-5" />
              </button>
            </div>

            {/* 📞 Teléfono */}
            <a
              href="tel:+593987654321"
              className="text-sm bg-blue-100 text-blue-700 px-4 py-2 rounded-lg hover:bg-blue-200 transition-colors whitespace-nowrap"
            >
              📞 +593 987 654 321
            </a>
          </div>

          {/* 📱 Menú móvil */}
          <div className="md:hidden flex items-center ml-auto">
            <Menu className="h-6 w-6 text-gray-700" />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
