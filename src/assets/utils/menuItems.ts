import {Wrench, Siren, Compass, Eye, Telescope, Hammer, Headset, Cctv, Focus, Cloud, Gem, Award, Briefcase, Home, SunMoon, HardDrive, Radar, Monitor, MonitorDot} from "lucide-react";


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
        title: "Seguridad",
        description: "Protege cada rincón de tu hogar o empresa con nuestra vigilancia inteligente. Monitoreo en tiempo real y la tranquilidad que mereces.",
        linkTo: "/seguridad-hogar",
        options: [
            {
                label: "Alertas de seguridad inmediatas",
                href: "/seguridad-hogar#vigilancia-video",
                description: "Recibe notificaciones instantáneas ante eventos sospechosos.",
                icon: Siren, // Usa el componente FaHome
            },
            {
                label: "Cruce de línea",
                href: "/seguridad-hogar#automatizacion-hogar",
                description: "Controla cada acceso a tu hogar con tecnología avanzada.",
                icon: Radar, // Usa el componente FaLock
            },
            {
                label: "Iluminación total de seguridad",
                href: "/seguridad-hogar#proteccion-ambiental",
                description: "Sistema con ColorVu para una vigilancia inigualable.",
                icon: SunMoon, // Usa el componente FaLightbulb
            },
        ],
    },
    {
        title: "Cámaras de seguridad",
        description: "Vigilancia avanzada para mantener tus propiedades seguras y monitoreadas.",
        linkTo: "/camaras",
        options: [
            { label: "Cámaras IP", href: "/camaras#camaras-ip", description: "Vigilancia remota de alta definición con acceso desde cualquier dispositivo.", icon: Focus },
            { label: "CCTV", href: "/camaras#cctv", description: "Circuitos cerrados de televisión para una supervisión continua y grabación local.", icon: Cctv},
            { label: "Grabación en el disco duro", href: "/camaras#grabacion-nube", description: "Almacenamiento seguro de tus grabaciones de video en la nube.", icon: HardDrive},
        ],
    },
    {
        title: "Servicios",
        description: "Nuestra gama de servicios diseñados para una implementación y soporte sin problemas.",
        linkTo: "/servicios",
        options: [
            { label: "Instalación y mantenimiento", href: "/servicios#instalacion", description: "Instalación profesional y configuración de todos nuestros sistemas.", icon: Hammer},
            { label: "Monitoreo", href: "/servicios#monitoreo", description: "Supervisión en tiempo real de tus espacios las 24 horas.", icon: MonitorDot},
            { label: "Asesoría", href: "/servicios#asesoria", description: "Consultoría experta para encontrar la solución de seguridad perfecta para ti.", icon: Headset},
        ],
    },
    {
        title: "Paquetes y precios",
        description: "Encuentra el plan que mejor se adapte a tus necesidades y presupuesto.",
        linkTo: "/paquetes",
        options: [
            { label: "Plan Básico", href: "/paquetes#plan-basico", description: "Soluciones de seguridad esenciales para hogares pequeños.", icon: Award},
            { label: "Plan Empresarial", href: "/paquetes#plan-empresarial", description: "Seguridad robusta y escalable para negocios de todos los tamaños.", icon: Briefcase },
            { label: "Plan Premium", href: "/paquetes#plan-premium", description: "La máxima protección con funcionalidades avanzadas y personalización.", icon: Gem},
        ],
    },
];