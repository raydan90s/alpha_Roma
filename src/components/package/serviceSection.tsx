import React from 'react';
import { ServiceCard } from './serviceCard'; 

interface Service {
  id: number;
  title: string;
  price: string;
  priceNote: string;
  icon: JSX.Element;
  description: string;
  features: string[];
  duration: string;
  buttonColor: string;
  popular?: boolean;
}

interface ServicesSectionProps {
  services: Service[];
  isVisible: boolean;
  description: string;
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ services, isVisible, description }) => {
  return (
    <div className="max-w-screen-xl mx-auto px-4">
      <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Nuestros Servicios</h2>
        <div className="flex justify-center mb-8">
          <div className="w-24 h-1 bg-blue-600"></div>
        </div>
        <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-700">
            {description}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={service.id}
            className={`transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            style={{ transitionDelay: `${index * 200}ms` }}
          >
            <ServiceCard
              title={service.title}
              price={service.price}
              priceNote={service.priceNote}
              icon={service.icon}
              description={service.description}
              features={service.features}
              duration={service.duration}
              buttonColor={service.buttonColor}
              popular={service.popular}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
