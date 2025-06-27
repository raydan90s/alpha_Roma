// src/components/ConsultasSection.tsx

import React from 'react';
import {CheckCircle, Clock, User } from 'lucide-react';

const ConsultasSection: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-black py-20 px-4 sm:px-6 lg:px-8">
      {/* Elementos decorativos */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-600 rounded-full blur-xl opacity-20"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-purple-600 rounded-full blur-2xl opacity-15"></div>
      <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-blue-400 rounded-full blur-lg opacity-10"></div>

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Tarjetas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 mt-28">
          {/* Asesoría Básica */}
          <div className="bg-gray-900 rounded-3xl p-8 border border-gray-800 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 "></div>

            <div className="flex items-center space-x-2 mb-6">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <span className="text-white font-semibold">Consulta con <span className="font-bold">Abogado Junior</span></span>
            </div>

            <div className="flex items-center space-x-2 mb-8">
              <Clock className="h-5 w-5 text-blue-400" />
              <span className="text-gray-300">Duración: <span className="text-white font-bold">20 minutos</span></span>
            </div>

            <h3 className="text-white font-bold text-lg mb-6">Orientación inicial con profesionales capacitados</h3>

            <div className="space-y-4 mb-8 text-sm text-gray-300">
              <p>Recibe asesoría básica en temas de constitución de empresas, contratos o propiedad intelectual.</p>
              <p>Ideal para emprendedores que necesitan una guía inicial clara y efectiva.</p>
              <p>Supervisado por abogados senior de Nexo Legal.</p>
            </div>

            <div className="text-center mb-6">
              <div className="text-4xl font-bold bg-hover bg-clip-text text-transparent mb-2">
                USD$20
              </div>
            </div>

            <button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 shadow-lg mb-6">
              Agendar Cita
            </button>
          </div>

          {/* Asesoría Experta */}
          <div className="bg-gray-100 rounded-3xl p-8 border border-gray-300 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2"></div>

            <div className="flex items-center space-x-2 mb-6">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <span className="text-gray-800 font-semibold">Consulta con <span className="font-bold">Abogado Senior</span></span>
            </div>

            <div className="flex items-center space-x-4 mb-8">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <User className="h-8 w-8 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-gray-800 font-bold text-lg">María Salazar</h3>
                <p className="text-gray-600 text-sm">Directora Legal – Nexo Legal</p>
                <p className="text-gray-600 text-sm">Especialista en Marcas y Sociedades</p>
              </div>
            </div>

            <div className="space-y-4 mb-8 text-sm text-gray-700">
              <p>Atención especializada en conflictos empresariales, registro de marcas, contratos complejos y protección legal.</p>
              <p>Recomendada para empresas constituidas o en proceso de expansión.</p>
              <p>Con respaldo de +10 años de experiencia legal.</p>
            </div>

            <div className="text-center mb-6">
              <div className="text-4xl font-bold bg-secondary bg-clip-text text-transparent mb-2">
                USD$50
              </div>
            </div>

            <button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 shadow-lg mb-6">
              Agendar Cita
            </button>
          </div>
        </div>

        {/* Nota Final */}
        <div className="text-center">
          <p className="text-gray-400 text-sm max-w-4xl mx-auto leading-relaxed">
            Todas nuestras asesorías se realizan de forma <span className="font-semibold">virtual</span>. Una vez confirmada tu cita, recibirás un enlace para conectarte con tu abogado Nexo Legal. 
            Adjunta tus documentos al agendar para mayor claridad en la sesión.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ConsultasSection;
