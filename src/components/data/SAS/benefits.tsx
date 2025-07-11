import { FileText, Shield, Target, Users } from "lucide-react";

 export const benefits = [
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Protección Legal",
      description: "Tu patrimonio personal estará protegido de las obligaciones de la empresa",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Flexibilidad",
      description: "Estructura societaria flexible que se adapta al crecimiento de tu negocio",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <FileText className="w-12 h-12" />,
      title: "Menos Trámites",
      description: "Proceso de constitución más simple comparado con otros tipos de sociedades",
      color: "from-pink-500 to-pink-600"
    },
    {
      icon: <Target className="w-12 h-12" />,
      title: "Credibilidad",
      description: "Mayor confianza ante clientes, proveedores y entidades financieras",
      color: "from-indigo-500 to-indigo-600"
    }
  ];