import React, { useState, useRef, useEffect } from "react";
import { Menu, ChevronDown, ChevronUp, Search, X } from "lucide-react";
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import { scrollToHash } from '../assets/utils/scrollUtils'; // Import the direct scroll function
import Logo from '../assets/img/logo2.png'; // Import your logo image

function Navbar() {
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [showSearch, setShowSearch] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMobileSubmenu, setActiveMobileSubmenu] = useState(null);
  const timeoutRef = useRef(null);
  const navRef = useRef(null);
  const navigate = useNavigate(); // Get the navigate function

  const handleMouseEnter = (index) => {
    if (window.innerWidth >= 768) { // Only on desktop
      clearTimeout(timeoutRef.current);
      setHoveredMenu(index);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth >= 768) { // Only on desktop
      timeoutRef.current = setTimeout(() => {
        setHoveredMenu(null);
      }, 250);
    }
  };

  const toggleMobileSubmenu = (index) => {
    setActiveMobileSubmenu(activeMobileSubmenu === index ? null : index);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [mobileMenuOpen]);

  // Close mobile menu on resize if screen becomes large
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleMenuItemClick = (href: string) => {
    if (href.startsWith('/about#')) {
      navigate('/about');
      setTimeout(() => {
        scrollToHash(href.split('#')[1]);
      }, 100);
    } else if (href.startsWith('/servicios#')) {
      navigate('/servicios');
      setTimeout(() => {
        scrollToHash(href.split('#')[1]);
      }, 100);
    } else {
      navigate(href);
    }
    setHoveredMenu(null); // Close the mega menu after clicking
  };

  const menuItems = [
    {
      title: "Quienes somos",
      description: "Conoce nuestra historia, misión y los valores que nos definen.",
      linkTo: "/about",
      options: [
        { label: "Misión", href: "/about#mision", description: "Entiende nuestro propósito fundamental y lo que nos impulsa." },
        { label: "Visión", href: "/about#vision", description: "Descubre hacia dónde aspiramos y nuestros objetivos a largo plazo." },
        { label: "Valores", href: "/about#valores", description: "Conoce los principios que guían cada una de nuestras acciones." },
      ],
    },
    {
      title: "Seguridad para el hogar",
      description: "Soluciones integrales para proteger tu espacio personal y familiar.",
      linkTo: "/servicios#seguridad-hogar",
      options: [
        { label: "Sistema de seguridad para casa", href: "/servicios#sistema-seguridad", description: "Protección integral para tu hogar con tecnología avanzada." },
        { label: "Sensores de seguridad", href: "/servicios#sensores-seguridad", description: "Detecta cualquier amenaza en puertas, ventanas y espacios interiores." },
        { label: "Alarmas de seguridad", href: "/servicios#alarmas-seguridad", description: "Sistemas de alerta eficientes para disuadir intrusos y notificar emergencias." },
      ],
    },
    {
      title: "Cámaras de seguridad",
      description: "Vigilancia avanzada para mantener tus propiedades seguras y monitoreadas.",
      linkTo: "/servicios#camaras-seguridad",
      options: [
        { label: "Cámaras IP", href: "/servicios#camaras-ip", description: "Vigilancia remota de alta definición con acceso desde cualquier dispositivo." },
        { label: "CCTV", href: "/servicios#cctv", description: "Circuitos cerrados de televisión para una supervisión continua y grabación local." },
        { label: "Grabación en la nube", href: "/servicios#grabacion-nube", description: "Almacenamiento seguro de tus grabaciones de video en la nube." },
      ],
    },
    {
      title: "Servicios",
      description: "Nuestra gama de servicios diseñados para una implementación y soporte sin problemas.",
      linkTo: "/servicios#nuestros-servicios",
      options: [
        { label: "Instalación", href: "/servicios#instalacion", description: "Instalación profesional y configuración de todos nuestros sistemas." },
        { label: "Mantenimiento", href: "/servicios#mantenimiento", description: "Revisiones periódicas y soporte técnico para asegurar el funcionamiento óptimo." },
        { label: "Asesoría", href: "/servicios#asesoria", description: "Consultoría experta para encontrar la solución de seguridad perfecta para ti." },
      ],
    },
    {
      title: "Paquetes y precios",
      description: "Encuentra el plan que mejor se adapte a tus necesidades y presupuesto.",
      linkTo: "/servicios#paquetes-precios",
      options: [
        { label: "Plan Básico", href: "/servicios#plan-basico", description: "Soluciones de seguridad esenciales para hogares pequeños." },
        { label: "Plan Empresarial", href: "/servicios#plan-empresarial", description: "Seguridad robusta y escalable para negocios de todos los tamaños." },
        { label: "Plan Premium", href: "/servicios#plan-premium", description: "La máxima protección con funcionalidades avanzadas y personalización." },
      ],
    },
  ];

  const shouldShowSearch = showSearch || searchFocused;

  return (
    <div className="relative" ref={navRef}>
      <nav className="bg-secondary text-white shadow-md fixed w-full z-50 border-b border-gray-700">
        <div className="max-w-screen-2xl mx-auto px-4">
          <div className="flex items-center justify-between h-20 w-full">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <Link to="/">
                <img src={Logo} alt="Logo" className="h-12 ml-6" />
              </Link>          
            </div>

            {/* Menú para dispositivos medianos y grandes */}
            <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
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
            <div className="flex items-center">
              {/* Buscador */}
              <div className="relative mr-2 sm:mr-6">
                <input
                  type="text"
                  placeholder="Buscar..."
                  onFocus={() => setSearchFocused(true)}
                  onBlur={() => setSearchFocused(false)}
                  className={`absolute right-10 pr-10 pl-4 py-2 rounded-full bg-gray-900 border border-gray-700 text-white text-sm transition-all duration-300 ease-in-out focus:ring-2 focus:ring-primary focus:border-transparent ${
                    shouldShowSearch
                      ? "w-32 sm:w-56 opacity-100"
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
                className="bg-primary hover:bg-primary text-black font-bold px-3 sm:px-6 py-2 rounded-full shadow-md transition-all duration-300 text-xs sm:text-sm whitespace-nowrap"
              >
                844.591.7193
              </a>

              {/* Botón menú móvil */}
              <button
                className="ml-4 text-white md:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mega menú desplegable que ocupa todo el ancho (solo desktop) */}
      {hoveredMenu !== null && (
        <div
          className="fixed w-full left-0 z-40 mt-20 transition-all duration-300 ease-out hidden md:block"
          style={{
            top: 0,
            transform: `translateY(${hoveredMenu !== null ? '0' : '-100%'})`,
            opacity: hoveredMenu !== null ? 1 : 0,
          }}
          onMouseEnter={() => handleMouseEnter(hoveredMenu)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="w-full bg-gradient-to-b from-gray-900 to-gray-800 shadow-xl border-b border-gray-700 transform transition-all duration-500">
            <div className="max-w-screen-2xl mx-auto px-4 lg:px-8 py-6 lg:py-8">
              <div className="flex flex-col md:flex-row items-start">
                {/* Columna izquierda - Título y descripción */}
                <div className="w-full md:w-1/3 pr-0 md:pr-8 lg:pr-12 border-b md:border-b-0 md:border-r border-gray-700 pb-4 md:pb-0">
                  <h3 className="text-xl lg:text-2xl font-bold text-white mb-2 lg:mb-4">{menuItems[hoveredMenu].title}</h3>
                  <p className="text-gray-400 text-sm mb-4">
                    {menuItems[hoveredMenu].description}
                  </p>
                  <Link to={menuItems[hoveredMenu].linkTo} onClick={() => setHoveredMenu(null)}>
                    <a className="text-primary hover:text-white transition-colors duration-300 text-sm font-medium flex items-center">
                      Conocer acerca de {menuItems[hoveredMenu].title.toLowerCase()}
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </Link>
                </div>

                {/* Columna derecha - Enlaces */}
                <div className="w-full md:w-2/3 pl-0 md:pl-8 lg:pl-12 mt-4 md:mt-0">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 lg:gap-8">
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
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438z"></path>
                                </svg>
                              </div>
                              <h4 className="text-white font-medium mb-1">{option.label}</h4>
                              <p className="text-gray-400 text-sm">{option.description || "Más detalles sobre esta opción."}</p>
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

      {/* Menú móvil */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 mt-20 md:hidden">
          <div className="bg-gradient-to-b from-gray-900 to-gray-800 shadow-xl border-b border-gray-700 h-full overflow-y-auto">
            <div className="px-4 py-6">
              {/* Buscador móvil */}
              <div className="relative mb-6">
                <input
                  type="text"
                  placeholder="Buscar..."
                  className="w-full pr-10 pl-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white text-sm focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <Search className="absolute right-3 top-3 h-5 w-5 text-gray-400" />
              </div>

              {/* Menú acordeón móvil */}
              <div className="divide-y divide-gray-700">
                {menuItems.map((item, index) => (
                  <div key={index} className="py-3">
                    <button
                      className="flex items-center justify-between w-full text-white font-medium py-2"
                      onClick={() => toggleMobileSubmenu(index)}
                    >
                      <span>{item.title}</span>
                      {activeMobileSubmenu === index ? (
                        <ChevronUp className="h-5 w-5 text-gray-400" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-gray-400" />
                      )}
                    </button>
                    
                    {activeMobileSubmenu === index && (
                      <div className="mt-2 ml-4 space-y-2">
                        {item.options.map((option, i) => (
                          <Link key={i} to={option.href}>
                            <a className="block py-2 px-3 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition duration-200">
                              {option.label}
                            </a>
                          </Link>
                        ))}
                        <Link to="/servicios">
                          <a className="block py-2 px-3 text-primary hover:text-white hover:bg-gray-800 rounded-lg transition duration-200 mt-2 font-medium">
                            Ver todos los servicios →
                          </a>
                        </Link>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Botón de teléfono móvil */}
              <div className="mt-6">
                <a
                  href="tel:8445917193"
                  className="flex items-center justify-center w-full bg-primary hover:bg-primary text-black font-bold py-3 rounded-full shadow-md transition-all duration-300"
                >
                  Llamar ahora: 844.591.7193
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;