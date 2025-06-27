import { useEffect } from "react";
import { scrollToHashOnLoad } from "../../assets/utils/scrollUtils.ts";
import ContactSection from "../../components/Sections/contactSection.tsx";
import { ContactSectionProps } from "../../interface/contactProps";
import VideoHero from "../../components/Hero/videoHero.tsx";
import { VideoHeroProps } from "../../interface/HerovideoProps.ts";
import MissionSection from "../../components/Sections/MissionSection.tsx";
import VisionSection from "../../components/Sections/VisionSection.tsx";
import ValuesSection from "../../components/Sections/ValuesSection.tsx";
import ExpertsSection from "../../components/Sections/ExpertsSection.tsx";
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
    videoUrl: imageUrls[2],
  };

  const missionData = {
    description: "Transformamos la seguridad con tecnología de vanguardia, protegiendo lo que más valoras con soluciones inteligentes y confiables."
  };

  const visionData = {
    description: "Liderar la revolución de la seguridad inteligente, creando un mundo donde la tecnología y la confianza se unen para proteger el futuro."
  };

  return (
    <>
      <SEO
        title="¿Quiénes somos? | NovaFenix"
        description="Conoce más acerca de nosostros y de nuestro servicio de monitoreo de cámaras"
        keywords="seguridad, novfenix, guayaquil, Guayaquil, monitoreo de cámaras, seguridad de cámaras, empresas"
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
        <div className="pt-20">
          <section>
            <div className="max-w-screen-xl mx-auto px-4 py-12 space-y-20">
              <ValuesSection />
              <ExpertsSection experts={experts} />
              <ContactSection {...contactSectionData} />
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default AboutUsPage;