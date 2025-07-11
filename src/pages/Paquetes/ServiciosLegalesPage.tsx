import { useState, useEffect } from 'react';
import { Gem, Search, Shield, CheckCircle, Clock, Users, FileText, Award, Eye } from 'lucide-react';
import { HeroServiceCard } from '../../components/package/heroServiceCard';
import ServicesSection from '../../components/package/serviceSection';
import BenefitsSection from '../../components/package/benefitsSection';
import ProcessSection from '../../components/package/ProcessSection';
import CallToActionSectionV2 from '../../components/Sections/Call_to_actionV2';

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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section>
        <HeroServiceCard
          icon={<Gem className="text-6xl text-white" />}
          title="Servicios Legales para Compañías"
          description="Brindamos asesoría y servicios legales especializados para empresas. Protege tu negocio y asegúrate de cumplir con todas las regulaciones legales."
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
          description={"Elige el servicio legal que mejor se adapte a tus necesidades"}
        />
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-100">
        <BenefitsSection
          title={"¿Por qué Elegir Nuestros Servicios?"}
          description={"Conoce los beneficios de contratar nuestros servicios legales para compañías"}
          benefits={benefits}
          isVisible={isVisible}
        />
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <ProcessSection
          title="Proceso de Asesoría Legal"
          description="Sigue nuestro proceso paso a paso para contratar nuestros servicios legales"
          steps={process}
          isVisible={isVisible}
        />
      </section>

      {/* CTA Section */}
      <section>
        <CallToActionSectionV2
          title="¿Listo para proteger tu empresa?"
          description="Contáctanos hoy mismo y da el primer paso hacia la protección legal de tu compañía"
          button1Text="Llamar Ahora"
          button2Text="Solicitar Cotización"
          button1Link="tel:+123456789"
          button2Link="/cotizacion"
        />
      </section>
    </div>
  );
};

export default ServiciosLegalesPage;
