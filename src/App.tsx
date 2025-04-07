import React from 'react';
import { Shield, Home, Bell, Video, Phone, ChevronRight, Menu } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar />
      {/* Hero Section */}
      <div className="relative pt-16">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
            className="w-full h-[600px] object-cover"
            alt="Modern home security"
          />
          <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-48">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Protect What Matters Most
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Advanced home security systems that keep your family safe 24/7. Professional monitoring, smart automation, and peace of mind.
            </p>
            <div className="flex space-x-4">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 flex items-center">
                Get Quote <ChevronRight className="ml-2 h-5 w-5" />
              </button>
              <button className="bg-white text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-100">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

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
                <Home className="h-8 w-8 text-blue-600" />
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

      {/* CTA Section */}
      <div className="bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to protect your home?</h2>
              <p className="text-xl text-blue-100">Get a free quote and consultation today.</p>
            </div>
            <div className="flex space-x-4">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 flex items-center">
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;