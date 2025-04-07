import React from 'react'; 
import { Bell, Video, Home as HomeIcon } from 'lucide-react'; 
import Navbar from '../components/Navbar'; 
import Footer from '../components/Footer';
import Call_to_action from '../components/Call_to_action'; 
import Hero from '../components/hero';
import FeatureCard from "../components/FeatureCard";  // Corrige la ruta


function Home() {   
  return (     
    <div className="min-h-screen bg-white">       
      {/* Navigation */}
      <Navbar />
             
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
            <FeatureCard 
              icon={<HomeIcon className="h-8 w-8 text-blue-600" />}
              title="CASITA HIPER SEGURA"
              description="Control your entire security system from anywhere with our mobile app."
            />
            
            <FeatureCard 
              icon={<Video className="h-8 w-8 text-blue-600" />}
              title="24/7 Video Monitoring"
              description="HD cameras with night vision keep watch over your property day and night."
            />
            
            <FeatureCard 
              icon={<Bell className="h-8 w-8 text-blue-600" />}
              title="Instant Alerts"
              description="Get immediate notifications when something needs your attention."
            />
          </div>         
        </div>       
      </div>       
      
      <Call_to_action 
        title="¿Listo para proteger tu casa?" 
        subtitle='Con NovaFenix despreocupate de cuidar tu casa' 
        spanBtn='Contactános ahora' 
        link={''} 
      />     
    </div>   
  );
} 

export default Home;