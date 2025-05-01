import { useEffect, useRef, useState } from "react";
import { scrollToHashOnLoad } from "../../assets/utils/scrollUtils.ts";
import ContactSection from "../../components/Sections/contactSection.tsx";
import { ContactSectionProps } from "../../interface/contactProps";
import CameraHero from "../securityCameras/cameraHero.tsx";
import HeroProps from "../../interface/HeroProps";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import instalando from "../../assets/img/cameras/instalando.jpg";
import { generarEnlaceWhatsApp, mensajesWhatsApp } from '../../messages/messages.ts';
import {
    faPersonWalkingDashedLineArrowRight,
    faVolumeUp,
    faBell,
    faHardDrive,
    faSwatchbook,
} from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import SplitSection from "../../components/Sections/SplitSection.tsx";
import InstallationService from "./InstallationService.tsx";
import PreloaderWrapper from "../../components/loader/PreloaderWrapper";
import SEO from "../../components/SEO/SEO.tsx";
import VideoGallery from "../../components/video/VideoGalery.tsx";
import { VideoItem } from "../../interface/videoProps";

const CamerasPage = () => {
    const camarasIpRef = useRef<HTMLDivElement>(null);
    const [galleryVideos, setGalleryVideos] = useState<VideoItem[]>([]); // Estado para almacenar los videos de la API

    const scrollToRef = (ref: React.RefObject<HTMLElement>) => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToHashOnLoad();
    }, []);

    // Función para obtener los videos desde la API
    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const apiUrl = `${import.meta.env.VITE_NEXT_PUBLIC_API_BASE_URL}/api/videos`;
                const response = await fetch(apiUrl);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data: { id: number; url: string; thumbnailUrl?: string }[] = await response.json();
                console.log("Data from API:", data); // <--- LOG THIS

                const formattedVideos: VideoItem[] = data.map(video => ({
                    embedUrl: video.url,
                    thumbnailUrl: video.thumbnailUrl || "URL_DE_LA_MINIATURA_POR_DEFECTO",
                    alt: `Video de seguridad ${video.id}`,
                }));
                setGalleryVideos(formattedVideos);
            } catch (error) {
                console.error("Error al obtener los videos:", error);
                setGalleryVideos([]);
            }
        };

        fetchVideos();
    }, []);


    const camerasContactSectionData: ContactSectionProps = {
        title: "¿Interesado en nuestras soluciones de cámaras?",
        description: "Contáctanos para discutir tus necesidades de vigilancia y obtener una cotización personalizada.",
        context: "camaras",
        emailButtonText: "Contactar",
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
        eyebrow: "POR QUÉ ELEGIR NOVAFENIX",
        headline: "Nos hacemos cargo de todo por usted",
        body: "Nuestros profesionales del hogar inteligente instalan su sistema de seguridad para el hogar, lo activan y le muestran cómo usarlo.",
        buttonText: "¿Cómo comenzar?",
        buttonLink: generarEnlaceWhatsApp(mensajesWhatsApp.general),
        imageUrl: instalando,
        altText: "Profesional de hogar inteligente en escalera instalando la cámara exterior profesional Vivint Gen 2 con vista de árboles y montañas en el fondo",
    };

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
            image: "https://res.cloudinary.com/dfbpaq83u/image/upload/v1744662143/baduae7ho7romthbgleu.png",
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
                "https://res.cloudinary.com/dfbpaq83u/image/upload/v1744663146/saqwfm5qvpdndxkrqclp.png",
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
        { logo: "https://res.cloudinary.com/dfbpaq83u/image/upload/v1744661104/mddhgpqzt9d2kf7uotdk.svg", link: "https://www.hikvision.com/" },
        { logo: "https://res.cloudinary.com/dfbpaq83u/image/upload/v1744661104/gowgaot8mye47bwovwpq.png", link: "https://www.tp-link.com/" },
    ];

    const imageUrls = [
        "https://res.cloudinary.com/dcxqkcmhd/image/upload/v1744299925/uvhurgciahxtkyyhnjht.png",
        "https://res.cloudinary.com/dcxqkcmhd/image/upload/v1744300683/eftnbb7ntmz49jomtywc.png",
        "https://res.cloudinary.com/dfbpaq83u/image/upload/v1744662143/baduae7ho7romthbgleu.png",
        "https://res.cloudinary.com/dfbpaq83u/image/upload/v1744663146/saqwfm5qvpdndxkrqclp.png",
        "https://res.cloudinary.com/dfbpaq83u/image/upload/v1744661104/mddhgpqzt9d2kf7uotdk.svg",
        "https://res.cloudinary.com/dfbpaq83u/image/upload/v1744661104/gowgaot8mye47bwovwpq.png",
    ];

    return (
        <>
            <SEO
                title="Cámaras de seguridad | NovaFenix"
                description="Instalamos cámaras de seguridad con tecnología avanzada para vigilancia en tiempo real. Protege tu hogar o negocio con soluciones personalizadas de NovaFenix."
                keywords="cámaras de seguridad, instalación de cámaras, vigilancia 24/7, seguridad para el hogar, seguridad empresarial, NovaFenix, guayaquil, seguridad"
                canonical="https://www.novafenix-ec.com/camaras"
            />

            <PreloaderWrapper imageUrls={imageUrls}>
                <div className="pt-0">
                    <section>
                        <CameraHero
                            {...cameraHeroData}
                            scrollToRef={scrollToRef}
                            targetRef={camarasIpRef} // Pasa la ref de la sección "Cámaras IP"
                        />
                    </section>
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
                    <section>
                        <div >
                            {cameraOptionsData.map((option, index) => (
                                <SplitSection
                                    key={option.label}
                                    {...option}
                                    id={option.href.substring(1)}
                                    isImageLeft={index % 2 === 0}
                                    ref={option.label === "Cámaras IP" ? camarasIpRef : null} // Adjunta la ref a la sección "Cámaras IP"
                                />
                            ))}
                        </div>
                    </section>
                    <section className="py-16 ">
                        <div className="max-w-screen-xl mx-auto px-4 justify-center items-center">
                            <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">Marcas Asociadas</h2>
                            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 items-center justify-center">
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
                                                className="max-h-16 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                                                style={{ boxShadow: 'none' }}
                                            />
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Seccion de videos de camara de seguridad */}
                    <section className="py-16 bg-gray-100">
                        <div className="py-6 bg-secondary">
                            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                                <h2 className="text-3xl font-bold text-white my-4 text-center">Nuestros Cámaras de Seguridad</h2>
                                <VideoGallery videos={galleryVideos} />
                            </div>
                        </div>
                    </section>

                    <section>
                        {<InstallationService {...installationServiceData} />}
                    </section>
                    <section>
                        <div className="max-w-screen-xl mx-auto px-4 py-12 space-y-16">
                            <ContactSection {...camerasContactSectionData} />
                        </div>
                    </section>
                </div>
            </PreloaderWrapper>
        </>
    );
};

export default CamerasPage;