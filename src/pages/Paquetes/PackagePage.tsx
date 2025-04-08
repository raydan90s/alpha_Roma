import React, { useEffect } from "react";
import { scrollToHashOnLoad } from "../../assets/utils/scrollUtils";
import ContactSection from "../../components/Sections/contactSection";
import PriceCard from "../../components/PriceCard"; // Asegúrate de que la ruta sea correcta
import { ContactSectionProps } from "../../interface/contactProps";

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

  // Datos para las tarjetas de precios
  const pricingCards = [
    {
      id: "plan-basico",
      headerColor: "bg-primary",
      tagColor: "bg-pink-200",
      tagText: "USD 0 por 1 mes",
      planName: "Básico",
      planTitle: "Individual",
      price: "USD 0 por 1 mes",
      priceAfter: "Después, USD XX/mes",
      features: [
        "Sistema de alarma básico",
        "Monitoreo 24/7 (opcional)",
        "Soporte técnico telefónico",
        "Cancela cuando quieras"
      ],
      buttonText: "Probar 1 mes por USD 0",
      buttonColor: "bg-white",
      footerText: "USD 0 por 1 mes. Después, cuesta USD XX al mes.\nLa oferta solo está disponible si aún no probaste el Plan Básico. Se aplican términos.\n*** + impuestos aplicables."
    },
    {
      id: "plan-empresarial",
      headerColor: "bg-secondary",
      tagColor: "bg-purple-200",
      tagText: "USD 0 por 1 mes",
      planName: "Empresarial",
      planTitle: "Negocios",
      price: "USD 0 por 1 mes",
      priceAfter: "Después, USD YY/mes",
      features: [
        "Sistema de alarma avanzado",
        "Cámaras de seguridad (número variable)",
        "Monitoreo profesional 24/7",
        "Aplicación móvil para control remoto",
        "Cancela cuando quieras"
      ],
      buttonText: "Probar 1 mes por USD 0",
      buttonColor: "bg-white",
      footerText: "USD 0 por 1 mes. Después, cuesta USD YY al mes.\nOferta disponible solo para empresas certificadas.\n*** + impuestos aplicables."
    },
    {
      id: "plan-premium",
      headerColor: "bg-yellow-500",
      tagColor: "",
      tagText: "",
      planName: "Premium",
      planTitle: "Duo",
      price: "USD ZZ.99*** al mes",
      priceAfter: "",
      features: [
        "Sistema de seguridad inteligente personalizado",
        "Cámaras de alta resolución con analíticas",
        "Monitoreo profesional con respuesta prioritaria",
        "Integración con domótica",
        "Soporte técnico VIP"
      ],
      buttonText: "Obtener Premium Duo",
      buttonColor: "bg-yellow-500",
      footerText: "Para hogares o negocios que necesitan máxima protección. Se aplican términos.\n*** + impuestos aplicables."
    }
  ];

  const familiarCard = {
    id: "plan-familiar",
    headerColor: "bg-blue-500",
    tagColor: "",
    tagText: "",
    planName: "Premium",
    planTitle: "Familiar",
    price: "USD 9.99*** al mes",
    priceAfter: "",
    features: [
      "Hasta 4 cuentas Premium",
      "Sistema de seguridad integral para toda la casa",
      "Controla diferentes zonas independientemente",
      "Posibilidad de comprar 1 o 2 cuentas adicionales"
    ],
    buttonText: "Obtener Premium Familiar",
    buttonColor: "bg-blue-500",
    footerText: "Para familias que viven en el mismo domicilio. Se aplican términos.\n*** + impuestos aplicables."
  };

  return (
    <div className="pt-20 bg-white text-white min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-secondary to-primary py-16">
        <div className="max-w-screen-xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Paquetes y Precios</h1>
          <p className="text-lg md:text-xl max-w-2xl">
            Explora nuestros diferentes planes de seguridad diseñados para adaptarse a tus necesidades.
          </p>
        </div>
      </div>

      {/* Plans Grid */}
      <div className="max-w-screen-xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        {pricingCards.map((card, index) => (
          <PriceCard key={index} {...card} />
        ))}
      </div>

      {/* Family Plan Card - 4th Card */}
      <div className="max-w-screen-xl mx-auto px-4 pb-16">
        <div className="max-w-md mx-auto">
          <PriceCard {...familiarCard} />
        </div>
      </div>

      {/* Contact Section */}
      <ContactSection {...packagesContactSectionData} />
    </div>
  );
};

export default PackagePage;