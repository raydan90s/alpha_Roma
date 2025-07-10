import React, { useState, useEffect } from 'react';
import { Scale, Shield, Users, Building, Heart, Gavel, Gem, Star, FileText, UserCheck, Crown, Handshake, HelpCircle, Factory, ShieldCheck, EyeOff } from 'lucide-react';

const CombinedPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      id: 1,
      title: "Registro de Marca",
      description: "Protección y registro de marcas comerciales para resguardar tu propiedad intelectual.",
      icon: <Gem className="text-2xl" />,
    },
    {
      id: 2,
      title: "Servicios Legales para Compañías",
      description: "Asesoría integral para empresas, constitución, contratos y cumplimiento normativo.",
      icon: <Building className="text-2xl" />,
    },
    {
      id: 3,
      title: "Consultas Legales y Juicios",
      description: "Asesoría legal especializada y representación en procesos judiciales.",
      icon: <Scale className="text-2xl" />,
    },
    {
      id: 4,
      title: "Disoluciones y Liquidaciones de Compañías",
      description: "Procesos de cierre y liquidación de empresas conforme a la normativa vigente.",
      icon: <Gavel className="text-2xl" />,
    },
    {
      id: 5,
      title: "Inmigración Legal a Estados Unidos",
      description: "Asesoría especializada en procesos migratorios y documentación para Estados Unidos.",
      icon: <Users className="text-2xl" />,
    }
  ];

  const plansData = [
    {
      title: "BÁSICO",
      price: "$80",
      priceNote: "+ IVA",
      icon: <Shield className="text-amber-600 text-3xl" />,
      features: [
        "2 consultas por correo electrónico",
        "Temas laborales y civiles",
        "2 contratos (elaboración o revisión)",
        "Temas laborales y civiles",
        "Respuesta en 48 horas",
        "Soporte básico"
      ],
      buttonText: "¡CONTRATA AHORA!",
      buttonColor: "bg-amber-600 hover:bg-amber-700",
      footerText: "Ideal para necesidades puntuales y consultas específicas.",
      id: "plan-basico",
    },
    {
      title: "ESENCIAL",
      price: "$120",
      priceNote: "+ IVA",
      icon: <Star className="text-blue-600 text-3xl" />,
      features: [
        "4 contratos (elaboración o revisión)",
        "Temas laborales y civiles",
        "4 consultas por correo electrónico",
        "Temas laborales y civiles",
        "Respuesta en 24 horas",
        "Soporte prioritario"
      ],
      buttonText: "¡CONTRATA AHORA!",
      buttonColor: "bg-blue-600 hover:bg-blue-700",
      footerText: "Perfecto para empresas en crecimiento con necesidades regulares.",
      id: "plan-esencial",
    },
    {
      title: "AVANZADO",
      price: "$220",
      priceNote: "+ IVA",
      icon: <Gem className="text-purple-600 text-3xl" />,
      features: [
        "6 consultas por correo electrónico",
        "Temas laborales y civiles",
        "6 contratos (elaboración o revisión)",
        "Temas laborales y civiles",
        "4 horas de asesoría legal empresarial",
        "Acompañamiento especializado (1 hora por día)"
      ],
      buttonText: "¡CONTRATA AHORA!",
      buttonColor: "bg-purple-600 hover:bg-purple-700",
      footerText: "Para empresas que requieren asesoría integral y acompañamiento.",
      id: "plan-avanzado",
    },
    {
      title: "EJECUTIVO",
      price: "$600",
      priceNote: "+ IVA",
      icon: <Crown className="text-yellow-500 text-3xl" />,
      features: [
        "10 consultas por correo electrónico",
        "Temas laborales y civiles",
        "10 contratos (elaboración o revisión)",
        "8 horas de asesoría legal empresarial",
        "Acompañamiento especializado (1 hora por día)",
        "1 patrocinio en proceso de Ministerio de Trabajo"
      ],
      buttonText: "¡CONTRATA AHORA!",
      buttonColor: "bg-yellow-500 hover:bg-yellow-600",
      footerText: "Plan premium para empresas con necesidades legales complejas.",
      id: "plan-ejecutivo",
    }
  ];

  const individualServices = [
    {
      title: "Consultas Legales",
      price: "$40",
      priceNote: "+ IVA",
      icon: <HelpCircle className="text-green-600 text-2xl" />,
      description: "Consultas legales en temas laborales, civiles y empresariales",
      duration: "45 minutos por Zoom",
      buttonColor: "bg-green-600 hover:bg-green-700"
    },
    {
      title: "Contratos Laborales",
      price: "$15",
      priceNote: "+ IVA",
      icon: <FileText className="text-blue-600 text-2xl" />,
      description: "Elaboración y revisión de contratos laborales",
      duration: "Entrega en 3-5 días hábiles",
      buttonColor: "bg-blue-600 hover:bg-blue-700"
    },
    {
      title: "Contratos Civiles",
      price: "Desde $50",
      priceNote: "+ IVA",
      icon: <Handshake className="text-indigo-600 text-2xl" />,
      description: "Contratos civiles (10% de cuantía - estándar sin cuantía)",
      duration: "Entrega en 3-7 días hábiles",
      buttonColor: "bg-indigo-600 hover:bg-indigo-700"
    },
    {
      title: "Patrocinio Inspectoría",
      price: "$800",
      priceNote: "+ IVA",
      icon: <ShieldCheck className="text-red-600 text-2xl" />,
      description: "Inspectoría de trabajo como compañía accionante o accionada",
      duration: "Duración según proceso",
      buttonColor: "bg-red-600 hover:bg-red-700"
    }
  ];

  const companyServices = [
    {
      title: "SAS Básica",
      price: "$100",
      priceNote: "+ IVA",
      icon: <Building className="text-gray-600 text-2xl" />,
      description: "Constitución de SAS con 1 accionista",
      buttonColor: "bg-gray-600 hover:bg-gray-700"
    },
    {
      title: "SAS Esencial",
      price: "$160",
      priceNote: "+ IVA",
      icon: <Users className="text-blue-600 text-2xl" />,
      description: "Constitución de SAS con 2 accionistas",
      buttonColor: "bg-blue-600 hover:bg-blue-700"
    },
    {
      title: "SAS Avanzada",
      price: "$200",
      priceNote: "+ IVA",
      icon: <Factory className="text-purple-600 text-2xl" />,
      description: "Constitución de SAS con 3 accionistas",
      buttonColor: "bg-purple-600 hover:bg-purple-700"
    },
    {
      title: "SAS Ejecutiva",
      price: "$300",
      priceNote: "+ IVA",
      icon: <Crown className="text-yellow-500 text-2xl" />,
      description: "Constitución de SAS con 4 accionistas en adelante",
      buttonColor: "bg-yellow-500 hover:bg-yellow-600"
    },
    {
      title: "Plan Empresario",
      price: "$686",
      priceNote: "+ IVA",
      icon: <UserCheck className="text-green-600 text-2xl" />,
      description: "SAS + Registro de Marca + Tasas incluidas",
      buttonColor: "bg-green-600 hover:bg-green-700"
    },
    {
      title: "Ocultamiento de Datos",
      price: "$350",
      priceNote: "+ IVA",
      icon: <EyeOff className="text-gray-800 text-2xl" />,
      description: "Previa verificación de procedencia",
      buttonColor: "bg-gray-800 hover:bg-gray-900"
    }
  ];

  const PlanFeatureCard = ({ title, price, priceNote, icon, features, buttonText, buttonColor, footerText, id }) => (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col">
      <div className="p-8 flex-grow flex flex-col">
        {/* Header */}
        <div className="text-center mb-6">
          <div className="flex justify-center mb-4">
            {icon}
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">{title}</h3>
          <div className="text-center mb-4">
            <span className="text-3xl font-bold text-blue-600">{price}</span>
            <span className="text-sm text-gray-600 ml-1">{priceNote}</span>
          </div>
        </div>

        {/* Features */}
        <ul className="space-y-3 mb-8 flex-grow">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
              <span className="text-gray-600 text-sm leading-relaxed">{feature}</span>
            </li>
          ))}
        </ul>

        {/* Button */}
        <div className="text-center mb-6">
          <button className={`${buttonColor} text-white px-8 py-3 rounded-lg font-semibold text-sm transition-all duration-300 hover:transform hover:scale-105 w-full`}>
            {buttonText}
          </button>
        </div>

        {/* Footer */}
        <div className="text-center text-xs text-gray-500 leading-relaxed">
          <p>{footerText}</p>
        </div>
      </div>
    </div>
  );

  const ServiceCard = ({ title, price, priceNote, icon, description, duration, buttonColor }) => (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300">
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="flex-shrink-0 mr-4">
            {icon}
          </div>
          <div className="flex-grow">
            <h3 className="text-lg font-bold text-gray-800 mb-1">{title}</h3>
            <div className="flex items-baseline">
              <span className="text-2xl font-bold text-blue-600">{price}</span>
              <span className="text-sm text-gray-600 ml-1">{priceNote}</span>
            </div>
          </div>
        </div>
        
        <p className="text-gray-600 text-sm mb-2">{description}</p>
        {duration && <p className="text-gray-500 text-xs mb-4">{duration}</p>}
        
        <button className={`${buttonColor} text-white px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 hover:transform hover:scale-105 w-full`}>
          Contratar Servicio
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-20 text-white">
        <div className="max-w-screen-xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 pt-12">Servicios NexoLegal</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Descubre nuestros servicios legales profesionales y elige el plan que mejor se adapte a tus necesidades empresariales
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

      {/* Plans Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">Planes de Servicios</h2>
            <div className="flex justify-center mb-8">
              <div className="w-24 h-1 bg-blue-600"></div>
            </div>
            <p className="text-lg md:text-xl mb-8 text-gray-700">
              Elige el plan que mejor se adapte a las necesidades de tu empresa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {plansData.map((plan, index) => (
              <div key={index} id={plan.id} className="scroll-mt-32">
                <PlanFeatureCard {...plan} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Individual Services */}
      <section className="bg-white py-16">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">Servicios Individuales</h2>
            <div className="flex justify-center mb-8">
              <div className="w-24 h-1 bg-blue-600"></div>
            </div>
            <p className="text-lg md:text-xl mb-8 text-gray-700">
              Servicios específicos para necesidades puntuales
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {individualServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Company Services */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">Servicios Empresariales</h2>
            <div className="flex justify-center mb-8">
              <div className="w-24 h-1 bg-blue-600"></div>
            </div>
            <p className="text-lg md:text-xl mb-8 text-gray-700">
              Constitución de empresas y servicios especializados
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {companyServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-blue-600 py-16 text-white">
        <div className="max-w-screen-xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">¿Necesitas asesoría legal confiable?</h2>
          <p className="text-xl mb-8">En NexoLegal defendemos tus derechos con compromiso y experiencia.</p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300">
            Contáctanos
          </button>
        </div>
      </section>
    </div>
  );
};

export default CombinedPage;