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

    document.body.classList.toggle('overflow-hidden', mobileMenuOpen);

    if (mobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('resize', handleResize);
      document.body.classList.remove('overflow-hidden');
    };
  }, [mobileMenuOpen, navRef, setMobileMenuOpen, setActiveMobileSubmenu]);
};

