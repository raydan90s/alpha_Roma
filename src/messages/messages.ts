import { TELEFONO_CONTACTO } from '../config/config';
const numeroTelefono = TELEFONO_CONTACTO // Reemplaza con tu número de teléfono internacional

export const mensajesWhatsApp = {
  general: `Hola, estoy interesado en sus productos y servicios de cámaras de seguridad y monitoreo.`,
  planesYPrecios: `Hola, me gustaría saber más sobre sus planes y precios de cámaras de seguridad y monitoreo.`,
  tiposDeCamaras: `Hola, quisiera conocer los diferentes tipos de cámaras de seguridad que ofrecen.`,
  servicios: `Hola, me gustaría obtener información sobre los servicios que brindan.`,
  serviciosInstalacion: `Hola, estoy interesado en el servicio de instalación de cámaras de seguridad y otros dispositivos.`,
  serviciosMonitoreo: `Hola, me gustaría saber más sobre el servicio de monitoreo de cámaras.`,
  serviciosAsesoria: `Hola, necesito asesoría para elegir el mejor sistema de seguridad para mi espacio.`,
};

export const generarEnlaceWhatsApp = (mensaje: string): string => {
  const mensajeCodificado = encodeURIComponent(mensaje);
  return `https://wa.me/${numeroTelefono}?text=${mensajeCodificado}`;
};