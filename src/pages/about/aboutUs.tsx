import { useEffect } from "react";
import { scrollToHashOnLoad } from "../../assets/utils/scrollUtils.ts";
import ContactSection from "../../components/Sections/contactSection.tsx"; // Importa el componente
import { ContactSectionProps } from "../../interface/contactProps"; // Importa la interfaz
import VideoHero from "../../components/Sections/videoHero.tsx"; // Import the VideoHero component
import { VideoHeroProps } from "../../interface/HerovideoProps.ts"; // Import its interface
import { Boxes, HeartHandshake, Lightbulb } from "lucide-react";
import PreloaderWrapper from "../../components/loader/PreloaderWrapper";
import SEO from "../../components/SEO/SEO.tsx";
const AboutUsPage = () => {
  useEffect(() => {
    scrollToHashOnLoad();
  }, []);

  const imageUrls = [
    "https://res.cloudinary.com/dfbpaq83u/image/upload/v1746118668/NovaFenix/yldksgsatzgtrb0tjeqy.jpg",
    "https://res.cloudinary.com/dfbpaq83u/image/upload/v1746118730/NovaFenix/el4v1njcsaqzuw0dgjne.jpg",
    "https://res.cloudinary.com/dcxqkcmhd/video/upload/v1744208322/ufrawrhtjxkkre6znupj.mp4"
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


          <div className="pt-20">
            {/* Content Section */}
            <section>
              <div className="max-w-screen-xl mx-auto px-4 py-12 space-y-16" style={{ textAlign: "justify" }}> {/* Añadimos space-y-16 para separación vertical */}

                {/* Misión Section */}
                <section id="mision" className="scroll-mt-24 bg-white rounded-xl shadow-lg p-12 md:p-16"> {/* Estilos del recuadro */}
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/2">
                      <h2 className="text-3xl font-bold text-gray-800 mb-6">Nuestra Misión</h2>
                      <p className="text-lg text-gray-600 mb-8">
                        Nuestra misión es proporcionar soluciones integrales de seguridad y automatización de vanguardia, empoderando a nuestros clientes para proteger sus hogares y negocios de manera eficiente e inteligente. Nos esforzamos por ofrecer productos y servicios de la más alta calidad, respaldados por un equipo de expertos comprometidos con la excelencia y la satisfacción del cliente.
                      </p>
                      {/* You can add an image here if you like */}
                    </div>
                    <div className="md:w-1/2">
                      <div className="bg-gray-200 rounded-xl overflow-hidden shadow-lg h-80">
                        <img
                          src="https://www.videoproteccion.com.mx/wp-content/uploads/2017/06/instalador-cctv.jpg"
                          alt="Nuestra Misión"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </section>

                {/* Visión Section */}
                <section id="vision" className="scroll-mt-24 bg-white rounded-xl shadow-lg p-12 md:p-16"> {/* Estilos del recuadro */}
                  <div className="flex flex-col md:flex-row-reverse gap-8">
                    <div className="md:w-1/2">
                      <h2 className="text-3xl font-bold text-gray-800 mb-6">Nuestra Visión</h2>
                      <p className="text-lg text-gray-600 mb-8">
                        Ser líderes reconocidos en la industria de la seguridad y la automatización, marcando la pauta con soluciones innovadoras y un servicio excepcional. Visualizamos un futuro donde la tecnología trabaja sin problemas para crear entornos más seguros, cómodos y eficientes para todos nuestros clientes. Buscamos expandir nuestro alcance y nuestro impacto, fomentando relaciones a largo plazo basadas en la confianza y el valor mutuo.
                      </p>
                      {/* You can add an image here if you like */}
                    </div>
                    <div className="md:w-1/2">
                      <div className="bg-gray-200 rounded-xl overflow-hidden shadow-lg h-80">
                        <img
                          src="https://www.prosegur.com.ar/dam/jcr:c85671f1-f468-4305-8019-ea12f38702ca/camaras%20cctv.jpg"
                          alt="Nuestra Visión"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </section>

                {/* Valores Section */}
                <section id="valores" className="mb-24 scroll-mt-24">
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
                    {/* Add more values as needed */}
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