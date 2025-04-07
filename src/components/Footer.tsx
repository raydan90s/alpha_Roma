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
      title: "weuiohsdhusdui",
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
    <nav className="bg-black text-white shadow-md fixed w-full z-50 border-b border-gray-700">
      <div className="max-w-screen-2xl mx-auto px-4">
        <div className="flex items-center justify-between h-20 w-full">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 rounded-full bg-yellow-400 flex items-center justify-center text-black font-bold text-xs">
              
            </div>
            <span className="text-white font-bold text-lg">NovaFenixMarholaajhhdiudui</span>
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
                  className={`flex items-center text-sm font-medium px-2 py-1.5 border-b-2 transition-all duration-300 whitespace-nowrap ${
                    hoveredMenu === index
                      ? "border-white text-white"
                      : "border-transparent text-gray-400 hover:text-white"
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
                  className={`absolute top-full left-0 w-64 bg-gray-900 text-white rounded shadow-xl z-50 mt-2 transition-all duration-200 overflow-hidden ${
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
                      className="block px-5 py-2 text-sm text-white hover:bg-gray-800 transition-all"
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
                className={`absolute right-10 pr-10 pl-4 py-2 rounded-full bg-gray-900 border border-gray-700 text-white text-sm transition-all duration-300 ease-in-out focus:ring-2 focus:ring-yellow-400 focus:border-transparent ${
                  shouldShowSearch
                    ? "w-56 opacity-100"
                    : "w-0 opacity-0 pointer-events-none"
                }`}
              />
              <button
                onClick={() => setShowSearch(!showSearch)}
                className="text-white hover:text-yellow-500 transition-colors relative z-10 p-2 rounded-full"
              >
                <Search className="h-5 w-5" />
              </button>
            </div>

            {/* Botón Teléfono */}
            <a
              href="tel:8445917193"
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-6 py-2 rounded-full shadow-md transition-all duration-300"
            >
               844.591.7193
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;