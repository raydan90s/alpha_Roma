import React, { useEffect } from "react";
import { scrollToHashOnLoad } from "../../assets/utils/scrollUtils.ts";
import ContactSection from "../../components/Sections/contactSection.tsx"; // Importa el componente
import { ContactSectionProps } from "../../interface/contactProps"; // Importa la interfaz
import VideoHero from "../../components/Sections/VideoHero.tsx"; // Import the VideoHero component
import { VideoHeroProps } from "../../interface/HerovideoProps.ts"; // Import its interface

const AboutUsPage = () => {
  useEffect(() => {
    scrollToHashOnLoad();
  }, []);

  const handleEmailButtonClick = () => {
    console.log("Botón de contacto por correo clickeado");
    // Aquí puedes implementar la lógica para contactar por correo
  };

  const contactSectionData: ContactSectionProps = {
    title: "¿Te gustaría saber más?",
    description: "Contáctanos para conocer más sobre nuestra misión, visión y cómo nuestros valores se traducen en un servicio excepcional.",
    phone: "8445917193",
    emailButtonText: "Contactar por correo",
    onEmailButtonClick: handleEmailButtonClick,
  };

  const videoHeroData: VideoHeroProps = {
    title: "Conócenos Mejor",
    subtitle: "Descubre nuestra historia, misión y valores.",
    videoUrl: "https://res.cloudinary.com/dfbpaq83u/video/upload/v1744142108/bppp8c7yrd6vak2ozqdp.mp4", // Reemplaza con la URL de tu video
  };

  return (
    <div className="bg-gray-100">
      {/* Video Hero Section */}
      <VideoHero {...videoHeroData} />

      <div className="pt-20"> {/* Ajusta el padding superior según sea necesario */}
        {/* Content Section */}
        <div className="max-w-screen-xl mx-auto px-4 py-12">
          {/* Misión Section */}
          <section id="mision" className="mb-24 scroll-mt-24">
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
                    src="/api/placeholder/600/400"
                    alt="Nuestra Misión"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Visión Section */}
          <section id="vision" className="mb-24 scroll-mt-24">
            <div className="flex flex-col md:flex-row-reverse gap-8">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Nuestra Visión</h2>
                <p className="text-lg text-gray-600 mb-8">
                  Aspiramos a ser líderes reconocidos en la industria de la seguridad y la automatización, marcando la pauta con soluciones innovadoras y un servicio excepcional. Visualizamos un futuro donde la tecnología trabaja sin problemas para crear entornos más seguros, cómodos y eficientes para todos nuestros clientes. Buscamos expandir nuestro alcance y nuestro impacto, fomentando relaciones a largo plazo basadas en la confianza y el valor mutuo.
                </p>
                {/* You can add an image here if you like */}
              </div>
              <div className="md:w-1/2">
                <div className="bg-gray-200 rounded-xl overflow-hidden shadow-lg h-80">
                  <img
                    src="/api/placeholder/600/400"
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
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1m-9-9h1m4-7l-9 9a2 2 0 002 2h10a2 2 0 002-2l-9-9z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Innovación</h3>
                <p className="text-gray-600 text-sm">Impulsamos la mejora continua a través de la adopción de nuevas tecnologías y la búsqueda de soluciones creativas.</p>
              </div>
              {/* Valor 2 */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <div className="bg-secondary rounded-full p-3 inline-block mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-3-3H6a3 3 0 00-3 3v2h5l2 3 2-3zM9 11V3m0 8h10" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Integridad</h3>
                <p className="text-gray-600 text-sm">Actuamos con honestidad, transparencia y ética en todas nuestras interacciones y decisiones.</p>
              </div>
              {/* Valor 3 */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <div className="bg-secondary rounded-full p-3 inline-block mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Compromiso con el Cliente</h3>
                <p className="text-gray-600 text-sm">Priorizamos las necesidades de nuestros clientes, ofreciendo un servicio atento, personalizado y de alta calidad.</p>
              </div>
              {/* Add more values as needed */}
            </div>
          </section>

          {/* Contact Section */}
          <ContactSection {...contactSectionData} />
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;