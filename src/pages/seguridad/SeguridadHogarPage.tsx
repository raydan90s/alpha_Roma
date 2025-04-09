// src/pages/SeguridadHogarPage.tsx
import React, { useEffect } from "react";
import { scrollToHashOnLoad } from "../../assets/utils/scrollUtils";
import FeatureCard from "../../components/FeatureCard"; // Asegúrate de que la ruta sea correcta
import { Wrench, Siren } from "react-icons/fa"; // Importa los iconos que mencionaste

const SeguridadHogarPage = () => {
  useEffect(() => {
    scrollToHashOnLoad();
  }, []);

  const seguridadHogarOptions = [
    {
      label: "Sistema de seguridad para casa",
      href: "#sistema-casa", // Añade un href para el scroll si es necesario
      description: "Protección integral para tu hogar con tecnología avanzada.",
      icon: <Wrench className="text-primary text-3xl" />, // Usa el componente de icono
    },
    {
      label: "Sensores de seguridad",
      href: "#sensores", // Añade un href para el scroll si es necesario
      description: "Detecta cualquier amenaza en puertas, ventanas y espacios interiores.",
      icon: <Siren className="text-secondary text-3xl" />, // Usa el componente de icono
    },
    {
      label: "Alarmas de seguridad",
      href: "#alarmas", // Añade un href para el scroll si es necesario
      description: "Sistemas de alerta eficientes para disuadir intrusos y notificar emergencias.",
      icon: <Siren className="text-acent text-3xl" />, // Usa el componente de icono
    },
  ];

  return (
    <div className="pt-20 bg-white min-h-screen">
      {/* Hero Section */}
      <div className="bg-hover py-16 text-secondary">
        <div className="max-w-screen-xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Seguridad para el hogar</h1>
          <p className="text-lg md:text-xl max-w-2xl">
            Soluciones integrales para proteger tu espacio personal y familiar.
          </p>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-screen-xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        {seguridadHogarOptions.map((option, index) => (
          <div key={index} id={option.href?.substring(1)}> {/* Añade id para el scroll */}
            <FeatureCard icon={option.icon} title={option.label} description={option.description} />
          </div>
        ))}
      </div>

      {/* Puedes añadir más secciones aquí si lo deseas */}
    </div>
  );
};

export default SeguridadHogarPage;