import { useState, useRef } from "react";
import { Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/img/logo-nexolegal.png";
import LogoNegro from "../../assets/img/logo-nexolegal-negro.png";
import { menuItems } from "../../assets/utils/menuItems";
import { TELEFONO_CONTACTO } from "../../config/config";
import { handleMenuItemClick, formatearTelefono } from "../../assets/utils/navbarUtils";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import WhatsAppButton from "./WhatsAppButton";
import { mensajesWhatsApp } from "../../messages/messages";
import { useResponsiveMenu } from "./useResponsiveMenu";
import { useEffect } from "react";

function Navbar() {
    const [hoveredMenu, setHoveredMenu] = useState<number | null>(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeMobileSubmenu, setActiveMobileSubmenu] = useState<number | null>(null);
    const [showNavbar, setShowNavbar] = useState(true);
    const lastScrollY = useRef(0);

    const navRef = useRef(null);
    const navigate = useNavigate();

    // Hook para manejar el comportamiento responsive del menú
    useResponsiveMenu({
        mobileMenuOpen,
        setMobileMenuOpen,
        setActiveMobileSubmenu,
        navRef,
    });

    const handleLogoClick = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        setHoveredMenu(null);
        setMobileMenuOpen(false);
        setActiveMobileSubmenu(null);
    };

    const onNavigate = handleMenuItemClick(
        navigate,
        setHoveredMenu,
        setMobileMenuOpen,
        setActiveMobileSubmenu
    );

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            setNavbarActive(scrollY > 50 || hoveredMenu !== null);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [hoveredMenu]);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
                setShowNavbar(false);
            } else {
                setShowNavbar(true);
            }
            lastScrollY.current = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header>
            <div className="relative" ref={navRef}>
                <nav className={`fixed w-full z-50 border-b border-gray-700 shadow-md transition-all duration-300 transform ${showNavbar ? 'translate-y-0' : '-translate-y-full'} ${hoveredMenu !== null ? 'bg-white text-black' : 'bg-secondary text-white'}`}>
                    <div className="max-w-screen-2xl mx-auto px-4">
                        <div className="flex items-center justify-between h-20 w-full">
                            {/* Logo */}
                            <div className="md:flex-none flex-1 md:w-auto flex items-center">
                                <div className="md:ml-0 w-full md:w-auto flex justify-center md:justify-start">
                                    <Link to="/" onClick={handleLogoClick}>
                                        <img
                                            src={hoveredMenu !== null ? LogoNegro : Logo}
                                            alt="Logo"
                                            className="h-14 mx-auto md:mx-0 md:ml-6 transition-all duration-300"
                                        />
                                    </Link>
                                </div>
                            </div>

                            {/* Menú Desktop */}
                            <DesktopMenu
                                menuItems={menuItems}
                                hoveredMenu={hoveredMenu}
                                setHoveredMenu={setHoveredMenu}
                                onNavigate={onNavigate}
                                isMenuActive={hoveredMenu !== null}
                            />

                            {/* Botones de contacto y menú móvil */}
                            <div className="flex items-center">
                                <WhatsAppButton
                                    telefono={formatearTelefono(TELEFONO_CONTACTO)}
                                    mensaje={mensajesWhatsApp.general}
                                    isMenuActive={hoveredMenu !== null}
                                />

                                {/* Botón menú móvil */}
                                <button
                                    className="text-white md:hidden"
                                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                >
                                    {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                                </button>
                            </div>
                        </div>
                    </div>
                </nav>

                {/* Menú móvil */}
                <MobileMenu
                    isOpen={mobileMenuOpen}
                    menuItems={menuItems}
                    activeSubmenu={activeMobileSubmenu}
                    setActiveSubmenu={setActiveMobileSubmenu}
                    onNavigate={onNavigate}
                    telefono={formatearTelefono(TELEFONO_CONTACTO)}
                />
            </div>
        </header>
    );
}

export default Navbar;
