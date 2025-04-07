import React from 'react';
import { Bell, Video, Phone, ChevronRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'
import Call_to_action from '../components/Call_to_action';
import Hero from '../components/hero';


function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
     
      {/* Hero Section */}
      <Hero
        title='NovaFenix security lo mejor para ti'
        span='En novafenix nos preocupamos por tu seguridad'
        link_image='https://www.segurilatam.com/wp-content/uploads/sites/5/2024/01/instalacion-camara-de-seguridad-wifi.jpg'
        span_btn1='Comprar ahora'
        span_btn2='Consultar'
      />
      {/* Features Section */}
      <div className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Complete Home Protection</h2>
            <p className="text-xl text-gray-600">Everything you need to keep your home secure</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
              </div>
              <h3 className="text-xl font-semibold mb-4">CASITA HIPER SEGURA</h3>
              <p className="text-gray-600">Control your entire security system from anywhere with our mobile app.</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Video className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">24/7 Video Monitoring</h3>
              <p className="text-gray-600">HD cameras with night vision keep watch over your property day and night.</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Bell className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Instant Alerts</h3>
              <p className="text-gray-600">Get immediate notifications when something needs your attention.</p>
            </div>
          </div>
        </div>
      </div>
      <Call_to_action title="¿Listo para proteger tu casa?" subtitle='Con NovaFenix despreocupate de cuidar tu casa' spanBtn='Contactános ahora' link={''} />
    </div>
  );
}
export default Home