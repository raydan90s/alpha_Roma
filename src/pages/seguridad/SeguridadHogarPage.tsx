// ruta del archivo: src/pages/SeguridadHogarPage.tsx
import React from 'react';
import SplitSection from '../../components/Sections/SplitSection';
import ContactSection from '../../components/Sections/contactSection';
import { ContactSectionProps } from '../../interface/contactProps';
import { FaShieldAlt, FaMobileAlt, FaLightbulb, FaWifi } from 'react-icons/fa';

// ¡IMPORTANTE! Reemplaza '80px' con la altura real de tu barra de navegación
const NAVBAR_HEIGHT = '64px';

const SeguridadHogarPage = () => {
  const seguridadHogarContactSectionData: ContactSectionProps = {
    title: "¿Listo para un Hogar más Inteligente y Seguro?",
    description: "Habla con un experto en seguridad para personalizar tu sistema.",
    phone: "8445917193",
    emailButtonText: "Obtener una Cotización Gratis",
    onEmailButtonClick: () => console.log("Botón de contacto clickeado"), // Placeholder
  };

  const beneficiosSeguridad = [
    {
      title: "Protección Integral para tu Familia",
      description: "Sistemas diseñados para la seguridad de tus seres queridos y tu tranquilidad.",
      icon: <FaShieldAlt className="text-primary text-4xl mb-4" />,
    },
    {
      title: "Control Total en tus Manos",
      description: "Monitorea y gestiona la seguridad de tu hogar desde cualquier dispositivo móvil.",
      icon: <FaMobileAlt className="text-secondary text-4xl mb-4" />,
    },
    {
      title: "Un Hogar que Responde a tus Necesidades",
      description: "Integra la seguridad con la comodidad de un hogar inteligente y automatizado.",
      icon: <FaLightbulb className="text-acent text-4xl mb-4" />,
    },
    {
      title: "Tecnología en la que Puedes Confiar",
      description: "Conexión estable y dispositivos de alta calidad para una seguridad sin preocupaciones.",
      icon: <FaWifi className="text-hover text-4xl mb-4" />,
    },
  ];

  const solucionesSeguridadHogar = [
    {
      title: "Protección de Accesos Inteligente",
      description: "Asegura cada punto de entrada de tu hogar con nuestra avanzada tecnología de sensores. Detecta instantáneamente cualquier actividad inusual y recibe alertas en tiempo real para una protección completa.",
      features: ["Sensores de puertas y ventanas de alta sensibilidad", "Alertas instantáneas a tu smartphone", "Integración con sistemas de alarma", "Fácil instalación y diseño discreto"],
      image: "https://www.vivint.com/resources/vivint/web/img/common/product-door-window-sensor.jpg", // Ejemplo de Vivint
      buttonText: "Ver Sensores de Acceso",
      buttonColor: "primary",
      id: "seguridad-accesos-card",
      infoAdicional: "La primera línea de defensa para tu hogar.",
    },
    {
      title: "Vigilancia por Video de Alta Definición",
      description: "Mantén un ojo en tu hogar, tanto dentro como fuera, con nuestras cámaras de seguridad de alta definición. Con visión nocturna, detección de movimiento inteligente y acceso remoto, siempre estarás conectado con lo que más te importa.",
      features: ["Cámaras interiores y exteriores con calidad HD", "Grabación continua y almacenamiento seguro en la nube", "Detección de movimiento inteligente con alertas personalizables", "Comunicación bidireccional a través de la cámara"],
      image: "https://www.vivint.com/resources/vivint/web/img/common/product-outdoor-camera-pro.jpg", // Ejemplo de Vivint
      buttonText: "Explorar Cámaras Interiores y Exteriores",
      buttonColor: "secondary",
      id: "vigilancia-video-card",
      infoAdicional: "Tranquilidad visual, estés donde estés.",
    },
    {
      title: "Automatización para un Hogar Seguro y Cómodo",
      description: "Integra la seguridad con la comodidad de un hogar inteligente. Controla cerraduras, luces y otros dispositivos desde una sola aplicación, creando un entorno seguro, eficiente y adaptado a tus necesidades.",
      features: ["Cerraduras inteligentes con acceso remoto y sin llave", "Control de iluminación para disuadir intrusos y ahorrar energía", "Integración con asistentes de voz para un control fácil", "Creación de rutinas personalizadas para mayor seguridad y comodidad"],
      image: "https://www.vivint.com/resources/vivint/web/img/common/product-smart-lock.jpg", // Ejemplo de Vivint
      buttonText: "Descubrir la Automatización del Hogar",
      buttonColor: "acent",
      id: "automatizacion-hogar-card",
      infoAdicional: "Un hogar que responde a tus necesidades de seguridad y confort.",
    },
  ];

  return (
    <div className="bg-gray-100">
      <div className="py-12 bg-secondary text-white text-center">
        <div className="max-w-screen-xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6 tracking-tight">Protege tu Hogar con Soluciones Inteligentes</h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed opacity-80">
            Descubre cómo nuestros sistemas de seguridad para el hogar te brindan tranquilidad y protección total.
          </p>
        </div>
      </div>

      <SplitSection
        id="seguridad-accesos"
        label="Protección de Accesos Inteligente"
        description="Asegura cada punto de entrada de tu hogar con sensores avanzados que detectan cualquier actividad inusual. Recibe alertas instantáneas y mantén tu hogar protegido en todo momento."
        image="https://www.vivint.com/resources/vivint/web/img/common/product-door-window-sensor.jpg" // Reemplaza con tu imagen
        features={[
          "Sensores de puertas y ventanas de alta sensibilidad.",
          "Alertas en tiempo real a tu smartphone.",
          "Integración con sistemas de alarma para una respuesta inmediata.",
          "Fácil instalación y diseño discreto.",
        ]}
        isImageLeft={true}
        className="py-4" // Usando el padding vertical del componente
        style={{ scrollMarginTop: NAVBAR_HEIGHT }}
      />

      <SplitSection
        id="vigilancia-video"
        label="Vigilancia por Video de Alta Definición"
        description="Mantén un ojo en tu hogar, tanto dentro como fuera, con nuestras cámaras de seguridad de alta definición. Con visión nocturna, detección de movimiento y acceso remoto, nunca te perderás un momento importante."
        image="https://www.vivint.com/resources/vivint/web/img/common/product-outdoor-camera-pro.jpg" // Reemplaza con tu imagen
        features={[
          "Cámaras interiores y exteriores con calidad HD.",
          "Grabación continua y almacenamiento seguro en la nube.",
          "Detección de movimiento inteligente con alertas personalizables.",
          "Comunicación bidireccional a través de la cámara.",
        ]}
        isImageLeft={false}
        className="py-4" // Usando el padding vertical del componente
        style={{ scrollMarginTop: NAVBAR_HEIGHT }}
      />

      <SplitSection
        id="automatizacion-hogar"
        label="Automatización para un Hogar Seguro y Cómodo"
        description="Integra la seguridad con la comodidad de un hogar inteligente. Controla cerraduras, luces y otros dispositivos desde una sola aplicación, creando un entorno seguro y eficiente."
        image="https://www.vivint.com/resources/vivint/web/img/common/product-smart-lock.jpg" // Reemplaza con tu imagen
        features={[
          "Cerraduras inteligentes con acceso remoto y sin llave.",
          "Control de iluminación para disuadir intrusos y ahorrar energía.",
          "Integración con asistentes de voz para un control fácil.",
          "Creación de rutinas personalizadas para mayor seguridad y comodidad.",
        ]}
        isImageLeft={true}
        className="py-4" // Usando el padding vertical del componente
        style={{ scrollMarginTop: NAVBAR_HEIGHT }}
      />

      <SplitSection
        id="proteccion-ambiental"
        label="Protección Contra Emergencias Ambientales"
        description="Nuestros sistemas también te protegen contra peligros invisibles como incendios y fugas de monóxido de carbono, brindándote una seguridad integral para tu hogar y tu familia."
        image="https://www.vivint.com/resources/vivint/web/img/common/product-smoke-detector.jpg" // Reemplaza con tu imagen
        features={[
          "Detectores de humo y calor con alertas tempranas.",
          "Sensores de monóxido de carbono con notificación inmediata.",
          "Alertas a tu móvil y a los servicios de emergencia.",
          "Batería de respaldo para funcionamiento continuo.",
        ]}
        isImageLeft={false}
        className="py-4" // Usando el padding vertical del componente
        style={{ scrollMarginTop: NAVBAR_HEIGHT }}
      />

      {/* Sección de Soluciones de Seguridad para el Hogar (Tarjetas Largas) */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-screen-xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-secondary text-center mb-8">Explora Nuestras Soluciones de Seguridad en Detalle</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solucionesSeguridadHogar.map((solucion) => (
              <div
                key={solucion.id}
                id={solucion.id}
                className="bg-white rounded-lg shadow-xl overflow-hidden flex flex-col h-full"
                style={{ scrollMarginTop: NAVBAR_HEIGHT }}
              >
                <img src={solucion.image} alt={solucion.title} className="w-full h-48 object-cover" />
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="text-xl font-semibold text-secondary mb-2">{solucion.title}</h3>
                    <p className="text-gray-700 mb-4">{solucion.description}</p>
                    <ul className="list-disc pl-5 mb-4 text-gray-700">
                      {solucion.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <button className={`bg-${solucion.buttonColor} text-white py-3 px-6 rounded-full font-semibold transition duration-200 hover:bg-${solucion.buttonColor}-darker w-full mb-2`}>
                      {solucion.buttonText}
                    </button>
                    {solucion.infoAdicional && (
                      <p className="text-sm text-gray-500 text-center">{solucion.infoAdicional}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sección de Beneficios */}
      <div className="max-w-screen-xl mx-auto py-16 px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {beneficiosSeguridad.map((beneficio, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="mb-4">{beneficio.icon}</div>
            <h3 className="text-xl font-semibold text-secondary mb-2">{beneficio.title}</h3>
            <p className="text-gray-700">{beneficio.description}</p>
          </div>
        ))}
      </div>

      {/* Sección de Contacto */}
      <div className="py-16 bg-gray-100">
        <div className="max-w-screen-lg mx-auto px-4 rounded-lg shadow-md p-8">
          <h2 className="text-3xl font-bold text-secondary text-center mb-8">¿Listo para un Hogar más Inteligente y Seguro?</h2>
          <ContactSection {...seguridadHogarContactSectionData} />
        </div>
      </div>
    </div>
  );
};

export default SeguridadHogarPage;