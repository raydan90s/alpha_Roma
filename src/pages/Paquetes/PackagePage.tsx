import React, { useEffect } from "react";
import { scrollToHashOnLoad } from "../../assets/utils/scrollUtils";
import ContactSection from "../../components/Sections/contactSection";
import PlanFeatureCard from "../../components/PlanFeatureCard"; // Importa PlanFeatureCard
import { ContactSectionProps } from "../../interface/contactProps";
import { FaShieldAlt, FaBriefcase, FaStar } from "react-icons/fa"; // Importa iconos

const PackagePage = () => {
  useEffect(() => {
    scrollToHashOnLoad();
  }, []);

  const handleContactButtonClick = () => {
    console.log("Botón de contacto para paquetes clickeado");
    // Aquí puedes implementar la lógica para contactar o solicitar más información sobre los paquetes
  };

  const packagesContactSectionData: ContactSectionProps = {
    title: "¿Interesado en nuestros paquetes y precios?",
    description: "Contáctanos para obtener más detalles o para personalizar un plan para ti.",
    phone: "8445917193",
    emailButtonText: "Contactar",
    onEmailButtonClick: handleContactButtonClick,
  };

  const plansData = [
    {
      title: "Básico",
      icon: <FaShieldAlt className="text-primary text-3xl" />,
      features: [
        "Sistema de alarma básico",
        "Monitoreo 24/7 (opcional)",
        "Soporte técnico telefónico",
        "Cancela cuando quieras",
      ],
      price: "USD 0 por 1 mes",
      priceAfter: "Después, USD XX/mes",
      buttonText: "Probar 1 mes por USD 0",
      buttonColor: "primary",
      footerText: "USD 0 por 1 mes. Después, cuesta USD XX al mes.\nLa oferta solo está disponible si aún no probaste el Plan Básico. Se aplican términos.\n*** + impuestos aplicables.",
      id: "plan-basico",
    },
    {
      title: "Empresarial",
      icon: <FaBriefcase className="text-secondary text-3xl" />,
      features: [
        "Sistema de alarma avanzado",
        "Cámaras de seguridad (número variable)",
        "Monitoreo profesional 24/7",
        "Aplicación móvil para control remoto",
        "Cancela cuando quieras",
      ],
      price: "USD 0 por 1 mes",
      priceAfter: "Después, USD YY/mes",
      buttonText: "Probar 1 mes por USD 0",
      buttonColor: "secondary",
      footerText: "USD 0 por 1 mes. Después, cuesta USD YY al mes.\nOferta disponible solo para empresas certificadas.\n*** + impuestos aplicables.",
      id: "plan-empresarial",
    },
    {
      title: "Premium",
      icon: <FaStar className="text-acent text-3xl" />,
      features: [
        "Sistema de seguridad inteligente personalizado",
        "Cámaras de alta resolución con analíticas",
        "Monitoreo profesional con respuesta prioritaria",
        "Integración con domótica",
        "Soporte técnico VIP",
      ],
      price: "USD 20$$ al mes",
      buttonText: "Obtener Premium",
      buttonColor: "primary",
      footerText: "Para hogares o negocios que necesitan máxima protección. Se aplican términos.\n*** + impuestos aplicables.",
      id: "plan-premium",
    },
  ];

  return (
    <div className="pt-20 bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <div className="bg-secondary py-16 text-white">
        <div className="max-w-screen-xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Paquetes y Precios</h1>
          <p className="text-lg md:text-xl max-w-2xl">
            Explora nuestros diferentes planes de seguridad diseñados para adaptarse a tus necesidades.
          </p>
        </div>
      </div>

      {/* Plans Grid using PlanFeatureCard */}
      <div className="max-w-screen-xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        {plansData.map((plan, index) => (
          <div key={index} id={plan.id}>
            <PlanFeatureCard {...plan} />
          </div>
        ))}
      </div>

      {/* Contact Section */}
      <div className="max-w-screen-lg mx-auto px-4 pb-16">
        
          <ContactSection {...packagesContactSectionData} />
        
      </div>
    </div>
  );
};

export default PackagePage;