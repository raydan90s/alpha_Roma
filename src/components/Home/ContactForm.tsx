// src/components/ContactForm.tsx

import React, { useState } from 'react';
import { Send, User, Mail, Phone, MessageSquare } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Aquí puedes agregar la lógica para enviar el formulario
    console.log('Formulario enviado:', formData);
    
    // Simular envío
    setTimeout(() => {
      setIsSubmitting(false);
      alert('¡Mensaje enviado exitosamente! Nos pondremos en contacto contigo pronto.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 2000);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center py-12 bg-secondary">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-600 rounded-full blur-xl opacity-20"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-blue-500 rounded-full blur-2xl opacity-15"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-blue-400 rounded-full blur-lg opacity-10"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Lado izquierdo - Información */}
          <div className="text-white">
            <div className="inline-flex items-center space-x-2 bg-blue-900 border border-blue-800 text-blue-300 px-6 py-3 rounded-full mb-8 transform hover:scale-105 transition-all duration-300 shadow-lg">
              <MessageSquare className="h-5 w-5" />
              <span className="text-sm font-medium">Consulta Gratuita</span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="block mb-2">¿Necesitas</span>
              <span className="text-blue-400 block">Asesoría Legal?</span>
            </h2>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Solicita una consulta gratuita y obtén la orientación legal que necesitas. 
              <span className="text-blue-400 font-medium"> Nuestros expertos están listos para ayudarte</span>.
            </p>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Llamada Inmediata</h3>
                  <p className="text-gray-400">Respuesta en menos de 24 horas</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <User className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Consulta Personalizada</h3>
                  <p className="text-gray-400">Análisis específico de tu caso</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Sin Compromiso</h3>
                  <p className="text-gray-400">Primera consulta completamente gratuita</p>
                </div>
              </div>
            </div>
          </div>

          {/* Lado derecho - Formulario */}
          <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8 shadow-2xl backdrop-blur-sm bg-opacity-80">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">Solicita tu Consulta Gratuita</h3>
              <p className="text-gray-400">Completa el formulario y nos pondremos en contacto contigo</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-300"
                    placeholder="Tu nombre completo"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-300"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-300"
                    placeholder="Tu número de teléfono"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Tipo de Consulta
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-300"
                  >
                    <option value="">Selecciona un tema</option>
                    <option value="civil">Derecho Civil</option>
                    <option value="penal">Derecho Penal</option>
                    <option value="laboral">Derecho Laboral</option>
                    <option value="familiar">Derecho Familiar</option>
                    <option value="mercantil">Derecho Mercantil</option>
                    <option value="inmobiliario">Derecho Inmobiliario</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-300 resize-none"
                  placeholder="Describe brevemente tu situación legal..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 disabled:cursor-not-allowed text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-3 shadow-2xl transform hover:-translate-y-1 hover:scale-105 disabled:transform-none"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                    <span>Enviando...</span>
                  </>
                ) : (
                  <>
                    <Send className="h-6 w-6" />
                    <span>Enviar Consulta</span>
                  </>
                )}
              </button>

              <p className="text-sm text-gray-400 text-center">
                Al enviar este formulario, aceptas que nos pongamos en contacto contigo para ofrecerte nuestros servicios legales.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;