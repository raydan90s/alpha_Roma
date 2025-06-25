// WhatsAppButton.tsx
import { generarEnlaceWhatsApp } from '../../messages/messages';
import whatsAppWhite from "../../assets/icon/whatsapp-white.png";
import whatsAppBlack from "../../assets/icon/whatsapp-black.png";

type WhatsAppButtonProps = {
  telefono: string;
  mensaje: string;
  isMenuActive?: boolean;
  hiddenOnMobile?: boolean;
};

const WhatsAppButton = ({
  telefono,
  mensaje,
  isMenuActive = false,
  hiddenOnMobile = false,
}: WhatsAppButtonProps) => {
  return (
    <a
      href={generarEnlaceWhatsApp(mensaje)}
      className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold shadow-lg transition-colors duration-300
        ${isMenuActive
          ? 'bg-black hover:bg-blue-700 text-white'
          : 'bg-white text-black hover:bg-gray-100'}`}
    >
      <img
        src={isMenuActive ? whatsAppWhite : whatsAppBlack}
        className={`h-6 w-6 ${hiddenOnMobile ? 'hidden md:block' : ''}`}
        alt="WhatsApp"
      />
      {telefono}
    </a>
  );
};

export default WhatsAppButton;
