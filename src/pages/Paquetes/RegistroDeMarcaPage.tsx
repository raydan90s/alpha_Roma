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

const RegistroMarcaPage = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section>
                <HeroServiceCard
                    icon={<Gem className="text-6xl text-white" />}
                    title="Registro de Marca"
                    description="Protege tu propiedad intelectual y asegura la exclusividad de tu marca con nuestros servicios especializados de registro de marcas."
                    button1Text="Ver Servicios"
                    button2Text="Consulta Gratuita"
                    button1Link="/servicios"
                    button2Link="/consulta-gratuita"
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
                    button1Link="tel:+123456789"
                    button2Link="/cotizacion"
                />
            </section>
        </div>
    );
};

export default RegistroMarcaPage;