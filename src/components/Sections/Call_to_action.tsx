import { Phone } from "lucide-react";
import CTAProps from "../../interface/CTAProps";
import { TELEFONO_CONTACTO } from '../../config/config';

// comentario 
function Call_to_action({ title, subtitle, spanBtn }: CTAProps) {
  return (
    <div className="bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-8 md:mb-0">
            <h2 className="text-3xl font-bold text-white mb-4">{title}</h2>
            <p className="text-2xl text-blue-100">{subtitle}</p>
          </div>
          <div className="flex space-x-4">
            <a // Cambiamos de <button> a <a>
              href={`tel:${TELEFONO_CONTACTO}`} 
              className="bg-white text-secondary px-8 py-3 rounded-lg hover:bg-hover flex items-center text-lg font-bold transition duration-300"
            >
              <Phone className="mr-2 h-5 w-5" />
              {spanBtn}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Call_to_action;