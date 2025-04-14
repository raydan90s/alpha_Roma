const numeroTelefono = "593962573618"; // Reemplaza con tu número de teléfono internacional

export const mensajesWhatsApp = {
  general: `Hola, estoy interesado en sus productos y servicios de cámaras de seguridad y monitoreo.`,
  planesYPrecios: `Hola, me gustaría saber más sobre sus planes y precios de cámaras de seguridad y monitoreo.`,
  tiposDeCamaras: `Hola, quisiera conocer los diferentes tipos de cámaras de seguridad que ofrecen.`,
  servicios: `Hola, me gustaría obtener información sobre los servicios que brindan.`,
};

export const generarEnlaceWhatsApp = (mensaje: string): string => {
    const mensajeCodificado = encodeURIComponent(mensaje);
    return `https://wa.me/${numeroTelefono}?text=${mensajeCodificado}`;
  };