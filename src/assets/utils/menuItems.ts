import {Wrench, Siren, Compass, Eye, Telescope, Hammer, Headset, Cctv, Focus, Cloud, Gem, Award, Briefcase} from "lucide-react";

export const menuItems = [
    {
      title: "Quienes somos",
      description: "Conoce nuestra historia, misión y los valores que nos definen.",
      linkTo: "/about",
      options: [
        { label: "Misión", href: "/about#mision", description: "Entiende nuestro propósito fundamental y lo que nos impulsa.", icon: Compass},
        { label: "Visión", href: "/about#vision", description: "Descubre hacia dónde aspiramos y nuestros objetivos a largo plazo.", icon: Eye},
        { label: "Valores", href: "/about#valores", description: "Conoce los principios que guían cada una de nuestras acciones.", icon: Telescope},
      ],
    },
    {
      title: "Seguridad para el hogar",
      description: "Soluciones integrales para proteger tu espacio personal y familiar.",
      linkTo: "/servicios#seguridad-hogar",
      options: [
        { label: "Sistema de seguridad para casa", href: "/servicios#sistema-seguridad", description: "Protección integral para tu hogar con tecnología avanzada." , icon: Wrench},
        { label: "Sensores de seguridad", href: "/servicios#sensores-seguridad", description: "Detecta cualquier amenaza en puertas, ventanas y espacios interiores." , icon: Siren},
        { label: "Alarmas de seguridad", href: "/servicios#alarmas-seguridad", description: "Sistemas de alerta eficientes para disuadir intrusos y notificar emergencias.", icon: Siren},
      ],
    },
    {
      title: "Cámaras de seguridad",
      description: "Vigilancia avanzada para mantener tus propiedades seguras y monitoreadas.",
      linkTo: "/servicios#camaras-seguridad",
      options: [
        { label: "Cámaras IP", href: "/servicios#camaras-ip", description: "Vigilancia remota de alta definición con acceso desde cualquier dispositivo.", icon: Focus },  
        { label: "CCTV", href: "/servicios#cctv", description: "Circuitos cerrados de televisión para una supervisión continua y grabación local.", icon: Cctv},
        { label: "Grabación en la nube", href: "/servicios#grabacion-nube", description: "Almacenamiento seguro de tus grabaciones de video en la nube.", icon: Cloud },
      ],
    },
    {
      title: "Servicios",
      description: "Nuestra gama de servicios diseñados para una implementación y soporte sin problemas.",
      linkTo: "/servicios#nuestros-servicios",
      options: [
        { label: "Instalación", href: "/servicios#instalacion", description: "Instalación profesional y configuración de todos nuestros sistemas.", icon: Hammer},
        { label: "Mantenimiento", href: "/servicios#mantenimiento", description: "Revisiones periódicas y soporte técnico para asegurar el funcionamiento óptimo.", icon: Wrench},
        { label: "Asesoría", href: "/servicios#asesoria", description: "Consultoría experta para encontrar la solución de seguridad perfecta para ti.", icon: Headset},
      ],
    },
    {
      title: "Paquetes y precios",
      description: "Encuentra el plan que mejor se adapte a tus necesidades y presupuesto.",
      linkTo: "/paquetes#paquetes-precios",
      options: [
        { label: "Plan Básico", href: "/paquetes#plan-basico", description: "Soluciones de seguridad esenciales para hogares pequeños.", icon: Award},
        { label: "Plan Empresarial", href: "/servicios#plan-empresarial", description: "Seguridad robusta y escalable para negocios de todos los tamaños.", icon: Briefcase },
        { label: "Plan Premium", href: "/servicios#plan-premium", description: "La máxima protección con funcionalidades avanzadas y personalización.", icon: Gem},
      ],
    },
  ];