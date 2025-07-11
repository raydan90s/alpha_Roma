import React from 'react';

interface Faq {
  question: string;
  answer: string;
}

interface FaqSectionProps {
  description: string; // Descripción de la sección
  faqs: Faq[]; // Preguntas frecuentes
  isVisible: boolean; // Para animación
}

const FaqSection: React.FC<FaqSectionProps> = ({ description, faqs, isVisible }) => {
  return (
    <div className="max-w-screen-xl mx-auto px-4">
      <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Preguntas Frecuentes</h2>
        <div className="flex justify-center mb-8">
          <div className="w-24 h-1 bg-blue-600"></div>
        </div>
        <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-700">
          {description}
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-3">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
