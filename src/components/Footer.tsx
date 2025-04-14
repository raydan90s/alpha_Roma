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
                <a
                  href={generarEnlaceWhatsApp(mensajesWhatsApp.general)}
                  className="text-gray-400 hover:text-primary transition-colors duration-300 text-lg"
                  target="_blank" // Para abrir en una nueva pestaña (opcional)
                  rel="noopener noreferrer" // Recomendado por seguridad con target="_blank"
                >
                  Contáctanos
                </a>
              </li>
            </ul>
          </div>

          {/* Support column */}
          <div>
  <h3 className="text-2xl font-medium text-white mb-4 border-b border-gray-700 pb-2">Soporte</h3>

  <ul className="flex justify-start gap-6 mt-4">
    <li>
      <a
        href={generarEnlaceWhatsApp(mensajesWhatsApp.general)}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:scale-110 transition-transform duration-300"
      >
        <img
          src="https://res.cloudinary.com/dfbpaq83u/image/upload/v1744403721/ithlnsn8gw8h6up7rn9s.png"
          alt="WhatsApp"
          className="h-10 w-auto"
        />
      </a>
    </li>
    <li>
      <a
        href="https://facebook.com/novafenix"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:scale-110 transition-transform duration-300"
      >
        <img
          src="https://res.cloudinary.com/dfbpaq83u/image/upload/v1743455662/jx1d9odyq8fqf0is4wdr.png"
          alt="Facebook"
          className="h-10 w-auto"
        />
      </a>
    </li>
    <li>
      <a
        href="https://instagram.com/novafenix"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:scale-110 transition-transform duration-300"
      >
        <img
          src="https://res.cloudinary.com/dfbpaq83u/image/upload/v1743455663/nblvjeaujdoo8ndazdz7.png"
          alt="Instagram"
          className="h-10 w-auto"
        />
      </a>
    </li>
    <li>
      <a
        href="https://tiktok.com/@novafenix"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:scale-110 transition-transform duration-300"
      >
        <img
          src="https://res.cloudinary.com/dfbpaq83u/image/upload/v1743455663/nblvjeaujdoo8ndazdz7.png"
          alt="TikTok"
          className="h-10 w-auto"
        />
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