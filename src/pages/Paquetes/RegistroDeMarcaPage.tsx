import { useState, useEffect } from 'react';
import { Gem } from 'lucide-react';
import CallToActionSectionV2 from '../../components/Sections/Call_to_actionV2';
import { services } from '../../components/data/RegistroDeMarca/servicesData';
import { HeroServiceCard } from '../../components/package/heroServiceCard';
import { process } from '../../components/data/RegistroDeMarca/processData';
import { benefits } from '../../components/data/RegistroDeMarca/benefitsData';
import ServicesSection from '../../components/package/serviceSection';
import BenefitsSection from '../../components/package/benefitsSection';
import FaqSection from '../../components/package/FaqSection';
import { faqData } from '../../components/data/RegistroDeMarca/fqaData';
import ProcessSection from '../../components/package/ProcessSection';
import { mensajesWhatsApp } from '../../messages/messages';
import SEO from '../../components/SEO/SEO';

const RegistroMarcaPage = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className="min-h-screen bg-gray-50">
            <SEO
                title="Registro de Marca | Protege tu Marca con NexoLegal"
                description="Protege tu propiedad intelectual y asegura la exclusividad de tu marca con los servicios especializados de NexoLegal."
                keywords="registro de marca, protección de marca, propiedad intelectual, registro de marcas en Ecuador"
                canonical="https://www.nexolegal-ec.com/registro-de-marca"
            />
            {/* Hero Section */}
            <section>
                <HeroServiceCard
                    icon={<Gem className="text-6xl text-white" />}
                    title="Registro de Marca"
                    description="Protege tu propiedad intelectual y asegura la exclusividad de tu marca con nuestros servicios especializados de registro de marcas."
                    button2Text="Agenda tu Consulta"
                    button1Link="servicesSection"
                    mensaje={mensajesWhatsApp.marca}
                />
            </section>

            {/* Services Section */}
            <section className="py-16 bg-white">
                <ServicesSection services={services} isVisible={isVisible} description={"Elige el servicio que mejor se adapte a tus necesidades de registro de marca"} />
            </section>

            {/* Benefits Section */}
            <section className="py-16 bg-gray-100">
                <BenefitsSection
                    title={"¿Por qué Registrar tu Marca?"}
                    description={"Conoce los beneficios de proteger tu marca con NexoLegal"}
                    benefits={benefits} // Le pasamos los beneficios aquí
                    isVisible={isVisible} // La visibilidad para la animación
                />
            </section>

            {/* Process Section */}
            <section className="py-16 bg-white">
                <ProcessSection
                    title="Proceso de Registro"
                    description="Nuestro proceso paso a paso para registrar tu marca"
                    steps={process}
                    isVisible={isVisible}
                />
            </section>

            {/* FAQ Section */}
            <section className="py-16 bg-gray-100">
                <FaqSection
                    description={"Aquí encontrarás las respuestas a las preguntas más comunes sobre el proceso de registro de marca."}
                    faqs={faqData}
                    isVisible={isVisible}
                />
            </section>

            {/* CTA Section */}
            <section>
                <CallToActionSectionV2
                    title="¿Listo para proteger tu marca?"
                    description="Contáctanos hoy mismo y da el primer paso hacia la protección de tu propiedad intelectual"
                    button1Text="Llamar Ahora"
                    button2Text="Solicitar Cotización"
                    mensaje={mensajesWhatsApp.marca}
                />
            </section>
        </div>
    );
};

export default RegistroMarcaPage;