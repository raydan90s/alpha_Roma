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
    }, 250);
  };

  const menuItems = [
    {
      title: "Seguridad para el hogar",
      options: ["Sistema de seguridad para casa", "Sensores de seguridad", "Alarmas de seguridad"],
    },
    {
      title: "Cámaras de seguridad",
      options: ["Cámaras IP", "CCTV", "Grabación en la nube"],
    },
    {
      title: "Casa inteligente",
      options: ["Automatización", "Control por voz", "Integración de dispositivos"],
    },
    {
      title: "Servicios",
      options: ["Instalación", "Mantenimiento", "Asesoría"],
    },
    {
      title: "Paquetes y precios",
      options: ["Plan Básico", "Plan Empresarial", "Plan Premium"],
    },
  ];

  const shouldShowSearch = showSearch || searchFocused;

  return (
    <nav className="bg-white shadow-md fixed w-full z-50 border-b border-gray-200">
      <div className="px-4 md:px-8 xl:px-16 mx-auto w-full">
        <div className="flex items-center justify-between h-20 w-full">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-yellow-400 to-orange-400 flex items-center justify-center text-white font-bold text-xs">
              🏠
            </div>
            <span className="text-black font-bold text-lg">NovaFenix</span>
          </div>

          {/* Menú */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className={`flex items-center text-sm font-medium px-2 py-1.5 border-b-2 transition-all duration-300 ${
                    hoveredMenu === index ? "border-black text-black" : "border-transparent text-gray-700 hover:text-black"
                  }`}
                >
                  {item.title}
                  {hoveredMenu === index ? (
                    <ChevronUp className="ml-1 h-4 w-4" />
                  ) : (
                    <ChevronDown className="ml-1 h-4 w-4" />
                  )}
                </button>
                <div
                  className={`absolute top-full left-0 w-72 bg-white rounded shadow-xl z-50 mt-2 transition-all duration-200 overflow-hidden ${
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
                      className="block px-5 py-3 text-sm text-gray-700 hover:bg-gray-100 hover:text-black transition-all"
                    >
                      {option}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Buscador + Teléfono */}
          <div className="flex items-center space-x-6">
            {/* Buscador */}
            <div className="relative">
              <input
                type="text"
                placeholder="Buscar..."
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
                className={`absolute right-10 pr-10 pl-4 py-2 rounded-full bg-gray-100 border border-gray-300 text-gray-800 text-sm transition-all duration-300 ease-in-out focus:ring-2 focus:ring-yellow-400 focus:border-transparent ${
                  shouldShowSearch
                    ? "w-56 opacity-100"
                    : "w-0 opacity-0 pointer-events-none"
                }`}
                style={{ outline: "none" }}
              />
              <button
                onClick={() => setShowSearch(!showSearch)}
                className="text-black hover:text-yellow-500 transition-colors relative z-10 p-2 rounded-full"
              >
                <Search className="h-5 w-5" />
              </button>
            </div>

            {/* Botón teléfono */}
            <a
              href="tel:8445917193"
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-6 py-2 rounded-full shadow-md transition-all duration-300"
            >
              📞 844.591.7193
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
