import { useState, useEffect } from 'react';
import { ArrowLeft, Check, Clock, Star } from "lucide-react";
import { HeroSAS } from '../../components/package/SAS/HeroSAS';
import BenefitsSection from '../../components/package/benefitsSection';
import { benefits } from '../../components/data/SAS/benefits';

// Header Component
const Header = () => {
    return (
        <div className="bg-black text-white">
            <div className="max-w-screen-xl mx-auto px-4 py-4">
                <button className="flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300">
                    <ArrowLeft className="mr-2" size={20} />
                    Volver a Servicios
                </button>
            </div>
        </div>
    );
};

// Services Table Component
const ServicesTable = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        const element = document.getElementById('services-table');
        if (element) observer.observe(element);

        return () => observer.disconnect();
    }, []);

    const services = [
        { name: "Reserva de nombre", included: true },
        { name: "Estatuto de la SAS", included: true },
        { name: "Selección de las actividades económicas", included: true },
        { name: "RUC (Registro Único de Contribuyentes)", included: true },
        { name: "Registro de la SAS en la Superintendencia", included: true },
        { name: "Elaboración de los nombramientos respectivos", included: true },
        { name: "Asesoría y seguimiento durante el proceso", included: true },
        { name: "Gestión de usuario ante la superintendencia", included: true },
        { name: "Obtención de firma electrónica", included: true, note: "Costos adicionales" },
        { name: "Instructivo de obligaciones SAS", included: true },
        { name: "Plantilla de libros sociales", included: true },
        { name: "Plantilla de estado de situación actual", included: true }
    ];

    return (
        <div id="services-table" className="bg-black text-white py-20">
            <div className="max-w-screen-xl mx-auto px-4">
                {/* Header */}
                <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <h2 className="text-4xl md:text-6xl font-bold mb-6">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">PLAN DE CONSTITUCIÓN DE SAS</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
                        Todo lo que necesitas para constituir tu SAS por un precio único
                    </p>
                </div>

                {/* Pricing Card */}
                <div className={`max-w-4xl mx-auto transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-3xl overflow-hidden shadow-2xl">
                        {/* Header */}
                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-center">
                            <h3 className="text-3xl font-bold text-white mb-2">Constitución de SAS</h3>
                            <p className="text-blue-100 mb-4">Sin importar el número de socios</p>
                            <div className="text-6xl font-bold text-white mb-2">$150</div>
                            <p className="text-blue-100">Precio único - Todo incluido</p>
                        </div>

                        {/* Services List */}
                        <div className="p-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {services.map((service, index) => (
                                    <div
                                        key={index}
                                        className={`flex items-center p-4 rounded-xl bg-gray-800/50 transform transition-all duration-500 hover:bg-gray-800/70 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}
                                        style={{ transitionDelay: `${index * 50}ms` }}
                                    >
                                        <div className="mr-4">
                                            <Check className="w-6 h-6 text-green-400" />
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-white font-medium">{service.name}</p>
                                            {service.note && (
                                                <p className="text-gray-400 text-sm mt-1">{service.note}</p>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Duration Info */}
                            <div className="mt-8 p-6 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-2xl border border-blue-500/20">
                                <div className="flex items-center justify-center">
                                    <Clock className="w-8 h-8 text-blue-400 mr-4" />
                                    <div>
                                        <p className="text-white font-semibold text-lg">Duración del trámite</p>
                                        <p className="text-blue-300">3 - 5 días laborables</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* CTA Button */}
                        <div className="p-8 pt-0">
                            <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 rounded-xl font-semibold text-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg">
                                Constituir mi SAS Ahora
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Testimonials Section Component
const TestimonialsSection = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        const element = document.getElementById('testimonials-section');
        if (element) observer.observe(element);

        return () => observer.disconnect();
    }, []);

    const testimonials = [
        {
            name: "Carlos Abril",
            company: "Tech Solutions SAS",
            text: "Excelente servicio, muy profesionales. El proceso fue rápido y sin complicaciones. Recomiendo totalmente sus servicios.",
            rating: 5
        },
        {
            name: "Ana Basagoiti",
            company: "Creative Design SAS",
            text: "Muy satisfecho con el servicio. Todo fue muy rápido y el equipo siempre estuvo disponible para resolver mis dudas.",
            rating: 5
        },
        {
            name: "Pedro Perez",
            company: "Marketing Solutions SAS",
            text: "El proceso de constitución fue impecable. Cumplieron con todos los tiempos prometidos y la asesoría fue excelente.",
            rating: 5
        }
    ];

    return (
        <div id="testimonials-section" className="bg-black text-white py-20">
            <div className="max-w-screen-xl mx-auto px-4">
                {/* Header */}
                <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <h2 className="text-4xl md:text-6xl font-bold mb-6">
                        TESTIMONIOS DE
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600"> NUESTROS CLIENTES</span>
                    </h2>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className={`transform transition-all duration-700 hover:scale-105 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                            style={{ transitionDelay: `${index * 200}ms` }}
                        >
                            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 p-8 rounded-2xl h-full">
                                <div className="flex mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                                    ))}
                                </div>
                                <p className="text-gray-300 mb-6 leading-relaxed">"{testimonial.text}"</p>
                                <div>
                                    <p className="text-white font-semibold">{testimonial.name}</p>
                                    <p className="text-gray-400 text-sm">{testimonial.company}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// CTA Section Component
const CTASection = () => {
    return (
        <div className="bg-black text-white py-20">
            <div className="max-w-screen-xl mx-auto px-4 text-center">
                <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-blue-500/20 rounded-3xl p-12">
                    <h2 className="text-4xl md:text-6xl font-bold mb-6">
                        ¿Listo para
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600"> Constituir tu SAS?</span>
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                        Nuestro equipo de expertos te acompañará en todo el proceso.
                        Obtén tu consulta gratuita y empieza hoy mismo.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg">
                            Consulta Gratuita
                        </button>
                        <button className="border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-400 hover:text-black transition-all duration-300">
                            WhatsApp
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Main Component
const SASPage = () => {
    return (
        <div className="bg-black min-h-screen">
            <Header />
            <HeroSAS />
            <BenefitsSection
                title="Beneficios de Nuestros Servicios"
                description="Conoce las ventajas de contratar nuestros servicios."
                benefits={benefits}
                isVisible={true}
                cardBackgroundColor="bg-gray-900" // Cambiar fondo de las tarjetas
                titleColor="text-white"           // Cambiar color del título
                descriptionColor="text-gray-400" // Cambiar color de la descripción
            />
            <ServicesTable />
            <TestimonialsSection />
            <CTASection />
        </div>
    );
};

export default SASPage;