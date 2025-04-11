import React from 'react';
import Logo from '../assets/img/logo2.png';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-secondary text-white border-t border-gray-700">
      <div className="max-w-screen-2xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo column */}
          <div className="flex flex-col space-y-4">
            <Link to="/">
              <img src={Logo} alt="Logo" className="h-20" />
            </Link>
            <p className="text-gray-400 text-sm">
              Soluciones de seguridad inteligentes para tu hogar y negocio.
            </p>
          </div>
          
          {/* Products column */}
          <div>
            <h3 className="text-sm font-medium text-white mb-4 border-b border-gray-700 pb-2">Servicios</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/servicios#instalacion" className="text-gray-400 hover:text-primary transition-colors duration-300 text-sm">
                  Instalación de Cámaras
                </Link>
              </li>
              <li>
                <Link to="/servicios#mantenimiento" className="text-gray-400 hover:text-primary transition-colors duration-300 text-sm">
                  Mantenimiento
                </Link>
              </li>
              <li>
                <Link to="/servicios#asesoria" className="text-gray-400 hover:text-primary transition-colors duration-300 text-sm">
                  Asesoría
                </Link>
              </li>
              <li>
              </li>
            </ul>
          </div>
          
          {/* Company column */}
          <div>
            <h3 className="text-sm font-medium text-white mb-4 border-b border-gray-700 pb-2">Empresa</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-primary transition-colors duration-300 text-sm">
                  Quienes sómos
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-primary transition-colors duration-300 text-sm">
                  Contactanos
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-primary transition-colors duration-300 text-sm">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Support column */}
          <div>
            <h3 className="text-sm font-medium text-white mb-4 border-b border-gray-700 pb-2">Soporte</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/servicios" className="text-gray-400 hover:text-primary transition-colors duration-300 text-sm">
                  Centro de ayuda 
                </Link>
              </li>
              <li>
                <Link to="/servicios" className="text-gray-400 hover:text-primary transition-colors duration-300 text-sm">
                  Preguntas y respuestas
                </Link>
              </li>
              <li>
                <Link to="/servicios" className="text-gray-400 hover:text-primary transition-colors duration-300 text-sm">
                  Instalacion
                </Link>
              </li>
              <li>
                <a href="tel:+593991974496" className="text-primary hover:text-white transition-colors duration-300 text-sm font-medium">
                099 197 4496
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom section with copyright */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-xs text-gray-400">&copy; 2025 NovaFenix. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;