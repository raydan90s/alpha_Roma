import { TELEFONO_CONTACTO } from '../config/config';
const numeroTelefono = TELEFONO_CONTACTO

export const mensajesWhatsApp = {
  general: `Hola NexoLegal, ¿qué servicios legales ofrecen o cómo puedo realizar una consulta?`,
  consultaLegal: `Hola NexoLegal, necesito una consulta legal en temas laborales, civiles o empresariales.`,
  contratoLaboral: `Hola NexoLegal, necesito redacción o revisión de un contrato laboral.`,
  contratoCivil: `Hola NexoLegal, quiero redactar un contrato civil.`,
  patrocinioInspectoría: `Hola NexoLegal, necesito asesoría en un proceso con la Inspectoría de Trabajo.`,
  planEmpresario: `Hola NexoLegal, quiero contratar el Plan Empresario para mi empresa.`,
  ocultamientoDatos: `Hola NexoLegal, necesito el servicio de Ocultamiento de Datos para mi empresa.`,
  planBasico: `Hola NexoLegal, quiero contratar el plan BÁSICO.`,
  planEsencial: `Hola NexoLegal, quiero contratar el plan ESENCIAL.`,
  planAvanzado: `Hola NexoLegal, quiero contratar el plan AVANZADO.`,
  planEjecutivo: `Hola NexoLegal, quiero contratar el plan EJECUTIVO.`,
  cotizarSAS: `Hola NexoLegal, quiero cotizar la constitución de SAS`,
  planesYPrecios: `Hola, me gustaría saber más sobre sus planes y precios de cámaras de seguridad y monitoreo.`,
  tiposDeCamaras: `Hola, quisiera conocer los diferentes tipos de cámaras de seguridad que ofrecen.`,
  servicios: `Hola, me gustaría obtener información sobre los servicios que brindan.`,
  serviciosInstalacion: `Hola, estoy interesado en el servicio de instalación de cámaras de seguridad y otros dispositivos.`,
  serviciosMonitoreo: `Hola, me gustaría saber más sobre el servicio de monitoreo de cámaras.`,
  serviciosAsesoria: `Hola, necesito asesoría para elegir el mejor sistema de seguridad para mi espacio.`,
  LlamarAhora: `Hola, necesito asesoría jurídica especializada.`,
  Contactanos: `Hola, necesito contactarme con ustedes.`,
  ComenzarAhora: `Hola, comencemos con el preoceso.`,
  marca: `Hola NexoLegal, quiero registrar una marca.`,
  consultasLegales: `Hola NexoLegal, estoy interesado en una consulta legal.`,
  disolucionLiquidacion: `Hola NexoLegal, estoy interesado en una Disolución y Liquidación de Compañías.`,
  inmigrantes: `Hola NexoLegal, estoy interesado en migración.`,
  serviciosLegales:`Hola NexoLegal, estoy interesado en Servicios Legales de compañias.`,

};

export const generarEnlaceWhatsApp = (mensaje: string): string => {
  const mensajeCodificado = encodeURIComponent(mensaje);
  return `https://wa.me/${numeroTelefono}?text=${mensajeCodificado}`;
};