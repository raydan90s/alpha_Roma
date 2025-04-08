import React, { useState, useRef } from "react";
import { Menu, ChevronDown, ChevronUp, Search } from "lucide-react";
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import { scrollToHash } from '../assets/utils/scrollUtils'; // Import the direct scroll function

function Navbar() {
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [showSearch, setShowSearch] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  const timeoutRef = useRef(null);
  const navigate = useNavigate(); // Get the navigate function

  const handleMouseEnter = (index) => {
    clearTimeout(timeoutRef.current);
    setHoveredMenu(index);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setHoveredMenu(null);
    }, 250);
  };

  const handleMenuItemClick = (href: string) => {
    if (href.startsWith('/servicios#')) {
      // If it's a hash link on the services page, navigate and then scroll
      navigate('/servicios');
      // Wait a short moment for the page to render before scrolling
      setTimeout(() => {
        scrollToHash(href.split('#')[1]);
      }, 100); // Adjust the timeout as needed
    } else {
      // For other links, just navigate
      navigate(href);
    }
    setHoveredMenu(null); // Close the mega menu after clicking
  };

  const menuItems = [
    {
      title: "Seguridad para el hogar",
      options: [
        { label: "Sistema de seguridad para casa", href: "/servicios#sistema-seguridad" },
        { label: "Sensores de seguridad", href: "/servicios#sensores-seguridad" },
        { label: "Alarmas de seguridad", href: "/servicios#alarmas-seguridad" },
      ],
    },
    {
      title: "Cámaras de seguridad",
      options: [
        { label: "Cámaras IP", href: "/servicios#camaras-ip" },
        { label: "CCTV", href: "/servicios#cctv" },
        { label: "Grabación en la nube", href: "/servicios#grabacion-nube" },
      ],
    },
    {
      title: "Casa inteligente",
      options: [
        { label: "Automatización", href: "/servicios#automatizacion" },
        { label: "Control por voz", href: "/servicios#control-voz" },
        { label: "Integración de dispositivos", href: "/servicios#integracion-dispositivos" },
      ],
    },
    {
      title: "Servicios",
      options: [
        { label: "Instalación", href: "/servicios#instalacion" },
        { label: "Mantenimiento", href: "/servicios#mantenimiento" },
        { label: "Asesoría", href: "/servicios#asesoria" },
      ],
    },
    {
      title: "Paquetes y precios",
      options: [
        { label: "Plan Básico", href: "/servicios#plan-basico" },
        { label: "Plan Empresarial", href: "/servicios#plan-empresarial" },
        { label: "Plan Premium", href: "/servicios#plan-premium" },
      ],
    },
  ];

  const shouldShowSearch = showSearch || searchFocused;

  return (
    <div className="relative">
      <nav className="bg-secondary text-white shadow-md fixed w-full z-50 border-b border-gray-700">
        <div className="max-w-screen-2xl mx-auto px-4">
          <div className="flex items-center justify-between h-20 w-full">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-black font-bold text-xs">
                {/* Aquí podría ir el icono o la imagen del logo */}
              </div>
              <span className="text-white font-bold text-lg">NovaFenix</span>
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
                    className={`flex items-center text-white text-sm font-medium px-2 py-1.5 border-b-2 transition-all duration-300 whitespace-nowrap ${
                      hoveredMenu === index
                        ? "border-white text-white"
                        : "border-transparent text-gray-400 hover:text-white"
                    }`}
                  >
                    {item.title}
                    {hoveredMenu === index ? (
                      <ChevronUp className="ml-1 h-4 w-4 text-white" />
                    ) : (
                      <ChevronDown className="ml-1 h-4 w-4 text-white" />
                    )}
                  </button>
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
                  className={`absolute right-10 pr-10 pl-4 py-2 rounded-full bg-gray-900 border border-gray-700 text-white text-sm transition-all duration-300 ease-in-out focus:ring-2 focus:ring-primary focus:border-transparent ${
                    shouldShowSearch
                      ? "w-56 opacity-100"
                      : "w-0 opacity-0 pointer-events-none"
                  }`}
                />
                <button
                  onClick={() => setShowSearch(!showSearch)}
                  className="text-white hover:text-primary transition-colors relative z-10 p-2 rounded-full"
                >
                  <Search className="h-5 w-5" />
                </button>
              </div>

              {/* Botón Teléfono */}
              <a
                href="tel:8445917193"
                className="bg-primary hover:bg-primary text-black font-bold px-6 py-2 rounded-full shadow-md transition-all duration-300"
              >
                844.591.7193
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Mega menú desplegable que ocupa todo el ancho */}
      {hoveredMenu !== null && (
        <div
          className="fixed w-full left-0 z-40 mt-20 transition-all duration-300 ease-out"
          style={{
            top: 0,
            transform: `translateY(${hoveredMenu !== null ? '0' : '-100%'})`,
            opacity: hoveredMenu !== null ? 1 : 0,
          }}
          onMouseEnter={() => handleMouseEnter(hoveredMenu)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="w-full bg-gradient-to-b from-gray-900 to-gray-800 shadow-xl border-b border-gray-700 transform transition-all duration-500">
            <div className="max-w-screen-2xl mx-auto px-8 py-8">
              <div className="flex items-start">
                {/* Columna izquierda - Título y descripción */}
                <div className="w-1/3 pr-12 border-r border-gray-700">
                  <h3 className="text-2xl font-bold text-white mb-4">{menuItems[hoveredMenu].title}</h3>
                  <p className="text-gray-400 text-sm mb-4">
                    Descubre nuestras soluciones de {menuItems[hoveredMenu].title.toLowerCase()} diseñadas para proteger lo que más importa.
                  </p>
                  <Link to="/servicios" onClick={() => setHoveredMenu(null)}>
                    <a className="text-primary hover:text-white transition-colors duration-300 text-sm font-medium flex items-center">
                      Ver todos los servicios
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </Link>
                </div>

                {/* Columna derecha - Enlaces */}
                <div className="w-2/3 pl-12">
                  <div className="grid grid-cols-3 gap-8">
                    {menuItems[hoveredMenu].options.map((option, i) => (
                      <div
                        key={i}
                        className="transform transition-all duration-300"
                        style={{
                          transitionDelay: `${i * 70}ms`,
                          opacity: 1,
                          transform: "translateY(0)",
                          animation: `fadeIn 0.5s ease-out ${i * 70}ms both`
                        }}
                      >
                        <Link to={option.href} onClick={() => handleMenuItemClick(option.href)}>
                          <a className="block group">
                            <div className="bg-gray-800 rounded-lg p-4 mb-3 group-hover:bg-gray-700 transition-all duration-300 transform group-hover:scale-105">
                              <div className="w-12 h-12 bg-gray-700 rounded-full mb-4 flex items-center justify-center group-hover:bg-primary transition-all duration-300">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                                </svg>
                              </div>
                              <h4 className="text-white font-medium mb-1">{option.label}</h4>
                              <p className="text-gray-400 text-sm">Soluciones avanzadas para tu seguridad</p>
                            </div>
                          </a>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;