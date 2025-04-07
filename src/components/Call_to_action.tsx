
import { Phone } from "lucide-react";
import React from "react";

interface CTAProps{
  title: string;
  subtitle: string;
  spanBtn: string;
  link: string;
}

function Call_to_action({title, subtitle, spanBtn, link}: CTAProps){


  return (

    <div className="bg-blue-600">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="mb-8 md:mb-0">
          <h2 className="text-3xl font-bold text-white mb-4">´{title}</h2>
          <p className="text-xl text-blue-100">{subtitle}</p>
        </div>
        <div className="flex space-x-4">
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 flex items-center">
            <Phone className="mr-2 h-5 w-5" />
            {spanBtn}
          </button>
        </div>
      </div>
    </div>
  </div>



  );
}
export default Call_to_action;