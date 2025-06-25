import { ChevronDown, ChevronUp } from "lucide-react";
import MegaMenu from "./MegaMenu";
import { MenuItem } from '../../interface/MenuItem';
import { Dispatch, SetStateAction } from "react";

type DesktopMenuProps = {
  menuItems: MenuItem[];
  hoveredMenu: number | null;
  setHoveredMenu: Dispatch<SetStateAction<number | null>>;
  onNavigate: (href: string) => void;
  isMenuActive: boolean;

};

const DesktopMenu = ({
  menuItems,
  hoveredMenu,
  setHoveredMenu,
  onNavigate,
  isMenuActive
  
}: DesktopMenuProps) => {
  let timeout: string | number | NodeJS.Timeout | undefined;

  const handleMouseEnter = () => {
    clearTimeout(timeout);
  };

  const handleMouseLeave = () => {
    timeout = setTimeout(() => {
      setHoveredMenu(null);
    }, 200);
  };

  return (
    <div
      className="hidden md:flex items-center space-x-4 lg:space-x-8 relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {menuItems.map((item, index) => (
        <div key={index} className="relative">
          <button
            className={`flex items-center text-lg font-medium px-2 py-1.5 border-b-2 transition-all duration-300 whitespace-nowrap ${isMenuActive
              ? hoveredMenu === index
                ? "border-secondary text-secondary"
                : "border-transparent text-black hover:text-secondary"
              : hoveredMenu === index
                ? "border-white text-white"
                : "border-transparent text-white hover:text-gray-400"
              }`}
            onMouseEnter={() => setHoveredMenu(index)}
            onClick={() => item.linkTo && onNavigate(item.linkTo)}
          >

            {item.title}
            {item.options &&
              (hoveredMenu === index ? (
                <ChevronUp
                  className={`ml-1 h-4 w-4 ${isMenuActive ? "text-secondary" : "text-white"}`}
                />
              ) : (
                <ChevronDown
                  className={`ml-1 h-4 w-4 ${isMenuActive ? "text-gray-600 hover:text-secondary" : "text-white"}`}
                />
              ))}
          </button>

          {item.options && hoveredMenu === index && (
            <MegaMenu
              item={item}
              hoveredMenu={hoveredMenu}
              onNavigate={onNavigate}
              isMenuActive={hoveredMenu === index}

            />
          )}
        </div>
      ))}
    </div>
  );
};

export default DesktopMenu;
