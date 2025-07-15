// src/components/FeaturesSection.tsx

import React from 'react';
import { generarEnlaceWhatsApp, mensajesWhatsApp } from "../../messages/messages"; // Ajusta la ruta según tu estructura

interface Feature {
  title: string;
  description: string;
  icon: JSX.Element;
  bgColor: string;
}

const features: Feature[] = [
  {
    title: 'Experiencia Comprobada',
    description: 'Con 40 años de experiencia combinada, nuestro equipo de abogados expertos garantiza resultados excepcionales en cada caso.',
    icon: (
      <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
      </svg>
    ),
    bgColor: 'bg-blue-500/20',
  },
  {
    title: 'Atención Personalizada',
    description: 'Cada caso es único. Ofrecemos asesoría jurídica especializada y personalizada para proteger tus intereses.',
    icon: (
      <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
      </svg>
    ),
    bgColor: 'bg-green-500/20',
  },
  {
    title: 'Áreas Especializadas',
    description: 'Derecho civil, penal, laboral, familiar, comercial y más. Cobertura integral para todas tus necesidades legales.',
    icon: (
      <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
      </svg>
    ),
    bgColor: 'bg-purple-500/20',
  },
];

const FeaturesSection: React.FC = () => {
  const handleWhatsAppClick = () => {
    const enlaceWhatsApp = generarEnlaceWhatsApp(mensajesWhatsApp.ComenzarAhora);
    window.open(enlaceWhatsApp, '_blank');
  };

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
                    TU DEFENSA
                  </span>
                </h2>
                <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
                  Con 40 años de experiencia combinada, nuestro equipo de abogados expertos en distintas áreas del derecho, 
                  ha logrado resultados sobresalientes para nuestros clientes. En NexoLegal, tu justicia es nuestra prioridad.
                </p>
              </div>
              <button
                onClick={handleWhatsAppClick}
                className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Consulta Aquí
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