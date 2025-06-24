// Home.tsx
import Call_to_action from '../components/Call_to_action';
import VideoGallery from '../components/video/VideoGalery';
import { videoData } from '../components/data/videoData';
import Cards from '../components/Cards.tsx';
import PreloaderWrapper from "../components/loader/PreloaderWrapper.tsx";
import SEO from '../components/SEO/SEO.tsx';
import { generarEnlaceWhatsApp } from '../messages/messages.ts';
import { TELEFONO_CONTACTO } from '../config/config';
import InicioSection from '../components/Hero/InicioSection.tsx';
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

// Datos de testimonios
interface Testimonial {
  id: number;
  name: string;
  position: string;
  company?: string;
  image: string;
  content: string;
  rating: number;
}

const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: "David Miller",
    position: "CEO & Founder",
    company: "TechCorp Solutions",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    content: "El servicio de NovaFenix ha superado todas nuestras expectativas. La instalación fue rápida y profesional, y el sistema de monitoreo nos da una tranquilidad total. Recomendamos ampliamente sus servicios.",
    rating: 5
  },
  {
    id: 2,
    name: "María González",
    position: "Gerente General",
    company: "Restaurante El Buen Sabor",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    content: "Desde que instalamos las cámaras de seguridad con NovaFenix, hemos tenido cero incidentes. El personal es muy profesional y el soporte técnico es excelente. Una inversión que vale la pena.",
    rating: 5
  },
  {
    id: 3,
    name: "Carlos Mendoza",
    position: "Propietario",
    company: "Farmacia San Miguel",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    content: "La calidad de las cámaras es excepcional y la aplicación móvil me permite monitorear mi negocio desde cualquier lugar. El equipo de NovaFenix es muy confiable y siempre está disponible cuando los necesito.",
    rating: 5
  },
  {
    id: 4,
    name: "Ana Rodríguez",
    position: "Administradora",
    company: "Edificio Las Palmas",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    content: "Implementamos el sistema de seguridad en todo el edificio y los resultados han sido impresionantes. La tecnología es de punta y el servicio post-venta es extraordinario. Los residentes se sienten mucho más seguros.",
    rating: 5
  }
];

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const imageUrls = [
    "https://res.cloudinary.com/demo/image/upload/v1744230903/imagen1.jpg",
    "https://res.cloudinary.com/demo/image/upload/v1744230903/imagen2.jpg",
    // pon aquí las imágenes importantes que se usan en esta página
  ];

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // Auto-play functionality para testimonios
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? testimonialsData.length - 1 : currentIndex - 1);
    setIsAutoPlaying(false);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === testimonialsData.length - 1 ? 0 : currentIndex + 1);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating ? 'text-orange-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <>
      <SEO
        title='Servicio de Monitoreo de cámaras | NovaFenix'
        description='Instalación y monitoreo profesional de cámaras de seguridad en Guayaquil. Protección total para hogares y negocios.'
        keywords='seguridad, cámaras de seguridad, vigilancia, guayaquil, monitoreo, empresas de seguridad guayaquil, cámaras de seguridad Hikvision'
        canonical='https://www.novafenix-ec.com/'
      />
      <PreloaderWrapper imageUrls={imageUrls}>
        {/* Página principal Home */}
        <div className="min-h-screen bg-gray-100">
          {/* Video Hero */}
          <section className='Hero'>
            <div className="pt-12">
              <InicioSection scrollToSection={scrollToSection} />
            </div>
          </section>

          {/* Contenedor de información */}
          <section className='Contenedor Cartas'>
            <div className="bg-gray-100 py-12">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Protección completa</h2>
                  <p className="text-2xl text-gray-600">Todo lo que tu necesitas para tu completa seguridad y tranquilidad</p>
                  <Cards />
                </div>
              </div>
            </div>
          </section>

          {/* Contenedor de información */}
          <section className='VideoGallery'>
            <div className="py-6 bg-secondary">
              <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-white my-4 text-center">Demo de las cámaras de seguridad</h2>
                <VideoGallery videos={videoData} />
              </div>
            </div>
          </section>

          {/* =============== SECCIÓN DE TESTIMONIOS =============== */}
          <section className='Testimonials'>
            <div className="py-16 bg-secondary relative overflow-hidden">
              {/* Background decorative elements */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 right-10 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 left-10 w-48 h-48 bg-orange-500 rounded-full blur-3xl"></div>
              </div>

              {/* Justice scales silhouette */}
              <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-5">
                <div className="h-full bg-gradient-to-l from-white/20 to-transparent flex items-center justify-center">
                  <div className="text-white/30 text-9xl">⚖️</div>
                </div>
              </div>

              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  {/* Left side - Title and description */}
                  <div className="space-y-8">
                    <div className="border-l-4 border-primary pl-6">
                      <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                        Lo Que Nuestros Clientes Dicen Sobre Nosotros
                      </h2>
                      <p className="text-lg text-gray-300 leading-relaxed">
                        La confianza de nuestros clientes es nuestro mayor logro. Descubre por qué empresas y hogares en Guayaquil eligen NovaFenix para su seguridad.
                      </p>
                    </div>

                    {/* Navigation arrows */}
                    <div className="flex space-x-4">
                      <button
                        onClick={goToPrevious}
                        className="p-3 bg-white/10 hover:bg-primary/20 rounded-full transition-all duration-300 backdrop-blur-sm border border-white/20"
                        aria-label="Testimonio anterior"
                      >
                        <ChevronLeft className="w-6 h-6 text-white" />
                      </button>
                      <button
                        onClick={goToNext}
                        className="p-3 bg-white/10 hover:bg-primary/20 rounded-full transition-all duration-300 backdrop-blur-sm border border-white/20"
                        aria-label="Siguiente testimonio"
                      >
                        <ChevronRight className="w-6 h-6 text-white" />
                      </button>
                    </div>
                  </div>

                  {/* Right side - Testimonial card */}
                  <div className="relative">
                    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl">
                      <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                        <Quote className="w-4 h-4 text-white" />
                      </div>

                      <div className="space-y-6">
                        {/* Stars */}
                        <div className="flex space-x-1">
                          {renderStars(testimonialsData[currentIndex].rating)}
                        </div>

                        {/* Testimonial content */}
                        <blockquote className="text-lg text-white leading-relaxed italic">
                          "{testimonialsData[currentIndex].content}"
                        </blockquote>

                        {/* Client info */}
                        <div className="flex items-center space-x-4 pt-4 border-t border-white/20">
                          <div className="w-16 h-16 rounded-full overflow-hidden ring-2 ring-primary">
                            <img
                              src={testimonialsData[currentIndex].image}
                              alt={testimonialsData[currentIndex].name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <h4 className="text-white font-semibold text-lg">
                              {testimonialsData[currentIndex].name}
                            </h4>
                            <p className="text-primary font-medium">
                              {testimonialsData[currentIndex].position}
                            </p>
                            {testimonialsData[currentIndex].company && (
                              <p className="text-gray-300 text-sm">
                                {testimonialsData[currentIndex].company}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Dots indicator */}
                    <div className="flex justify-center space-x-2 mt-6">
                      {testimonialsData.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => goToSlide(index)}
                          className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            index === currentIndex 
                              ? 'bg-primary w-8' 
                              : 'bg-white/30 hover:bg-white/50'
                          }`}
                          aria-label={`Ir al testimonio ${index + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="py-6"></div>
          </section>

          {/* Sección de call to action */}
          <div>
            <section>
              <Call_to_action
                title="¿Listo para proteger tu inversión?"
                subtitle="Con NovaFenix despreocupate de cuidar lo que amas"
                spanBtn="Contactános ahora"
                link={generarEnlaceWhatsApp(TELEFONO_CONTACTO)}
              />
            </section>
          </div>
        </div>
      </PreloaderWrapper>
    </>
  );
}

export default Home;