// Home.tsx
import Call_to_action from '../components/Call_to_action';
import VideoGallery from '../components/video/VideoGalery';
import { videoData } from '../components/data/videoData';
import SEO from '../components/SEO/SEO.tsx';
import { generarEnlaceWhatsApp } from '../messages/messages.ts';
import { TELEFONO_CONTACTO } from '../config/config';
import InicioSection from '../components/Hero/InicioSection.tsx';
import Testimonials from '../components/Home/Testimonials.tsx';


function Home() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <SEO
        title='Servicio de Monitoreo de cámaras | NexoLegal'
        description='Instalación y monitoreo profesional de cámaras de seguridad en Guayaquil. Protección total para hogares y negocios.'
        keywords='seguridad, cámaras de seguridad, vigilancia, guayaquil, monitoreo, empresas de seguridad guayaquil, cámaras de seguridad Hikvision'
        canonical='https://www.novafenix-ec.com/'
      />

      {/* Página principal Home */}
      <div className="min-h-screen bg-secondary">

        {/* Hero Section */}
        <section className='Hero'>
          <div className="pt-12">
            <InicioSection scrollToSection={scrollToSection} />
          </div>
        </section>

        {/* Testimonials*/}
        <section className='Testimonials'>
          <Testimonials />
        </section>

        {/* Video Gallery */}
        <section className='VideoGallery'>
          <div className="py-6 bg-secondary">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-white my-4 text-center">Demo de las cámaras de seguridad</h2>
              <VideoGallery videos={videoData} />
            </div>
          </div>
        </section>


        {/* Call to Action */}
        <section>
          <Call_to_action
            title="¿Listo para proteger tu inversión?"
            subtitle="Con NovaFenix despreocupate de cuidar lo que amas"
            spanBtn="Contactános ahora"
            link={generarEnlaceWhatsApp(TELEFONO_CONTACTO)}
          />
        </section>
      </div>
    </>
  );
}

export default Home;
