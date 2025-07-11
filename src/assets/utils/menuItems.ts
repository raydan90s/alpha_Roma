import { Compass, Eye, Telescope, Gem, ShieldHalf, Star } from "lucide-react";


export const menuItems = [
    {
        title: "Quienes somos",
        description: "Conoce nuestra historia, misión y los valores que nos definen.",
        linkTo: "/about",
        options: [
            { label: "Misión", href: "/about#mision", description: "Entiende nuestro propósito fundamental y lo que nos impulsa.", icon: Compass },
            { label: "Visión", href: "/about#vision", description: "Descubre hacia dónde aspiramos y nuestros objetivos a largo plazo.", icon: Eye },
            { label: "Valores", href: "/about#valores", description: "Conoce los principios que guían cada una de nuestras acciones.", icon: Telescope },
        ],
    },
    {
        title: "Paquetes y precios",
        description: "Encuentra el plan que mejor se adapte a tus necesidades y presupuesto.",
        linkTo: "/paquetes",
        options: [
            { label: "Plan Básico Bronce", href: "/paquetes#plan-bronce", description: "Soluciones de seguridad esenciales para hogares pequeños.", icon: ShieldHalf },
            { label: "Plan Básico Plata", href: "/paquetes#plan-plata", description: "Seguridad robusta y escalable para pequeños negocios y hogares.", icon: Star },
            { label: "Plan Básico Oro", href: "/paquetes#plan-oro", description: "La máxima protección con funcionalidades avanzadas.", icon: Gem },
        ],
    },

    {
        title: "SAS",
        linkTo: "/constitucion-SAS",
    },

    {
        title: "Blog",
        linkTo: "/blog",
    },

    

];