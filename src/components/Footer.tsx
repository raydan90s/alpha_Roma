import React from 'react';
import Logo from '../assets/img/logo2.png';
import { Link } from 'react-router-dom';
import { generarEnlaceWhatsApp, mensajesWhatsApp } from '../messages/messages';

function Footer() {
  return (
    <footer className="bg-secondary text-white border-t border-gray-700">
      <div className="max-w-screen-2xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo column */}
          <div className="flex flex-col items-center text-center space-y-4">
            <Link to="/">
              <img src={Logo} alt="Logo" className="h-20" />
            </Link>
            <p className="text-gray-400 text-sm">
              Soluciones de seguridad inteligentes para tu hogar y negocio.
            </p>
          </div>
          {/* Products column */}
          <div>
            <h3 className="text-2xl font-medium text-white mb-4 border-b border-gray-700 pb-2">Servicios</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/servicios#instalacion" className="text-gray-400 hover:text-primary transition-colors duration-300 text-lg">
                  Instalación de Cámaras
                </Link>
              </li>
              <li>
                <Link to="/servicios#monitoreo" className="text-gray-400 hover:text-primary transition-colors duration-300 text-lg">
                  Monitoreo de camaras
                </Link>
              </li>
              <li>
                <Link to="/servicios#asesoria" className="text-gray-400 hover:text-primary transition-colors duration-300 text-lg">
                  Asesoría
                </Link>
              </li>
              <li>
              </li>
            </ul>
          </div>

          {/* Company column */}
          <div>
            <h3 className="text-2xl font-medium text-white mb-4 border-b border-gray-700 pb-2">Empresa</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-primary transition-colors duration-300 text-lg">
                  Quienes somos
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-primary transition-colors duration-300 text-lg">
                  Contáctanos
                </Link>
              </li>
            </ul>
          </div>

          {/* Support column */}
          <div>
            <h3 className="text-2xl font-medium text-white mb-4 border-b border-gray-700 pb-2">Soporte</h3>
            <ul className="space-y-2">

              <li>
                <Link to="/servicios#mantenimiento" className="text-gray-400 hover:text-primary transition-colors duration-300 text-lg">
                  Instalacion y mantenimiento
                </Link>
              </li>
              <li>
                <a
                  href={generarEnlaceWhatsApp(mensajesWhatsApp.general)}
                  className="flex items-center text-primary hover:text-white transition-colors duration-300 text-lg font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://res.cloudinary.com/dfbpaq83u/image/upload/v1744403721/ithlnsn8gw8h6up7rn9s.png"
                    alt="WhatsApp"
                    className="inline-block w-auto h-8 mr-2" // Agregué mr-2 para separar la imagen del texto
                  />
                  <span>099 197 4496</span> {/* O puedes usar directamente el texto dentro del <a> */}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section with copyright */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-sm text-gray-400">&copy; 2025 NovaFenix. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;