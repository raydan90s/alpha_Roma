import { EyeOff, UserCheck } from "lucide-react";

  export const companyServices = [
    {
      title: "Plan Empresario",
      price: "$686",
      priceNote: "+ IVA",
      icon: <UserCheck className="text-green-600 text-2xl" />,
      description: "SAS + Registro de Marca + Tasas incluidas",
      buttonColor: "bg-button hover:bg-hoverButton"
    },
    {
      title: "Ocultamiento de Datos",
      price: "$350",
      priceNote: "+ IVA",
      icon: <EyeOff className="text-gray-800 text-2xl" />,
      description: "Previa verificación de procedencia",
      buttonColor: "bg-button hover:bg-hoverButton"
    }
  ];