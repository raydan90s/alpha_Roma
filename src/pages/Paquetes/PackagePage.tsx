import React, { useEffect } from "react";
import { scrollToHashOnLoad } from "../../assets/utils/scrollUtils";
import ContactSection from "../../components/Sections/contactSection";
import { ContactSectionProps } from "../../interface/contactProps";

const PackagePage = () => {
  useEffect(() => {
    scrollToHashOnLoad();
  }, []);

  const handleContactButtonClick = () => {
    console.log("Botón de contacto para paquetes clickeado");
    // Aquí puedes implementar la lógica para contactar o solicitar más información sobre los paquetes
  };

  const packagesContactSectionData: ContactSectionProps = {
    title: "¿Interesado en nuestros paquetes y precios?",
    description: "Contáctanos para obtener más detalles o para personalizar un plan para ti.",
    phone: "8445917193",
    emailButtonText: "Contactar",
    onEmailButtonClick: handleContactButtonClick,
  };

  return (
    <div className="pt-20 bg-gray-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-secondary to-primary text-white py-16">
        <div className="max-w-screen-xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Paquetes y Precios</h1>
          <p className="text-lg md:text-xl max-w-2xl">
            Explora nuestros diferentes planes de seguridad diseñados para adaptarse a tus necesidades.
          </p>
        </div>
      </div>

      {/* Basic Plan Section */}
      <section id="plan-basico" className="mb-24 scroll-mt-24">
        <div className="max-w-screen-md mx-auto bg-white rounded-lg shadow-md p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Plan Básico</h2>
          <p className="text-lg text-gray-600 mb-8">
            Soluciones de seguridad esenciales para hogares pequeños. MARCITOOOOOOOOOOOOO
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li className="flex items-start">
              <div className="bg-secondary rounded-full p-1 mr-3 mt-1">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <span className="text-gray-700">Sistema de alarma básico</span>
            </li>
            <li className="flex items-start">
              <div className="bg-secondary rounded-full p-1 mr-3 mt-1">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <span className="text-gray-700">Monitoreo 24/7 (opcional)</span>
            </li>
            <li className="flex items-start">
              <div className="bg-secondary rounded-full p-1 mr-3 mt-1">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <span className="text-gray-700">Soporte técnico telefónico</span>
            </li>
          </ul>
          <div className="text-xl font-semibold text-primary mb-4">Desde $XX al mes</div>
          <button className="bg-primary text-black font-bold px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300">
            Seleccionar Plan Básico
          </button>
        </div>
      </section>

      {/* Business Plan Section */}
      <section id="plan-empresarial" className="mb-24 scroll-mt-24">
        <div className="max-w-screen-md mx-auto bg-white rounded-lg shadow-md p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Plan Empresarial</h2>
          <p className="text-lg text-gray-600 mb-8">
            Seguridad robusta y escalable para negocios de todos los tamaños.
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li className="flex items-start">
              <div className="bg-secondary rounded-full p-1 mr-3 mt-1">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <span className="text-gray-700">Sistema de alarma avanzado</span>
            </li>
            <li className="flex items-start">
              <div className="bg-secondary rounded-full p-1 mr-3 mt-1">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <span className="text-gray-700">Cámaras de seguridad (número variable)</span>
            </li>
            <li className="flex items-start">
              <div className="bg-secondary rounded-full p-1 mr-3 mt-1">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <span className="text-gray-700">Monitoreo profesional 24/7</span>
            </li>
            <li className="flex items-start">
              <div className="bg-secondary rounded-full p-1 mr-3 mt-1">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <span className="text-gray-700">Aplicación móvil para control remoto</span>
            </li>
          </ul>
          <div className="text-xl font-semibold text-primary mb-4">Desde $YY al mes (varía según tamaño)</div>
          <button className="bg-primary text-black font-bold px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300">
            Consultar Plan Empresarial
          </button>
        </div>
      </section>

      {/* Premium Plan Section */}
      <section id="plan-premium" className="mb-24 scroll-mt-24">
        <div className="max-w-screen-md mx-auto bg-white rounded-lg shadow-md p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Plan Premium</h2>
          <p className="text-lg text-gray-600 mb-8">
            La máxima protección con funcionalidades avanzadas y personalización.
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li className="flex items-start">
              <div className="bg-secondary rounded-full p-1 mr-3 mt-1">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <span className="text-gray-700">Sistema de seguridad inteligente personalizado</span>
            </li>
            <li className="flex items-start">
              <div className="bg-secondary rounded-full p-1 mr-3 mt-1">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <span className="text-gray-700">Cámaras de alta resolución con analíticas</span>
            </li>
            <li className="flex items-start">
              <div className="bg-secondary rounded-full p-1 mr-3 mt-1">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <span className="text-gray-700">Monitoreo profesional con respuesta prioritaria</span>
            </li>
            <li className="flex items-start">
              <div className="bg-secondary rounded-full p-1 mr-3 mt-1">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <span className="text-gray-700">Integración con domótica</span>
            </li>
            <li className="flex items-start">
              <div className="bg-secondary rounded-full p-1 mr-3 mt-1">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <span className="text-gray-700">Soporte técnico VIP</span>
            </li>
          </ul>
          <div className="text-xl font-semibold text-primary mb-4">Precio a cotizar</div>
          <button className="bg-primary text-black font-bold px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300">
            Solicitar Cotización Premium
          </button>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection {...packagesContactSectionData} />
    </div>
  );
};

export default PackagePage;