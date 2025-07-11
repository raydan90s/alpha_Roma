import { useState, useEffect } from 'react';
import { Gem, Search, Shield, CheckCircle, Users, Award, Eye } from 'lucide-react';
import { HeroServiceCard } from '../../components/package/heroServiceCard';
import ServicesSection from '../../components/package/serviceSection';
import BenefitsSection from '../../components/package/benefitsSection';
import ProcessSection from '../../components/package/ProcessSection';
import CallToActionSectionV2 from '../../components/Sections/Call_to_actionV2';

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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section>
        <HeroServiceCard
          icon={<Gem className="text-6xl text-white" />}
          title="Inmigración Legal a Estados Unidos"
          description="Te ayudamos a encontrar la mejor opción de visa para tu futuro en Estados Unidos. ¡Comienza tu proceso de inmigración hoy!"
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
          description={"Elige el servicio de inmigración que mejor se adapte a tus necesidades para vivir en Estados Unidos legalmente"}
        />
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-100">
        <BenefitsSection
          title={"¿Por qué Inmigrar Legalmente a EE. UU.?"}
          description={"Conoce los beneficios de obtener una visa legal para Estados Unidos con NexoLegal"}
          benefits={benefits}
          isVisible={isVisible}
        />
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <ProcessSection
          title="Proceso de Inmigración Legal"
          description="Nuestro proceso paso a paso para inmigrar legalmente a Estados Unidos"
          steps={process}
          isVisible={isVisible}
        />
      </section>

      {/* CTA Section */}
      <section>
        <CallToActionSectionV2
          title="¿Listo para inmigrar legalmente a EE. UU.?"
          description="Contáctanos hoy mismo y da el primer paso hacia tu nueva vida en Estados Unidos"
          button1Text="Llamar Ahora"
          button2Text="Solicitar Cotización"
          button1Link="tel:+123456789"
          button2Link="/cotizacion"
        />
      </section>
    </div>
  );
};

export default InmigracionLegalPage;
