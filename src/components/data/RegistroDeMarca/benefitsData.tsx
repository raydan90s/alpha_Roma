import { Award, CheckCircle, Eye, Shield } from "lucide-react";

export const benefits = [
    {
        icon: <Shield className="text-blue-600 text-2xl" />,
        title: "Protección Legal",
        description: "Protege tu marca contra el uso no autorizado y la competencia desleal"
    },
    {
        icon: <CheckCircle className="text-green-600 text-2xl" />,
        title: "Exclusividad",
        description: "Derecho exclusivo de uso de tu marca en el territorio nacional"
    },
    {
        icon: <Award className="text-yellow-600 text-2xl" />,
        title: "Valor Comercial",
        description: "Aumenta el valor de tu empresa y facilita la expansión de tu negocio"
    },
    {
        icon: <Eye className="text-indigo-600 text-2xl" />,
        title: "Reconocimiento",
        description: "Construye la identidad y reconocimiento de tu marca en el mercado"
    }
];