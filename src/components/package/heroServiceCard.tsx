import { ArrowLeft } from "lucide-react";
import { JSX } from 'react';

interface HeroServiceCardProps {
  icon: JSX.Element;
  title: string;
  description: string;
  button1Text: string;
  button2Text: string;
  button1Link: string;
  button2Link: string;
}

export const HeroServiceCard: React.FC<HeroServiceCardProps> = ({
  icon,
  title,
  description,
  button1Text,
  button2Text,
  button1Link,
  button2Link
}) => {
  return (
    <div className="bg-primary py-20 text-white">
      <div className="max-w-screen-xl mx-auto px-4 text-center mt-14">
        <div className={`transform transition-all duration-1000`}>
          {/* Volver a Servicios Button - Positioned at top left */}
          <div className="relative">
            <a href="/paquetes" className="absolute left-0 top-4 px-2">
              <button className="flex items-center text-white hover:text-hover transition-colors duration-300">
                <ArrowLeft className="mr-2" size={20} />
                Volver a Servicios
              </button>
            </a>
          </div>

          {/* Hero Card Content */}
          <div className="flex justify-center mb-6">
            {icon}
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">{title}</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href={button1Link} className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300">
              {button1Text}
            </a>
            <a href={button2Link} className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300">
              {button2Text}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
