import React from 'react';
import { CheckCircle, Clock } from 'lucide-react';
import { generarEnlaceWhatsApp } from '../../messages/messages';

interface ServiceCardProps {
  title: string;
  price: string;
  priceNote: string;
  icon: JSX.Element;
  description: string;
  features: string[];
  duration: string;
  buttonColor: string;
  popular?: boolean;
  mensaje: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  price,
  priceNote,
  icon,
  description,
  features,
  duration,
  buttonColor,
  popular = false,
  mensaje,
}) => (
  <div className="relative bg-white rounded-2xl shadow-lg border-2 overflow-hidden hover:shadow-xl transition-all duration-300 w-full h-full flex flex-col">
    {/* Más Popular Badge */}
    {popular && (
      <div className="absolute top-0 right-0 bg-gray-800 text-white px-4 py-2 text-sm font-semibold rounded-bl-lg z-10">
        Más Popular
      </div>
    )}

    <div className="p-6 flex flex-col h-full">
      {/* Header - Altura fija */}
      <div className="text-center mb-6">
        <div className="flex justify-center mb-4">{icon}</div>
        <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2 min-h-[3rem] flex items-center justify-center">{title}</h3>
        <div className="text-center mb-4">
          <span className="text-3xl md:text-4xl font-bold text-blue-600">{price}</span>
          <span className="text-sm text-gray-600 ml-1">{priceNote}</span>
        </div>
        <div className="min-h-[3rem] flex items-center justify-center">
          <p className="text-gray-600 text-sm md:text-base">{description}</p>
        </div>
      </div>

      {/* Features - Área flexible que crece */}
      <div className="flex-grow mb-6">
        {features.length > 0 && (
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="text-green-500 w-4 h-4 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-600 text-sm">{feature}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Duration - Altura fija */}
      {duration && (
        <div className="flex items-center justify-center mb-6 p-3 bg-gray-50 rounded-lg">
          <Clock className="text-gray-500 w-4 h-4 mr-2" />
          <span className="text-gray-600 text-sm font-medium">{duration}</span>
        </div>
      )}

      {/* Button - Altura fija al final */}
      <div className="mt-auto">
        <a href={generarEnlaceWhatsApp(mensaje)} >
          <button
            className={`${buttonColor} text-white px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300 hover:transform hover:scale-105 w-full`}
          >
            Contratar Servicio
          </button>
        </a>
      </div>
    </div>
  </div>
);