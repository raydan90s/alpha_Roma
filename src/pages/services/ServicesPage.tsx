import React, { useEffect } from "react";
import { scrollToHashOnLoad } from "../../assets/utils/scrollUtils.ts"

const ServicesPage = () => {
    useEffect(() => {
        scrollToHashOnLoad();
      }, []);
  return (
    <div className="pt-20 bg-gray-100">
      {/* Hero Section */}
      <div className="bg-secondary text-white py-16">
        <div className="max-w-screen-xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Nuestros Servicios</h1>
          <p className="text-lg md:text-xl max-w-2xl">
            Ofrecemos soluciones completas para proteger tu hogar y negocio con las últimas tecnologías en seguridad y automatización.
          </p>
        </div>
      </div>

      {/* Services Content */}
      <div className="max-w-screen-xl mx-auto px-4 py-12">
        {/* Installation Section */}
        <section id="instalacion" className="mb-24 scroll-mt-24">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Instalación</h2>
              <p className="text-lg text-gray-600 mb-8">
                Nuestro equipo de técnicos certificados realizará la instalación profesional de todos tus dispositivos de seguridad y domótica para garantizar su funcionamiento óptimo.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-secondary rounded-full p-1 mr-3 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="text-gray-700">Instalación de cámaras de seguridad y CCTV</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-secondary rounded-full p-1 mr-3 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="text-gray-700">Configuración de sistemas de alarma</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-secondary rounded-full p-1 mr-3 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="text-gray-700">Instalación de sistemas de casa inteligente</span>
                </li>
              </ul>
              <button className="mt-8 bg-primary text-black font-bold px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300">
                Solicitar instalación
              </button>
            </div>
            <div className="md:w-1/2">
              <div className="bg-gray-200 rounded-xl overflow-hidden shadow-lg h-80">
                <img 
                  src="/api/placeholder/600/400" 
                  alt="Servicio de instalación" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Maintenance Section */}
        <section id="mantenimiento" className="mb-24 scroll-mt-24">
          <div className="flex flex-col md:flex-row-reverse gap-8">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Mantenimiento</h2>
              <p className="text-lg text-gray-600 mb-8">
                Mantenemos tus sistemas de seguridad en perfecto estado con revisiones periódicas, actualizaciones de software y reparaciones para asegurar que tu protección nunca falle.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-secondary rounded-full p-1 mr-3 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="text-gray-700">Revisión y limpieza de cámaras y sensores</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-secondary rounded-full p-1 mr-3 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="text-gray-700">Actualización de firmware y software</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-secondary rounded-full p-1 mr-3 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="text-gray-700">Diagnóstico y reparación de equipos</span>
                </li>
              </ul>
              <button className="mt-8 bg-primary text-black font-bold px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300">
                Programar mantenimiento
              </button>
            </div>
            <div className="md:w-1/2">
              <div className="bg-gray-200 rounded-xl overflow-hidden shadow-lg h-80">
                <img 
                  src="/api/placeholder/600/400" 
                  alt="Servicio de mantenimiento" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Advisory Section */}
        <section id="asesoria" className="mb-24 scroll-mt-24">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Asesoría</h2>
              <p className="text-lg text-gray-600 mb-8">
                Nuestros expertos en seguridad te ayudarán a diseñar la solución perfecta para tus necesidades específicas, evaluando tu espacio y recomendando las mejores opciones.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-secondary rounded-full p-1 mr-3 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="text-gray-700">Evaluación de riesgos y necesidades</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-secondary rounded-full p-1 mr-3 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="text-gray-700">Diseño personalizado de sistemas de seguridad</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-secondary rounded-full p-1 mr-3 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="text-gray-700">Consultoría en normativas y mejores prácticas</span>
                </li>
              </ul>
              <button className="mt-8 bg-primary text-black font-bold px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300">
                Solicitar asesoría
              </button>
            </div>
            <div className="md:w-1/2">
              <div className="bg-gray-200 rounded-xl overflow-hidden shadow-lg h-80">
                <img 
                  src="/api/placeholder/600/400" 
                  alt="Servicio de asesoría" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-gray-900 text-white rounded-xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">¿Listo para mejorar tu seguridad?</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Nuestro equipo está preparado para ayudarte con cualquier servicio que necesites. Contáctanos hoy mismo.
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-center gap-4 max-w-xl mx-auto">
            <a 
              href="tel:8445917193" 
              className="bg-primary hover:bg-primary text-black font-bold px-6 py-3 rounded-full shadow-md transition-all duration-300 text-center"
            >
              Llamar ahora
            </a>
            <button className="bg-white hover:bg-gray-100 text-gray-900 font-bold px-6 py-3 rounded-full shadow-md transition-all duration-300">
              Solicitar cotización
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ServicesPage;