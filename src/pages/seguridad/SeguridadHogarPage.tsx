import React, { useEffect } from "react";
import { scrollToHashOnLoad } from "../../assets/utils/scrollUtils.ts";
import ContactSection from "../../components/Sections/contactSection.tsx";
import { ContactSectionProps } from "../../interface/contactProps";
import CameraHero from "../securityCameras/cameraHero.tsx"; // Reutilizamos CameraHero
import HeroProps from "../../interface/HeroProps";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faShieldAlt,
  faMobileAlt,
  faLightbulb,
  faWifi,
  faDoorOpen, // Icono para accesos
  faVideo, // Icono para vigilancia
  faHome, // Icono para automatización
  faFireExtinguisher, // Icono para protección ambiental
} from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';

const SeguridadHogarPage = () => {
  useEffect(() => {
    scrollToHashOnLoad();
  }, []);

  const handleContactButtonClick = () => {
    console.log("Botón de contacto para seguridad del hogar clickeado");
    // Aquí puedes implementar la lógica para contactar sobre seguridad del hogar
  };

  const seguridadHogarContactSectionData: ContactSectionProps = {
    title: "¿Interesado en proteger tu hogar?",
    description: "Contáctanos para asegurar tu tranquilidad y la de tu familia.",
    phone: "8445917193",
    emailButtonText: "Contactar",
    onEmailButtonClick: handleContactButtonClick,
  };

  const seguridadHogarHeroData: HeroProps = {
    title: "Seguridad Inteligente para tu ",
    span: "Hogar",
    link_image: "src/assets/img/HeroHomeSecurity.png", // Reemplaza con la ruta de tu imagen
    span_btn1: "Ver Soluciones",
    span_btn2: "Asesoría Gratuita",
  };

  const includedFeatures = [
    { name: "Protección Integral", icon: faShieldAlt },
    { name: "Control Remoto", icon: faMobileAlt },
    { name: "Hogar Inteligente", icon: faLightbulb },
    { name: "Conexión Segura", icon: faWifi },
    // Puedes añadir más características si lo deseas
  ];

  const solucionesSeguridadHogar = [
    {
      label: "Protección de Accesos Inteligente",
      href: "#seguridad-accesos",
      description: "Asegura cada punto de entrada con sensores avanzados y alertas en tiempo real.",
      icon: faDoorOpen,
    },
    {
      label: "Vigilancia por Video HD",
      href: "#vigilancia-video",
      description: "Monitorea tu hogar con cámaras de alta definición, visión nocturna y acceso remoto.",
      icon: faVideo,
    },
    {
      label: "Automatización del Hogar",
      href: "#automatizacion-hogar",
      description: "Controla cerraduras, luces y más para un hogar seguro y cómodo.",
      icon: faHome,
    },
    {
      label: "Protección Ambiental",
      href: "#proteccion-ambiental",
      description: "Detectores de humo, CO y otros peligros para una seguridad completa.",
      icon: faFireExtinguisher,
    },
    // Puedes añadir más soluciones si lo deseas
  ];

  return (
    <div className="pt-0 bg-gray-100">
      {/* Hero Section */}
      <CameraHero {...seguridadHogarHeroData} />

      {/* Todos los sistemas incluyen Section */}
      <section className="py-16 bg-white">
        <div className="max-w-screen-xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-10 text-center">Todos nuestros sistemas para el hogar incluyen</h2>
          <div className="flex flex-row justify-around items-center">
            {includedFeatures.map((feature, index) => (
              <div key={index} className="flex flex-col items-center">
                <FontAwesomeIcon icon={feature.icon} size="3x" className="text-secondary mb-4" />
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-gray-700">{feature.name.split(' ')[0]}</h3>
                  {feature.name.split(' ').length > 1 && (
                    <h3 className="text-lg font-semibold text-gray-700">{feature.name.split(' ').slice(1).join(' ')}</h3>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Soluciones de Seguridad para el Hogar */}
      <div className="max-w-screen-xl mx-auto px-4 py-12 space-y-16">
        {solucionesSeguridadHogar.map((option) => (
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
                <div className="bg-gray-200 rounded-xl overflow-hidden shadow-lg h-80 flex items-center justify-center">
                  <FontAwesomeIcon icon={option.icon} size="5x" className="text-secondary opacity-75" />
                  {/* También podrías usar una imagen representativa aquí */}
                  {/* <img src={`/api/placeholder/600/400?text=${encodeURIComponent(option.label)}}`} alt={option.label} className="w-full h-full object-cover" /> */}
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* Contact Section */}
        <ContactSection {...seguridadHogarContactSectionData} />
      </div>
    </div>
  );
};

export default SeguridadHogarPage;
