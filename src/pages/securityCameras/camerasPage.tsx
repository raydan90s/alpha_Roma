import React, { useEffect } from "react";
import { scrollToHashOnLoad } from "../../assets/utils/scrollUtils.ts";
import ContactSection from "../../components/Sections/contactSection.tsx"; // Importa el componente
import { ContactSectionProps } from "../../interface/contactProps"; // Importa la interfaz
import CameraHero from "../securityCameras/cameraHero.tsx"; // Importa el nuevo Hero
import HeroProps from "../../interface/HeroProps"; // Importa la interfaz de HeroProps
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEye,
  faUserCheck,
  faMoon,
  faVolumeUp,
  faBell,
  faCloud,
} from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css'; // Import the CSS

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

  const includedFeatures = [
    { name: "Sensor de movimiento", icon: faEye },
    { name: "Reconocimiento facial", icon: faUserCheck },
    { name: "Visión nocturna", icon: faMoon },
    { name: "Audio bidireccional", icon: faVolumeUp },
    { name: "Alertas en tiempo real", icon: faBell },
    { name: "Almacenamiento en la nube seguro", icon: faCloud },
  ];

  const cameraOptions = [
    { label: "Cámaras IP", href: "#camaras-ip", description: "Vigilancia remota de alta definición con acceso desde cualquier dispositivo." },
    { label: "CCTV", href: "#cctv", description: "Circuitos cerrados de televisión para una supervisión continua y grabación local." },
    { label: "Grabación en la nube", href: "#grabacion-nube", description: "Almacenamiento seguro de tus grabaciones de video en la nube." },
  ];

  return (
    <div className="pt-0 bg-gray-100">
      {/* Hero Section */}
      <CameraHero {...cameraHeroData} />

      {/* Todos los sistemas incluyen Section */}
      <section className="py-16 bg-white"> {/* Aumentamos el padding vertical de la sección */}
  <div className="max-w-screen-xl mx-auto px-4">
    <h2 className="text-4xl font-bold text-gray-800 mb-10 text-center">Todos los sistemas incluyen</h2> {/* Aumentamos el tamaño del título y el margen inferior */}
    <div className="flex flex-row justify-around items-center"> {/* Cambiamos a flex row para la disposición general */}
      {includedFeatures.map((feature, index) => (
        <div key={index} className="flex flex-col items-center"> {/* Mantenemos flex column para icono arriba texto */}
          <FontAwesomeIcon icon={feature.icon} size="3x" className="text-secondary mb-4" /> {/* Aumentamos el tamaño del icono y el margen inferior */}
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-700">{feature.name.split(' ')[0]}</h3> {/* Primera palabra arriba */}
            {feature.name.split(' ').length > 1 && (
              <h3 className="text-lg font-semibold text-gray-700">{feature.name.split(' ').slice(1).join(' ')}</h3>
            )}
          </div>
          {/* Puedes añadir una descripción breve aquí si lo deseas */}
        </div>
      ))}
    </div>
  </div>
</section>

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