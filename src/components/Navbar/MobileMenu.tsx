import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { MobileMenuProps } from '../../interface/MenuItem';

const MobileMenu = ({
  isOpen,
  menuItems,
  activeSubmenu,
  setActiveSubmenu,
  onNavigate,
  telefono,
}: MobileMenuProps) => {
  if (!isOpen) return null;

  const toggleSubmenu = (index: number) => {
    setActiveSubmenu(activeSubmenu === index ? null : index);
  };

  return (
    <div className="fixed inset-0 z-40 mt-20 md:hidden">
      <div className="bg-gradient-to-b from-gray-900 to-gray-800 shadow-xl border-b border-gray-700 h-full overflow-y-auto">
        <div className="px-4 py-6">
          <div className="divide-y divide-gray-700">
            {menuItems.map((item, index) => (
              <div key={index} className="py-3">
                <button
                  className="flex items-center justify-between w-full text-white font-medium py-2"
                  onClick={() => {
                    item.options
                      ? toggleSubmenu(index)
                      : onNavigate(item.linkTo || '#');
                  }}
                >
                  <span>{item.title}</span>
                  {item.options &&
                    (activeSubmenu === index ? (
                      <ChevronUp className="h-5 w-5 text-gray-400" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-400" />
                    ))}
                </button>

                {item.options && activeSubmenu === index && (
                  <div className="mt-2 ml-4 space-y-2">
                    {item.options.map((option, i) => (
                      <Link
                        key={i}
                        to={option.href}
                        onClick={() => onNavigate(option.href)}
                      >
                        <span className="block py-2 px-3 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition duration-200">
                          {option.label}
                        </span>
                      </Link>
                    ))}
                    {item.linkTo && (
                      <Link
                        to={item.linkTo}
                        onClick={() => item.linkTo && onNavigate(item.linkTo)}
                      >
                        <span className="block py-2 px-3 text-primary hover:text-white hover:bg-gray-800 rounded-lg transition duration-200 mt-2 font-medium">
                          Ver {item.title.toLowerCase()} →
                        </span>
                      </Link>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-6">
            <a
              href={`tel:${telefono}`}
              className="flex items-center justify-center w-full bg-primary hover:bg-primary text-black font-bold py-3 rounded-full shadow-md transition-all duration-300"
            >
              <img
                src="https://res.cloudinary.com/dfbpaq83u/image/upload/v1744669038/shrx1oeqzvtkzbvtfp81.png"
                alt="WhatsApp"
                className="h-8 w-auto mr-2"
              />
              {telefono}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
