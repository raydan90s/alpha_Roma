import React, { useEffect } from "react";
import { scrollToHashOnLoad } from "../../assets/utils/scrollUtils.ts";
import ContactSection from "../../components/Sections/contactSection.tsx";
import { ContactSectionProps } from "../../interface/contactProps";
import CameraHero from "../securityCameras/cameraHero.tsx";
import HeroProps from "../../interface/HeroProps";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEye,
  faUserCheck,
  faMoon,
  faVolumeUp,
  faBell,
  faCloud,
} from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import SplitSection from "../../components/Sections/SplitSection.tsx";

const CamerasPage = () => {
  useEffect(() => {
    scrollToHashOnLoad();
  }, []);

  const handleContactButtonClick = () => {
    console.log("Botón de contacto para cámaras clickeado");
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
    link_image: "src/assets/img/HeroCamera.png",
    span_btn1: "Ver Nuestras Cámaras",
    span_btn2: "Solicitar Asesoría",
  };

  const includedFeatures = [
    { name: "Sensor de movimiento", icon: faEye },
    { name: "Reconocimiento facial", icon: faUserCheck },
    { name: "Visión nocturna", icon: faMoon },
    { name: "Audio bidireccional", icon: faVolumeUp },
    { name: "Alertas en tiempo real", icon: faBell },
    { name: "Almacenamiento en la nube seguro", icon: faCloud },
  ];

  const cameraOptionsData = [
    {
      label: "Cámaras IP",
      href: "#camaras-ip",
      description: "Descubre la versatilidad de nuestras cámaras IP. Ideales para una vigilancia remota de alta definición, te permiten acceder a la transmisión en vivo y a las grabaciones desde cualquier dispositivo conectado. Su flexibilidad las convierte en la solución perfecta para monitorear tu hogar o negocio en tiempo real.",
      image: "src/assets/img/cameras/seguridad1.jpg",
      features: [
        "Alta resolución de video",
        "Acceso remoto desde cualquier dispositivo",
        "Detección inteligente de movimiento",
        "Alertas personalizables",
        "Integración con otros dispositivos inteligentes",
      ],
      isImageLeft: true,
    },
    {
      label: "CCTV",
      href: "#cctv",
      description: "Nuestros sistemas de Circuito Cerrado de Televisión (CCTV) ofrecen una solución de vigilancia robusta y confiable para la seguridad perimetral. Diseñados para una supervisión continua y grabación local, son la opción ideal para proteger grandes propiedades y asegurar una cobertura completa sin depender de la conexión a internet.",
      image: "src/assets/img/cameras/seguridad2.jpg",
      features: [
        "Grabación continua 24/7",
        "Almacenamiento local seguro",
        "Múltiples cámaras conectadas a un sistema central",
        "Ideal para grandes propiedades",
        "Opciones de visualización en vivo y reproducción",
      ],
      isImageLeft: false,
    },
    {
      label: "Grabación en la Nube",
      href: "#grabacion-nube",
      description: "Protege tus grabaciones de video de forma segura con nuestro servicio de almacenamiento en la nube. Accede a tus archivos desde cualquier lugar con conexión a internet y ten la tranquilidad de que tus datos están protegidos contra pérdidas o daños físicos a los equipos de grabación.",
      image: "src/assets/img/cameras/seguridad1.jpg",
      features: [
        "Almacenamiento seguro y encriptado",
        "Acceso desde cualquier dispositivo con internet",
        "Planes de retención flexibles",
        "Notificaciones de eventos importantes",
        "Fácil de escalar según tus necesidades",
      ],
      isImageLeft: true,
    },
  ];

  return (
    <div className="pt-0">
      <CameraHero {...cameraHeroData} />
      <section className="py-16 bg-gray-100">
        <div className="max-w-screen-xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-10 text-center">Todos los sistemas incluyen</h2>
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

      <div className="space-y-8">
        {cameraOptionsData.map((option, index) => (
          <SplitSection
            key={option.label}
            {...option}
            id={option.href.substring(1)} // Remove the '#' to use as id
            isImageLeft={index % 2 === 0}
          />
        ))}
      </div>

      <div className="max-w-screen-xl mx-auto px-4 py-12 space-y-16"> {/* Añadido space-y-16 */}
        {/* Renderiza el ContactSection directamente */}
        <ContactSection {...camerasContactSectionData} />
      </div>

    </div>
  );
};

export default CamerasPage;