import { Gem, Search } from "lucide-react";

    export const services = [
        {
            id: 1,
            title: "Búsqueda Fonética",
            price: "$50",
            priceNote: "+ IVA",
            icon: <Search className="text-blue-600 text-3xl" />,
            description: "Verificación de similitud fonética para asegurar la disponibilidad de tu marca",
            features: [
                "Búsqueda exhaustiva en base de datos",
                "Análisis de similitud fonética",
                "Reporte detallado de resultados",
                "Recomendaciones profesionales"
            ],
            duration: "3-5 días hábiles",
            buttonColor: "bg-button hover:hoverButton",
            popular: false
        },
        {
            id: 2,
            title: "Registro de Marca Completo",
            price: "$529.99",
            priceNote: "+ IVA",
            icon: <Gem className="text-purple-600 text-3xl" />,
            description: "Servicio integral de registro de marca con todos los trámites incluidos",
            features: [
                "Búsqueda de similitud completa",
                "Tasa de búsqueda fonética incluida",
                "Resultados de búsqueda fonética",
                "Tasa de registro de marca",
                "Resolución oficial",
                "Seguimiento completo del proceso"
            ],
            duration: "6-9 meses",
            buttonColor: "bg-button hover:hoverButton",
            popular: true
        }
    ];