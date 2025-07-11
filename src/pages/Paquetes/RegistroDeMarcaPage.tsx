import React, { useState, useEffect } from 'react';
import { Gem, ArrowLeft, Search, Shield, CheckCircle, Clock, Users, FileText, Phone, Star, Award, Eye } from 'lucide-react';

const RegistroMarcaPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      id: 1,
      title: "Búsqueda Fonética",
      price: "$50",
      priceNote: "+ IVA",
      icon: <Search className="text-blue-600 text-3xl" />,
      description: "Verificación de similitud fonética para asegurar la disponibilidad de tu marca",
      features: [
        "Búsqueda exhaustiva en base de datos",
        "Análisis de similitud fonética",
        "Reporte detallado de resultados",
        "Recomendaciones profesionales"
      ],
      duration: "3-5 días hábiles",
      buttonColor: "bg-blue-600 hover:bg-blue-700",
      popular: false
    },
    {
      id: 2,
      title: "Registro de Marca Completo",
      price: "$529.99",
      priceNote: "+ IVA",
      icon: <Gem className="text-purple-600 text-3xl" />,
      description: "Servicio integral de registro de marca con todos los trámites incluidos",
      features: [
        "Búsqueda de similitud completa",
        "Tasa de búsqueda fonética incluida",
        "Resultados de búsqueda fonética",
        "Tasa de registro de marca",
        "Resolución oficial",
        "Seguimiento completo del proceso"
      ],
      duration: "6-9 meses",
      buttonColor: "bg-purple-600 hover:bg-purple-700",
      popular: true
    }
  ];

  const benefits = [
    {
      icon: <Shield className="text-blue-600 text-2xl" />,
      title: "Protección Legal",
      description: "Protege tu marca contra el uso no autorizado y la competencia desleal"
    },
    {
      icon: <CheckCircle className="text-green-600 text-2xl" />,
      title: "Exclusividad",
      description: "Derecho exclusivo de uso de tu marca en el territorio nacional"
    },
    {
      icon: <Award className="text-yellow-600 text-2xl" />,
      title: "Valor Comercial",
      description: "Aumenta el valor de tu empresa y facilita la expansión de tu negocio"
    },
    {
      icon: <Eye className="text-indigo-600 text-2xl" />,
      title: "Reconocimiento",
      description: "Construye la identidad y reconocimiento de tu marca en el mercado"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Consulta Inicial",
      description: "Analizamos tu marca y determinamos la estrategia de registro"
    },
    {
      step: "02",
      title: "Búsqueda Previa",
      description: "Realizamos búsquedas de similitud y análisis fonético"
    },
    {
      step: "03",
      title: "Presentación",
      description: "Presentamos la solicitud ante el organismo competente"
    },
    {
      step: "04",
      title: "Seguimiento",
      description: "Monitoreamos el proceso hasta obtener la resolución"
    },
    {
      step: "05",
      title: "Registro Final",
      description: "Obtienes tu certificado de registro de marca"
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Registro de Marca</h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
              Protege tu propiedad intelectual con nuestros servicios especializados de registro de marca. 
              Ofrecemos búsqueda fonética y registro completo con garantía de calidad.
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
              Elige el servicio que mejor se adapte a tus necesidades de registro de marca
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">¿Por qué Registrar tu Marca?</h2>
            <div className="flex justify-center mb-8">
              <div className="w-24 h-1 bg-blue-600"></div>
            </div>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-700">
              Conoce los beneficios de proteger tu marca con NexoLegal
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Proceso de Registro</h2>
            <div className="flex justify-center mb-8">
              <div className="w-24 h-1 bg-blue-600"></div>
            </div>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-700">
              Nuestro proceso paso a paso para registrar tu marca
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

      {/* FAQ Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Preguntas Frecuentes</h2>
            <div className="flex justify-center mb-8">
              <div className="w-24 h-1 bg-blue-600"></div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  question: "¿Cuánto tiempo tarda el proceso de registro?",
                  answer: "El proceso completo de registro de marca toma entre 6 a 9 meses, dependiendo de la complejidad del caso y los tiempos de respuesta del organismo competente."
                },
                {
                  question: "¿Qué incluye la búsqueda fonética?",
                  answer: "La búsqueda fonética incluye un análisis exhaustivo de similitud en la base de datos, verificación de marcas existentes que puedan sonar similar, y un reporte detallado con recomendaciones."
                },
                {
                  question: "¿Puedo registrar cualquier tipo de marca?",
                  answer: "Se pueden registrar marcas denominativas, mixtas, figurativas y tridimensionales, siempre que cumplan con los requisitos legales de distintividad y no infrinjan derechos de terceros."
                },
                {
                  question: "¿Qué pasa si mi marca es rechazada?",
                  answer: "En caso de rechazo, analizamos las causas y ofrecemos alternativas como modificaciones a la marca o presentación de recursos, dependiendo del caso específico."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-16 text-white">
        <div className="max-w-screen-xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">¿Listo para proteger tu marca?</h2>
          <p className="text-xl mb-8">Contáctanos hoy mismo y da el primer paso hacia la protección de tu propiedad intelectual</p>
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

export default RegistroMarcaPage;