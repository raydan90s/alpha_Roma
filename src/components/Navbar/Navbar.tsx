import { useState, useRef, useEffect, useCallback } from "react";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
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

function Navbar() {
    const [hoveredMenu, setHoveredMenu] = useState<number | null>(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeMobileSubmenu, setActiveMobileSubmenu] = useState<number | null>(null);
    const [showNavbar, setShowNavbar] = useState(true);
    const [navbarActive, setNavbarActive] = useState(false);
    const [screenSize, setScreenSize] = useState('desktop');
    const [isScrolling, setIsScrolling] = useState(false);
    const lastScrollY = useRef(0);
    const scrollTimeout = useRef<NodeJS.Timeout>();

    const navRef = useRef(null);
    const navigate = useNavigate();

    // Hook para manejar el comportamiento responsive del menú
    useResponsiveMenu({
        mobileMenuOpen,
        setMobileMenuOpen,
        setActiveMobileSubmenu,
        navRef,
    });

    // Detectar tamaño de pantalla de forma más precisa
    useEffect(() => {
        const updateScreenSize = () => {
            const width = window.innerWidth;
            if (width < 640) {
                setScreenSize('mobile');
            } else if (width < 768) {
                setScreenSize('sm');
            } else if (width < 1024) {
                setScreenSize('tablet');
            } else {
                setScreenSize('desktop');
            }
        };
        
        updateScreenSize();
        window.addEventListener('resize', updateScreenSize);
        
        return () => window.removeEventListener('resize', updateScreenSize);
    }, []);

    // Manejar scroll optimizado con debounce
    const handleScroll = useCallback(() => {
        const currentScrollY = window.scrollY;
        const scrollDifference = Math.abs(currentScrollY - lastScrollY.current);
        
        setIsScrolling(true);
        
        // Limpiar timeout anterior
        if (scrollTimeout.current) {
            clearTimeout(scrollTimeout.current);
        }
        
        // Configurar nuevo timeout
        scrollTimeout.current = setTimeout(() => {
            setIsScrolling(false);
        }, 150);

        // Lógica diferente según el tamaño de pantalla
        if (screenSize === 'mobile') {
            // En móvil: ocultar navbar al scroll hacia abajo, mostrar al scroll hacia arriba
            if (scrollDifference > 5) { // Solo si el scroll es significativo
                if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
                    setShowNavbar(false);
                } else if (currentScrollY < lastScrollY.current || currentScrollY < 20) {
                    setShowNavbar(true);
                }
            }
        } else if (screenSize === 'sm' || screenSize === 'tablet') {
            // En tablet: comportamiento intermedio
            if (currentScrollY > lastScrollY.current && currentScrollY > 120) {
                setShowNavbar(false);
            } else {
                setShowNavbar(true);
            }
        } else {
            // En desktop: siempre visible, solo cambiar fondo
            setShowNavbar(true);
        }
        
        // Actualizar estado del navbar (fondo)
        setNavbarActive(currentScrollY > 30 || hoveredMenu !== null);
        lastScrollY.current = currentScrollY;
    }, [screenSize, hoveredMenu]);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => {
            window.removeEventListener("scroll", handleScroll);
            if (scrollTimeout.current) {
                clearTimeout(scrollTimeout.current);
            }
        };
    }, [handleScroll]);

    const handleLogoClick = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        setHoveredMenu(null);
        closeMobileMenu();
    };

    const closeMobileMenu = useCallback(() => {
        setMobileMenuOpen(false);
        setActiveMobileSubmenu(null);
        document.body.style.overflow = 'unset';
        document.body.style.position = 'static';
    }, []);

    const openMobileMenu = useCallback(() => {
        setMobileMenuOpen(true);
        // Prevenir scroll en móvil de forma más robusta
        document.body.style.overflow = 'hidden';
        document.body.style.position = 'fixed';
        document.body.style.top = `-${window.scrollY}px`;
        document.body.style.width = '100%';
    }, []);

    const toggleMobileMenu = () => {
        if (mobileMenuOpen) {
            closeMobileMenu();
        } else {
            openMobileMenu();
        }
    };

    const onNavigate = handleMenuItemClick(
        navigate,
        setHoveredMenu,
        closeMobileMenu,
        setActiveMobileSubmenu
    );

    // Limpiar estilos del body al desmontar
    useEffect(() => {
        return () => {
            document.body.style.overflow = 'unset';
            document.body.style.position = 'static';
            document.body.style.top = 'auto';
            document.body.style.width = 'auto';
        };
    }, []);

    // Cerrar menú al cambiar de tamaño de pantalla
    useEffect(() => {
        if (screenSize === 'desktop' || screenSize === 'tablet') {
            closeMobileMenu();
        }
    }, [screenSize, closeMobileMenu]);

    const isMenuActive = hoveredMenu !== null || navbarActive;
    const isMobileSize = screenSize === 'mobile' || screenSize === 'sm';

    return (
        <header className="relative">
            <div className="relative" ref={navRef}>
                {/* Navbar Principal */}
                <nav 
                    className={`
                        fixed w-full z-50 transition-all duration-300 ease-in-out transform
                        ${showNavbar ? 'translate-y-0' : '-translate-y-full'}
                        ${isMenuActive || mobileMenuOpen 
                            ? 'bg-white/95 backdrop-blur-md text-black shadow-lg border-b border-gray-100' 
                            : 'bg-secondary/90 backdrop-blur-sm text-white shadow-md'
                        }
                        ${isScrolling ? 'transition-transform duration-150' : 'transition-all duration-300'}
                    `}
                >
                    <div className="max-w-screen-2xl mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
                        <div className={`
                            flex items-center justify-between w-full
                            ${isMobileSize ? 'h-14' : 'h-16 sm:h-18 lg:h-20'}
                        `}>
                            {/* Logo */}
                            <div className="flex-shrink-0 flex items-center z-10">
                                <Link 
                                    to="/" 
                                    onClick={handleLogoClick}
                                    className="flex items-center focus:outline-none focus:ring-2 focus:ring-primary rounded-md p-1"
                                >
                                    <img
                                        src={isMenuActive || mobileMenuOpen ? LogoNegro : Logo}
                                        alt="Logo NexoLegal"
                                        className={`
                                            transition-all duration-300 object-contain
                                            ${screenSize === 'mobile' ? 'h-8' : ''}
                                            ${screenSize === 'sm' ? 'h-10' : ''}
                                            ${screenSize === 'tablet' ? 'h-12' : ''}
                                            ${screenSize === 'desktop' ? 'h-14' : ''}
                                        `}
                                    />
                                </Link>
                            </div>

                            {/* Menú Desktop - Solo visible en pantallas grandes */}
                            <div className="hidden lg:flex flex-1 justify-center">
                                <DesktopMenu
                                    menuItems={menuItems}
                                    hoveredMenu={hoveredMenu}
                                    setHoveredMenu={setHoveredMenu}
                                    onNavigate={onNavigate}
                                    isMenuActive={isMenuActive}
                                />
                            </div>

                            {/* Botones de acción */}
                            <div className="flex items-center gap-2 z-10">
                                {/* WhatsApp - Desktop */}
                                <div className="hidden lg:block">
                                    <WhatsAppButton
                                        telefono={formatearTelefono(TELEFONO_CONTACTO)}
                                        mensaje={mensajesWhatsApp.general}
                                        isMenuActive={isMenuActive}
                                    />
                                </div>
                                
                                {/* WhatsApp - Mobile/Tablet (Solo icono) */}
                                <div className="lg:hidden">
                                    <a
                                        href={`https://wa.me/${formatearTelefono(TELEFONO_CONTACTO)}?text=${encodeURIComponent(mensajesWhatsApp.general)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`
                                            inline-flex items-center justify-center w-10 h-10 rounded-full transition-all duration-200
                                            ${isMenuActive || mobileMenuOpen
                                                ? 'bg-green-600 text-white hover:bg-green-700' 
                                                : 'bg-white/20 text-white hover:bg-white/30'
                                            }
                                            focus:outline-none focus:ring-2 focus:ring-green-400
                                        `}
                                        aria-label="Contactar por WhatsApp"
                                    >
                                        <MessageCircle className="w-5 h-5" />
                                    </a>
                                </div>

                                {/* Botón de teléfono - Solo móvil */}
                                <div className="sm:hidden">
                                    <a
                                        href={`tel:${TELEFONO_CONTACTO}`}
                                        className={`
                                            inline-flex items-center justify-center w-10 h-10 rounded-full transition-all duration-200
                                            ${isMenuActive || mobileMenuOpen
                                                ? 'bg-blue-600 text-white hover:bg-blue-700' 
                                                : 'bg-white/20 text-white hover:bg-white/30'
                                            }
                                            focus:outline-none focus:ring-2 focus:ring-blue-400
                                        `}
                                        aria-label="Llamar por teléfono"
                                    >
                                        <Phone className="w-4 h-4" />
                                    </a>
                                </div>

                                {/* Botón menú móvil */}
                                <button
                                    className={`
                                        lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-md 
                                        transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary
                                        ${isMenuActive || mobileMenuOpen 
                                            ? 'text-black hover:bg-gray-100 active:bg-gray-200' 
                                            : 'text-white hover:bg-white/20 active:bg-white/30'
                                        }
                                    `}
                                    onClick={toggleMobileMenu}
                                    aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
                                    aria-expanded={mobileMenuOpen}
                                >
                                    <div className="relative w-6 h-6">
                                        <span className={`
                                            absolute top-1/2 left-1/2 w-5 h-0.5 bg-current transition-all duration-300 transform -translate-x-1/2 -translate-y-1/2
                                            ${mobileMenuOpen ? 'rotate-45' : '-translate-y-1.5'}
                                        `} />
                                        <span className={`
                                            absolute top-1/2 left-1/2 w-5 h-0.5 bg-current transition-all duration-300 transform -translate-x-1/2 -translate-y-1/2
                                            ${mobileMenuOpen ? 'opacity-0' : ''}
                                        `} />
                                        <span className={`
                                            absolute top-1/2 left-1/2 w-5 h-0.5 bg-current transition-all duration-300 transform -translate-x-1/2 -translate-y-1/2
                                            ${mobileMenuOpen ? '-rotate-45' : 'translate-y-1.5'}
                                        `} />
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </nav>

                {/* Menú móvil mejorado */}
                <div className={`
                    fixed inset-0 z-40 lg:hidden transition-all duration-300 transform
                    ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
                `}>
                    {/* Overlay */}
                    <div 
                        className={`
                            absolute inset-0 bg-black transition-opacity duration-300
                            ${mobileMenuOpen ? 'opacity-50' : 'opacity-0 pointer-events-none'}
                        `}
                        onClick={closeMobileMenu}
                    />
                    
                    {/* Panel del menú */}
                    <div className={`
                        absolute right-0 top-0 h-full w-full max-w-sm bg-white shadow-2xl transform transition-transform duration-300 ease-in-out
                        ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
                    `}>
                        <MobileMenu
                            isOpen={mobileMenuOpen}
                            menuItems={menuItems}
                            activeSubmenu={activeMobileSubmenu}
                            setActiveSubmenu={setActiveMobileSubmenu}
                            onNavigate={onNavigate}
                            telefono={formatearTelefono(TELEFONO_CONTACTO)}
                        />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Navbar;