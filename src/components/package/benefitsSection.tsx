import React from 'react';

interface Benefit {
  icon: JSX.Element;
  title: string;
  description: string;
  color?: string;  // Nueva propiedad para los colores de los iconos
}

interface BenefitsSectionProps {
  title: string;
  description: string;
  benefits: Benefit[];
  isVisible: boolean;
  cardBackgroundColor?: string;
  titleColor?: string;
  descriptionColor?: string;
  iconBackgroundColor?: string;
}

const BenefitsSection: React.FC<BenefitsSectionProps> = ({
  title,
  description,
  benefits,
  isVisible,
  cardBackgroundColor = 'bg-white',  // Fondo por defecto de las tarjetas
  titleColor = 'text-gray-800',       // Color por defecto del título
  descriptionColor = 'text-gray-700', // Color por defecto de la descripción
}) => {
  return (
    <div className="max-w-screen-xl mx-auto px-4">
      <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${titleColor}`}>{title}</h2>
        <div className="flex justify-center mb-8">
          <div className="w-24 h-1 bg-blue-600"></div>
        </div>
        <p className={`text-lg md:text-xl max-w-3xl mx-auto ${descriptionColor}`}>
          {description}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className={`text-center transform transition-all duration-700 h-full ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <div className={`${cardBackgroundColor} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col`}>
              {/* Icono - Altura fija */}
              <div className="flex justify-center mb-4">
                <div className={`bg-gradient-to-r ${benefit.color} p-4 rounded-2xl w-fit mx-auto`}>
                  {benefit.icon}
                </div>
              </div>

              {/* Título - Altura mínima fija */}
              <div className="mb-3 min-h-[3rem] flex items-center justify-center">
                <h3 className={`text-xl font-bold ${titleColor} text-center`}>
                  {benefit.title}
                </h3>
              </div>

              {/* Descripción - Área flexible que se expande */}
              <div className="flex-grow flex items-center justify-center">
                <p className={`${descriptionColor} text-center`}>
                  {benefit.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BenefitsSection;
