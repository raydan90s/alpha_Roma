import { useState, useRef, useEffect } from "react";
import { Menu, ChevronDown, ChevronUp, X } from "lucide-react";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { scrollToHash, handleScrollToTop } from '../assets/utils/scrollUtils';
import Logo from '../assets/img/logo-nexolegal.png';
import { menuItems } from "../assets/utils/menuItems";
import { generarEnlaceWhatsApp, mensajesWhatsApp } from "../messages/messages";
import { TELEFONO_CONTACTO } from "../config/config";

function Navbar() {
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMobileSubmenu, setActiveMobileSubmenu] = useState(null);
  const timeoutRef = useRef(null);
  const navRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  const handleMouseEnter = (index) => {
    if (window.innerWidth >= 768) {
      clearTimeout(timeoutRef.current);
      setHoveredMenu(index);
    }
  };

  const formatearTelefono = (numero: string) => {
    // Asume que el número siempre empieza con 593 y luego 9 dígitos
    if (numero.startsWith("593") && numero.length === 12) {
      const parte1 = numero.slice(3, 6); // primeros 3 después del código país
      const parte2 = numero.slice(6, 9);
      const parte3 = numero.slice(9, 12);
      return `+593 ${parte1} ${parte2} ${parte3}`;
    }
    return numero; // fallback si no tiene el formato esperado
  };

  const handleMouseLeave = () => {
    if (window.innerWidth >= 768) {
      timeoutRef.current = setTimeout(() => {
        setHoveredMenu(null);
      }, 250);
    }
  };

  const toggleMobileSubmenu = (index) => {
    setActiveMobileSubmenu(activeMobileSubmenu === index ? null : index);
  };

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuOpen && navRef.current && !navRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
        setActiveMobileSubmenu(null); // Close any open submenus
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

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
        setActiveMobileSubmenu(null); // Close any open submenus
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleMenuItemClick = (href: string) => {
    const navigateAndScroll = (path: string, hash?: string) => {
      navigate(path);
      setTimeout(() => {
        handleScrollToTop(); // Scroll to top after navigation
        if (hash) {
          scrollToHash(hash);
        }
      }, 950); // Increase from 100ms to 300msb 
    };

    if (href.startsWith('/about#')) {
      navigateAndScroll('/about', href.split('#')[1]);
    } else if (href.startsWith('/servicios#')) {
      navigateAndScroll('/servicios', href.split('#')[1]);
    } else if (href.startsWith('/camaras#')) {
      navigateAndScroll('/camaras', href.split('#')[1]);
    } else if (href.startsWith('/paquetes#')) {
      navigateAndScroll('/paquetes', href.split('#')[1]);
    } else if (href.startsWith('/seguridad-hogar#')) {
      navigateAndScroll('/seguridad-hogar', href.split('#')[1]);
    } else {
      navigate(href);
      setTimeout(handleScrollToTop, 0); // Scroll to top immediately for direct page navigations
    }
    setHoveredMenu(null);
    setMobileMenuOpen(false);
    setActiveMobileSubmenu(null); // Close any open submenus after navigation
  };

  return (
    <header>
      <div className="relative" ref={navRef}>
        <nav className="bg-secondary text-white shadow-md fixed w-full z-50 border-b border-gray-700">
          <div className="max-w-screen-2xl mx-auto px-4">
            <div className="flex items-center justify-between h-20 w-full">
              {/* Logo - Ahora con posicionamiento centrado en móvil */}
              <div className="md:flex-none flex-1 md:w-auto flex items-center">
                <div className="md:ml-0 w-full md:w-auto flex justify-center md:justify-start">
                  <Link to="/" onClick={() => { handleScrollToTop(); setHoveredMenu(null); setMobileMenuOpen(false); setActiveMobileSubmenu(null); }}>
                    <img src={Logo} alt="Logo" className="h-14 mx-auto md:mx-0 md:ml-6" />
                  </Link>
                </div>
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
                      className={`flex items-center text-white text-lg font-medium px-2 py-1.5 border-b-2 transition-all duration-300 whitespace-nowrap ${hoveredMenu === index
                        ? "border-white text-white"
                        : "border-transparent text-gray-400 hover:text-white"
                        }`}
                      onClick={() => {
                        if (item.linkTo) {
                          handleMenuItemClick(item.linkTo);
                        }
                      }}
                    >
                      {item.title}
                      {item.options && (
                        hoveredMenu === index ? (
                          <ChevronUp className="ml-1 h-4 w-4 text-white" />
                        ) : (
                          <ChevronDown className="ml-1 h-4 w-4 text-white" />
                        )
                      )}
                    </button>
                    {/* Mega menú desplegable (solo desktop) */}
                    {item.options && hoveredMenu === index && (
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
                                <h3 className="text-xl lg:text-2xl font-bold text-white mb-2 lg:mb-4">{item.title}</h3>
                                <p className="text-gray-400 text-sm mb-4">
                                  {item.description}
                                </p>
                                {item.linkTo && (
                                  <Link to={item.linkTo} onClick={() => { handleMenuItemClick(item.linkTo); setHoveredMenu(null); }}>
                                    <a className="text-primary hover:text-white transition-colors duration-300 text-sm font-medium flex items-center">
                                      Conocer acerca de {item.title.toLowerCase()}
                                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                      </svg>
                                    </a>
                                  </Link>
                                )}
                              </div>

                              {/* Columna derecha - Enlaces */}
                              <div className="w-full md:w-2/3 pl-0 md:pl-8 lg:pl-12 mt-4 md:mt-0">
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 lg:gap-8">
                                  {item.options.map((option, i) => (
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
                                                {option.icon && <option.icon className="w-6 h-6 text-white" />}
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
                  </div>
                ))}
              </div>

              {/* Botones de contacto y menú móvil */}
              <div className="flex items-center">
                {/* Botón WhatsApp */}
                <a
                  href={generarEnlaceWhatsApp(mensajesWhatsApp.general)}
                  className={`bg-white hover:bg-hover text-black font-bold px-3 sm:px-6 py-2 rounded-full shadow-md transition-all duration-300 text-xs sm:text-sm whitespace-nowrap flex items-center gap-2 ${mobileMenuOpen ? 'hidden md:flex' : 'hidden md:flex'}`}
                  onClick={() => setMobileMenuOpen(false)} // Close menu on WhatsApp click
                >
                  <img
                    src="https://res.cloudinary.com/dfbpaq83u/image/upload/v1744669038/shrx1oeqzvtkzbvtfp81.png"
                    alt="WhatsApp Logo"
                    className={`h-6 w-auto ${mobileMenuOpen ? 'hidden md:flex' : 'hidden md:flex'}`}
                  />
                  {formatearTelefono(TELEFONO_CONTACTO)}
                </a>

                {/* Botón menú móvil */}
                <button
                  className="text-white md:hidden"
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

        {/* Menú móvil */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-40 mt-20 md:hidden">
            <div className="bg-gradient-to-b from-gray-900 to-gray-800 shadow-xl border-b border-gray-700 h-full overflow-y-auto">
              <div className="px-4 py-6">

                {/* Menú acordeón móvil */}
                <div className="divide-y divide-gray-700">
                  {menuItems.map((item, index) => (
                    <div key={index} className="py-3">
                      <button
                        className="flex items-center justify-between w-full text-white font-medium py-2"
                        onClick={() => {
                          if (item.options) {
                            toggleMobileSubmenu(index);
                          } else {
                            handleMenuItemClick(item.linkTo || '#');
                          }
                        }}
                      >
                        <span>{item.title}</span>
                        {item.options && (
                          activeMobileSubmenu === index ? (
                            <ChevronUp className="h-5 w-5 text-gray-400" />
                          ) : (
                            <ChevronDown className="h-5 w-5 text-gray-400" />
                          )
                        )}
                      </button>

                      {item.options && activeMobileSubmenu === index && (
                        <div className="mt-2 ml-4 space-y-2">
                          {item.options.map((option, i) => (
                            <Link key={i} to={option.href} onClick={() => { handleMenuItemClick(option.href); setMobileMenuOpen(false); }}>
                              <a className="block py-2 px-3 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition duration-200">
                                {option.label}
                              </a>
                            </Link>
                          ))}
                          {item.linkTo && (
                            <Link to={item.linkTo} onClick={() => { handleMenuItemClick(item.linkTo); setMobileMenuOpen(false); }}>
                              <a className="block py-2 px-3 text-primary hover:text-white hover:bg-gray-800 rounded-lg transition duration-200 mt-2 font-medium">
                                Ver {item.title.toLowerCase()} →
                              </a>
                            </Link>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Botón de teléfono móvil */}
                <div className="mt-6">
                  <a
                    href={`tel:${TELEFONO_CONTACTO}`}
                    className="flex items-center justify-center w-full bg-primary hover:bg-primary text-black font-bold py-3 rounded-full shadow-md transition-all duration-300"
                    onClick={() => setMobileMenuOpen(false)} // Close menu on call click
                  >
                    <img
                      src="https://res.cloudinary.com/dfbpaq83u/image/upload/v1744669038/shrx1oeqzvtkzbvtfp81.png" // Reemplaza con la URL de tu icono de WhatsApp
                      alt="WhatsApp"
                      className="h-8 w-auto mr-2" // Ajusta el tamaño y el margen según necesites
                    />
                    {formatearTelefono(TELEFONO_CONTACTO)}
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;