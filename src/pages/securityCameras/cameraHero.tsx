import React from "react";
import HeroProps from "../../interface/HeroProps"; // Asegúrate de que la ruta sea correcta

const CameraHero: React.FC<HeroProps> = ({ title, span, link_image, span_btn1, span_btn2 }) => {
  return (
    <div
      className="relative bg-primary text-black h-screen bg-cover bg-center flex items-center"
      style={{ backgroundImage: `url('${link_image}')` }}
    >
    <div className="max-w-screen-xl mx-auto px-4 relative z-10 flex flex-col items-start text-left">
  <p className="text-lg text-white uppercase mb-2">
    CÁMARAS DE SEGURIDAD PARA EL HOGAR INTELIGENTE
  </p>
  
  <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
    Evite delitos <br />
    antes de que <span className="text-secondary">{span}</span> ocurran
  </h1>
  
  <p className="text-lg text-white mb-8 max-w-md">
    La mayoría de las cámaras de seguridad graban los crímenes. Las nuestras, realmente lo impiden. Con las funciones de detección y disuasión inteligentes, repelen a los ladrones de paquetes y a los merodeadores.
  </p>
  
  <p className="text-sm text-white uppercase mb-4">
    LLAME AHORA PARA PERSONALIZAR SU SISTEMA
  </p>
  
  <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-4">
    <button className="bg-secondary text-black font-bold px-6 py-3 rounded-md shadow-md hover:shadow-lg transition-all duration-300 text-lg">
      {span_btn1}
    </button>
    
    <a href="#" className="text-white hover:underline flex items-center">
      {span_btn2}
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L13 7.414V15a1 1 0 11-2 0V7.414L8.707 10.293a1 1 0 01-1.414-1.414l4-4z" clipRule="evenodd" />
      </svg>
    </a>
  </div>
</div>

    </div>
  );
};

export default CameraHero;