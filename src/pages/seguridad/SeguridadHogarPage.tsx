import React, { useEffect } from "react";
import { scrollToHashOnLoad } from "../../assets/utils/scrollUtils.ts";
import ContactSection from "../../components/Sections/contactSection.tsx";
import { ContactSectionProps } from "../../interface/contactProps";
import HeroProps from "../../interface/HeroProps";
import '@fortawesome/fontawesome-svg-core/styles.css';
import HeroSegmar from "./HeroSegmar.tsx";
import SplitSection from "../../components/Sections/SplitSection.tsx"; // Importa SplitSection

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
      id: "vigilancia-video",
      label: "Alertas Inmediatas",
      description: "La función de alerta inmediata permite que el sistema de videovigilancia reaccione en tiempo real ante eventos sospechosos, enviando notificaciones instantáneas a los dispositivos del usuario o al centro de monitoreo. Esto mejora drásticamente el tiempo de respuesta ante cualquier intento de intrusión, emergencia o actividad no autorizada.",
      image: "https://res.cloudinary.com/dcxqkcmhd/image/upload/v1744299437/fugpjrnxjc3yq78rz8bg.png",
      features: [
        "Notificaciones en tiempo real",
        "Activación automática de disuasivos",
        "Integración con dispositivos de respuesta",
      ],

    },
    {
      id: "seguridad-accesos",
      label: "Cruce de Línea y Detección de Intrusos",
      description: "Protege cada acceso a tu hogar con tecnología avanzada. Define perímetros virtuales y recibe alertas inmediatas cuando se cruzan, ideal para proteger áreas específicas.",
      image: "https://res.cloudinary.com/dfbpaq83u/image/upload/v1744400288/vvqch3ek9qmmzxi6o0zs.png",
      features: [
        "Sensores de movimiento de alta sensibilidad",
        "Reconocimiento de intrusos por zonas específicas",
        "Alta precisión con analítica de video inteligente",
      ],

    },
  
    {
      id: "automatizacion-hogar",
      label: "ColorVu",
      description: "Las cámaras ColorVu brindan una vigilancia inigualable, e iluminan áreas para reducir el riesgo y mejorar la seguridad de inquilinos y visitantes.",
      image: "https://res.cloudinary.com/dfbpaq83u/image/upload/v1744398090/u0k7sctdsqfuewvyp8wc.png",
      features: [
        "Visión en color las 24 horas",
        "Iluminación activa inteligente",
        "Mayor seguridad preventiva",
        "Integración con asistentes de voz para control fácil",
      ],
      copy: "Imagen tomada del video “Desempeño ColorVu”, publicado por Hikvision en YouTube. Todos los derechos reservados al propietario del contenido original."
    },
  ];

  return (
    <div className="pt-0 bg-gray-100">
      {/* Hero Section */}
      <HeroSegmar {...seguridadHogarHeroData} />

      {/* Soluciones usando SplitSection */}
      <div className="max-w-screen-xl mx-auto px-4 py-12 space-y-16">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-10">
          Soluciones de Seguridad para tu Hogar
        </h2>
        {solucionesSeguridadHogar.map((option, index) => (
          <SplitSection
            key={option.id}
            id={option.id}
            label={option.label}
            description={option.description}
            image={option.image}
            features={option.features}
            isImageLeft={index % 2 === 0} // Alternar la posición de la imagen
            copy={option.copy} // Copia adicional para la sección
          />
        ))}
      </div>

      <div className="max-w-screen-xl mx-auto px-4 py-12 space-y-16">
        {/* Contacto */}
        <ContactSection {...seguridadHogarContactSectionData} />
      </div>
    </div>
  );
};

export default SeguridadHogarPage;