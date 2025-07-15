import { Award, Building2, ChevronRight, Zap } from 'lucide-react';
import { useState, useEffect } from 'react';
import { generarEnlaceWhatsApp } from '../../../messages/messages';

interface HeroSASProps {
  mensaje: string;
}

export const HeroSAS = ({ mensaje }: HeroSASProps) => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Función para hacer scroll hacia la sección de servicios
  const handleScrollToServices = () => {
    const element = document.getElementById('services-table');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start', // Esto asegura que el scroll comience desde el inicio del elemento
      });
    }
  };
  return (
    <div className="bg-black text-white min-h-screen flex items-center relative overflow-auto">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-secondary"></div>
      <div className="absolute top-20 right-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-screen-xl mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <div className="inline-block bg-[#2c3e5e] text-white px-6 py-2 rounded-full text-sm font-bold mb-6">
              🚀 Constituye tu SAS YA
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Constitución de
              <span className="text-transparent bg-clip-text bg-highlight"> SAS</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Construye una base empresarial fuerte y sólida desde el principio. Proceso rápido, seguro y con garantía total.
            </p>

            {/* Price Card */}
            <div className="bg-cardPrimary p-6 rounded-2xl mb-8 shadow-2xl">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[#E7EAED] text-sm">Precio único</p>
                  <p className="text-4xl font-bold text-white">$150</p>
                  <p className="text-[#E7EAED] text-sm">Sin importar número de socios</p>
                </div>
                <div className="text-right">
                  <p className="text-[#E7EAED] text-sm">Tiempo estimado</p>
                  <p className="text-2xl font-bold text-white">3-5 días</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleScrollToServices}
                className="bg-button hover:bg-blue-600 hover:scale-105 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg flex items-center justify-center"
              >
                Ver Detalles
                <ChevronRight className="ml-2 w-5 h-5" />
              </button>

              <a href={generarEnlaceWhatsApp(mensaje)}>
                <button
                  className="border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-400 hover:scale-105 hover:text-black transition-all duration-300"
                >
                  Agenda tu consulta
                </button>
              </a>
            </div>
          </div>

          {/* Right Content - Visual */}
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div className="relative">
              <div className="bg-cardPrimary backdrop-blur-sm border border-blue-500/20 rounded-3xl p-8">
                <div className="text-center">
                  <Building2 className="w-24 h-24 text-blue-400 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-white mb-4">Constituye tu S.A.S en tiempo récord</h3>
                  <p className="text-gray-300 mb-6">
                    SAS Express en máximo 5 días y SAS Premium adaptada a tus necesidades en máximo 15 días
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-blue-500/20 p-4 rounded-xl">
                      <Award className="w-8 h-8 text-blue-400 mb-2" />
                      <p className="text-sm text-gray-300">Más de 210 S.A.S constituidas exitosamente</p>
                    </div>
                    <div className="bg-blue-500/20 p-4 rounded-xl">
                      <Zap className="w-8 h-8 text-blue-400 mb-2" />
                      <p className="text-sm text-gray-300">En 10 minutos enviamos toda la información</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
