import { useState, useEffect } from 'react';
import { Gem, Search, Shield, CheckCircle, Award, Eye } from 'lucide-react';
import ServicesSection from '../../components/package/serviceSection'; // Asegúrate de que esta ruta y el archivo existan
import BenefitsSection from '../../components/package/benefitsSection'; // Asegúrate de que esta ruta y el archivo existan
import ProcessSection from '../../components/package/ProcessSection'; // Asegúrate de que esta ruta y el archivo existan
import FaqSection from '../../components/package/FaqSection'; // Asegúrate de que esta ruta y el archivo existan
import CallToActionSectionV2 from '../../components/Sections/Call_to_actionV2'; // Asegúrate de que esta ruta y el archivo existan
import { HeroServiceCard } from '../../components/package/heroServiceCard';

const DisolucionLiquidacionPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Datos de servicios, beneficios, proceso y FAQ
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

  const faqData = [
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
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section>
        <HeroServiceCard
          icon={<Gem className="text-6xl text-white" />}
          title="Disolución y Liquidación de Compañías"
          description="Te ofrecemos soluciones legales para disolver y liquidar tu empresa de forma efectiva y conforme a la ley."
          button1Text="Ver Servicios"
          button2Text="Consulta Gratuita"
          button1Link="/servicios"
          button2Link="/consulta-gratuita"
        />

      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <ServicesSection
          services={services}
          isVisible={isVisible}
          description={"Elige el servicio que mejor se adapte a tus necesidades de disolución y liquidación de compañías"}
        />
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-100">
        <BenefitsSection
          title={"¿Por qué Disolver y Liquidar tu Compañía?"}
          description={"Conoce los beneficios de disolver y liquidar tu compañía con NexoLegal"}
          benefits={benefits}
          isVisible={isVisible}
        />
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <ProcessSection
          title="Proceso de Disolución y Liquidación"
          description="Nuestro proceso paso a paso para disolver y liquidar tu compañía"
          steps={process}
          isVisible={isVisible}
        />
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-100">
        <FaqSection
          description={"Aquí encontrarás las respuestas a las preguntas más comunes sobre el proceso de disolución y liquidación de compañías."}
          faqs={faqData}
          isVisible={isVisible}
        />
      </section>

      {/* CTA Section */}
      <section>
        <CallToActionSectionV2
          title="¿Listo para disolver y liquidar tu compañía?"
          description="Contáctanos hoy mismo y da el primer paso hacia la disolución de tu empresa"
          button1Text="Llamar Ahora"
          button2Text="Solicitar Cotización"
          button1Link="tel:+123456789"
          button2Link="/cotizacion"
        />
      </section>
    </div>
  );
};

export default DisolucionLiquidacionPage;
