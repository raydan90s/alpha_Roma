import { FileText, Handshake, HelpCircle, ShieldCheck } from "lucide-react";

 export const individualServices = [
    {
      title: "Consultas Legales",
      price: "$40",
      priceNote: "+ IVA",
      icon: <HelpCircle className="text-green-600 text-2xl" />,
      description: "Consultas legales en temas laborales, civiles y empresariales",
      duration: "45 minutos por Zoom",
      buttonColor: "bg-green-600 hover:bg-green-700"
    },
    {
      title: "Contratos Laborales",
      price: "$15",
      priceNote: "+ IVA",
      icon: <FileText className="text-blue-600 text-2xl" />,
      description: "Elaboración y revisión de contratos laborales",
      duration: "Entrega en 3-5 días hábiles",
      buttonColor: "bg-blue-600 hover:bg-blue-700"
    },
    {
      title: "Contratos Civiles",
      price: "Desde $50",
      priceNote: "+ IVA",
      icon: <Handshake className="text-indigo-600 text-2xl" />,
      description: "Contratos civiles (10% de cuantía - estándar sin cuantía)",
      duration: "Entrega en 3-7 días hábiles",
      buttonColor: "bg-gray-600 hover:bg-indigo-700"
    },
    {
      title: "Patrocinio Inspectoría",
      price: "$800",
      priceNote: "+ IVA",
      icon: <ShieldCheck className="text-red-600 text-2xl" />,
      description: "Inspectoría de trabajo como compañía accionante o accionada",
      duration: "Duración según proceso",
      buttonColor: "bg-red-600 hover:bg-red-700"
    }
  ];