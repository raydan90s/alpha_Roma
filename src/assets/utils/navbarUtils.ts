import { scrollToHash, handleScrollToTop } from "./scrollUtils";
import { NavigateFunction } from "react-router-dom";

export const handleMenuItemClick = (
  navigate: NavigateFunction,
  setHoveredMenu: (value: number | null) => void,
  setMobileMenuOpen: (value: boolean) => void,
  setActiveMobileSubmenu: (value: number | null) => void
) => (href: string) => {
  const navigateAndScroll = (path: string, hash?: string) => {
    navigate(path);
    setTimeout(() => {
      handleScrollToTop();
      if (hash) scrollToHash(hash);
    }, 950);
  };

  if (href.startsWith("/about#")) {
    navigateAndScroll("/about", href.split("#")[1]);
  } else if (href.startsWith("/servicios#")) {
    navigateAndScroll("/servicios", href.split("#")[1]);
  } else if (href.startsWith("/camaras#")) {
    navigateAndScroll("/camaras", href.split("#")[1]);
  } else if (href.startsWith("/paquetes#")) {
    navigateAndScroll("/paquetes", href.split("#")[1]);
  } else if (href.startsWith("/seguridad-hogar#")) {
    navigateAndScroll("/seguridad-hogar", href.split("#")[1]);
  } else {
    navigate(href);
    setTimeout(handleScrollToTop, 0);
  }

  setHoveredMenu(null);
  setMobileMenuOpen(false);
  setActiveMobileSubmenu(null);
};

export const formatearTelefono = (numero: string): string => {
  if (numero.startsWith("593") && numero.length === 12) {
    const parte1 = numero.slice(3, 6);
    const parte2 = numero.slice(6, 9);
    const parte3 = numero.slice(9, 12);
    return `+593 ${parte1} ${parte2} ${parte3}`;
  }
  return numero;
};