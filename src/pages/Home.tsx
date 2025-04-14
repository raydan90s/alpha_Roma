// Home.tsx
import Call_to_action from '../components/Call_to_action';
import VideoHero from "../components/Sections/videoHero.tsx";
import VideoGallery from '../components/video/VideoGalery';
import { videoData } from '../components/data/videoData';
import Cards from '../components/Cards.tsx';

function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation */}

      {/* Hero Section */}
      <VideoHero 
        title="Protege tu hogar con NovaFenix"
        subtitle="La seguridad de tu hogar en la palma de tu mano"
        videoUrl="https://res.cloudinary.com/dcxqkcmhd/video/upload/v1744230903/wgmiwddovoqinudtewn4.mp4"
        primaryButtonText="Contáctanos"
        secondaryButtonText="Ver Paquetes"
        secondaryButtonLink="/paquetes"
      />
      {/* Features Section */}
      <div className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Protección completa en tu hogar</h2>
            <p className="text-2xl text-gray-600">Todo lo que tu hogar necesita para tu completa seguridad y tranquilidad</p>
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

      <div className="py-6">
        </div>

      <Call_to_action
        title="¿Listo para proteger tu casa?"
        subtitle="Con NovaFenix despreocupate de cuidar tu casa"
        spanBtn="Contactános ahora"
        link=""
      />
    </div>
  );
}

export default Home;
