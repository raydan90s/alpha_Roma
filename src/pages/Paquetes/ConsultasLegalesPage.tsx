import { useState, useEffect } from 'react';
import { Gem, Search, Shield, CheckCircle, Award, Eye } from 'lucide-react';
import { HeroServiceCard } from '../../components/package/heroServiceCard';
import ServicesSection from '../../components/package/serviceSection';
import BenefitsSection from '../../components/package/benefitsSection';
import ProcessSection from '../../components/package/ProcessSection';
import CallToActionSectionV2 from '../../components/Sections/Call_to_actionV2';

const ConsultasLegalesPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Datos como constantes
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

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero Section */}
      <section>
          <HeroServiceCard
            icon={<Gem className="text-6xl text-white" />}
            title="Consultas Legales y Juicios"
            description="Brindamos asesoría y representación legal en todo tipo de consultas y juicios. Protege tus derechos con expertos."
            button1Text="Ver Servicios"
            button2Text="Consulta Gratuita"
            button1Link="/servicios"
            button2Link="/consulta-gratuita"
          />
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
          <ServicesSection services={services} isVisible={isVisible} description={"Elige el servicio legal que mejor se adapte a tus necesidades"} />
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-100">
          <BenefitsSection
            title={"¿Por qué elegir nuestros servicios?"}
            description={"Conoce los beneficios de contratar nuestros servicios legales especializados"}
            benefits={benefits}
            isVisible={isVisible}
          />
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
          <ProcessSection
            title="Proceso de Consultoría y Juicios"
            description="Te guiamos a través de cada paso de tu proceso legal"
            steps={process}
            isVisible={isVisible}
          />
      </section>

      {/* CTA Section */}
      <section>
        <CallToActionSectionV2
          title="¿Listo para resolver tu caso?"
          description="Contáctanos hoy mismo y da el primer paso hacia la resolución de tu caso legal"
          button1Text="Llamar Ahora"
          button2Text="Solicitar Cotización"
          button1Link="tel:+123456789"
          button2Link="/cotizacion"
        />
      </section>
    </div>
  );
};

export default ConsultasLegalesPage;
