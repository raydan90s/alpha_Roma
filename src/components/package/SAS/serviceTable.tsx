import { Check, Clock } from "lucide-react";
import { useEffect, useState } from "react";
import { generarEnlaceWhatsApp } from "../../../messages/messages";

interface Services {
    name: string;
    included: boolean;
    note?: string;
}

interface ServiceTableProps {
    services: Services[];
    mensaje: string;
}

export const ServicesTable = ({ services, mensaje }: ServiceTableProps) => {
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


    return (
        <div id="services-table" className="bg-black text-white py-20">
            <div className="max-w-screen-xl mx-auto px-4">
                {/* Header */}
                <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <h2 className="text-4xl md:text-6xl font-bold mb-6">
                        PLAN DE CONSTITUCIÓN DE SAS
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
                        Todo lo que necesitas para constituir tu SAS por un precio único
                    </p>
                </div>

                {/* Pricing Card */}
                <div className={`max-w-4xl mx-auto transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-3xl overflow-hidden shadow-2xl">
                        {/* Header */}
                        <div className="bg-primary p-8 text-center">
                            <h3 className="text-3xl font-bold text-white mb-2">Constitución de SAS</h3>
                            <p className="text-blue-100 mb-4">Sin importar el número de socios</p>
                            <div className="text-6xl font-bold text-white mb-2">$200 + IVA</div>
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
                            <div className="mt-8 p-6 bg-blue-500/20  rounded-2xl border border-blue-500/20">
                                <div className="flex items-center justify-center">
                                    <Clock className="w-8 h-8 text-blue-400 mr-4" />
                                    <div>
                                        <p className="text-white font-semibold text-lg">Duración del trámite</p>
                                        <p className="text-blue-300">3 - 7 días laborables</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* CTA Button */}
                        <div className="p-8 pt-0">
                            <a href={generarEnlaceWhatsApp(mensaje)}>
                                <button className="w-full bg-button hover:scale-105 hover:bg-hoverButton text-white py-4 rounded-xl font-semibold text-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg">
                                    Constituir mi SAS Ahora
                                </button>
                            </a>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};