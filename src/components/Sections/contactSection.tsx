import React from 'react';
import { ContactSectionProps } from '../../interface/contactProps'; // Ajusta la ruta si es necesario

const ContactSection: React.FC<ContactSectionProps> = ({
  title,
  description,
  phone,
  emailButtonText,
  onEmailButtonClick,
}) => {
  return (
    <section className="bg-gray-900 text-white rounded-xl p-8 md:p-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <p className="text-gray-300 max-w-2xl mx-auto">{description}</p>
      </div>
      <div className="flex flex-col md:flex-row justify-center gap-4 max-w-xl mx-auto">
        <a
          href={`tel:${phone}`}
          className="bg-primary hover:bg-primary text-black font-bold px-6 py-3 rounded-full shadow-md transition-all duration-300 text-center"
        >
          Llamar ahora
        </a>
        <button
          className="bg-white hover:bg-gray-100 text-gray-900 font-bold px-6 py-3 rounded-full shadow-md transition-all duration-300"
          onClick={onEmailButtonClick}
        >
          {emailButtonText}
        </button>
      </div>
    </section>
  );
};

export default ContactSection;