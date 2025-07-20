import { useState, useEffect } from 'react';
import { companyServices } from '../../components/data/companyServicesData';
import { individualServices } from '../../components/data/individualServicesData';
import { plansData } from '../../components/data/plansData';
import { services } from '../../components/data/serviceData';
import Call_to_action from '../../components/Sections/Call_to_action';
import { generarEnlaceWhatsApp } from '../../messages/messages';
import { TELEFONO_CONTACTO } from '../../config/config';
import { ServiceCard } from '../../components/package/serviceCard';
import SEO from '../../components/SEO/SEO';
const CombinedPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  interface PlanFeatureCardProps {
    title: string;
    price: string | number; // Definimos price como string o number
    priceNote: string;
    icon: React.ReactNode; // Definimos el icono como un React element
    features: string[]; // Un arreglo de strings para las características
    buttonText: string;
    buttonColor: string;
    footerText: string;
    mensaje: string;
  }

  const PlanFeatureCard: React.FC<PlanFeatureCardProps> = ({
    title,
    price,
    priceNote,
    icon,
    features,
    buttonText,
    buttonColor,
    footerText,
    mensaje
  }) => (
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
          <a href={generarEnlaceWhatsApp(mensaje)} >

            <button className={`${buttonColor} text-white px-8 py-3 rounded-lg font-semibold text-sm transition-all duration-300 hover:transform hover:scale-105 w-full`}>
              {buttonText}
            </button>
          </a>
        </div>

        {/* Footer */}
        <div className="text-center text-xs text-gray-500 leading-relaxed">
          <p>{footerText}</p>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <SEO
        title="Servicios Legales y Planes Jurídicos | NexoLegal"
        description="Explora todos los servicios jurídicos que NexoLegal ofrece: asesoría personalizada, planes mensuales, servicios empresariales y más. Protege tus intereses legales hoy."
        keywords="servicios legales Ecuador, asesoría jurídica, planes legales, firma de abogados, constitución de empresas, abogados Guayaquil"
        canonical="https://www.nexolegal-ec.com/paquetes"
      />
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-primary py-20 text-white">
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
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <a
                  href={service.href}
                  key={service.id}
                  className={`group relative transform transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
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
                </a>
              ))}
            </div>

          </div>
        </section>

        {/* Plans Section */}
        <section id='asesoriaLegalPersonal' className="bg-gray-100 py-16">
          <div className="max-w-screen-xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">Planes  Empresariales y Juridico</h2>
              <div className="flex justify-center mb-8">
                <div className="w-24 h-1 bg-blue-600"></div>
              </div>
              <p className="text-lg md:text-xl mb-8 text-gray-700">
                Elige el plan que mejor se adapte a las necesidades de tu empresa con nuestros planes mensuales
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
        <section id='serviciosLegalesNegocios' className="bg-white py-16">
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
                <ServiceCard features={[]} key={index} {...service} />
              ))}
            </div>
          </div>
        </section>



        {/* Contact Section */}
        <section>
          <Call_to_action
            title="¿Necesitas asesoría legal confiable?"
            subtitle="En NexoLegal defendemos tus derechos con compromiso y experiencia."
            spanBtn="Contáctanos"
            link={TELEFONO_CONTACTO}
          />
        </section>
      </div>
    </>
  );
};

export default CombinedPage;