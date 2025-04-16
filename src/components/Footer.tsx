import Logo from '../assets/img/logo2.png';
import { Link, useNavigate, useLocation } from 'react-router-dom'; // Import useLocation
import { generarEnlaceWhatsApp, mensajesWhatsApp } from '../messages/messages';
import { handleScrollToTop, scrollToHash } from '../assets/utils/scrollUtils'; // Import scrollToHash

function Footer() {
  const navigate = useNavigate();
  const location = useLocation(); // Get the current location

  const handleNavLinkClick = (path: string, hash?: string) => {
    if (location.pathname === path && hash) {
      scrollToHash(hash.substring(1)); // Scroll if already on the same page
    } else {
      navigate(path + (hash || '')); // Navigate if on a different page
      if (hash) {
        // Small delay to ensure the page is rendered before scrolling
        setTimeout(() => {
          scrollToHash(hash.substring(1));
        }, 100);
      } else {
        handleScrollToTop(); // Scroll to top if no hash
      }
    }
  };

  const handleQuienesSomosClick = () => {
    navigate('/about');
    handleScrollToTop();
  };

  return (
    <footer className="bg-secondary text-white border-t border-gray-700">
      <div className="max-w-screen-2xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo column */}
          <div className="flex flex-col items-center text-center space-y-4">
            <Link to="/" onClick={handleScrollToTop}>
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
                <Link
                  to="/servicios#instalacion"
                  className="text-gray-400 hover:text-primary transition-colors duration-300 text-lg"
                  onClick={() => handleNavLinkClick('/servicios', '#instalacion')}
                >
                  Instalación de Cámaras
                </Link>
              </li>
              <li>
                <Link
                  to="/servicios#monitoreo"
                  className="text-gray-400 hover:text-primary transition-colors duration-300 text-lg"
                  onClick={() => handleNavLinkClick('/servicios', '#monitoreo')}
                >
                  Monitoreo de camaras
                </Link>
              </li>
              <li>
                <Link
                  to="/servicios#asesoria"
                  className="text-gray-400 hover:text-primary transition-colors duration-300 text-lg"
                  onClick={() => handleNavLinkClick('/servicios', '#asesoria')}
                >
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
                <Link to="/about" className="text-gray-400 hover:text-primary transition-colors duration-300 text-lg" onClick={handleQuienesSomosClick}>
                  Quienes somos
                </Link>
              </li>
              <li>
                <a
                  href={generarEnlaceWhatsApp(mensajesWhatsApp.general)}
                  className="text-gray-400 hover:text-primary transition-colors duration-300 text-lg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contáctanos
                </a>
              </li>
            </ul>
          </div>

          {/* Support column */}
          <div>
            <h3 className="text-2xl font-medium text-white mb-4 border-b border-gray-700 pb-2">Soporte y Contacto</h3>

            <ul className="flex justify-start gap-6 mt-4">
              <li>
                <a
                  href={generarEnlaceWhatsApp(mensajesWhatsApp.general)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative inline-block hover:scale-110 transition-transform duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
                >
                  <img
                    src="https://res.cloudinary.com/dfbpaq83u/image/upload/v1744656460/kp2kejpsgioled7msdwl.png"
                    alt="WhatsApp"
                    className="h-9 w-auto"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://facebook.com/novafenixec"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative inline-block hover:scale-110 transition-transform duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
                >
                  <img
                    src="https://res.cloudinary.com/dfbpaq83u/image/upload/v1744656460/fxgwyseejbckecbbsqfw.png"
                    alt="Facebook"
                    className="h-8 w-auto"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/novafenix_ec"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative inline-block hover:scale-110 transition-transform duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
                >
                  <img
                    src="https://res.cloudinary.com/dfbpaq83u/image/upload/v1744656460/wmynznwwap8h3j7rqbmt.png"
                    alt="Instagram"
                    className="h-8 w-auto"
                  />
                </a>
              </li>
              {/* 
              <li>
                <a
                  href="https://tiktok.com/@novafenix"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative inline-block hover:scale-110 transition-transform duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
                >
                  <img
                    src="https://res.cloudinary.com/dfbpaq83u/image/upload/v1744656460/jitj2ib8hcytbva0fky1.png"
                    alt="TikTok"
                    className="h-8 w-auto"
                  />
                </a>
              </li>
              */}
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