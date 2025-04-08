import HeroProps from "../interface/HeroProps";
import { ChevronRight } from "lucide-react";

function Hero({title, span, link_image, span_btn1, span_btn2}: HeroProps){
    return (

        <div className="relative pt-16">
        <div className="absolute inset-0 z-0">
          <img 
            src={link_image}
            className="w-full h-[600px] object-cover"
            alt="Modern home security"
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-48">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {title}
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              {span}
            </p>
            <div className="flex space-x-4">
              <button className="bg-primary text-white px-8 py-3 rounded-lg hover:primary-400 flex items-center">
                {span_btn1} <ChevronRight className="ml-2 h-5 w-5" />
              </button>
              <button className="bg-secondary text-white px-8 py-3 rounded-lg hover:bg-secondary">
                {span_btn2}
              </button>
            </div>
          </div>
        </div>
      </div>


    );
}
export default Hero;