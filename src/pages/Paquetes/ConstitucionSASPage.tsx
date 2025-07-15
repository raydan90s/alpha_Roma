import SEO from '../../components/SEO/SEO';
import { HeroSAS } from '../../components/package/SAS/HeroSAS';
import BenefitsSection from '../../components/package/benefitsSection';
import { benefits } from '../../components/data/SAS/benefits';
import { services } from '../../components/data/SAS/service';
import { ServicesTable } from '../../components/package/SAS/serviceTable';
import CallToActionSectionV2 from '../../components/Sections/Call_to_actionV2';
import { TestimonialsSection } from '../../components/package/SAS/testimonios';
import { testimonials } from '../../components/data/SAS/testimonials';
import { mensajesWhatsApp } from '../../messages/messages';

const SASPage = () => {
    return (
        <>
          <SEO
            title="Constitución de SAS | Asesoría Legal y Empresarial"
            description="Constituye tu Sociedad por Acciones Simplificada (SAS) con la asesoría de expertos legales. Simplificamos tu proceso para que tu empresa esté lista rápidamente."
            keywords="constitución SAS, asesoría legal, SAS Ecuador, creación de empresas, asesoría empresarial"
            canonical="https://www.nexolegal-ec.com/constitucion-SAS"
          />
          <div className="bg-black min-h-screen">
              {/* HeroSAS: La función handleScrollToServices ya maneja el scroll suave */}
              <HeroSAS
                  mensaje={mensajesWhatsApp.cotizarSAS}
              />
              
              <BenefitsSection
                  title="Beneficios de Nuestros Servicios"
                  description="Conoce las ventajas de contratar nuestros servicios."
                  benefits={benefits}
                  isVisible={true}
                  cardBackgroundColor="bg-gray-900"
                  titleColor="text-white"
                  descriptionColor="text-gray-400"
              />

              {/* ServicesTable se encargará de recibir el mensaje y mostrar los servicios */}
              <ServicesTable
                  services={services}
                  mensaje={mensajesWhatsApp.cotizarSAS}
              />
              
              <TestimonialsSection
                  testimonials={testimonials}
              />
              
              <CallToActionSectionV2 
                  title={'¿Listo para Constituir tu SAS?'}
                  description={'Nuestro equipo de expertos te acompañará en todo el proceso. Obtén tu consulta gratuita y empieza hoy mismo.'}
                  button1Text={'Llamar ahora'}
                  button2Text={'Cotizar SAS'}
                  mensaje={mensajesWhatsApp.cotizarSAS}
              />
          </div>
        </>
    );
};

export default SASPage;
