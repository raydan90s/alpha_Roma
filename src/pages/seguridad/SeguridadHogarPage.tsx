import React, { useEffect } from "react";
import { scrollToHashOnLoad } from "../../assets/utils/scrollUtils.ts";
import ContactSection from "../../components/Sections/contactSection.tsx";
import { ContactSectionProps } from "../../interface/contactProps";
import HeroProps from "../../interface/HeroProps";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDoorOpen,
  faVideo,
  faHome,
  faFireExtinguisher,
} from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import HeroSegmar from "../securityCameras/HeroSegmar.tsx";

const SeguridadHogarPage = () => {
  useEffect(() => {
    scrollToHashOnLoad();
  }, []);

  const handleContactButtonClick = () => {
    console.log("Botón de contacto para seguridad del hogar clickeado");
  };

  const seguridadHogarContactSectionData: ContactSectionProps = {
    title: "¿Interesado en proteger tu hogar?",
    description: "Contáctanos para asegurar tu tranquilidad y la de tu familia.",
    phone: "8445917193",
    emailButtonText: "Contactar",
    onEmailButtonClick: handleContactButtonClick,
  };

  const seguridadHogarHeroData: HeroProps = {
    title: "Tu Hogar,",
    span: "Tu Santuario Seguro",
    link_image: "src/assets/img/HeroCamera.png", // URL de una cámara de seguridad enfocando un hogar
    span_btn1: "Ver Sistemas",
    span_btn2: "Demo en Vivo", // Enlace que simula una cámara
    description: "Protege cada rincón de tu hogar con nuestra vigilancia inteligente. Monitoreo en tiempo real y la tranquilidad que mereces.",
    cta_text: "Explora la Protección",
  };

  const solucionesSeguridadHogar = [
    {
      id: "seguridad-accesos",
      label: "Protección de Accesos Inteligente",
      description: "Asegura cada punto de entrada con sensores avanzados y alertas en tiempo real.",
      icon: faDoorOpen,
      image: "https://images.unsplash.com/photo-1598454444675-9f37ebdb809c?auto=format&fit=crop&w=800&q=80",
      button_text: "Más Información",
    },
    {
      id: "vigilancia-video",
      label: "Vigilancia por Video HD",
      description: "Monitorea tu hogar con cámaras de alta definición, visión nocturna y acceso remoto. Detecta y disuade cualquier amenaza.",
      icon: faVideo,
      image: "https://images.unsplash.com/photo-1586991074180-989c6e3820b6?auto=format&fit=crop&w=800&q=80",
      button_text: "Más Información",
    },
    {
      id: "automatizacion-hogar",
      label: "Automatización del Hogar",
      description: "Controla cerraduras, luces y más para un hogar seguro y cómodo.",
      icon: faHome,
      image: "https://images.unsplash.com/photo-1524749292158-7540c2494485?auto=format&fit=crop&w=800&q=80",
      button_text: "Más Información",
    },
    {
      id: "proteccion-ambiental",
      label: "Protección Ambiental",
      description: "Detectores de humo, CO y otros peligros para una seguridad completa.",
      icon: faFireExtinguisher,
      image: "https://images.unsplash.com/photo-1558002038-f8c6e486f974?auto=format&fit=crop&w=800&q=80",
      button_text: "Más Información",
    },
  ];

  return (
    <div className="pt-0 bg-gray-100">
      {/* Hero Section */}
      <HeroSegmar
        {...seguridadHogarHeroData}
        
      />

      {/* Soluciones */}
      <div className="max-w-screen-xl mx-auto px-4 py-12 space-y-16">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-10">
          Soluciones de Seguridad para tu Hogar
        </h2>

        {solucionesSeguridadHogar.map((option) => (
          <section
            id={option.id}
            key={option.id}
            className="scroll-mt-24 bg-white rounded-xl shadow-lg p-12 md:p-16"
          >
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2">
                <h3 className="text-3xl font-bold text-[#0a1626] mb-6">{option.label}</h3>
                <p className="text-lg text-gray-600 mb-8">{option.description}</p>
                <a
                  href={`#${option.id}`}
                  className="bg-[#60c079] text-white font-bold px-6 py-3 rounded-full shadow-md hover:bg-[#79f197] hover:shadow-lg transition-all duration-300"
                >
                  {option.button_text}
                </a>
              </div>
              <div className="md:w-1/2">
                <div className="rounded-xl overflow-hidden shadow-lg h-80 bg-gray-200 flex items-center justify-center">
                  <img
                    src={option.image}
                    alt={option.label}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* Contacto */}
        <ContactSection {...seguridadHogarContactSectionData} />
      </div>
    </div>
  );
};

export default SeguridadHogarPage;