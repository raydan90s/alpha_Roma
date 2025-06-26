// src/components/ConsultasSection.tsx

import React from 'react';
import { Video, CheckCircle, Clock, User, GraduationCap, Building, ShoppingCart, Shield } from 'lucide-react';

const ConsultasSection: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-black py-20 px-4 sm:px-6 lg:px-8">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-600 rounded-full blur-xl opacity-20"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-purple-600 rounded-full blur-2xl opacity-15"></div>
      <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-blue-400 rounded-full blur-lg opacity-10"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 mt-16">
          <div className="inline-flex items-center space-x-3 bg-blue-600 text-white px-8 py-4 rounded-full mb-8 shadow-lg">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <Video className="h-6 w-6 text-blue-600" />
            </div>
            <div className="text-left">
              <h1 className="text-xl font-bold">Citas de Asesoría de <span className="font-extrabold">Propiedad Intelectual</span></h1>
              <h2 className="text-lg font-bold">y <span className="font-extrabold">Derecho Empresarial</span></h2>
            </div>
          </div>
        </div>

        {/* Cards Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          
          {/* Card Asesor Junior */}
          <div className="bg-gray-900 rounded-3xl p-8 border border-gray-800 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-purple-500"></div>
            
            <div className="flex items-center space-x-2 mb-6">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <span className="text-white font-semibold">Consulta legal con un <span className="font-bold">Asesor Jurídico Junior</span></span>
            </div>
            
            <div className="flex items-center space-x-2 mb-8">
              <Clock className="h-5 w-5 text-blue-400" />
              <span className="text-gray-300">de <span className="text-white font-bold">20 min</span></span>
            </div>

            <h3 className="text-white font-bold text-lg mb-6">Nuestro equipo de Asesores Legales Junior</h3>

            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300 text-sm">
                  Ofrecen orientación profesional y accesible, 
                  respaldados por la supervisión de abogados 
                  experimentados.
                </p>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300 text-sm">
                  Está compuesto por estudiantes de último año y 
                  egresados de Derecho.
                </p>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300 text-sm">
                  Sólidos conocimientos y un enfoque práctico con 
                  experiencia trabajando en lo que mejor hacemos: 
                  registrar marcas y constituir S.A.S
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center mb-6">
              <div className="bg-gray-800 border border-gray-700 rounded-xl px-4 py-2 flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-green-400 font-semibold">COMPRA 100% SEGURA</span>
              </div>
            </div>

            <div className="text-center mb-6">
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">
                USD$20
              </div>
            </div>

            <button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 shadow-lg mb-6">
              Comprar Cita
            </button>

            <div className="flex justify-center space-x-4 opacity-50">
              <div className="text-gray-500 text-xs">VISA</div>
              <div className="text-gray-500 text-xs">Mastercard</div>
              <div className="text-gray-500 text-xs">PayPal</div>
              <div className="text-gray-500 text-xs">Bitcoin</div>
            </div>
          </div>

          {/* Card Experto Senior */}
          <div className="bg-gray-100 rounded-3xl p-8 border border-gray-300 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-500 to-pink-500"></div>
            
            <div className="flex items-center space-x-2 mb-6">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <span className="text-gray-800 font-semibold">Consulta legal con un <span className="font-bold">Experto Jurídico de 40 minutos</span></span>
            </div>

            {/* Profile Section */}
            <div className="flex items-center space-x-4 mb-8">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <User className="h-8 w-8 text-white" />
                </div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-blue-600 rounded-full border-2 border-white"></div>
              </div>
              <div>
                <h3 className="text-gray-800 font-bold text-lg">Sofía Becerra</h3>
                <p className="text-gray-600 text-sm">MSt. en Derecho Empresarial</p>
                <p className="text-gray-600 text-sm">Directora Jurídica de Ulpik</p>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700 text-sm">
                  <span className="font-semibold">Master en Derecho empresarial</span> por la 
                  Universidad Autónoma de Barcelona.
                </p>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700 text-sm">
                  <span className="font-semibold">Master en Responsabilidad Social Coorporativa, 
                  Economía y Empresa</span> por la Universitat Oberta de 
                  Catalunya
                </p>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700 text-sm">
                  Directora Jurídica del equipo <span className="font-semibold">ULPIK</span>.
                </p>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700 text-sm">
                  <span className="font-semibold">Emprendedora e-commerce</span>, con su negocio La 
                  retratería.
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center mb-6">
              <div className="bg-green-100 border border-green-300 rounded-xl px-4 py-2 flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span className="text-green-700 font-semibold">COMPRA 100% SEGURA</span>
              </div>
            </div>

            <div className="text-center mb-6">
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
                USD$50
              </div>
            </div>

            <button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 shadow-lg mb-6">
              Comprar Cita
            </button>

            <div className="flex justify-center space-x-4 opacity-50">
              <div className="text-gray-500 text-xs">VISA</div>
              <div className="text-gray-500 text-xs">Mastercard</div>
              <div className="text-gray-500 text-xs">PayPal</div>
              <div className="text-gray-500 text-xs">Bitcoin</div>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center">
          <p className="text-gray-400 text-sm max-w-4xl mx-auto leading-relaxed">
            <span className="font-semibold">Te recordamos que las consultorías se realizan únicamente de forma virtual.</span> Al momento de agendar tu cita, es 
            importante adjuntar cualquier documento legal que necesites que el/la profesional revise
          </p>
        </div>
      </div>
    </section>
  );
};

export default ConsultasSection;