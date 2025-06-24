import React, { useState, useEffect } from 'react';
import { FaBalanceScale, FaShieldAlt, FaUsers, FaBuilding, FaHeart, FaGavel, FaGem, FaStar } from 'react-icons/fa';

const CombinedPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      id: 1,
      title: "Derecho Civil",
      description: "Contratos, sucesiones, propiedad, arrendamientos, y más.",
      icon: <FaBalanceScale className="text-2xl" />,
    },
    {
      id: 2,
      title: "Derecho Penal",
      description: "Defensa ante procesos penales y medidas cautelares.",
      icon: <FaShieldAlt className="text-2xl" />,
    },
    {
      id: 3,
      title: "Derecho Laboral",
      description: "Reclamos laborales, despidos injustificados, derechos del trabajador.",
      icon: <FaUsers className="text-2xl" />,
    },
    {
      id: 4,
      title: "Corporativo & Empresarial",
      description: "Constitución de empresas, contratos, cumplimiento normativo.",
      icon: <FaBuilding className="text-2xl" />,
    },
    {
      id: 5,
      title: "Familia & Sucesiones",
      description: "Divorcios, custodias, herencias, pensiones alimenticias.",
      icon: <FaHeart className="text-2xl" />,
    },
    {
      id: 6,
      title: "Litigios & Juicios",
      description: "Representación en procesos judiciales y administrativos.",
      icon: <FaGavel className="text-2xl" />,
    }
  ];

  const plansData = [
    {
      title: "BÁSICO BRONCE",
      icon: <FaShieldAlt className="text-amber-600 text-3xl" />,
      features: [
        "1 Cámara tipo Domo FHD",
        "3 Cámaras tipo tubo FHD",
        "1 NVR 4 puertos POE",
        "1 Disco duro de 2TB",
        "Visualización a través de app móvil",
        "Kit de Alarma (1 Sensor + 1 Control + 1 Contacta magnetico)",
      ],
      buttonText: "¡EMPIEZA HOY!",
      buttonColor: "bg-amber-600 hover:bg-amber-700",
      footerText: "El servicio de monitoreo, la instalación y las cámaras se venden por separado.\nPrecio de instalación varia de acuerdo a distancia",
      id: "plan-bronce",
    },
    {
      title: "BÁSICA PLATA",
      icon: <FaStar className="text-gray-500 text-3xl" />,
      features: [
        "2 Cámaras tipo Domo FHD",
        "4 Cámaras tipo tubo FHD",
        "1 NVR 8 puertos POE",
        "1 Disco duro 2TB",
        "Visualización a través de app móvil",
        "Kit de Alarma (1 Sensor + 1 Control + 1 Contacta magnetico)",
      ],
      buttonText: "¡EMPIEZA HOY!",
      buttonColor: "bg-gray-500 hover:bg-gray-600",
      footerText: "El servicio de monitoreo, la instalación y las cámaras se venden por separado.\nPrecio de instalación varia de acuerdo a distancia",
      id: "plan-plata",
    },
    {
      title: "BÁSICO ORO",
      icon: <FaGem className="text-yellow-500 text-3xl" />,
      features: [
        "4 Cámaras tipo Domo FHD",
        "4 Cámaras tipo tubo FHD",
        "1 NVR 8 puertos POE",
        "1 Disco duro 2TB",
        "Visualización a través de app móvil",
        "Kit de Alarma (1 Sensor + 1 Control + 1 Contacta magnetico)",
      ],
      buttonText: "¡EMPIEZA HOY!",
      buttonColor: "bg-yellow-500 hover:bg-yellow-600",
      footerText: "El servicio de monitoreo, la instalación y las cámaras se venden por separado.\nPrecio de instalación varia de acuerdo a distancia",
      id: "plan-oro",
    },
  ];

  const PlanFeatureCard = ({ title, icon, features, buttonText, buttonColor, footerText, id }) => (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 pt-12">
      <div className="p-8">
        {/* Header */}
        <div className="text-center mb-6">
          <div className="flex justify-center mb-4">
            {icon}
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">{title}</h3>
        </div>

        {/* Features */}
        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
              <span className="text-gray-600 text-sm leading-relaxed">{feature}</span>
            </li>
          ))}
        </ul>

        {/* Button */}
        <div className="text-center mb-6">
          <button className={`${buttonColor} text-white px-8 py-3 rounded-lg font-semibold text-sm transition-all duration-300 hover:transform hover:scale-105`}>
            {buttonText}
          </button>
        </div>

        {/* Footer */}
        <div className="text-center text-xs text-gray-500 leading-relaxed">
          {footerText.split('\n').map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 py-20 text-white">
        <div className="max-w-screen-xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 pt-12">Servicios y Paquetes</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Descubre nuestros servicios profesionales y elige el paquete que mejor se adapte a tus necesidades
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-16 text-gray-800">
        <div className="max-w-screen-xl mx-auto px-4">
          {/* Header */}
          <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Nuestros Servicios</h2>
            <div className="flex justify-center mb-8">
              <div className="w-24 h-1 bg-blue-600"></div>
            </div>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-center mb-12">
              En <span className="font-bold">Nexo Legal</span> ofrecemos asesoría y representación en distintas áreas del Derecho con enfoque personalizado y confidencial.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`group relative transform transition-all duration-700 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Card */}
                <div className="relative bg-white border border-gray-200 rounded-2xl p-8 h-full shadow-sm hover:shadow-xl transition-all duration-500 group-hover:border-blue-600/30">
                  
                  {/* Subtle gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-blue-800/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="inline-flex items-center justify-center w-14 h-14 bg-gray-100 group-hover:bg-blue-600/10 rounded-xl mb-6 text-blue-600 transition-all duration-300">
                      {service.icon}
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Subtle border accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-blue-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-2xl"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">Precios</h2>
            <div className="flex justify-center mb-8">
              <div className="w-24 h-1 bg-blue-600"></div>
            </div>
            <p className="text-lg md:text-xl mb-4 text-gray-700">
              <strong>Monitoreo 24/7 desde</strong>
            </p>
            <p className="text-5xl font-bold text-blue-600 mb-8">
              $15 mensuales
            </p>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="bg-gray-100 pb-16">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plansData.map((plan, index) => (
              <div key={index} id={plan.id} className="scroll-mt-32">
                <PlanFeatureCard {...plan} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-white py-16">
        <div className="max-w-screen-lg mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">¿Interesado en nuestros paquetes y precios?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Contáctanos para obtener más detalles o para personalizar un plan para ti.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:transform hover:scale-105">
            Contactar
          </button>
        </div>
      </section>
    </div>
  );
};

export default CombinedPage;