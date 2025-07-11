import { CheckCircle, Clock } from 'lucide-react';

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
}) => (
  <div
    className={`relative bg-white rounded-2xl shadow-lg border-2 overflow-hidden hover:shadow-xl transition-all duration-300 ${
      popular ? 'border-accent transform scale-105' : 'border-gray-200'
    }`}
  >
    {/* Más Popular Badge */}
    {popular && (
      <div className="absolute top-0 right-0 bg-secondary text-white px-4 py-2 text-sm font-semibold rounded-bl-lg">
        Más Popular
      </div>
    )}

    <div className="p-8">
      {/* Header */}
      <div className="text-center mb-6">
        <div className="flex justify-center mb-4">{icon}</div>
        <h3 className="text-2xl font-bold text-gray-800 mb-2">{title}</h3>
        <div className="text-center mb-4">
          <span className="text-4xl font-bold text-blue-600">{price}</span>
          <span className="text-sm text-gray-600 ml-1">{priceNote}</span>
        </div>
        <p className="text-gray-600 mb-6">{description}</p>
      </div>

      {/* Features */}
      {features.length > 0 && (
        <ul className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle className="text-green-500 text-sm mt-1 mr-3 flex-shrink-0" />
              <span className="text-gray-600 text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      )}

      {/* Duration */}
      {duration && (
        <div className="flex items-center justify-center mb-6 p-3 bg-gray-50 rounded-lg">
          <Clock className="text-gray-500 text-sm mr-2" />
          <span className="text-gray-600 text-sm font-medium">{duration}</span>
        </div>
      )}
    </div>

    {/* Button */}
    <button
      className={`${buttonColor} text-white px-8 py-3 rounded-lg font-semibold text-sm transition-all duration-300 hover:transform hover:scale-105 w-full`}
    >
      Contratar Servicio
    </button>
  </div>
);
