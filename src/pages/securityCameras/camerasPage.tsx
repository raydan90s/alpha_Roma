import React, { useEffect, useState } from "react";
import { scrollToHashOnLoad } from "../../assets/utils/scrollUtils.ts";
import ContactSection from "../../components/Sections/contactSection.tsx";
import { ContactSectionProps } from "../../interface/contactProps";
import CameraHero from "../securityCameras/cameraHero.tsx";
import HeroProps from "../../interface/HeroProps";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import instalando from "../../assets/img/cameras/instalando.jpg";
import {
    faPersonWalkingDashedLineArrowRight,
    faMoon,
    faVolumeUp,
    faBell,
    faHardDrive,
    faSwatchbook,
} from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import SplitSection from "../../components/Sections/SplitSection.tsx";
import InstallationService from "./InstallationService.tsx";

const CamerasPage = () => {
    useEffect(() => {
        scrollToHashOnLoad();
    }, []);

    const [showInstallationService] = useState(true); // <----- MOVED STATE HERE

    const handleContactButtonClick = () => {
        console.log("Botón de contacto para cámaras clickeado");
    };

    const camerasContactSectionData: ContactSectionProps = {
        title: "¿Interesado en nuestras soluciones de cámaras?",
        description: "Contáctanos para discutir tus necesidades de vigilancia y obtener una cotización personalizada.",
        context: "camaras",
        emailButtonText: "Contactar",
        onEmailButtonClick: handleContactButtonClick,
    };

    const cameraHeroData: HeroProps = {
        title: "Vigilancia Inteligente para tu ",
        span: "Tranquilidad",
        link_image: "https://res.cloudinary.com/dcxqkcmhd/image/upload/v1744299925/uvhurgciahxtkyyhnjht.png",
        span_btn1: "Ver Nuestras Cámaras",
        span_btn2: "Solicitar Asesoría",
    };

    const includedFeatures = [
        { name: "Cruce de línea", icon: faPersonWalkingDashedLineArrowRight },
        { name: "ColorVu", icon: faSwatchbook },
        { name: "Audio bidireccional", icon: faVolumeUp },
        { name: "Alertas en tiempo real", icon: faBell },
        { name: "Almacenamiento en disco duro", icon: faHardDrive },
    ];

    const installationServiceData = {
        eyebrow: "POR QUÉ ELEGIR VIVINT",
        headline: "Nos hacemos cargo de todo por usted",
        body: "Nuestros profesionales del hogar inteligente instalan su sistema de seguridad para el hogar, lo activan y le muestran cómo usarlo.",
        buttonText: "¿Cómo comenzar?",
        buttonLink: "/es/how-to-buy",
        imageUrl: instalando, // <----- CORRECTED: Passing the imported image directly
        altText: "Profesional de hogar inteligente en escalera instalando la cámara exterior profesional Vivint Gen 2 con vista de árboles y montañas en el fondo",
    };

    console.log("installationServiceData en CamerasPage:", installationServiceData);

    const cameraOptionsData = [
        {
            label: "Cámaras IP",
            href: "#camaras-ip",
            description: "Descubre la versatilidad de nuestras cámaras IP. Ideales para una vigilancia remota de alta definición, te permiten acceder a la transmisión en vivo y a las grabaciones desde cualquier dispositivo conectado. Su flexibilidad las convierte en la solución perfecta para monitorear tu hogar o negocio en tiempo real.",
            image: "https://res.cloudinary.com/dcxqkcmhd/image/upload/v1744300683/eftnbb7ntmz49jomtywc.png",
            features: [
                "Alta resolución de video",
                "Acceso remoto desde cualquier dispositivo",
                "Detección inteligente de movimiento",
                "Alertas personalizables",
                "Integración con otros dispositivos inteligentes",
            ],
            isImageLeft: true,
        },
        {
            label: "CCTV",
            href: "#cctv",
            description: "Nuestros sistemas de Circuito Cerrado de Televisión (CCTV) ofrecen una solución de vigilancia robusta y confiable para la seguridad perimetral. Diseñados para una supervisión continua y grabación local, son la opción ideal para proteger grandes propiedades y asegurar una cobertura completa sin depender de la conexión a internet.",
            image: "https://res.cloudinary.com/dcxqkcmhd/image/upload/v1744303024/y8ora1lirlj0gaesd2su.png",
            features: [
                "Grabación continua 24/7",
                "Almacenamiento local seguro",
                "Múltiples cámaras conectadas a un sistema central",
                "Ideal para grandes propiedades",
                "Opciones de visualización en vivo y reproducción",
            ],
            isImageLeft: false,
        },
        {

            label: "Cámaras Digitales",
            href: "#camaras-digitales",
            description:
                "Descubre la tecnología avanzada de nuestras cámaras digitales. Accede en tiempo real a tus cámaras desde tu móvil u ordenador, gestiona grabaciones de manera remota y mantén el control total de la seguridad de tu espacio desde cualquier parte del mundo.",
            image:
                "https://res.cloudinary.com/dcxqkcmhd/image/upload/v1744299437/fugpjrnxjc3yq78rz8bg.png",
            features: [
                "Visualización remota en tiempo real",
                "Compatibilidad con múltiples dispositivos",
                "Notificaciones instantáneas de movimiento",
                "Grabación de alta definición día y noche",
                "Fácil integración con otros sistemas de seguridad",
            ],
            isImageLeft: false,


        },
    ];

    const associatedBrands = [
        { logo: "src/assets/img/brands/hikvision-logo.svg", link: "https://www.hikvision.com/" },
        { logo: "src/assets/img/brands/tplink-logo.png", link: "https://www.tp-link.com/" },
    ];

    return (
        <div className="pt-0">
            <CameraHero {...cameraHeroData} />
            <section className="py-16 bg-gray-100">
                <div className="max-w-screen-xl mx-auto px-4">
                    <h2 className="text-4xl font-bold text-gray-800 mb-5 text-center">Todos los sistemas incluyen</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                        {includedFeatures.map((feature, index) => (
                            <div key={index} className="flex flex-col items-center text-center mt-6">
                                <FontAwesomeIcon icon={feature.icon} size="3x" className="text-secondary mb-4" />
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-700">{feature.name}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <div className="space-y-8">
                {cameraOptionsData.map((option, index) => (
                    <SplitSection
                        key={option.label}
                        {...option}
                        id={option.href.substring(1)} // Remove the '#' to use as id
                        isImageLeft={index % 2 === 0}
                    />
                ))}
            </div>

            {/* Sección de Marcas Asociadas */}
            <section className="py-16 ">
                <div className="max-w-screen-xl mx-auto px-4 justify-center items-center">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">Marcas Asociadas</h2>
                    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 items-center justify-center"> {/* Añadido justify-center aquí */}
                        {associatedBrands.map((brand, index) => (
                            <div
                                key={index}
                                className="col-span-1 flex justify-center items-center p-4 bg-white rounded-lg transition-all duration-300"
                            >
                                <a
                                    href={brand.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block w-full h-full flex justify-center items-center"
                                >
                                    <img
                                        src={brand.logo}
                                        alt={brand.name} // Mantén el alt por accesibilidad
                                        className="max-h-16 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                                        style={{ boxShadow: 'none' }} // Elimina cualquier sombra inline
                                    />
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {showInstallationService && (
                <InstallationService {...installationServiceData} /> // <----- USING THE DEFINED DATA
            )}

            <div className="max-w-screen-xl mx-auto px-4 py-12 space-y-16">
                {/* Renderiza el ContactSection directamente */}
                <ContactSection {...camerasContactSectionData} />
            </div>
        </div>
    );
};

export default CamerasPage;