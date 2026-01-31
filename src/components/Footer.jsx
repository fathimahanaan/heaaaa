import React from "react";
import { Instagram, Phone, Mail, MapPin } from "lucide-react";

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
      <div className="w-full flex flex-col md:flex-row items-center md:items-start justify-between px-4 md:px-[70px] py-12 text-sm font-body">
        
        {/* Left - Contact */}
        <div className="flex flex-col items-center md:items-start gap-4 mb-8 md:mb-0">
          <h3 className="font-semibold tracking-wide">Contact</h3>
          {contactLinks.map((contact, idx) => {
            const Icon = contact.icon;
            return contact.href ? (
              <a
                key={idx}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#8B9B68] text-center md:text-left"
              >
                <Icon className="w-4 h-4" />
                <span>{contact.text}</span>
              </a>
            ) : (
              <div
                key={idx}
                className="flex items-center gap-2 text-center md:text-left"
              >
                <Icon className="w-4 h-4" />
                <span>{contact.text}</span>
              </div>
            );
          })}
        </div>

        {/* Center - Logo */}
        <div className="flex flex-col items-center mb-8 md:mb-0">
          <img
            src="/gpt.png" // replace with your logo
            alt="logo"
            className="h-20 w-auto mb-4" // large logo
          />
          <h2 className="font-MeaCulpa-regular text-3xl">
            Hea By Pink Bubbles
          </h2>
        </div>

        {/* Right - Social */}
        <div className="flex flex-col items-center md:items-end gap-4">
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
      <div className="border-t border-gray-200 py-4 text-center text-xs text-amber-900">
        © {new Date().getFullYear()} Hea By Pink Bubbles. All rights reserved.
      </div>
    </footer>
  );
}
