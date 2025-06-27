import { Boxes, HeartHandshake, Lightbulb, LucideIcon } from "lucide-react";

interface ValueItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface ValuesSectionProps {
  title?: string;
  subtitle?: string;
  values?: ValueItem[];
}

const ValuesSection = ({ 
  title = "Nuestros Valores",
  subtitle = "Los principios fundamentales que definen nuestra cultura y guían nuestras acciones.",
  values = [
    {
      icon: Lightbulb,
      title: "Innovación",
      description: "Impulsamos la mejora continua a través de la integración de nuevas tecnologías y la búsqueda de soluciones creativas."
    },
    {
      icon: Boxes,
      title: "Integridad",
      description: "Actuamos con honestidad, transparencia y ética en todas nuestras interacciones y decisiones."
    },
    {
      icon: HeartHandshake,
      title: "Compromiso con el Cliente",
      description: "Priorizamos las necesidades de nuestros clientes, ofreciendo un servicio atento, personalizado y de alta calidad."
    }
  ]
}: ValuesSectionProps) => {
  return (
    <section id="valores" className="scroll-mt-24 mb-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-secondary">{title}</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          {subtitle}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {values.map((value, index) => {
          const IconComponent = value.icon;
          return (
            <div key={index} className="bg-white rounded-xl shadow-md p-6">
              <div className="bg-secondary rounded-full p-3 inline-block mb-4">
                <IconComponent color="white" />
              </div>
              <h3 className="text-xl font-semibold text-secondary mb-2">{value.title}</h3>
              <p className="text-gray-600 text-lg">{value.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ValuesSection;