import React from "react";
import { Instagram, Phone, Mail, MapPin } from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Collections", path: "/collections" },
  { name: "Lookbook", path: "/lookbook" },
  { name: "Visit Us", path: "/visit" },
  { name: "Our Story", path: "/about" },
];

const contactLinks = [
  {
    icon: MapPin,
    text: (
      <>
        Sana Arcade, Chittilappally
        <br />
        PIN 680551, Thrissur
      </>
    ),
  },
  {
    icon: Phone,
    text: "+91 73565 24462",
    href: "https://wa.me/917356524462?text=I%20would%20like%20to%20enquire",
  },
  {
    icon: Mail,
    text: "heabypinkbubbles@gmail.com",
    href: "mailto:heabypinkbubbles@gmail.com",
  },
];

const socialLinks = [
  {
    icon: Instagram,
    label: "hea_bypinkbubbles",
    href: "https://www.instagram.com/hea_bypinkbubbles/",
  },
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 text-[#2E3A16]">
      {/* Main footer bar */}
      <div className="w-full flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between px-4 md:px-[70px] py-12 text-sm font-body gap-12 md:gap-0 text-center md:text-left">
        
        {/* Left - Contact */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <h3 className="font-semibold tracking-wide">Contact</h3>
          {contactLinks.map((contact, idx) => {
            const Icon = contact.icon;
            return contact.href ? (
              <a
                key={idx}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col md:flex-row items-center md:items-start gap-2 hover:text-[#8B9B68]"
              >
                <Icon className="w-4 h-4" />
                <span>{contact.text}</span>
              </a>
            ) : (
              <div
                key={idx}
                className="flex flex-col md:flex-row items-center md:items-start gap-2"
              >
                <Icon className="w-4 h-4" />
                <span>{contact.text}</span>
              </div>
            );
          })}
        </div>

        {/* Center - Nav Links */}
        <div className="flex flex-col items-center gap-4">
          <h3 className="font-semibold tracking-wide mb-2">Explore</h3>
          <div className="flex flex-col md:flex-row gap-2 md:gap-6 text-[#4A3428]">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.path}
                className="hover:text-[#7A4B12] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        {/* Right - Logo & Social */}
        <div className="flex flex-col items-center md:items-end gap-4">
          <img
            src="/logo.png" // replace with your logo
            alt="logo"
            className="h-20 w-auto mb-2"
          />
          <h2 className="font-MeaCulpa-regular text-[#7A4B12] text-3xl mb-4">
            Hea By Pink Bubbles
          </h2>
          <h3 className="font-semibold tracking-wide">Follow Us</h3>
          {socialLinks.map((social, idx) => {
            const Icon = social.icon;
            return (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#8B9B68]"
              >
                <Icon className="w-5 h-5" />
                <span>{social.label}</span>
              </a>
            );
          })}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-200 py-4 text-center font-semibold text-xs text-[#7A4B12]">
        © {new Date().getFullYear()} Hea By Pink Bubbles. All rights reserved.
      </div>
    </footer>
  );
}
