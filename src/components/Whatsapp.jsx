import React from "react";
import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsApp() {
  const whatsappNumber = "917356524462";
  const message = "Hi, I would like to enquire";

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 left-6 z-50
  flex items-center gap-3

  bg-white/90
  text-green-900

  px-5 py-3 rounded-sm
  shadow-md backdrop-blur-sm
  
  hover:bg-amber-50
  hover:shadow-lg
  hover:-translate-y-0.5

  transition-all duration-300 ease-out
"
    >
      <FaWhatsapp className="w-6 h-6" />
    </a>
  );
}
