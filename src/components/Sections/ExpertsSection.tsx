interface Expert {
  name: string;
  position: string;
  image: string;
}

interface ExpertsSectionProps {
  title?: string;
  subtitle?: string;
  experts: Expert[];
}

const ExpertsSection = ({ 
  title = "Nuestros Expertos",
  subtitle = "Conoce al equipo de profesionales que hacen posible nuestro compromiso con la excelencia.",
  experts
}: ExpertsSectionProps) => {
  return (
    <section id="expertos" className="scroll-mt-24 mb-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-secondary">{title}</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          {subtitle}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {experts.map((expert, index) => (
          <div key={index} className="bg-accent rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="aspect-square bg-gray-200 overflow-hidden">
              <img
                src={expert.image}
                alt={expert.name}
                className="w-100 h-150 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold text-secondary mb-2">{expert.name}</h3>
              <p className="text-gray-600">{expert.position}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExpertsSection;