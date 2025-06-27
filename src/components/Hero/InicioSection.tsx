import { Shield, Phone, Calendar } from 'lucide-react';
import fondo from "../../assets/img/Hero/fondo.png";
import { useNavigate } from 'react-router-dom';

interface Props {
  scrollToSection: (id: string) => void;
  telefono: string;
}

const InicioSection: React.FC<Props> = ({ scrollToSection, telefono }) => {
  const navigate = useNavigate();

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black mb-20"
    >
      {/* Fondo */}
      <div
        className="absolute inset-0 bg-cover bg-[center_0%]"
        style={{ backgroundImage: `url(${fondo})` }}
      ></div>

      {/* Círculos decorativos */}
      <div className="absolute top-20 left-5 sm:left-10 w-24 sm:w-32 h-24 sm:h-32 bg-blue-900 rounded-full blur-xl opacity-20"></div>
      <div className="absolute bottom-20 right-5 sm:right-10 w-32 sm:w-48 h-32 sm:h-48 bg-blue-800 rounded-full blur-2xl opacity-10"></div>

      {/* Contenido */}
<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left translate-x-16 sm:translate-x-32">
        <div className="max-w-4xl mx-auto">
          {/* Banner experiencia */}
          <div className="inline-flex items-center space-x-2 bg-blue-900 border border-blue-800 text-blue-300 px-5 sm:px-6 py-2 rounded-full mb-8 transform hover:scale-105 transition-all duration-300 shadow-lg">
            <Shield className="h-5 w-5" />
            <span className="text-xs sm:text-sm font-medium">+25 años de experiencia legal</span>
          </div>

          {/* Título */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            <span className="block mb-1 sm:mb-2">Protegemos tus</span>
            <span className="text-blue-400 block">derechos legales</span>
          </h1>

          {/* Subtítulo */}
          <p className="text-base sm:text-xl text-gray-300 mb-12 max-w-3xl mx-auto sm:mx-0 leading-relaxed font-light">
            Asesoría jurídica especializada con
            <span className="text-blue-400 font-medium"> resultados comprobados</span>.
            <br className="hidden sm:block" />
            Tu tranquilidad es nuestra prioridad.
          </p>

          {/* Botones */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center sm:justify-start items-center mb-16">
            <a
              href={`tel:${telefono}`}
              className="w-full sm:w-auto group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 flex items-center space-x-3 shadow-2xl transform hover:-translate-y-1 hover:scale-105"
            >
              <Phone className="h-5 w-5" />
              <span>Llamar Ahora</span>
            </a>
            <button
              onClick={() => navigate("/consultas")}
              className="w-full sm:w-auto group bg-gray-800 border-2 border-gray-700 text-white hover:bg-gray-700 hover:border-gray-600 px-8 py-4 rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 flex items-center space-x-3 transform hover:-translate-y-1"
            >
              <Calendar className="h-5 w-5 group-hover:text-blue-400" />
              <span>Agendar Consulta</span>
            </button>
          </div>

          {/* Métricas */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center">
            <div className="group text-white p-6 rounded-2xl bg-gray-900 border border-gray-800 hover:bg-gray-800 transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-3xl sm:text-4xl font-bold text-blue-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                500+
              </div>
              <div className="text-xs sm:text-sm text-gray-300 font-medium">Casos exitosos</div>
            </div>
            <div className="group text-white p-6 rounded-2xl bg-gray-900 border border-gray-800 hover:bg-gray-800 transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-3xl sm:text-4xl font-bold text-blue-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                25+
              </div>
              <div className="text-xs sm:text-sm text-gray-300 font-medium">Años de experiencia</div>
            </div>
            <div className="group text-white p-6 rounded-2xl bg-gray-900 border border-gray-800 hover:bg-gray-800 transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-3xl sm:text-4xl font-bold text-blue-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                98%
              </div>
              <div className="text-xs sm:text-sm text-gray-300 font-medium">Satisfacción del cliente</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InicioSection;
