import { BookUser, FileText, Handshake, HelpCircle, ShieldOff, UserCheck, Users } from "lucide-react";
import { mensajesWhatsApp } from "../../messages/messages";

export const individualServices = [
  {
    title: "Consultas Legales (Online)",
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
    description: "Contratos civiles (por cuantin indeterminado según el caso)",
    duration: "Entrega en 3-7 días hábiles",
    buttonColor: "bg-button hover:bg-hoverButton",
    mensaje: mensajesWhatsApp.contratoCivil, // Añadido el mensaje correspondiente
  },
  {
    title: "Patrocinio Inspectoría",
    price: "$800",
    priceNote: "+ IVA",
    icon: <UserCheck className="text-blue-600 text-2xl" />,
    description: "Desde Comparecencia inicial - Hasta resolución",
    duration: "Duración según proceso",
    buttonColor: "bg-button hover:bg-hoverButton",
    mensaje: mensajesWhatsApp.patrocinioInspectoría, // Añadido el mensaje correspondiente
  },
  {
    title: "Disoluciones y Liquidaciones de Compañías",
    price: "",
    priceNote: "Costo Personalizado",
    priceNoteColor: "text-blue-600",
    icon: <FileText className="text-gray-600 text-2xl" />,
    description: "Procesos de cierre y liquidación de empresas conforme a la normativa vigente. (Bajo cita previa)",
    duration: "Duración según proceso",
    buttonColor: "bg-button hover:bg-hoverButton",
    mensaje: mensajesWhatsApp.disolucionLiquidacion, // Añadido el mensaje correspondiente
  },
  {
    title: "Identidad Empresarial",
    price: "$686",
    priceNote: "+ IVA",
    icon: <Users className="text-red-600 text-2xl" />,
    description: "SAS + Registro de Marca + Tasas incluidas (Bajo cita previa) ",
    duration: "Duración según proceso",
    buttonColor: "bg-button hover:bg-hoverButton",
    mensaje: mensajesWhatsApp.planEmpresario, // Añadido el mensaje correspondiente
  },
  {
    title: "Ocultamiento de Datos",
    price: "$350",
    priceNote: "+ IVA",
    icon: <ShieldOff className="text-green-600 text-2xl" />,
    description: "Previo a consulta para la procedencia $20 (Bajo cita previa)",
    duration: "Duración según proceso",
    buttonColor: "bg-button hover:bg-hoverButton",
    mensaje: mensajesWhatsApp.ocultamientoDatos, // Añadido el mensaje correspondiente
  },
  {
    title: "Patrocinio de Procesos Judiciales",
    price: "",
    priceNote: "Costo Personalizado",
    priceNoteColor: "text-blue-600",

    icon: <BookUser className="text-yellow-600 text-2xl" />,
    description: "Asesoría jurídica durante todo el proceso ",
    duration: "Duración según proceso",
    buttonColor: "bg-button hover:bg-hoverButton",
    mensaje: mensajesWhatsApp.patrocinioJudiciales, // Añadido el mensaje correspondiente
  },
];
