import React from "react";
import HeroProps from "../../interface/HeroProps"; // Asegúrate de que la ruta sea correcta

const CameraHero: React.FC<HeroProps> = ({span, link_image, span_btn1, span_btn2 }) => {
  return (
    <div
      className="relative bg-primary text-black h-screen bg-cover bg-center flex items-center"
      style={{ backgroundImage: `url('${link_image}')` }}
    >
      <div className="relative z-10 px-4 pl-20 pt-20"> {/* Quitamos max-w-screen-xl y mx-auto del contenedor principal del texto */}
        <div className="text-left max-w-screen-xl mx-auto"> {/* Añadimos max-w-screen-xl y mx-auto al contenedor interno del texto */}
          <p className="text-lg text-white uppercase mb-6">
            CÁMARAS DE SEGURIDAD PARA EL HOGAR INTELIGENTE
          </p>

          <h1 className="text-4xl md:text-5xl font-bold mb-10 text-white">
            Evite delitos <br />
            antes de que <span className="text-primary">{span}</span> ocurran
          </h1>

          <p className="text-lg text-white mb-8 max-w-md">
            La mayoría de las cámaras de seguridad graban los crímenes. Las nuestras, realmente lo impiden. Con las funciones de detección y disuasión inteligentes, repelen a los ladrones de paquetes y a los merodeadores.
          </p>

          <p className="text-sm text-white uppercase mb-4">
            LLAME AHORA PARA PERSONALIZAR SU SISTEMA
          </p>

          <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-4">
            <button className="bg-primary text-black font-bold px-6 py-3 rounded-md shadow-md hover:shadow-lg transition-all duration-300 text-lg">
              {span_btn1}
            </button>

            <a href="#" className="text-white hover:underline flex items-center font-bold">
              {span_btn2}
              
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CameraHero;