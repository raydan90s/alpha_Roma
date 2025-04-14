import React, { useEffect, useRef } from "react";
import { scrollToHashOnLoad } from "../../assets/utils/scrollUtils.ts";
import ContactSection from "../../components/Sections/contactSection.tsx";
import { ContactSectionProps } from "../../interface/contactProps";
import '@fortawesome/fontawesome-svg-core/styles.css';
import HeroSegmar from "./HeroSegmar.tsx";
import SplitSection from "../../components/Sections/SplitSection.tsx"; // Importa SplitSection
import { TELEFONO_CONTACTO } from "../../config/config.ts";

const SeguridadHogarPage = () => {
  const alertasInmediatasRef = useRef<HTMLDivElement>(null);
  const cruceLineaRef = useRef<HTMLDivElement>(null);
  const colorVuRef = useRef<HTMLDivElement>(null);

  const scrollToRef = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  };

  useEffect(() => {
    scrollToHashOnLoad();
  }, []);

  const handleContactButtonClick = () => {
    console.log("Botón de contacto para seguridad del hogar clickeado");
  };

  const seguridadHogarContactSectionData: ContactSectionProps = {
    title: "¿Interesado en proteger tu hogar?",
    description: "Contáctanos para asegurar tu tranquilidad y la de tu familia.",
    phone: {TELEFONO_CONTACTO},
    emailButtonText: "Contactar",
    onEmailButtonClick: handleContactButtonClick,
  };

  const seguridadHogarHeroData: HeroProps = {
    title: "Tu Hogar,",
    span: "Tu Santuario Seguro",
    link_image: "src/assets/img/HeroCamera.png",
    span_btn1: "Ver Sistemas",
    span_btn2: "Solicitar Asesoría",
    description: "Protege cada rincón de tu hogar con nuestra vigilancia inteligente. Monitoreo en tiempo real y la tranquilidad que mereces.",
    cta_text: "Explora la Protección",
  };

  const solucionesSeguridadHogar = [
    {
      id: "AlertasInmediatas",
      label: "Alertas Inmediatas",
      description: "La función de alerta inmediata permite que el sistema de videovigilancia reaccione en tiempo real ante eventos sospechosos, enviando notificaciones instantáneas a los dispositivos del usuario o al centro de monitoreo. Esto mejora drásticamente el tiempo de respuesta ante cualquier intento de intrusión, emergencia o actividad no autorizada.",
      image: "https://res.cloudinary.com/dfbpaq83u/image/upload/v1744663146/saqwfm5qvpdndxkrqclp.png",
      features: [
        "Notificaciones en tiempo real",
        "Activación automática de disuasivos",
        "Integración con dispositivos de respuesta",
      ],
    },
    {
      id: "cruceLinea",
      label: "Cruce de Línea y Detección de Intrusos",
      description: "Protege cada acceso a tu hogar y empresa con tecnología avanzada. Define perímetros virtuales y recibe alertas inmediatas cuando se cruzan, ideal para proteger áreas específicas.",
      image: "https://res.cloudinary.com/dfbpaq83u/image/upload/v1744400288/vvqch3ek9qmmzxi6o0zs.png",
      features: [
        "Sensores de movimiento de alta sensibilidad",
        "Reconocimiento de intrusos por zonas específicas",
        "Alta precisión con analítica de video inteligente",
      ],
    },
    {
      id: "colorVu",
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

    <div className="pt-0 bg-gray-100 scroll-pt-24 md:scroll-pt-32 lg:scroll-pt-40"> {/* Adjusted scroll-pt-* values */}
      {/* Hero Section */}
      <HeroSegmar
        {...seguridadHogarHeroData}
        scrollToRef={scrollToRef}
        targetRef={alertasInmediatasRef}
      />

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
            isImageLeft={index % 2 === 0}
            copy={option.copy}
            ref={
              option.id === "AlertasInmediatas"
                ? alertasInmediatasRef
                : option.id === "cruceLinea"
                ? cruceLineaRef
                : option.id === "colorVu"
                ? colorVuRef
                : null
            }
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