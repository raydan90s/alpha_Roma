import { useEffect } from "react";
import { scrollToHashOnLoad } from "../../assets/utils/scrollUtils.ts";
import ContactSection from "../../components/Sections/contactSection.tsx"; // Importa el componente
import { ContactSectionProps } from "../../interface/contactProps"; // Importa la interfaz
import VideoHero from "../../components/Hero/videoHero.tsx"; // Import the VideoHero component
import { VideoHeroProps } from "../../interface/HerovideoProps.ts"; // Import its interface
import { Boxes, HeartHandshake, Lightbulb } from "lucide-react";
import SEO from "../../components/SEO/SEO.tsx";
import { experts } from "../../components/data/ExpertData.ts";

const AboutUsPage = () => {
  useEffect(() => {
    scrollToHashOnLoad();
  }, []);

  const imageUrls = [
    "https://res.cloudinary.com/dfbpaq83u/image/upload/v1746118668/NovaFenix/yldksgsatzgtrb0tjeqy.jpg",
    "https://res.cloudinary.com/dfbpaq83u/image/upload/v1746118730/NovaFenix/el4v1njcsaqzuw0dgjne.jpg",
    "https://res.cloudinary.com/dfbpaq83u/video/upload/v1751051500/levwpdwbypvji5wbsh9h.mp4"
  ];

  const contactSectionData: ContactSectionProps = {
    title: "¿Te gustaría saber más?",
    description: "Contáctanos para conocer más sobre nuestra misión, visión y cómo nuestros valores se traducen en un servicio excepcional.",
    context: "general",
    emailButtonText: "Contactar",
  };

  const videoHeroData: VideoHeroProps = {
    title: "Conócenos Mejor",
    subtitle: "Descubre nuestra historia, misión y valores.",
    videoUrl: imageUrls[2], // Reemplaza con la URL de tu video
  };

  return (
    <>
      <SEO
        title="¿Quiénes somos? | NovaFenix"
        description="Conoce más acerca de nosostros y de nuestro servicio de monitoreo de cámaras"
        keywords="seguridad, novfenix, guayaquil, Guayaquil, monitoreo de cámaras, seguridad de cámaras, empresas"
        canonical="https://www.novafenix-ec.com/about"
      />

      <div className="bg-gray-100">
        {/* Video Hero Section */}
        <section>
          <VideoHero {...videoHeroData} />
        </section>
      </div>

      {/* Misión Section */}
      <section id="mision" className="scroll-mt-24 min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 flex items-center">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
              <div className="space-y-6">
                <div className="inline-block px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-full">
                  NUESTRA FILOSOFÍA
                </div>
                <h2 className="text-7xl font-black text-gray-900 leading-none tracking-tight">
                  MISIÓN
                </h2>
              </div>
              <p className="text-xl text-gray-700 leading-relaxed font-light max-w-xl">
                Transformamos la seguridad con tecnología de vanguardia, 
                protegiendo lo que más valoras con soluciones inteligentes 
                y confiables.
              </p>
              <div className="pt-4">
                <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Tecnología de Seguridad Avanzada"
                  className="w-full h-[500px] object-cover transform group-hover:scale-105 transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visión Section */}
      <section id="vision" className="scroll-mt-24 min-h-screen bg-gradient-to-br from-gray-900 to-slate-800 flex items-center text-white">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative group lg:order-1">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Futuro de la Seguridad Digital"
                  className="w-full h-[500px] object-cover transform group-hover:scale-105 transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
            <div className="space-y-10 lg:order-2">
              <div className="space-y-6">
                <div className="inline-block px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-semibold rounded-full">
                  NUESTRO FUTURO
                </div>
                <h2 className="text-7xl font-black text-white leading-none tracking-tight">
                  VISIÓN
                </h2>
              </div>
              <p className="text-xl text-gray-300 leading-relaxed font-light max-w-xl">
                Liderar la revolución de la seguridad inteligente, 
                creando un mundo donde la tecnología y la confianza 
                se unen para proteger el futuro.
              </p>
              <div className="pt-4">
                <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-gray-100">
        <div className="pt-20">
          {/* Content Section */}
          <section>
            <div className="max-w-screen-xl mx-auto px-4 py-12 space-y-20">

              {/* Valores Section */}
              <section id="valores" className="scroll-mt-24 mb-16">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-800">Nuestros Valores</h2>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Los principios fundamentales que definen nuestra cultura y guían nuestras acciones.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {/* Valor 1 */}
                  <div className="bg-white rounded-xl shadow-md p-6">
                    <div className="bg-secondary rounded-full p-3 inline-block mb-4">
                      <Lightbulb color="white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Innovación</h3>
                    <p className="text-gray-600 text-lg">Impulsamos la mejora continua a través de la integración de nuevas tecnologías y la búsqueda de soluciones creativas.</p>
                  </div>
                  {/* Valor 2 */}
                  <div className="bg-white rounded-xl shadow-md p-6">
                    <div className="bg-secondary rounded-full p-3 inline-block mb-4">
                      <Boxes color="white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Integridad</h3>
                    <p className="text-gray-600 text-lg">Actuamos con honestidad, transparencia y ética en todas nuestras interacciones y decisiones.</p>
                  </div>
                  {/* Valor 3 */}
                  <div className="bg-white rounded-xl shadow-md p-6">
                    <div className="bg-secondary rounded-full p-3 inline-block mb-4">
                      <HeartHandshake color="white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Compromiso con el Cliente</h3>
                    <p className="text-gray-600 text-lg">Priorizamos las necesidades de nuestros clientes, ofreciendo un servicio atento, personalizado y de alta calidad.</p>
                  </div>
                </div>
              </section>

              {/* Nuestros Expertos Section */}
              <section id="expertos" className="scroll-mt-24 mb-16">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-800">Nuestros Expertos</h2>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Conoce al equipo de profesionales que hacen posible nuestro compromiso con la excelencia.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                  {experts.map((expert, index) => (
                    <div key={index} className="bg-accent rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                      <div className="aspect-square bg-gray-200 overflow-hidden">
                        <img
                          src={expert.image}
                          alt={expert.name}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-6 text-center">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">{expert.name}</h3>
                        <p className="text-gray-600">{expert.position}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Contact Section */}
              <ContactSection {...contactSectionData} />
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default AboutUsPage;