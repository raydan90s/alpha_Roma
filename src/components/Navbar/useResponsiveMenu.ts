// useResponsiveMenu.ts
import { RefObject, useEffect } from 'react';

interface UseResponsiveMenuProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  setActiveMobileSubmenu: (index: number | null) => void;
  navRef: RefObject<HTMLElement>;
}

export const useResponsiveMenu = ({
  mobileMenuOpen,
  setMobileMenuOpen,
  setActiveMobileSubmenu,
  navRef,
}: UseResponsiveMenuProps) => {
  useEffect(() => {
    const body = document.body;

    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuOpen && navRef.current && !navRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
        setActiveMobileSubmenu(null);
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
        setActiveMobileSubmenu(null);
      }
    };

    // En lugar de toggle, usa add/remove explícito para evitar conflictos con scroll
    if (mobileMenuOpen) {
      body.classList.add('overflow-hidden');
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      // Quita overflow-hidden con un pequeño delay para que el scroll suave funcione bien
      setTimeout(() => {
        body.classList.remove('overflow-hidden');
      }, 100);
      document.removeEventListener('mousedown', handleClickOutside);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('resize', handleResize);
      body.classList.remove('overflow-hidden');
    };
  }, [mobileMenuOpen, navRef, setMobileMenuOpen, setActiveMobileSubmenu]);

};

