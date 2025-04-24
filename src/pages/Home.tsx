// Home.tsx
import Call_to_action from '../components/Call_to_action';
import VideoHero from "../components/Sections/videoHero.tsx";
import VideoGallery from '../components/video/VideoGalery';
import { videoData } from '../components/data/videoData';
import Cards from '../components/Cards.tsx';
import PreloaderWrapper from "../components/loader/PreloaderWrapper.tsx";
import SEO from '../components/SEO/SEO.tsx';

function Home() {
  const imageUrls = [
    "https://res.cloudinary.com/demo/image/upload/v1744230903/imagen1.jpg",
    "https://res.cloudinary.com/demo/image/upload/v1744230903/imagen2.jpg",
    // pon aquí las imágenes importantes que se usan en esta página
  ];

  return (
    <>
    <SEO 
    title='Servicio de Monitoreo de cámaras | NovaFenix'
    description='Instalación y monitoreo profesional de cámaras de seguridad en Guayaquil. Protección total para hogares y negocios.'
    keywords='seguridad, cámaras de seguridad, vigilancia, guayaquil, monitoreo, empresas de seguridad guayaquil, cámaras de seguridad Hikvision'
    canonical='https://www.novafenix-ec.com/'
    />
    <PreloaderWrapper imageUrls={imageUrls}>
      <div className="min-h-screen bg-gray-100">
        <VideoHero 
          title="Porque una cámara sin vigilancia es solo una ilusión de seguridad"
          subtitle="Protege lo que amas con NovaFenix"
          videoUrl="https://res.cloudinary.com/dcxqkcmhd/video/upload/v1744230903/wgmiwddovoqinudtewn4.mp4"
          primaryButtonText="Contáctanos"
          secondaryButtonText="Ver Paquetes"
          secondaryButtonLink="/paquetes"
        />

        <div className="bg-gray-100 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Protección completa</h2>
              <p className="text-2xl text-gray-600">Todo lo que tu necesitas para tu completa seguridad y tranquilidad</p>
              <Cards />
            </div>
          </div>
        </div>

        <div className="py-6 bg-secondary">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white my-4 text-center">Demo de las cámaras de seguridad</h2>
            <VideoGallery videos={videoData} />
          </div>
        </div>

        <div className="py-6"></div>

        <Call_to_action
          title="¿Listo para proteger tu inversión?"
          subtitle="Con NovaFenix despreocupate de cuidar lo que amas"
          spanBtn="Contactános ahora"
          link=""
        />
      </div>
    </PreloaderWrapper>
    
    </>
  );
}

export default Home;
