import {Video, Bell, Home } from "lucide-react";
import React from "react";

function Cards() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-8 px-4 sm:px-6 lg:px-8 mt-6">
    {/* Tarjeta 1 */}
    <div className="bg-white rounded-xl shadow-md p-6 ">
        <div className="bg-secondary rounded-full p-3 inline-block mb-4">
            <Home color="white" />
        </div>
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">Casa Segura</h3>
        <p className="text-gray-600 text-lg">
            Ofrecemos soluciones tecnológicas avanzadas para proteger tu hogar, asegurando su seguridad con sistemas de última generación.
        </p>
    </div>
    
    {/* Tarjeta 2 */}
    <div className="bg-white rounded-xl shadow-md p-6">
        <div className="bg-secondary rounded-full p-3 inline-block mb-4">
            <Video color="white" />
        </div>
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">Monitoreo de Video 24/7</h3>
        <p className="text-gray-600 text-lg">
            Garantizamos la vigilancia continua de tu propiedad con cámaras de alta definición, disponibles para ver en tiempo real las 24 horas del día.
        </p>
    </div>
    
    {/* Tarjeta 3 */}
    <div className="bg-white rounded-xl shadow-md p-6">
        <div className="bg-secondary rounded-full p-3 inline-block mb-4">
            <Bell color="white" />
        </div>
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">Alertas Instantáneas</h3>
        <p className=" text-lg text-gray-600 ">
            Recibe notificaciones inmediatas en tu dispositivo móvil sobre cualquier actividad sospechosa en tu hogar, manteniéndote siempre informado.
        </p>
    </div>
</div>

    );
}

export default Cards;
