import { HeroSAS } from '../../components/package/SAS/HeroSAS';
import BenefitsSection from '../../components/package/benefitsSection';
import { benefits } from '../../components/data/SAS/benefits';
import { services } from '../../components/data/SAS/service';
import { ServicesTable } from '../../components/package/SAS/serviceTable';
import CallToActionSectionV2 from '../../components/Sections/Call_to_actionV2';
import { TestimonialsSection } from '../../components/package/SAS/testimonios';
import { testimonials } from '../../components/data/SAS/testimonials';

const SASPage = () => {
    return (
        <div className="bg-black min-h-screen">
            <HeroSAS />
            <BenefitsSection
                title="Beneficios de Nuestros Servicios"
                description="Conoce las ventajas de contratar nuestros servicios."
                benefits={benefits}
                isVisible={true}
                cardBackgroundColor="bg-gray-900"
                titleColor="text-white"
                descriptionColor="text-gray-400"
            />
            <ServicesTable
                services={services}
            />
            <TestimonialsSection
                testimonials={testimonials}
            />
            <CallToActionSectionV2 title={'¿Listo para Constituir tu SAS? '}
                description={'Nuestro equipo de expertos te acompañará en todo el proceso. Obtén tu consulta gratuita y empieza hoy mismo.'}
                button1Text={'Llamar ahora'}
                button2Text={'Cotizar SAS'}
                button1Link={''}
                button2Link={''} />
        </div>
    );
};

export default SASPage;