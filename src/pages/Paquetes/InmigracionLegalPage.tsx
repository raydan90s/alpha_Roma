import React, { useState, useEffect } from 'react';
import { Gem, ArrowLeft, Search, Shield, CheckCircle, Clock, Users, FileText, Phone, Star, Award, Eye } from 'lucide-react';

const InmigracionLegalPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      id: 1,
      title: "Visa de Trabajo",
      price: "$1,200",
      priceNote: "+ IVA",
      icon: <Search className="text-blue-600 text-3xl" />,
      description: "Asesoría para obtener una visa de trabajo en EE.UU., incluyendo todos los trámites y documentos necesarios.",
      features: [
        "Asesoría para el tipo de visa adecuado",
        "Elaboración de formularios y documentación",
        "Revisión de requisitos específicos",
        "Preparación para entrevista consular"
      ],
      duration: "3-6 meses",
      buttonColor: "bg-blue-600 hover:bg-blue-700",
      popular: false
    },
    {
      id: 2,
      title: "Visa de Estudiante",
      price: "$1,000",
      priceNote: "+ IVA",
      icon: <Gem className="text-purple-600 text-3xl" />,
      description: "Ayuda completa para obtener una visa de estudiante F1, para estudiar en Estados Unidos.",
      features: [
        "Asesoría sobre el tipo de visa F1",
        "Revisión de la admisión a la institución educativa",
        "Preparación de documentos financieros",
        "Orientación sobre el proceso de entrevista"
      ],
      duration: "2-4 meses",
      buttonColor: "bg-purple-600 hover:bg-purple-700",
      popular: true
    },
    {
      id: 3,
      title: "Visa de Inmigrante por Familia",
      price: "$2,500",
      priceNote: "+ IVA",
      icon: <Users className="text-green-600 text-3xl" />,
      description: "Asesoría para obtener una visa de inmigrante por medio de un familiar directo en EE.UU.",
      features: [
        "Documentación necesaria para la petición familiar",
        "Asesoría sobre la elegibilidad del familiar patrocinador",
        "Seguimiento de la solicitud",
        "Ayuda en la preparación de entrevistas consulares"
      ],
      duration: "6-12 meses",
      buttonColor: "bg-green-600 hover:bg-green-700",
      popular: false
    }
  ];

  const benefits = [
    {
      icon: <Shield className="text-blue-600 text-2xl" />,
      title: "Seguridad Legal",
      description: "Te aseguramos que tu proceso de inmigración cumpla con todas las regulaciones legales y sea aprobado sin complicaciones."
    },
    {
      icon: <CheckCircle className="text-green-600 text-2xl" />,
      title: "Aprobación Rápida",
      description: "Con nuestra experiencia, aceleramos el proceso de tu visa y evitamos posibles contratiempos."
    },
    {
      icon: <Award className="text-yellow-600 text-2xl" />,
      title: "Acceso a Oportunidades",
      description: "Obtener una visa te abre la puerta a nuevas oportunidades de trabajo, estudios y vida en Estados Unidos."
    },
    {
      icon: <Eye className="text-indigo-600 text-2xl" />,
      title: "Asesoría Personalizada",
      description: "Te brindamos un acompañamiento total durante todo el proceso de inmigración, adaptado a tus necesidades."
    }
  ];

  const process = [
    {
      step: "01",
      title: "Evaluación Inicial",
      description: "Revisamos tu situación actual y determinamos el tipo de visa que más te conviene."
    },
    {
      step: "02",
      title: "Recolección de Documentos",
      description: "Recopilamos toda la documentación necesaria y preparamos tus formularios."
    },
    {
      step: "03",
      title: "Presentación de Solicitud",
      description: "Presentamos tu solicitud ante las autoridades migratorias correspondientes."
    },
    {
      step: "04",
      title: "Entrevista Consular",
      description: "Te preparamos para la entrevista consular para asegurar la aprobación de tu visa."
    },
    {
      step: "05",
      title: "Aprobación y Viaje",
      description: "Una vez aprobada tu visa, te ayudamos con los últimos pasos para viajar y establecerte en EE.UU."
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Inmigración Legal a Estados Unidos</h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
              Te ayudamos a encontrar la mejor opción de visa para tu futuro en Estados Unidos. ¡Comienza tu proceso de inmigración hoy!
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
              Elige el servicio de inmigración que mejor se adapte a tus necesidades para vivir en Estados Unidos legalmente
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">¿Por qué Inmigrar Legalmente a EE. UU.?</h2>
            <div className="flex justify-center mb-8">
              <div className="w-24 h-1 bg-blue-600"></div>
            </div>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-700">
              Conoce los beneficios de obtener una visa legal para Estados Unidos con NexoLegal
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Proceso de Inmigración Legal</h2>
            <div className="flex justify-center mb-8">
              <div className="w-24 h-1 bg-blue-600"></div>
            </div>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-700">
              Nuestro proceso paso a paso para inmigrar legalmente a Estados Unidos
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
                  question: "¿Cuánto tiempo tarda el proceso de inmigración?",
                  answer: "El proceso puede durar entre 2 a 12 meses dependiendo del tipo de visa y la complejidad del caso."
                },
                {
                  question: "¿Qué requisitos necesito para aplicar a una visa?",
                  answer: "Los requisitos varían según el tipo de visa, pero generalmente se requiere prueba de fondos, documentos académicos, laborales o familiares."
                },
                {
                  question: "¿Puedo aplicar a una visa si ya tengo un empleo en EE. UU.?",
                  answer: "Sí, si tienes una oferta de empleo en EE. UU. puedes aplicar a una visa de trabajo, como la H1-B."
                },
                {
                  question: "¿Qué pasa si mi visa es rechazada?",
                  answer: "Si tu visa es rechazada, podemos ayudarte a entender las razones y explorar opciones alternativas o apelar la decisión."
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
          <h2 className="text-4xl font-bold mb-4">¿Listo para inmigrar legalmente a EE. UU.?</h2>
          <p className="text-xl mb-8">Contáctanos hoy mismo y da el primer paso hacia tu nueva vida en Estados Unidos</p>
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

export default InmigracionLegalPage;
