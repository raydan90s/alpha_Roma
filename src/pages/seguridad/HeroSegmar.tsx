import React, { useRef } from "react";
import { generarEnlaceWhatsApp, mensajesWhatsApp } from "../../messages/messages";

// Definimos la interfaz HeroProps directamente aquí en lugar de importarla
interface HeroProps {
  span?: string;
  image?: string;
  span_btn1?: string;
  span_btn2?: string;
  title?: string;
  description?: string;
  cta_text?: string;
}

interface HeroSegmarProps extends HeroProps {
  primaryColor?: string;
  secondaryColor?: string;
  accentColor?: string;
  buttonTextColor?: string;
  secondaryButtonTextColor?: string;
  showCallToAction?: boolean;
  scrollToRef?: (ref: React.RefObject<HTMLElement>) => void;
  targetRef?: React.RefObject<HTMLElement>;
}

const HeroSegmar: React.FC<HeroSegmarProps> = ({
  span,
  image = "https://res.cloudinary.com/dfbpaq83u/image/upload/v1744664185/jeezm98lw3iipm1k1zjp.png",
  span_btn1 = "Ver Sistemas",
  span_btn2 = "Demo en Vivo",
  title = "Tu Hogar, Tu Santuario Seguro",
  description = "Protege cada rincón de tu hogar con nuestra vigilancia inteligente. Monitoreo en tiempo real y la tranquilidad que mereces.",
  cta_text = "Explora la Protección",
  primaryColor = "#60c079", // Color de acento verde por defecto
  accentColor = "#60c079", // Verde vibrante (color primary de tu config)
  buttonTextColor = "#000000", // Texto del botón principal negro
  secondaryButtonTextColor = "#ffffff", // Texto del botón secundario blanco
  showCallToAction = true,
  scrollToRef,
  targetRef,
}) => {
  return (
    <div
      className="relative h-screen bg-cover bg-center flex items-center"
      style={{
        backgroundImage: `url('${image}')`,
        backgroundColor: primaryColor, // Color de fondo por defecto
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div> {/* Overlay sutil */}
      <div className="relative z-10 px-4 pl-20 pt-20"> {/* Contenedor del texto con padding izquierda */}
        <div className="text-left max-w-screen-xl mx-auto"> {/* Contenedor interno del texto */}
          <p className="text-lg uppercase mb-6 text-white">
            CÁMARAS DE SEGURIDAD PARA EL HOGAR INTELIGENTE
          </p>

          <h1 className="text-4xl md:text-5xl font-bold mb-10 text-white">
            {title.split("<br />").map((part, index) => (
              <React.Fragment key={index}>
                {part.includes("<span") ? (
                  <span style={{ color: accentColor }}>
                    {part.replace(/<[^>]*>/g, '')}
                  </span>
                ) : (
                  part
                )}
                {index < title.split("<br />").length - 1 && <br />}
              </React.Fragment>
            ))}
            {!title.includes("<br />") && span && (
              <>
                <br />
                <span style={{ color: accentColor }}>{span}</span>
              </>
            )}
          </h1>

          <p className="text-lg text-white mb-8 max-w-md">
            {description}
          </p>

          {showCallToAction && (
            <p className="text-sm uppercase mb-4 text-white">
              {cta_text}
            </p>
          )}

          <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-4">
            <button
              className="font-bold px-6 py-3 rounded-md shadow-md hover:shadow-lg transition-all duration-300 text-lg"
              style={{ backgroundColor: accentColor, color: buttonTextColor }}
              onClick={() => scrollToRef?.(targetRef)} // Llamada condicional a scrollToRef
            >
              {span_btn1}
            </button>

            <a
              href={generarEnlaceWhatsApp(mensajesWhatsApp.servicios)}
              className="bg-transparent hover:underline flex items-center font-bold"
              style={{ color: secondaryButtonTextColor }}
            >
              {span_btn2}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSegmar;