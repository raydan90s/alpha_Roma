import { FileText, Handshake, HelpCircle, ShieldCheck } from "lucide-react";
import { mensajesWhatsApp } from "../../messages/messages";

export const individualServices = [
  {
    title: "Consultas Legales",
    price: "$40",
    priceNote: "+ IVA",
    icon: <HelpCircle className="text-green-600 text-2xl" />,
    description: "Consultas legales en temas laborales, civiles y empresariales",
    duration: "45 minutos por Zoom",
    buttonColor: "bg-button hover:bg-hoverButton",
    mensaje: mensajesWhatsApp.consultaLegal, // Añadido el mensaje correspondiente
  },
  {
    title: "Contratos Civiles",
    price: "Desde $50",
    priceNote: "+ IVA",
    icon: <Handshake className="text-indigo-600 text-2xl" />,
    description: "Contratos civiles (10% de cuantía - estándar sin cuantía)",
    duration: "Entrega en 3-7 días hábiles",
    buttonColor: "bg-button hover:bg-hoverButton",
    mensaje: mensajesWhatsApp.contratoCivil, // Añadido el mensaje correspondiente
  },
  {
    title: "Patrocinio Inspectoría",
    price: "$800",
    priceNote: "+ IVA",
    icon: <ShieldCheck className="text-red-600 text-2xl" />,
    description: "Inspectoría de trabajo como compañía accionante o accionada",
    duration: "Duración según proceso",
    buttonColor: "bg-button hover:bg-hoverButton",
    mensaje: mensajesWhatsApp.patrocinioInspectoría, // Añadido el mensaje correspondiente
  },
  {
    title: "Disoluciones y Liquidaciones de Compañías",
    price: "",
    priceNote: "",
    icon: <ShieldCheck className="text-red-600 text-2xl" />,
    description: "Procesos de cierre y liquidación de empresas conforme a la normativa vigente.",
    duration: "Cita Previa",
    buttonColor: "bg-button hover:bg-hoverButton",
    mensaje: mensajesWhatsApp.disolucionLiquidacion, // Añadido el mensaje correspondiente
  },
  {
    title: "Plan Empresario",
    price: "$686",
    priceNote: "+ IVA",
    icon: <ShieldCheck className="text-red-600 text-2xl" />,
    description: "SAS + Registro de Marca + Tasas incluidas",
    duration: "Cita previa",
    buttonColor: "bg-button hover:bg-hoverButton",
    mensaje: mensajesWhatsApp.planEmpresario, // Añadido el mensaje correspondiente
  },
  {
    title: "Ocultamiento de Datos",
    price: "$350",
    priceNote: "+ IVA",
    icon: <ShieldCheck className="text-red-600 text-2xl" />,
    description: "Previa verificación de procedencia",
    duration: "Cita previa",
    buttonColor: "bg-button hover:bg-hoverButton",
    mensaje: mensajesWhatsApp.ocultamientoDatos, // Añadido el mensaje correspondiente
  }
];
