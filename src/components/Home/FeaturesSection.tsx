// src/components/FeaturesSection.tsx

import React from 'react';

interface Feature {
  title: string;
  description: string;
  icon: JSX.Element;
  bgColor: string;
}

const features: Feature[] = [
  {
    title: 'Sin compartir ingresos. Nunca.',
    description: 'Tú haces la instalación, tú cosechas las recompensas. Control total de tu negocio.',
    icon: (
      <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"/>
      </svg>
    ),
    bgColor: 'bg-green-500/20',
  },
  {
    title: 'Haz crecer tu negocio, no el de otros.',
    description: 'Eres dueño del 100% de lo que generas. Cada instalación es tuya.',
    icon: (
      <svg className="w-6 h-6 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M13 10V3L4 14h7v7l9-11h-7z"/>
      </svg>
    ),
    bgColor: 'bg-pink-500/20',
  },
  {
    title: 'Diseñado para escalar.',
    description: 'Sueña en grande. No hay límites en lo que puedes lograr y ganar.',
    icon: (
      <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"/>
      </svg>
    ),
    bgColor: 'bg-yellow-500/20',
  },
];

const TELEFONO_CONTACTO = '593990939154';

const generarEnlaceWhatsApp = (numero: string) =>
  `https://wa.me/${numero}?text=Hola%2C%20quiero%20más%20información%20sobre%20NovaFenix`;

const FeaturesSection: React.FC = () => {
  return (
    <section className='Features'>
      <div className="py-20 bg-secondary relative overflow-hidden">
        {/* Fondo decorativo */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500 rounded-full blur-2xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500 rounded-full blur-2xl"></div>
        </div>
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: '20px 20px'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Lado Izquierdo */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-5xl md:text-6xl font-bold text-accent leading-tight">
                  NexoLegal
                  <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-hover">
                    TOMA TODO
                  </span>
                </h2>
                <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
                  Con 40 años de experiencia combinada, nuestro equipo de abogados expertos en distintas áreas del derecho, 
                  ha logrado resultados sobresalientes para nuestros clientes. En NexoLegal, su éxito es nuestra prioridad.
                </p>
              </div>
              <button
                onClick={() => window.open(generarEnlaceWhatsApp(TELEFONO_CONTACTO), '_blank')}
                className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Comenzar Ahora
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </button>
            </div>

            {/* Lado Derecho - Features */}
            <div className="space-y-6">
              {features.map((feature, idx) => (
                <div key={idx}
                     className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:bg-gray-800/70 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="flex items-start space-x-4">
                    <div className={`flex-shrink-0 w-12 h-12 ${feature.bgColor} rounded-xl flex items-center justify-center`}>
                      {feature.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
