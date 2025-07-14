import { Star } from "lucide-react";
import { useState, useEffect } from "react";

interface testimonials{
    name:string;
    company:string;
    text:string;
    rating:number;
}

interface TestimonialsProps{
    testimonials:testimonials[];
}

export const TestimonialsSection = ({testimonials}:TestimonialsProps) => {
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

    return (
        <div id="testimonials-section" className="bg-black text-white py-20">
            <div className="max-w-screen-xl mx-auto px-4">
                {/* Header */}
                <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <h2 className="text-4xl md:text-6xl font-bold mb-6">
                        TESTIMONIOS DE
                        <span className="text-transparent bg-clip-text bg-highlight"> NUESTROS CLIENTES</span>
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