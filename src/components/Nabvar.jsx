import React from "react";

function Nabvar(){
    return(
      <nav className="bg-white shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Shield className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">SecurWSDSF</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-blue-600">ProSFFSSFFSFts</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">SerFSSFFSSFFSs</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">SSFFFSFSFS</a>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              Get Started
            </button>
          </div>
          <div className="md:hidden flex items-center">
            <Menu className="h-6 w-6 text-gray-700" />
          </div>
        </div>
      </div>
    </nav>
        
    );
}