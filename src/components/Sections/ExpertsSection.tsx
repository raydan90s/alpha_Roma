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
        <h2 className="text-5xl font-bold text-secondary mb-4">{title}</h2>
        <p className="text-xl font-semibold text-gray-700 max-w-3xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {experts.map((expert, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="relative aspect-square bg-gradient-to-br from-blue-50 to-indigo-100 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent"></div>
              <img
                src={expert.image}
                alt={expert.name}
                className="w-full h-80 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6 text-center bg-white">
              <h3 className="text-xl font-bold text-secondary mb-2">{expert.name}</h3>
              <p className="text-gray-600 font-medium">{expert.position}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExpertsSection;