import ContactSection from "../../components/Sections/contactSection";
import { ContactSectionProps } from "../../interface/contactProps";
import VideoHero from "../../components/Hero/videoHero";
import { VideoHeroProps } from "../../interface/HerovideoProps";
import MissionSection from "../../components/Sections/MissionSection";
import VisionSection from "../../components/Sections/VisionSection";
import ValuesSection from "../../components/Sections/ValuesSection";
import ExpertsSection from "../../components/Sections/ExpertsSection";
import SEO from "../../components/SEO/SEO";
import { experts } from "../../components/data/ExpertData";

const AboutUsPage = () => {
  // Scroll deshabilitado al cargar
  // useEffect(() => {
  //   scrollToHashOnLoad();
  // }, []);

  const imageUrls = [
    "https://res.cloudinary.com/dfbpaq83u/image/upload/v1746118668/NovaFenix/yldksgsatzgtrb0tjeqy.jpg",
    "https://res.cloudinary.com/dfbpaq83u/image/upload/v1746118730/NovaFenix/el4v1njcsaqzuw0dgjne.jpg",
    "https://res.cloudinary.com/dfbpaq83u/video/upload/v1752006622/8061570-uhd_3840_2160_25fps_avbzoo.mp4"
  ];

  const contactSectionData: ContactSectionProps = {
    title: "¿Te gustaría saber más?",
    description:
      "Contáctanos para conocer más sobre nuestra misión, visión y cómo nuestros valores se traducen en un servicio excepcional.",
    context: "general",
    emailButtonText: "Contactar",
  };

  const videoHeroData: VideoHeroProps = {
    title: "Conócenos Mejor",
    subtitle: "Descubre nuestra historia, misión y valores.",
    videoUrl: imageUrls[2],
  };

  const missionData = {
    description:
      "En NexoLegal, defendemos los intereses de nuestros clientes con soluciones legales personalizadas y estratégicas, basadas en más de 40 años de experiencia. Nuestra misión es lograr resultados exitosos con pasión, compromiso y profesionalismo.",
  };

  const visionData = {
    description:
      "Ser una firma de abogados líder en soluciones legales personalizadas, reconocida por su excelencia y compromiso con el éxito de nuestros clientes.",
  };

  return (
    <>
      <SEO
        title="¿Quiénes somos? | NovaFenix"
        description="Conoce más acerca de nosotros y de nuestro servicio de monitoreo de cámaras"
        keywords="seguridad, novafenix, guayaquil, Guayaquil, monitoreo de cámaras, seguridad de cámaras, empresas"
        canonical="https://www.novafenix-ec.com/about"
      />

      <div className="bg-accent">
        <section>
          <VideoHero {...videoHeroData} />
        </section>
      </div>

      <MissionSection {...missionData} />
      <VisionSection {...visionData} />

      <div className="bg-accent">
        <section className="pt-20">
          <div className="max-w-screen-xl mx-auto px-4 py-12 space-y-20">
            <ValuesSection />
            <ExpertsSection experts={experts} />
            <ContactSection {...contactSectionData} />
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutUsPage;
