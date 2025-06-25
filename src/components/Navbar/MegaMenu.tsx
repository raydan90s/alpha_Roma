import { Link } from 'react-router-dom';
import { MegaMenuProps } from '../../interface/MenuItem'; // Ajusta la ruta si es diferente

const MegaMenu = ({ item, hoveredMenu, onNavigate, isMenuActive }: MegaMenuProps) => (
  <div
    className="fixed w-full left-0 z-40 mt-20 hidden md:block"
    style={{
      top: 0,
      transform: `translateY(${hoveredMenu !== null ? '0' : '-100%'})`,
      opacity: hoveredMenu !== null ? 1 : 0,
    }}
  >
    <div className={`w-full transition-all duration-500 shadow-xl border-b border-gray-300 ${isMenuActive ? 'bg-white text-black' : 'bg-gradient-to-b from-gray-900 to-gray-800 text-white'
      }`}>
      <div className="max-w-screen-2xl mx-auto px-4 lg:px-8 py-6 lg:py-8">
        <div className="flex flex-col md:flex-row items-start">
          {/* Lado izquierdo */}
          <div className={`w-full md:w-1/3 pr-0 md:pr-8 lg:pr-12 border-b md:border-b-0 md:border-r ${isMenuActive ? 'border-gray-300' : 'border-gray-700'} pb-4 md:pb-0`}>
            <h3 className="text-xl lg:text-2xl font-bold mb-2 lg:mb-4">{item.title}</h3>
            <p className={`text-sm mb-4 ${isMenuActive ? 'text-gray-600' : 'text-gray-400'}`}>{item.description}</p>
            {item.linkTo && (
              <Link to={item.linkTo} onClick={() => onNavigate(item.linkTo!)}>
                <span className={`text-primary hover:${isMenuActive ? 'text-black' : 'text-white'} transition-colors duration-300 text-sm font-medium flex items-center`}>
                  Conocer acerca de {item.title.toLowerCase()}
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            )}
          </div>

          {/* Lado derecho */}
          <div className="w-full md:w-2/3 pl-0 md:pl-8 lg:pl-12 mt-4 md:mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 lg:gap-8">
              {item.options?.map((option, i) => (
                <Link key={i} to={option.href} onClick={() => onNavigate(option.href)}>
                  <div className={`rounded-lg p-4 mb-3 transition transform hover:scale-105 ${isMenuActive
                    ? 'bg-secondary text-white hover:bg-secondary/90'
                    : 'bg-gray-800 text-white hover:bg-gray-700'
                    }`}>
                    <div className={`w-12 h-12 rounded-full mb-4 flex items-center justify-center transition`}>
                      {option.icon && <option.icon className="w-6 h-6" />}
                    </div>
                    <h4 className="font-medium mb-1">{option.label}</h4>
                    <p className={`text-sm ${isMenuActive ? 'text-gray-200' : 'text-gray-400'}`}>{option.description || "Más detalles sobre esta opción."}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);


export default MegaMenu;
