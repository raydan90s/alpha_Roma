// src/pages/SeguridadHogarPage.tsx
import React, { useEffect } from "react";
import { scrollToHashOnLoad } from "../../assets/utils/scrollUtils";
import { ContactSectionProps } from "../../interface/contactProps";
import { FaHome, FaLock, FaBell, FaShieldAlt, FaCameraRetro, FaExclamationTriangle } from "react-icons/fa"; // Más iconos
import ContactSection from "../../components/Sections/contactSection";

const SeguridadHogarPage = () => {
  useEffect(() => {
    scrollToHashOnLoad();
  }, []);

  const handleContactButtonClick = () => {
    console.log("Botón de contacto para seguridad del hogar clickeado");
    // Aquí puedes implementar la lógica para contactar o solicitar más información
  };

  const seguridadHogarContactSectionData: ContactSectionProps = {
    title: "Protege tu Hogar con Nuestras Soluciones de Seguridad Inteligente",
    description: "Descubre una amplia gama de sistemas y dispositivos diseñados para mantener tu hogar seguro y tu familia protegida.",
    phone: "8445917193",
    emailButtonText: "Hablar con un experto",
    onEmailButtonClick: handleContactButtonClick,
  };

  const solucionesHogar = [
    {
      title: "Sistemas de Alarma Inteligentes",
      icon: <FaShieldAlt className="text-primary text-5xl mb-6" />,
      features: [
        "Panel de control táctil intuitivo",
        "Conexión Wi-Fi y celular con respaldo de batería",
        "Integración con asistentes de voz",
        "Notificaciones instantáneas en tu smartphone",
        "Zonas personalizables para mayor control",
      ],
      price: "Desde USD 199",
      buttonText: "Explorar Sistemas",
      buttonColor: "primary",
      footerText: "La base de una protección completa y moderna para tu hogar.",
      id: "sistemas-alarma",
      bgClass: "bg-white shadow-xl rounded-lg p-8 flex flex-col items-center text-center",
      featureClass: "list-disc pl-5 mb-2 text-gray-700",
      buttonHoverClass: "hover:bg-primary-darker",
    },
    {
      title: "Cámaras de Seguridad de Alta Definición",
      icon: <FaCameraRetro className="text-secondary text-5xl mb-6" />,
      features: [
        "Resolución Full HD y visión nocturna",
        "Detección de movimiento inteligente con alertas",
        "Almacenamiento en la nube seguro y local",
        "Acceso remoto en tiempo real desde cualquier dispositivo",
        "Opciones para interior y exterior resistentes a la intemperie",
      ],
      price: "Desde USD 79 por cámara",
      buttonText: "Ver Cámaras",
      buttonColor: "secondary",
      footerText: "Vigila tu hogar en todo momento, estés donde estés.",
      id: "camaras-seguridad",
      bgClass: "bg-gray-100 shadow-xl rounded-lg p-8 flex flex-col items-center text-center",
      featureClass: "list-disc pl-5 mb-2 text-gray-700",
      buttonHoverClass: "hover:bg-secondary-darker",
    },
    {
      title: "Sensores Inteligentes para Mayor Protección",
      icon: <FaLock className="text-acent text-5xl mb-6" />,
      features: [
        "Sensores de puertas y ventanas con alerta de manipulación",
        "Detectores de movimiento PIR de amplio rango",
        "Sensores de rotura de vidrio",
        "Integración sencilla con tu sistema de alarma",
        "Alertas de batería baja",
      ],
      price: "Desde USD 29 por sensor",
      buttonText: "Descubrir Sensores",
      buttonColor: "acent",
      footerText: "Protege cada acceso y punto vulnerable de tu hogar.",
      id: "sensores-inteligentes",
      bgClass: "bg-white shadow-xl rounded-lg p-8 flex flex-col items-center text-center",
      featureClass: "list-disc pl-5 mb-2 text-gray-700",
      buttonHoverClass: "hover:bg-acent-darker",
    },
    {
      title: "Prevención de Emergencias y Alertas",
      icon: <FaExclamationTriangle className="text-hover text-5xl mb-6" />,
      features: [
        "Detectores de humo y calor con sirena integrada",
        "Detectores de monóxido de carbono con alerta temprana",
        "Botones de pánico con notificación inmediata",
        "Integración con servicios de emergencia locales (opcional)",
      ],
      price: "Consulta precios",
      buttonText: "Ver Dispositivos de Alerta",
      buttonColor: "hover",
      footerText: "Mantente preparado y seguro ante cualquier eventualidad.",
      id: "prevencion-emergencias",
      bgClass: "bg-gray-100 shadow-xl rounded-lg p-8 flex flex-col items-center text-center",
      featureClass: "list-disc pl-5 mb-2 text-gray-700",
      buttonHoverClass: "hover:bg-hover-darker",
    },
  ];

  return (
    <div className="pt-16 bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <div className="bg-secondary py-24 text-white text-center">
        <div className="max-w-screen-xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-8 tracking-tight">Seguridad Inteligente para un Hogar Tranquilo</h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed opacity-80">
            Protege lo que más importa con nuestras soluciones de seguridad para el hogar de última generación. Desde sistemas de alarma inteligentes hasta cámaras de alta definición y sensores avanzados, te ofrecemos la tranquilidad que mereces.
          </p>
          <button className="bg-primary text-white py-3 px-8 rounded-full mt-8 text-lg font-semibold hover:bg-primary-darker transition duration-300">
            Descubre tu Solución Ideal
          </button>
        </div>
      </div>

      {/* Solutions Grid */}
      <div className="max-w-screen-xl mx-auto px-4 py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {solucionesHogar.map((solucion, index) => (
          <div key={index} id={solucion.id} className={solucion.bgClass}>
            <div className="mb-4">
              {solucion.icon}
            </div>
            <h3 className="text-xl font-semibold text-secondary mb-3">{solucion.title}</h3>
            <ul className="mb-4">
              {solucion.features.map((feature, i) => (
                <li key={i} className={solucion.featureClass}>{feature}</li>
              ))}
            </ul>
            <p className="text-primary font-semibold mb-4">{solucion.price}</p>
            <button className={`bg-${solucion.buttonColor} text-white py-3 px-6 rounded-full font-semibold transition duration-200 ${solucion.buttonHoverClass}`}>
              {solucion.buttonText}
            </button>
            {solucion.footerText && (
              <p className="text-sm text-gray-500 mt-4">{solucion.footerText}</p>
            )}
          </div>
        ))}
      </div>

      {/* Contact Section */}
      
      <div className="max-w-screen-lg mx-auto px-4 p-8"> {/* Elimina shadow-md */}
       <ContactSection {...seguridadHogarContactSectionData} />
      </div>
      
    </div>
  );
};

export default SeguridadHogarPage;