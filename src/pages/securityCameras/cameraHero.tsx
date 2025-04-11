import React from "react";
import HeroProps from "../../interface/HeroProps"; // Asegúrate de que la ruta sea correcta

const CameraHero: React.FC<HeroProps> = ({span, link_image, span_btn1, span_btn2 }) => {
  return (
    <div
      className="relative bg-primary text-black h-screen min-h-[500px] bg-cover bg-center flex items-center"
      style={{ backgroundImage: `url('${link_image}')` }}
    >
      <div className="relative z-10 px-6 md:px-16 lg:pl-20 pt-24 md:pt-32 lg:pt-20 w-full">
        <div className="text-left max-w-screen-xl mx-auto">
          <p className="text-sm md:text-lg text-white uppercase mb-4 md:mb-6">
            CÁMARAS DE SEGURIDAD PARA EL HOGAR INTELIGENTE
          </p>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 lg:mb-10 text-white leading-tight">
            Evite delitos <br className="hidden md:block" />
            antes de que <span className="text-acent">{span}</span> ocurran
          </h1>

          <p className="text-base md:text-lg text-white mb-6 md:mb-8 lg:mb-8 max-w-md leading-relaxed">
            La mayoría de las cámaras de seguridad graban los crímenes. Las nuestras, realmente lo impiden. Con las funciones de detección y disuasión inteligentes, repelen a los ladrones de paquetes y a los merodeadores.
          </p>

          <p className="text-xs md:text-sm text-white uppercase mb-3 md:mb-4">
            LLAME AHORA PARA PERSONALIZAR SU SISTEMA
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-3">
            <button className="bg-acent text-black font-bold px-5 py-2 md:px-6 md:py-3 rounded-md shadow-md hover:shadow-lg transition-all duration-300 text-sm md:text-lg">
              {span_btn1}
            </button>

            <a href="#" className="text-white hover:underline flex items-center font-bold text-sm md:text-base">
              {span_btn2}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CameraHero;