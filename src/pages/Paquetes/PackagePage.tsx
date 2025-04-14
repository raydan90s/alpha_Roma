import React, { useEffect } from "react";
import { scrollToHashOnLoad } from "../../assets/utils/scrollUtils";
import ContactSection from "../../components/Sections/contactSection";
import PlanFeatureCard from "../../components/PlanFeatureCard"; // Importa PlanFeatureCard
import { ContactSectionProps } from "../../interface/contactProps";
import { FaShieldAlt, FaGem, FaStar } from "react-icons/fa"; // Importa iconos

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
    context: "planes",
    emailButtonText: "Contactar",
    onEmailButtonClick: handleContactButtonClick,
  };

  const plansData = [
    {
      title: "BÁSICO BRONCE",
      icon: <FaShieldAlt className="text-primary text-3xl" />,
      features: [
        "1 Cámara tipo Domo 2MP",
        "3 Cámaras tipo tubo 2MP",
        "1 NVR 4 puertos POE",
        "1 Disco duro de 2TB",
        "Visualización a través de app móvil",
        "Kit de Alarma (1 Sensor + 1 Control + 1 Contacta magnetico)",
      ],
      buttonText: "¡EMPIEZA HOY!",
      buttonColor: "primary",
      footerText: "El servicio de monitoreo, la instalación y las cámaras se venden por separado.\nPrecio de instalación varia de acuerdo a distancia",
      id: "plan-bronce",
    },
    {
      title: "BÁSICA PLATA",
      icon: <FaStar className="text-secondary text-3xl" />,
      features: [
        "2 Cámaras tipo Domo 1080p",
        "4 Cámaras tipo tubo 1080p",
        "1 NVR 8 puertos POE",
        "1 Disco duro 2TB",
        "Visualización a través de app móvil",
        "Kit de Alarma (1 Sensor + 1 Control + 1 Contacta magnetico)",
      ],
      buttonText: "¡EMPIEZA HOY!",
      buttonColor: "secondary",
      footerText: "El servicio de monitoreo, la instalación y las cámaras se venden por separado.\nPrecio de instalación varia de acuerdo a distancia",
      id: "plan-plata",
    },
    {
      title: "BÁSICO ORO",
      icon: <FaGem className="text-acent text-3xl" />,
      features: [
        "4 Cámaras tipo Domo 1080p",
        "4 Cámaras tipo tubo 1080p",
        "1 NVR 8 puertos POE",
        "1 Disco duro 2TB",
        "Visualización a través de app móvil",
        "Kit de Alarma (1 Sensor + 1 Control + 1 Contacta magnetico)",
      ],
      buttonText: "¡EMPIEZA HOY!",
      buttonColor: "primary",
      footerText: "El servicio de monitoreo, la instalación y las cámaras se venden por separado.\nPrecio de instalación varia de acuerdo a distancia",
      id: "plan-oro",
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
      <div className="bg-[f3f4f6] pt-8 text-center">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="max-w-screen-xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-2">Precios</h1>
            <div className="flex justify-center mb-4">
              <div className="w-24 h-1 bg-primary"></div>
            </div>
          </div>

          <p className="text-lg md:text-xl max-w-2xl mb-4 mx-auto text-center">
            <strong>Monitoreo 24/7 desde</strong>

          </p>
          <p className="text-lg md:text-xl max-w-2xl mb-8 mx-auto text-center">
            <strong className="text-5xl">$15 mensuales</strong>

          </p>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        {plansData.map((plan, index) => (
          <div key={index} id={plan.id} className="scroll-mt-48 md:scroll-mt-48 lg:scroll-mt-32"> {/* Ejemplo con valores aumentados */}
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