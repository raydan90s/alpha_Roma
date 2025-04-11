import React, { useEffect } from "react";
import { scrollToHashOnLoad } from "../../assets/utils/scrollUtils.ts";
import ContactSection from "../../components/Sections/contactSection.tsx";
import { ContactSectionProps } from "../../interface/contactProps";
import HeroProps from "../../interface/HeroProps";
import '@fortawesome/fontawesome-svg-core/styles.css';
import HeroSegmar from "./HeroSegmar.tsx";
import SplitSection from "../../components/Sections/SplitSection.tsx"; // Importa SplitSection

const SeguridadHogarPage = () => {
    useEffect(() => {
        scrollToHashOnLoad();
    }, []);

    const handleContactButtonClick = () => {
        console.log("Botón de contacto para seguridad del hogar clickeado");
    };

    const seguridadHogarContactSectionData: ContactSectionProps = {
        title: "¿Interesado en proteger tu hogar?",
        description: "Contáctanos para asegurar tu tranquilidad y la de tu familia.",
        phone: "8445917193",
        emailButtonText: "Contactar",
        onEmailButtonClick: handleContactButtonClick,
    };

    const seguridadHogarHeroData: HeroProps = {
        title: "Tu Hogar,",
        span: "Tu Santuario Seguro",
        link_image: "src/assets/img/HeroCamera.png", // URL de una cámara de seguridad enfocando un hogar
        span_btn1: "Ver Sistemas",
        span_btn2: "Demo en Vivo", // Enlace que simula una cámara
        description: "Protege cada rincón de tu hogar con nuestra vigilancia inteligente. Monitoreo en tiempo real y la tranquilidad que mereces.",
        cta_text: "Explora la Protección",
    };

    const solucionesSeguridadHogar = [
        {
            id: "seguridad-accesos",
            label: "Protección de Accesos Inteligente con Alertas Inmediatas",
            description: "Asegura cada punto de entrada con sensores avanzados que detectan cualquier intrusión y te envían alertas inmediatas para una respuesta rápida.",
            image: "https://images.unsplash.com/photo-1598454444675-9f37ebdb809c?auto=format&fit=crop&w=800&q=80",
            features: [
                "Sensores de movimiento de alta sensibilidad",
                "Alertas personalizables para puertas y ventanas",
                "Integración con sistemas de alarma existentes",
            ],
        },
        {
            id: "vigilancia-video",
            label: "Vigilancia HD con Cruce de Línea y ColorVu con Alertas Inmediatas",
            description: "Cruce de Línea: Define perímetros virtuales y recibe alertas inmediatas cuando se cruzan, ideal para proteger áreas específicas. **ColorVu:** Disfruta de video a color 24/7, capturando detalles vívidos incluso en la oscuridad, crucial para la identificación. Recibe **alertas inmediatas** ante cualquier detección de movimiento o evento.",
            image: "https://images.unsplash.com/photo-1586991074180-989c6e3820b6?auto=format&fit=crop&w=800&q=80",
            features: [
                "Calidad de video HD para una vigilancia clara",
                "Tecnología ColorVu para visión nocturna a color",
                "Detección de **Cruce de Línea** con alertas precisas",
                "Alertas de movimiento **inmediatas** a tu dispositivo",
                "Acceso remoto y grabación en la nube opcional",
            ],
        },
        {
            id: "automatizacion-hogar",
            label: "Automatización Segura con Alertas Inmediatas",
            description: "Controla cerraduras, luces y otros dispositivos de seguridad de forma remota y recibe **alertas inmediatas** ante cualquier actividad inusual o cambio en el estado de tus dispositivos, brindándote control y tranquilidad.",
            image: "https://images.unsplash.com/photo-1524749292158-7540c2494485?auto=format&fit=crop&w=800&q=80",
            features: [
                "Control remoto de cerraduras inteligentes",
                "Programación de luces para disuadir intrusos",
                "Alertas **inmediatas** por cambios en el sistema",
                "Integración con asistentes de voz para control fácil",
            ],
        },
    ];

    return (
        <div className="pt-0 bg-gray-100">
            {/* Hero Section */}
            <HeroSegmar {...seguridadHogarHeroData} />

            {/* Soluciones usando SplitSection */}
            <div className="max-w-screen-xl mx-auto px-4 py-12 space-y-16">
                <h2 className="text-4xl font-bold text-gray-800 text-center mb-10">
                    Soluciones de Seguridad para tu Hogar
                </h2>
                {solucionesSeguridadHogar.map((option, index) => (
                    <SplitSection
                        key={option.id}
                        id={option.id}
                        label={option.label}
                        description={option.description}
                        image={option.image}
                        features={option.features}
                        isImageLeft={index % 2 === 0} // Alternar la posición de la imagen
                    />
                ))}
            </div>

            <div className="max-w-screen-xl mx-auto px-4 py-12 space-y-16">
            {/* Contacto */}
            <ContactSection {...seguridadHogarContactSectionData} />
            </div>
        </div>
    );
};

export default SeguridadHogarPage;