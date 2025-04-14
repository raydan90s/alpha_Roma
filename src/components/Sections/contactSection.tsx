import React from 'react';
import { ContactSectionProps } from '../../interface/contactProps'; // Ajusta la ruta si es necesario
import { generarEnlaceWhatsApp, mensajesWhatsApp } from '../../messages/messages'; // Asegúrate de la ruta correcta
import { TELEFONO_CONTACTO } from '../../config/config';

const ContactSection: React.FC<ContactSectionProps> = ({
  title,
  description,
  context = 'general', 
}) => {

  let whatsappMessage;
  switch (context) {
    case 'servicios':
      whatsappMessage = mensajesWhatsApp.servicios || mensajesWhatsApp.general;
      break;
    case 'planes':
      whatsappMessage = mensajesWhatsApp.planesYPrecios || mensajesWhatsApp.general;
      break;
    case 'camaras':
      whatsappMessage = mensajesWhatsApp.tiposDeCamaras || mensajesWhatsApp.general; // Reemplaza 'otroMensaje'
      break;
    default:
      whatsappMessage = mensajesWhatsApp.general;
      break;
  }

  return (
    <section className="bg-gray-900 text-white rounded-xl p-8 md:p-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <p className="text-gray-300 max-w-2xl mx-auto">{description}</p>
      </div>
      <div className="flex flex-col md:flex-row justify-center gap-4 max-w-xl mx-auto">
        <a
          href={`tel:${TELEFONO_CONTACTO}`}
          className="bg-primary hover:bg-primary text-black font-bold px-6 py-3 rounded-full shadow-md transition-all duration-300 text-center"
        >
          Llamar ahora
        </a>
        <a
          href={generarEnlaceWhatsApp(whatsappMessage)} // Usa el mensaje dinámico
          className="bg-white hover:bg-green-600 text-black font-bold px-6 py-3 rounded-full shadow-md transition-all duration-300 text-center"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contactar
        </a>
      </div>
    </section>
  );
};

export default ContactSection;