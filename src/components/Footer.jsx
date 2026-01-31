import React from "react";
import { NavLink } from "react-router-dom";
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
      <div className="w-full flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between px-4 md:px-[70px] py-12 text-sm font-body gap-12 md:gap-0 text-center md:text-left">

        {/* Contact Section */}
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

        {/* Navigation Links + Logo */}
        <div className="flex flex-col items-center gap-4">
          <h3 className="font-semibold tracking-wide mb-2">Explore</h3>
          <div className="flex flex-col md:flex-row gap-2 md:gap-6 text-[#4A3428] mb-6">
            {navLinks.map(({ name, path }, idx) => (
              <NavLink
                key={idx}
                to={path}
                end={path === "/"}
                className={({ isActive }) =>
                  isActive
                    ? "text-[#8B9B68]"
                    : "text-amber-900 hover:text-[#7A4B12]"
                }
                onClick={() =>
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  })
                }
              >
                {name}
              </NavLink>
            ))}
          </div>

          {/* Logo & Heading */}
          <img src="/logo.png" alt="logo" className="h-35 w-auto mb-2" />
          <h2 className="font-MeaCulpa-regular text-[#7A4B12] text-3xl">
            Hea By Pink Bubbles
          </h2>
        </div>

        {/* Social Links */}
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

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 py-4 text-center font-semibold text-xs text-[#7A4B12]">
        © {new Date().getFullYear()} Hea By Pink Bubbles. All rights reserved.
      </div>
    </footer>
  );
}
