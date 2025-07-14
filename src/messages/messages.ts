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
};

export const generarEnlaceWhatsApp = (mensaje: string): string => {
  const mensajeCodificado = encodeURIComponent(mensaje);
  return `https://wa.me/${numeroTelefono}?text=${mensajeCodificado}`;
};