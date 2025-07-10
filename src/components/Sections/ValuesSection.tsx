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
      title: "Compromiso con la Excelencia",
      description: "En NexoLegal, trabajamos incansablemente para ofrecer soluciones legales de la más alta calidad. Nuestro equipo está formado por expertos dedicados que siempre buscan los mejores resultados para nuestros clientes."
    },
    {
      icon: Boxes,
      title: "Integridad y Transparencia",
      description: "La honestidad es la base de todas nuestras relaciones. Mantenemos una comunicación clara y abierta con nuestros clientes, asegurándonos de que siempre comprendan los procesos legales y decisiones tomadas."
    },
    {
      icon: HeartHandshake,
      title: "Atención Personalizada",
      description: "Cada cliente es único. Nos aseguramos de ofrecer un enfoque a medida, adaptando nuestras estrategias legales a las necesidades específicas de cada caso, con el objetivo de lograr los mejores resultados."
    }
  ]
}: ValuesSectionProps) => {
  return (
    <section id="valores" className="scroll-mt-24 mb-16">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold text-secondary">{title}</h2>
        <p className="text-lg font-bold text-gray-600 max-w-2xl mx-auto">
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
              <p className="text-gray-600 text-lg text-justify">{value.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ValuesSection;
