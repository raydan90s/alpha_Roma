import React, { useState, useEffect } from 'react';
import { Gem, ArrowLeft, Search, Shield, CheckCircle, Clock, Users, FileText, Phone, Star, Award, Eye } from 'lucide-react';

const ConsultasLegalesPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      id: 1,
      title: "Consultoría Legal Inicial",
      price: "$100",
      priceNote: "+ IVA",
      icon: <Search className="text-blue-600 text-3xl" />,
      description: "Análisis inicial para evaluar la viabilidad y estrategia legal de tu caso.",
      features: [
        "Consulta inicial con abogados especializados",
        "Análisis de posibles riesgos legales",
        "Estrategia jurídica personalizada",
        "Recomendaciones para avanzar con el caso"
      ],
      duration: "1-2 días hábiles",
      buttonColor: "bg-blue-600 hover:bg-blue-700",
      popular: true
    },
    {
      id: 2,
      title: "Juicio Civil o Comercial",
      price: "$1200",
      priceNote: "+ IVA",
      icon: <Gem className="text-purple-600 text-3xl" />,
      description: "Representación legal integral en juicio civil o comercial.",
      features: [
        "Asesoría y defensa jurídica durante el juicio",
        "Preparación de documentos y pruebas",
        "Representación en audiencias",
        "Seguimiento constante del caso"
      ],
      duration: "3-6 meses",
      buttonColor: "bg-purple-600 hover:bg-purple-700",
      popular: false
    },
    {
      id: 3,
      title: "Juicio Laboral",
      price: "$1500",
      priceNote: "+ IVA",
      icon: <Shield className="text-green-600 text-3xl" />,
      description: "Defensa y representación legal en conflictos laborales.",
      features: [
        "Revisión y presentación de documentos laborales",
        "Asesoría sobre derechos laborales",
        "Representación en juicios laborales",
        "Solución efectiva para conflictos entre empleador y empleado"
      ],
      duration: "4-6 meses",
      buttonColor: "bg-green-600 hover:bg-green-700",
      popular: false
    },
    {
      id: 4,
      title: "Consultoría en Derecho Penal",
      price: "$2000",
      priceNote: "+ IVA",
      icon: <CheckCircle className="text-orange-600 text-3xl" />,
      description: "Defensa legal en casos penales, desde consultas hasta juicios.",
      features: [
        "Análisis y defensa de derechos penales",
        "Preparación de defensa y pruebas",
        "Representación ante autoridades judiciales",
        "Asesoría en todas las etapas del juicio penal"
      ],
      duration: "6-12 meses",
      buttonColor: "bg-orange-600 hover:bg-orange-700",
      popular: false
    }
  ];

  const benefits = [
    {
      icon: <Shield className="text-blue-600 text-2xl" />,
      title: "Asesoría Personalizada",
      description: "Recibe la mejor asesoría jurídica adaptada a tus necesidades específicas."
    },
    {
      icon: <CheckCircle className="text-green-600 text-2xl" />,
      title: "Defensa Eficaz",
      description: "Asegura la mejor defensa legal para resolver tu caso con éxito."
    },
    {
      icon: <Award className="text-yellow-600 text-2xl" />,
      title: "Soluciones Rápidas",
      description: "Obtén soluciones jurídicas rápidas y efectivas para tu situación."
    },
    {
      icon: <Eye className="text-indigo-600 text-2xl" />,
      title: "Confianza y Seguridad",
      description: "Confía en nuestra experiencia para gestionar cualquier desafío legal."
    }
  ];

  const process = [
    {
      step: "01",
      title: "Consulta Inicial",
      description: "Analizamos tu caso y ofrecemos una estrategia legal adecuada."
    },
    {
      step: "02",
      title: "Estrategia Legal",
      description: "Desarrollamos un plan legal detallado para abordar el caso."
    },
    {
      step: "03",
      title: "Representación Legal",
      description: "Te representamos en las audiencias y procedimientos judiciales."
    },
    {
      step: "04",
      title: "Resolución del Caso",
      description: "Trabajamos para obtener una resolución favorable para ti."
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Consultas Legales y Juicios</h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
              Brindamos asesoría y representación legal en todo tipo de consultas y juicios. Protege tus derechos con expertos.
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">¿Por qué elegir nuestros servicios?</h2>
            <div className="flex justify-center mb-8">
              <div className="w-24 h-1 bg-blue-600"></div>
            </div>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-700">
              Conoce los beneficios de contratar nuestros servicios legales especializados
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Proceso de Consultoría y Juicios</h2>
            <div className="flex justify-center mb-8">
              <div className="w-24 h-1 bg-blue-600"></div>
            </div>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-700">
              Te guiamos a través de cada paso de tu proceso legal
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
          <h2 className="text-4xl font-bold mb-4">¿Listo para resolver tu caso?</h2>
          <p className="text-xl mb-8">Contáctanos hoy mismo y da el primer paso hacia la resolución de tu caso legal</p>
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

export default ConsultasLegalesPage;
