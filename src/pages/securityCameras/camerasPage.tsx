import React, { useEffect } from "react";
import { scrollToHashOnLoad } from "../../assets/utils/scrollUtils.ts";
import ContactSection from "../../components/Sections/contactSection.tsx"; // Importa el componente
import { ContactSectionProps } from "../../interface/contactProps"; // Importa la interfaz
import CameraHero from "../securityCameras/cameraHero.tsx"; // Importa el nuevo Hero
import HeroProps from "../../interface/HeroProps"; // Importa la interfaz de HeroProps

const CamerasPage = () => {
  useEffect(() => {
    scrollToHashOnLoad();
  }, []);

  const handleContactButtonClick = () => {
    console.log("Botón de contacto para cámaras clickeado");
    // Aquí puedes implementar la lógica para contactar sobre cámaras
  };

  const camerasContactSectionData: ContactSectionProps = {
    title: "¿Interesado en nuestras soluciones de cámaras?",
    description: "Contáctanos para discutir tus necesidades de vigilancia y obtener una cotización personalizada.",
    phone: "8445917193",
    emailButtonText: "Contactar",
    onEmailButtonClick: handleContactButtonClick,
  };

  const cameraHeroData: HeroProps = {
    title: "Vigilancia Inteligente para tu ",
    span: "Tranquilidad",
    link_image: "src/assets/img/HeroCamera.png", // Reemplaza con la ruta de tu imagen
    span_btn1: "Ver Nuestras Cámaras",
    span_btn2: "Solicitar Asesoría",
  };

  const cameraOptions = [
    { label: "Cámaras IP", href: "#camaras-ip", description: "Vigilancia remota de alta definición con acceso desde cualquier dispositivo." },
    { label: "CCTV", href: "#cctv", description: "Circuitos cerrados de televisión para una supervisión continua y grabación local." },
    { label: "Grabación en la nube", href: "#grabacion-nube", description: "Almacenamiento seguro de tus grabaciones de video en la nube." },
  ];

  return (
    <div className="pt-0 bg-gray-100"> {/* Ajustamos el pt-0 para el nuevo Hero */}
      {/* Hero Section */}
      <CameraHero {...cameraHeroData} />

      {/* Cameras Content */}
      <div className="max-w-screen-xl mx-auto px-4 py-12 space-y-16">
        {cameraOptions.map((option) => (
          <section id={option.href.substring(1)} key={option.label} className="scroll-mt-24 bg-white rounded-xl shadow-lg p-12 md:p-16">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">{option.label}</h2>
                <p className="text-lg text-gray-600 mb-8">{option.description}</p>
                <button className="bg-secondary text-white font-bold px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300">
                  Ver más sobre {option.label}
                </button>
              </div>
              <div className="md:w-1/2">
                <div className="bg-gray-200 rounded-xl overflow-hidden shadow-lg h-80">
                  <img
                    src={`/api/placeholder/600/400?text=${encodeURIComponent(option.label)}`}
                    alt={option.label}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* Contact Section */}
        <ContactSection {...camerasContactSectionData} />
      </div>
    </div>
  );
};

export default CamerasPage;