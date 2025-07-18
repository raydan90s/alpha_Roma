// Home.tsx
import Call_to_action from "../components/Sections/Call_to_action.tsx";
import VideoGallery from "../components/video/VideoGalery";
import { videoData } from "../components/data/videoData";
import SEO from "../components/SEO/SEO.tsx";
import { generarEnlaceWhatsApp } from "../messages/messages.ts";
import { TELEFONO_CONTACTO } from "../config/config";
import InicioSection from "../components/Hero/InicioSection.tsx";
import Testimonials from "../components/Home/Testimonials.tsx";
import FeaturesSection from "../components/Home/FeaturesSection.tsx";
import ContactForm from "../components/Home/ContactForm.tsx";

function Home() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <SEO
        title="Asesoría Legal Integral | NexoLegal"
        description="En NexoLegal ofrecemos soluciones jurídicas personalizadas, defensa legal experta y acompañamiento profesional en cada etapa legal de tu vida o negocio."
        keywords="asesoría legal, abogados en Guayaquil, defensa jurídica, servicios legales Ecuador, NexoLegal, firma de abogados"
        canonical="https://www.nexolegal-ec.com/"
      />

      {/* Página principal Home */}
      <div className="min-h-screen bg-secondary">
        {/* Hero Section */}
        <section className="Hero">
          <div className="pt-20">
            <InicioSection
              scrollToSection={scrollToSection}
              telefono={TELEFONO_CONTACTO}
            />
          </div>
        </section>

        {/* Testimonials */}
        <section className="Testimonials">
          <Testimonials />
        </section>

        {/* Video Gallery 
        <section className='VideoGallery'>
          <div className="py-6 bg-secondary">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-white my-4 text-center">Demo NexoLegal</h2>
              <VideoGallery videos={videoData} />
            </div>
          </div>
        </section>
*/}
        {/* Feature Section */}
        <section>
          <FeaturesSection />
        </section>

        {/* Formulario de Contacto */}
        <section>
          <ContactForm />
        </section>

        {/* Call to Action */}
        <section>
          <Call_to_action
            title="¿Necesitas asesoría legal confiable?"
            subtitle="En NexoLegal defendemos tus derechos con compromiso y experiencia."
            spanBtn="Contáctanos"
            link={generarEnlaceWhatsApp(TELEFONO_CONTACTO)}
          />
        </section>
      </div>
    </>
  );
}

export default Home;
