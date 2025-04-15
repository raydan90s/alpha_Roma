import { useEffect } from "react";
import { scrollToHashOnLoad } from "../../assets/utils/scrollUtils.ts";
import ContactSection from "../../components/Sections/contactSection.tsx"; // Importa el componente
import { ContactSectionProps } from "../../interface/contactProps"; // Importa la interfaz
import ServiceItem from "../services/ServicesItem.tsx"; // Importa el nuevo componente
import { mensajesWhatsApp } from "../../messages/messages";

const ServicesPage = () => {
  useEffect(() => {
    scrollToHashOnLoad();
  }, []);

  const servicesContactSectionData: ContactSectionProps = {
    title: "¿Listo para mejorar tu seguridad?",
    description: "Nuestro equipo está preparado para ayudarte con cualquier servicio que necesites. Contáctanos hoy mismo.",
    context: "servicios",
    emailButtonText: "Solicitar cotización",
  };

  const installationData = {
    id: "instalacion",
    title: "Instalación y mantenimiento",
    description:
      "Nuestro equipo de técnicos certificados realizará la instalación profesional de todos tus dispositivos de seguridad y domótica para garantizar su funcionamiento óptimo.",
    features: [
      "Instalación de cámaras de seguridad y CCTV",
      "Configuración de sistemas de alarma",
      "Instalación de sistemas de casa inteligente",
    ],
    image:
      "https://blogger.googleusercontent.com/img/a/AVvXsEh3iSic7evGCCxG-DITfCHW1xKT7Sq6pHnbkPYm9Trr5kBMlqm1nUZgBXcAQvNUDl7XilgcBlvmbKGO_1VEcWoqzoOZDedjGFIYqEGVbpZh4ogg7aHyYTGSg2QiSzi6HKjM04-7hdczUAJ0BfVHleRIOus2is_5Ltz8U4al4yKSiHaj2hxQdnLd7BpdHA",
    buttonText: "Solicitar instalación",
    whatsappMessage: mensajesWhatsApp.serviciosInstalacion, // Nuevo mensaje específico
  };

  const monitoringData = {
    id: "monitoreo",
    title: "Monitoreo de Cámaras",
    description:
      "Supervisamos tus espacios en tiempo real, las 24 horas del día, con sistemas inteligentes que detectan movimientos, alertas y eventos sospechosos para una respuesta inmediata y efectiva.",
    features: [
      "Monitoreo 24/7 en tiempo real",
      "Alertas inmediatas ante eventos sospechosos",
      "Visualización y control desde dispositivos móviles",
    ],
    image:
      "https://res.cloudinary.com/dfbpaq83u/image/upload/v1744663789/dkqfonfibrukgu7ojtd2.png",
    isImageLeft: true,
    buttonText: "Solicitar monitoreo",
    whatsappMessage: mensajesWhatsApp.serviciosMonitoreo, // Nuevo mensaje específico
  };

  const advisoryData = {
    id: "asesoria",
    title: "Asesoría",
    description:
      "Nuestros expertos en seguridad te ayudarán a diseñar la solución perfecta para tus necesidades específicas, evaluando tu espacio y recomendando las mejores opciones.",
    features: [
      "Evaluación de riesgos y necesidades",
      "Diseño personalizado de sistemas de seguridad",
      "Consultoría en normativas y mejores prácticas",
    ],
    image:
      "https://res.cloudinary.com/dcxqkcmhd/image/upload/v1744207826/zuxpdisz3h0o3x1btfyv.jpg",
    buttonText: "Solicitar asesoría",
    whatsappMessage: mensajesWhatsApp.serviciosAsesoria, // Nuevo mensaje específico
  };

  return (
    <div className="pt-20 bg-gray-100">
      {/* Hero Section */}
      <div className="bg-secondary text-white py-16">
        <div className="max-w-screen-xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Nuestros Servicios</h1>
          <p className="text-lg md:text-xl max-w-2xl">
            Ofrecemos soluciones completas para proteger tu hogar y negocio con las últimas tecnologías en seguridad y automatización.
          </p>
        </div>
      </div>

      {/* Services Content */}
      <div className="max-w-screen-xl mx-auto px-4 py-12 space-y-16" style={{ textAlign: "justify" }}>
        <ServiceItem {...installationData} />
        <ServiceItem {...monitoringData} />
        <ServiceItem {...advisoryData} />

        {/* Contact Section */}
        <ContactSection {...servicesContactSectionData} />
      </div>
    </div>
  );
};

export default ServicesPage;