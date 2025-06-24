// Home.tsx
import Call_to_action from '../components/Call_to_action';
import VideoGallery from '../components/video/VideoGalery';
import { videoData } from '../components/data/videoData';
import Cards from '../components/Cards.tsx';
import PreloaderWrapper from "../components/loader/PreloaderWrapper.tsx";
import SEO from '../components/SEO/SEO.tsx';
import { generarEnlaceWhatsApp } from '../messages/messages.ts'; // Asegúrate de la ruta correcta
import { TELEFONO_CONTACTO } from '../config/config';
import InicioSection from '../components/Hero/InicioSection.tsx';

function Home() {
  const imageUrls = [
    "https://res.cloudinary.com/demo/image/upload/v1744230903/imagen1.jpg",
    "https://res.cloudinary.com/demo/image/upload/v1744230903/imagen2.jpg",
    // pon aquí las imágenes importantes que se usan en esta página
  ];
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <SEO
        title='Servicio de Monitoreo de cámaras | NovaFenix'
        description='Instalación y monitoreo profesional de cámaras de seguridad en Guayaquil. Protección total para hogares y negocios.'
        keywords='seguridad, cámaras de seguridad, vigilancia, guayaquil, monitoreo, empresas de seguridad guayaquil, cámaras de seguridad Hikvision'
        canonical='https://www.novafenix-ec.com/'
      />
      <PreloaderWrapper imageUrls={imageUrls}>

        {/* Página principal Home */}

        <div className="min-h-screen bg-gray-100">

          {/* Video Hero */}
          <section className='Hero'>
            <div className="pt-12">
              <InicioSection scrollToSection={scrollToSection} />
            </div>
          </section>


          {/* Contenedor de información */}
          <section className='Contenedor Cartas'>
            <div className="bg-gray-100 py-12">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Protección completa</h2>
                  <p className="text-2xl text-gray-600">Todo lo que tu necesitas para tu completa seguridad y tranquilidad</p>
                  <Cards />
                </div>
              </div>
            </div>
          </section>

          {/* Contenedor de información */}
          <section className='VideoGallery'>
            <div className="py-6 bg-secondary">
              <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-white my-4 text-center">Demo de las cámaras de seguridad</h2>
                <VideoGallery videos={videoData} />
              </div>
            </div>
          </section>

          <section>
            <div className="py-6"></div>
          </section>

          {/* Sección de call to action */}
          <div>
            <section>
              <Call_to_action
                title="¿Listo para proteger tu inversión?"
                subtitle="Con NovaFenix despreocupate de cuidar lo que amas"
                spanBtn="Contactános ahora"
                link={generarEnlaceWhatsApp(TELEFONO_CONTACTO)}
              />
            </section>
          </div>
        </div>
      </PreloaderWrapper>

    </>
  );
}

export default Home;
