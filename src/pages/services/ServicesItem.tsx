import { generarEnlaceWhatsApp } from "../../messages/messages";

interface ServiceItemProps {
  id: string;
  title: string;
  description: string;
  features: string[];
  image: string;
  isImageLeft?: boolean;
  buttonText: string;
  whatsappMessage: string;
}

const ServiceItem: React.FC<ServiceItemProps> = ({
  id,
  title,
  description,
  features,
  image,
  isImageLeft = false,
  buttonText,
  whatsappMessage,
}) => {
  const imageOrder = isImageLeft ? "md:order-1 order-1" : "md:order-2 order-1";
  const textOrder = isImageLeft ? "md:order-2 order-2" : "md:order-1 order-2";

  return (
    <section id={id} className="scroll-mt-24 bg-white rounded-xl shadow-lg p-12 md:p-16">
      <div className="flex flex-col md:flex-row gap-8">
        <div className={`md:w-1/2 ${textOrder}`}>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">{title}</h2>
          <p className="text-lg text-gray-600 mb-8">{description}</p>
          <ul className="space-y-4">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <div className="bg-secondary rounded-full p-1 mr-3 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
          <a
            href={generarEnlaceWhatsApp(whatsappMessage)}
            className="mt-8 bg-primary text-black font-bold px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 inline-block"
            target="_blank" // Opens in a new tab
            rel="noopener noreferrer" // Recommended for security
          >
            {buttonText}
          </a>
        </div>
        <div className={`md:w-1/2 ${imageOrder}`}>
          <div className="bg-gray-200 rounded-xl overflow-hidden shadow-lg h-80">
            <img src={image} alt={title} className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceItem;