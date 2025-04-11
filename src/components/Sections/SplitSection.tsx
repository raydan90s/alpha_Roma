// ruta del archivo: src/components/Sections/SplitSection.tsx
import React from 'react';

interface SplitSectionProps {
  id?: string;
  label: string;
  description: string;
  image: string;
  features: string[];
  isImageLeft?: boolean;
}

const SplitSection: React.FC<SplitSectionProps> = ({
  id,
  label,
  description,
  image,
  features,
  isImageLeft = false,
}) => {
  const imageOrder = isImageLeft ? 'md:order-1 order-1' : 'md:order-2 order-1';
  const textOrder = isImageLeft ? 'md:order-2 order-2' : 'md:order-1 order-2';
  const gridTemplateColumns = 'grid-cols-1 md:grid-cols-2'; // Usamos grid-cols-2 fijo en pantallas medianas y grandes

  return (
    <section id={id} className="py-4"> {/* Mantenemos el padding vertical */}
      <div className="mx-auto bg-white max-w-[95rem] rounded-[20px]">
        <div className={`grid ${gridTemplateColumns} gap-4 md:gap-8 items-stretch`}>
          {/* Image Section */}
          <div className={`relative ${imageOrder} h-full w-full px-4 md:px-0`}>
            <img
              src={image}
              alt={label}
              className="w-full h-full object-cover"
            />
          </div>
          {/* Text Content Section */}
          <div className={`flex flex-col justify-center ${textOrder} text-left px-4 py-4 md:px-20`}>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 tracking-tight">
              {label}
            </h2>
            <p className="text-base md:text-lg text-gray-700 mb-6 md:mb-8 leading-relaxed" style={{ textAlign: 'justify' }}>
              {description}
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6 md:mb-8">
              {features.map((feature, index) => (
                <li key={index} className="mb-2">
                  {feature}
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-start">
              <a
                href="tel:8445917193"
                className="bg-primary hover:bg-acent text-white font-semibold px-4 py-3 rounded-md shadow-md transition duration-200 ease-in-out text-sm whitespace-nowrap max-w-[180px] mr-4 mb-2 sm:mb-0"
              >
                Llamar Ahora
              </a>
              <p className="text-sm text-gray-600 italic">¿Tienes alguna pregunta?</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SplitSection;