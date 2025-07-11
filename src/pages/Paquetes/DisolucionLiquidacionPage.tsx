import React, { useState, useEffect } from 'react';
import { Gem, ArrowLeft, Search, Shield, CheckCircle, Clock, Users, FileText, Phone, Star, Award, Eye } from 'lucide-react';

const DisolucionLiquidacionPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      id: 1,
      title: "Asesoría en Disolución de Compañías",
      price: "$200",
      priceNote: "+ IVA",
      icon: <Search className="text-blue-600 text-3xl" />,
      description: "Asesoría legal completa para la disolución de empresas y cierre de operaciones",
      features: [
        "Estudio legal de la compañía",
        "Asesoría sobre la mejor opción de disolución",
        "Elaboración de documentos legales",
        "Representación ante autoridades competentes"
      ],
      duration: "2-4 semanas",
      buttonColor: "bg-blue-600 hover:bg-blue-700",
      popular: false
    },
    {
      id: 2,
      title: "Liquidación de Compañías",
      price: "$899.99",
      priceNote: "+ IVA",
      icon: <Gem className="text-purple-600 text-3xl" />,
      description: "Servicio integral para la liquidación de una empresa, con todos los trámites legales incluidos",
      features: [
        "Revisión financiera y contable",
        "Preparación de informes de liquidación",
        "Liquidación de activos y pasivos",
        "Cumplimiento con la normativa tributaria"
      ],
      duration: "3-6 meses",
      buttonColor: "bg-purple-600 hover:bg-purple-700",
      popular: true
    }
  ];

  const benefits = [
    {
      icon: <Shield className="text-blue-600 text-2xl" />,
      title: "Protección Legal",
      description: "Te aseguramos que el proceso de disolución y liquidación se realice conforme a la ley"
    },
    {
      icon: <CheckCircle className="text-green-600 text-2xl" />,
      title: "Cumplimiento Tributario",
      description: "Garantizamos el cumplimiento de las obligaciones fiscales durante todo el proceso"
    },
    {
      icon: <Award className="text-yellow-600 text-2xl" />,
      title: "Transparencia",
      description: "Te ofrecemos un proceso claro, sin sorpresas, con seguimiento continuo"
    },
    {
      icon: <Eye className="text-indigo-600 text-2xl" />,
      title: "Tranquilidad",
      description: "Te acompañamos en todo el proceso, asegurando que tu empresa quede legalmente disuelta"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Análisis Inicial",
      description: "Estudiamos la situación jurídica y financiera de la empresa"
    },
    {
      step: "02",
      title: "Planificación de la Disolución",
      description: "Te asesoramos sobre las mejores opciones de disolución de la empresa"
    },
    {
      step: "03",
      title: "Redacción de Documentos",
      description: "Preparamos y presentamos los documentos necesarios para la disolución"
    },
    {
      step: "04",
      title: "Liquidación de Bienes y Deudas",
      description: "Nos encargamos de liquidar los activos y saldar las deudas de la empresa"
    },
    {
      step: "05",
      title: "Cierre Oficial",
      description: "Gestionamos el cierre formal de la empresa ante las autoridades competentes"
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Disolución y Liquidación de Compañías</h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
              Te ofrecemos soluciones legales para disolver y liquidar tu empresa de forma efectiva y conforme a la ley.
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
              Elige el servicio que mejor se adapte a tus necesidades de disolución y liquidación de compañías
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">¿Por qué Disolver y Liquidar tu Compañía?</h2>
            <div className="flex justify-center mb-8">
              <div className="w-24 h-1 bg-blue-600"></div>
            </div>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-700">
              Conoce los beneficios de disolver y liquidar tu compañía con NexoLegal
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Proceso de Disolución y Liquidación</h2>
            <div className="flex justify-center mb-8">
              <div className="w-24 h-1 bg-blue-600"></div>
            </div>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-700">
              Nuestro proceso paso a paso para disolver y liquidar tu compañía
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
                  question: "¿Cuánto tiempo tarda el proceso de liquidación?",
                  answer: "El proceso de liquidación toma entre 3 a 6 meses, dependiendo de la complejidad de la compañía."
                },
                {
                  question: "¿Qué incluye el servicio de disolución?",
                  answer: "Incluye la asesoría legal completa, la redacción de documentos y la representación ante las autoridades competentes."
                },
                {
                  question: "¿Qué sucede con las deudas de la empresa?",
                  answer: "Durante la liquidación, se procederá a saldar las deudas de la empresa con sus activos disponibles."
                },
                {
                  question: "¿Puedo disolver la empresa si tiene pasivos?",
                  answer: "Sí, la liquidación incluye el manejo de pasivos y la distribución de activos para cumplir con las obligaciones."
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
          <h2 className="text-4xl font-bold mb-4">¿Listo para disolver y liquidar tu compañía?</h2>
          <p className="text-xl mb-8">Contáctanos hoy mismo y da el primer paso hacia la disolución de tu empresa</p>
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

export default DisolucionLiquidacionPage;
