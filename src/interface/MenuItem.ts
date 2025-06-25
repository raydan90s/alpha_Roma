// types.ts

export type MenuOption = {
  label: string;
  description?: string;
  href: string;
  icon?: React.ElementType;
};

export type MenuItem = {
  title: string;
  linkTo?: string;
  description?: string;
  options?: MenuOption[];
};

export type DesktopMenuProps = {
  menuItems: MenuItem[];
  hoveredMenu: number | null;
  setHoveredMenu: (index: number | null) => void;
  onNavigate: (href: string) => void;
  isMenuActive: boolean;
};

export type MobileMenuProps = {
  isOpen: boolean;
  menuItems: MenuItem[];
  activeSubmenu: number | null;
  setActiveSubmenu: (index: number | null) => void;
  onNavigate: (href: string) => void;
  telefono: string;
};

export type MegaMenuProps = {
  item: MenuItem;
  hoveredMenu: number | null;
  onNavigate: (href: string) => void;
  isMenuActive: boolean;

};

