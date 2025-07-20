// src/pages/InmigracionLegalPage.tsx

import { useState, useEffect } from 'react';
import { Gem, Search, Shield, CheckCircle, Users, Award, Eye } from 'lucide-react';
import SEO from '../../components/SEO/SEO';  // Importa el componente SEO
import { HeroServiceCard } from '../../components/package/heroServiceCard';
import ServicesSection from '../../components/package/serviceSection';
import BenefitsSection from '../../components/package/benefitsSection';
import ProcessSection from '../../components/package/ProcessSection';
import CallToActionSectionV2 from '../../components/Sections/Call_to_actionV2';
import { mensajesWhatsApp } from '../../messages/messages';

const InmigracionLegalPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Datos de servicios, beneficios, proceso
  const services = [
    {
      id: 1,
      title: "Visa de Trabajo",
      price: "",
      priceNote: "Costo personalizado",
      priceNoteColor: "text-blue-600",
      icon: <Search className="text-blue-600 text-3xl" />,
      description: "Asesoría para obtener una visa de trabajo en EE.UU., incluyendo todos los trámites y documentos necesarios.",
      features: [
        "Asesoría para el tipo de visa adecuado",
        "Elaboración de formularios y documentación",
        "Revisión de requisitos específicos",
        "Preparación para entrevista consular"
      ],
      duration: "3-6 meses",
      buttonColor: "bg-button hover:bg-hoverButton",
      popular: false
    },
    {
      id: 2,
      title: "Visa de Estudiante",
      price: "",
      priceNote: "Costo personalizado",
      priceNoteColor: "text-blue-600",
      icon: <Gem className="text-purple-600 text-3xl" />,
      description: "Ayuda completa para obtener una visa de estudiante F1, para estudiar en Estados Unidos.",
      features: [
        "Asesoría sobre el tipo de visa F1",
        "Revisión de la admisión a la institución educativa",
        "Preparación de documentos financieros",
        "Orientación sobre el proceso de entrevista"
      ],
      duration: "2-4 meses",
      buttonColor: "bg-button hover:bg-hoverButton",
      popular: true
    },
    {
      id: 3,
      title: "Visa de Inmigrante por Familia",
      price: "",
      priceNote: "Costo personalizado",
      priceNoteColor: "text-blue-600",
      icon: <Users className="text-green-600 text-3xl" />,
      description: "Asesoría para obtener una visa de inmigrante por medio de un familiar directo en EE.UU.",
      features: [
        "Documentación necesaria para la petición familiar",
        "Asesoría sobre la elegibilidad del familiar patrocinador",
        "Seguimiento de la solicitud",
        "Ayuda en la preparación de entrevistas consulares"
      ],
      duration: "6-12 meses",
      buttonColor: "bg-button hover:bg-hoverButton",
      popular: false
    }
  ];

  const benefits = [
    {
      icon: <Shield className="text-blue-600 text-2xl" />,
      title: "Confianza Jurídica",
      description: "Te asesoramos en cada etapa para que tu trámite migratorio sea sólido, cumpla con la normativa y minimice riesgos."
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
      title: "Análisis Legal Inicial",
      description: "Evaluamos tu situación y perfil profesional para definir la categoría de visa más adecuada según la normativa de EE.UU."
    },
    {
      step: "02",
      title: "Asesoría en Documentación y Formularios",
      description: "Te indicamos qué documentos necesitas, verificamos su validez y te guiamos para completar correctamente los formularios."
    },
    {
      step: "03",
      title: "Preparación del Expediente",
      description: "Organizamos tu solicitud conforme a los requisitos oficiales para reducir riesgos de rechazo o demoras."
    },
    {
      step: "04",
      title: "Preparación para la Entrevista Consular",
      description: "Te brindamos consejos prácticos para que afrontes la entrevista con seguridad."
    },
    {
      step: "05",
      title: "Acompañamiento Final",
      description: "Te orientamos en los pasos finales tras la aprobación y en tu ingreso a EE.UU."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* SEO Meta Tags */}
      <SEO
        title="Inmigración Legal a Estados Unidos | Visas y Asesoría"
        description="Te ayudamos a obtener la mejor opción de visa para tu futuro en Estados Unidos. Comienza tu proceso de inmigración hoy con asesoría legal profesional."
        keywords="visa de trabajo, visa de estudiante, visa de inmigrante, asesoría de inmigración, inmigración legal"
        canonical="https://www.nexolegal-ec.com/inmigracion-legal"
      />

      {/* Hero Section */}
      <section>
        <HeroServiceCard
          icon={<Gem className="text-6xl text-white" />}
          title="Inmigración Legal a Estados Unidos"
          description="Te ayudamos a encontrar la mejor opción de visa para tu futuro en Estados Unidos. ¡Comienza tu proceso de inmigración hoy!"
          button2Text="Consulta Gratuita"
          button1Link="servicesSection"
          mensaje={mensajesWhatsApp.inmigrantes}
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
          mensaje={mensajesWhatsApp.inmigrantes}
        />
      </section>
    </div>
  );
};

export default InmigracionLegalPage;
