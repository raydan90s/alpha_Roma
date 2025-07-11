import React from 'react';
import { Phone, FileText } from 'lucide-react';

interface SectionProps {
  title: string;
  description: string;
  button1Text: string;
  button2Text: string;
  button1Link: string;
  button2Link: string;
}

const CallToActionSectionV2: React.FC<SectionProps> = ({
  title,
  description,
  button1Text,
  button2Text,
  button1Link,
  button2Link,
}) => {
  return (
    <section className={`py-16 text-white bg-primary`}>
      <div className="max-w-screen-xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">{title}</h2>
        <p className="text-xl mb-8">{description}</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href={button1Link}
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300"
          >
            <Phone className="inline mr-2" size={20} />
            {button1Text}
          </a>
          <a
            href={button2Link}
            className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
          >
            <FileText className="inline mr-2" size={20} />
            {button2Text}
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSectionV2;
