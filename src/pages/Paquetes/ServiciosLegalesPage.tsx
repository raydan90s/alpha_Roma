import React, { useState, useEffect } from 'react';
import { Gem, ArrowLeft, Search, Shield, CheckCircle, Clock, Users, FileText, Phone, Star, Award, Eye } from 'lucide-react';

const ServiciosLegalesPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      id: 1,
      title: "Recuperación de Carteras Vencidas",
      price: "$300",
      priceNote: "+ IVA",
      icon: <Search className="text-blue-600 text-3xl" />,
      description: "Recupera de manera eficiente las deudas vencidas de tus clientes.",
      features: [
        "Gestión de cobro personalizada",
        "Asesoría en negociación de deudas",
        "Estrategias de recuperación efectiva",
        "Seguimiento continuo del proceso"
      ],
      duration: "1-3 meses",
      buttonColor: "bg-blue-600 hover:bg-blue-700",
      popular: false
    },
    {
      id: 2,
      title: "Contratos Laborales",
      price: "$450",
      priceNote: "+ IVA",
      icon: <Gem className="text-purple-600 text-3xl" />,
      description: "Elaboración y revisión de contratos laborales conforme a la ley.",
      features: [
        "Redacción de contratos a medida",
        "Asesoría legal sobre derechos laborales",
        "Cumplimiento con la legislación vigente",
        "Negociación de términos favorables"
      ],
      duration: "7-10 días hábiles",
      buttonColor: "bg-purple-600 hover:bg-purple-700",
      popular: true
    },
    {
      id: 3,
      title: "Reglamento Interno de Trabajo",
      price: "$350",
      priceNote: "+ IVA",
      icon: <Shield className="text-green-600 text-3xl" />,
      description: "Elaboración de reglamento interno de trabajo para tu empresa.",
      features: [
        "Redacción de reglamento personalizado",
        "Cumplimiento con la normativa legal",
        "Asesoría en implementación de normas",
        "Actualización periódica"
      ],
      duration: "2-4 semanas",
      buttonColor: "bg-green-600 hover:bg-green-700",
      popular: false
    },
    {
      id: 4,
      title: "Transferencia y Cesión de Acciones",
      price: "$600",
      priceNote: "+ IVA",
      icon: <CheckCircle className="text-orange-600 text-3xl" />,
      description: "Asesoría y trámite de transferencia y cesión de acciones en tu empresa.",
      features: [
        "Redacción de contratos de cesión",
        "Asesoría en la transferencia de propiedad",
        "Cumplimiento de normas fiscales y legales",
        "Registros y documentación oficial"
      ],
      duration: "2-3 semanas",
      buttonColor: "bg-orange-600 hover:bg-orange-700",
      popular: false
    },
    {
      id: 5,
      title: "Nombramientos",
      price: "$250",
      priceNote: "+ IVA",
      icon: <Clock className="text-red-600 text-3xl" />,
      description: "Asesoría y gestión de nombramientos para directores y ejecutivos.",
      features: [
        "Redacción de acuerdos de nombramiento",
        "Cumplimiento de regulaciones corporativas",
        "Asesoría sobre derechos y responsabilidades",
        "Registro de nombramientos ante autoridades"
      ],
      duration: "1-2 semanas",
      buttonColor: "bg-red-600 hover:bg-red-700",
      popular: false
    },
    {
      id: 6,
      title: "Revisión de Contratos",
      price: "$350",
      priceNote: "+ IVA",
      icon: <Users className="text-blue-600 text-3xl" />,
      description: "Revisión y análisis de contratos para evitar riesgos legales.",
      features: [
        "Revisión detallada de contratos laborales y comerciales",
        "Identificación de cláusulas problemáticas",
        "Asesoría legal para mejorar términos",
        "Modificaciones conforme a la legislación vigente"
      ],
      duration: "5-7 días hábiles",
      buttonColor: "bg-blue-600 hover:bg-blue-700",
      popular: false
    },
    {
      id: 7,
      title: "Actas de Juntas",
      price: "$200",
      priceNote: "+ IVA",
      icon: <FileText className="text-purple-600 text-3xl" />,
      description: "Redacción de actas legales para las juntas de accionistas o directivos.",
      features: [
        "Redacción de actas conforme a los acuerdos tomados",
        "Cumplimiento con la normativa corporativa",
        "Asesoría en la convocatoria y quórum",
        "Registro y archivo de actas"
      ],
      duration: "3-5 días hábiles",
      buttonColor: "bg-purple-600 hover:bg-purple-700",
      popular: false
    }
  ];

  const benefits = [
    {
      icon: <Shield className="text-blue-600 text-2xl" />,
      title: "Protección Legal",
      description: "Protege tu empresa contra riesgos legales y evita conflictos judiciales."
    },
    {
      icon: <CheckCircle className="text-green-600 text-2xl" />,
      title: "Cumplimiento Normativo",
      description: "Asegúrate de que tu empresa cumpla con las leyes y regulaciones vigentes."
    },
    {
      icon: <Award className="text-yellow-600 text-2xl" />,
      title: "Seguridad Jurídica",
      description: "Fortalece la seguridad jurídica de tu empresa con contratos y documentos legales sólidos."
    },
    {
      icon: <Eye className="text-indigo-600 text-2xl" />,
      title: "Tranquilidad",
      description: "Confía en que todos los procedimientos legales están bien gestionados y protegidos."
    }
  ];

  const process = [
    {
      step: "01",
      title: "Consulta Inicial",
      description: "Te ofrecemos una consulta para entender tus necesidades legales."
    },
    {
      step: "02",
      title: "Elaboración de Documentos",
      description: "Redactamos los documentos legales necesarios conforme a tus requerimientos."
    },
    {
      step: "03",
      title: "Revisión y Aprobación",
      description: "Revisamos juntos los documentos y realizamos los ajustes necesarios."
    },
    {
      step: "04",
      title: "Firma y Registro",
      description: "Formalizamos y registramos los documentos legales ante las autoridades correspondientes."
    },
    {
      step: "05",
      title: "Seguimiento y Asesoría",
      description: "Te ofrecemos seguimiento y asesoría adicional según sea necesario."
    }
  ];

  const ServiceCard = ({ service }) => (
    <div className={`relative bg-white rounded-2xl shadow-lg border-2 overflow-hidden hover:shadow-xl transition-all duration-300 ${service.popular ? 'border-purple-200 transform scale-105' : 'border-gray-200'}`}>
      {service.popular && (
        <div className="absolute top-0 right-0 bg-purple-600 text-white px-4 py-2 text-sm font-semibold rounded-bl-lg">
          Más Popular
        </div>
      )}
      
      <div className="p-8">
        {/* Header */}
        <div className="text-center mb-6">
          <div className="flex justify-center mb-4">
            {service.icon}
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">{service.title}</h3>
          <div className="text-center mb-4">
            <span className="text-4xl font-bold text-blue-600">{service.price}</span>
            <span className="text-sm text-gray-600 ml-1">{service.priceNote}</span>
          </div>
          <p className="text-gray-600 mb-6">{service.description}</p>
        </div>

        {/* Features */}
        <ul className="space-y-3 mb-6">
          {service.features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle className="text-green-500 text-sm mt-1 mr-3 flex-shrink-0" />
              <span className="text-gray-600 text-sm">{feature}</span>
            </li>
          ))}
        </ul>

        {/* Duration */}
        <div className="flex items-center justify-center mb-6 p-3 bg-gray-50 rounded-lg">
          <Clock className="text-gray-500 text-sm mr-2" />
          <span className="text-gray-600 text-sm font-medium">{service.duration}</span>
        </div>

        {/* Button */}
        <button className={`${service.buttonColor} text-white px-8 py-3 rounded-lg font-semibold text-sm transition-all duration-300 hover:transform hover:scale-105 w-full`}>
          Contratar Servicio
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header con navegación */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-screen-xl mx-auto px-4 py-4">
          <button className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-300">
            <ArrowLeft className="mr-2" size={20} />
            Volver a Servicios
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20 text-white">
        <div className="max-w-screen-xl mx-auto px-4 text-center">
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="flex justify-center mb-6">
              <Gem className="text-6xl text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Servicios Legales para Compañías</h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
              Brindamos asesoría y servicios legales especializados para empresas. Protege tu negocio y asegúrate de cumplir con todas las regulaciones legales.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300">
                Ver Servicios
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300">
                Consulta Gratuita
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Nuestros Servicios</h2>
            <div className="flex justify-center mb-8">
              <div className="w-24 h-1 bg-blue-600"></div>
            </div>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-700">
              Elige el servicio legal que mejor se adapte a tus necesidades
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <ServiceCard service={service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">¿Por qué Elegir Nuestros Servicios?</h2>
            <div className="flex justify-center mb-8">
              <div className="w-24 h-1 bg-blue-600"></div>
            </div>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-700">
              Conoce los beneficios de contratar nuestros servicios legales para compañías
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`text-center transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Proceso de Asesoría Legal</h2>
            <div className="flex justify-center mb-8">
              <div className="w-24 h-1 bg-blue-600"></div>
            </div>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-700">
              Sigue nuestro proceso paso a paso para contratar nuestros servicios legales
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {process.map((step, index) => (
              <div
                key={index}
                className={`text-center transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                    {step.step}
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-16 w-full h-0.5 bg-gray-300"></div>
                  )}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-16 text-white">
        <div className="max-w-screen-xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">¿Listo para proteger tu empresa?</h2>
          <p className="text-xl mb-8">Contáctanos hoy mismo y da el primer paso hacia la protección legal de tu compañía</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300">
              <Phone className="inline mr-2" size={20} />
              Llamar Ahora
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300">
              <FileText className="inline mr-2" size={20} />
              Solicitar Cotización
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiciosLegalesPage;
