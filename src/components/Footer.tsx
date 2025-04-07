import React from "react";
import Link from "react";


function Footer(){

    return (
        <footer className="bg-gray-900 text-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
          
                <span className="ml-2 text-xl font-bold text-white">MAFR</span>
              </div>
              <p className="text-sm">Protecting homes and families since 2025</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">MAR</h3>
              <ul className="space-y-2">
          
                <li><a href="#" className="hover:text-white">mAER</a></li>
     
                <li><a href="#" className="hover:text-white">Cs</a></li>
                <li><a href="#" className="hover:text-white">Sm</a></li>
                <li><a href="#" className="hover:text-white">D</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Comp</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Abo</a></li>
                <li><a href="#" className="hover:text-white">Carrs</a></li>
                <li><a href="#" className="hover:text-white">Cont</a></li>
                <li><a href="#" className="hover:text-white">Bg</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Support</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white textoC">Help Center</a></li>
                <li><a href="#" className="hover:text-white">FAQs</a></li>
                <li><a href="#" className="hover:text-white">Installation</a></li>
                <li><a href="#" className="hover:text-white">Contact Support</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
            <p>&copy; 2025 SecureHome. All rights reserved.</p>
          </div>
        </div>
      </footer>


    );

}
export default Footer;