import { Crown, Gem, Shield, Star } from "lucide-react";

 export const plansData = [
    {
      title: "BÁSICO",
      price: "$80",
      priceNote: "+ IVA",
      icon: <Shield className="text-amber-600 text-3xl" />,
      features: [
        "2 consultas por correo electrónico",
        "Temas laborales y civiles",
        "2 contratos (elaboración o revisión)",
        "Temas laborales y civiles",
        "Respuesta en 48 horas",
        "Soporte básico"
      ],
      buttonText: "¡CONTRATA AHORA!",
      buttonColor: "bg-amber-600 hover:bg-amber-700",
      footerText: "Ideal para necesidades puntuales y consultas específicas.",
      id: "plan-basico",
    },
    {
      title: "ESENCIAL",
      price: "$120",
      priceNote: "+ IVA",
      icon: <Star className="text-blue-600 text-3xl" />,
      features: [
        "4 contratos (elaboración o revisión)",
        "Temas laborales y civiles",
        "4 consultas por correo electrónico",
        "Temas laborales y civiles",
        "Respuesta en 24 horas",
        "Soporte prioritario"
      ],
      buttonText: "¡CONTRATA AHORA!",
      buttonColor: "bg-blue-600 hover:bg-blue-700",
      footerText: "Perfecto para empresas en crecimiento con necesidades regulares.",
      id: "plan-esencial",
    },
    {
      title: "AVANZADO",
      price: "$220",
      priceNote: "+ IVA",
      icon: <Gem className="text-purple-600 text-3xl" />,
      features: [
        "6 consultas por correo electrónico",
        "Temas laborales y civiles",
        "6 contratos (elaboración o revisión)",
        "Temas laborales y civiles",
        "4 horas de asesoría legal empresarial",
        "Acompañamiento especializado (1 hora por día)"
      ],
      buttonText: "¡CONTRATA AHORA!",
      buttonColor: "bg-green-600 hover:bg-purple-700",
      footerText: "Para empresas que requieren asesoría integral y acompañamiento.",
      id: "plan-avanzado",
    },
    {
      title: "EJECUTIVO",
      price: "$600",
      priceNote: "+ IVA",
      icon: <Crown className="text-yellow-500 text-3xl" />,
      features: [
        "10 consultas por correo electrónico",
        "Temas laborales y civiles",
        "10 contratos (elaboración o revisión)",
        "8 horas de asesoría legal empresarial",
        "Acompañamiento especializado (1 hora por día)",
        "1 patrocinio en proceso de Ministerio de Trabajo"
      ],
      buttonText: "¡CONTRATA AHORA!",
      buttonColor: "bg-red-600 hover:bg-yellow-600",
      footerText: "Plan premium para empresas con necesidades legales complejas.",
      id: "plan-ejecutivo",
    }
  ];