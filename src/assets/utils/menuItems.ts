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
            {
                label: "Asesoría Legal Personal",
                href: "/paquetes#Servicios",
                description: "Apoyo legal integral para personas y familias en temas civiles, laborales, patrimoniales y más.",
                icon: ShieldHalf
            },
            {
                label: "Servicios Legales para Empresas",
                href: "/paquetes#asesoriaLegalEmpresarial",
                description: "Asesoría jurídica especializada para cubrir las obligaciones y necesidades legales de tu empresa.",
                icon: Star
            },
            {
                label: "Consultoría Jurídica Individual",
                href: "/paquetes#serviciosLegalIndividual",
                description: "Soluciones legales estratégicas para empresas grandes y corporaciones con operaciones complejas.",
                icon: Gem
            }
        ]
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