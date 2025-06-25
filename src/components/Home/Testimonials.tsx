import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { testimonialsData } from '../data/TestimonialsData';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

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
        className={`w-5 h-5 ${index < rating ? 'text-orange-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
      <div className="pt-0 pb-16 bg-secondary relative overflow-hidden ">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-48 h-48 bg-orange-500 rounded-full blur-3xl"></div>
        </div>
        <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-5">
          <div className="h-full bg-gradient-to-l from-white/20 to-transparent flex items-center justify-center">
            <div className="text-white/30 text-9xl">⚖️</div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="border-l-4 border-primary pl-6">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                  Lo Que Nuestros Clientes Dicen Sobre Nosotros
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  La confianza de nuestros clientes es nuestro mayor logro. Descubre por qué empresas y hogares en Guayaquil eligen NovaFenix para su seguridad.
                </p>
              </div>
              <div className="flex space-x-4">
                <button onClick={goToPrevious} className="p-3 bg-white/10 hover:bg-primary/20 rounded-full transition-all duration-300 backdrop-blur-sm border border-white/20">
                  <ChevronLeft className="w-6 h-6 text-white" />
                </button>
                <button onClick={goToNext} className="p-3 bg-white/10 hover:bg-primary/20 rounded-full transition-all duration-300 backdrop-blur-sm border border-white/20">
                  <ChevronRight className="w-6 h-6 text-white" />
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl">
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <Quote className="w-4 h-4 text-white" />
                </div>
                <div className="space-y-6">
                  <div className="flex space-x-1">{renderStars(testimonialsData[currentIndex].rating)}</div>
                  <blockquote className="text-lg text-white leading-relaxed italic">
                    "{testimonialsData[currentIndex].content}"
                  </blockquote>
                  <div className="flex items-center space-x-4 pt-4 border-t border-white/20">
                    <div className="w-16 h-16 rounded-full overflow-hidden ring-2 ring-primary">
                      <img src={testimonialsData[currentIndex].image} alt={testimonialsData[currentIndex].name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-lg">{testimonialsData[currentIndex].name}</h4>
                      <p className="text-primary font-medium">{testimonialsData[currentIndex].position}</p>
                      {testimonialsData[currentIndex].company && (
                        <p className="text-gray-300 text-sm">{testimonialsData[currentIndex].company}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center space-x-2 mt-6">
                {testimonialsData.map((_, index) => (
                  <button key={index} onClick={() => goToSlide(index)} className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-primary w-8' : 'bg-white/30 hover:bg-white/50'}`} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Testimonials;
