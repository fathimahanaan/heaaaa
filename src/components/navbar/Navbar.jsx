import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, Phone, Mail, Instagram } from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Collections", path: "/collections" },
  { name: "Lookbook", path: "/lookbook" },
  { name: "Visit Us", path: "/visit" },
  { name: "Our Story", path: "/about" },
];

const contactLinks = [
  {
    href: "https://wa.me/917356524462?text=I%20would%20like%20to%20enquire",
    icon: Phone,
    label: "+91 73565 24462",
    ariaLabel: "Chat with Hea By Pink Bubbles on WhatsApp",
  },
  {
    href: "mailto:heabypinkbubbles@gmail.com",
    icon: Mail,
    label: "heabypinkbubbles@gmail.com",
    ariaLabel: "Send email to Hea By Pink Bubbles",
  },
  {
    href: "https://www.instagram.com/hea_bypinkbubbles/",
    icon: Instagram,
    label: "hea_bypinkbubbles",
    ariaLabel: "Visit Hea By Pink Bubbles Instagram",
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 z-50 bg-white">
      {/* Top announcement bar */}
      <div className="w-full bg-[#8B9B68] text-white h-11 flex items-center justify-center px-3">
        <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-MeaCulpa-regular tracking-wide text-center">
          <span className="text-sm sm:text-lg">Hea By Pink Bubbles</span>
          <span className="hidden sm:inline-block opacity-70"> | </span>
          <span className="opacity-90">Curated Styles • Timeless Pieces</span>
        </div>
      </div>

      {/* Middle bar */}
      <div className="w-full flex items-center justify-between px-4 md:px-[70px] py-4 text-sm font-body font-medium">
        {/* Left - Instagram */}
        <span className="hidden md:block font-MeaCulpa-regular">
          <a
            href={contactLinks[2].href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-[#8B9B68] transition"
          >
            <Instagram className="w-4 h-4" />
            <span className="text-sm">{contactLinks[2].label}</span>
          </a>
        </span>

        {/* Center - Logo */}
        <div className="flex items-center space-x-1">
          <img src="/logo.png" alt="Logo" className="h-20 w-auto" />
          <p className="font-MeaCulpa-regular text-2xl text-amber-900">Hea By Pink Bubbles</p>
        </div>

        {/* Right - Desktop Contact */}
        <div className="hidden md:flex items-center gap-4 font-MeaCulpa-regular text-gray-700 text-sm">
          {contactLinks.slice(0, 2).map((contact) => {
            const Icon = contact.icon;
            return (
              <React.Fragment key={contact.label}>
                <a
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-[#8B9B68]"
                  aria-label={contact.ariaLabel}
                >
                  <Icon className="w-4 h-4" />
                  <span>{contact.label}</span>
                </a>
                {contact.label === "+91 73565 24462" && (
                  <span className="opacity-60">|</span>
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex w-full h-20 border-b border-gray-200 items-center bg-white">
        <ul className="max-w-7xl mx-auto w-full flex items-center justify-center gap-10 text-sm font-body font-medium">
          {navLinks.map(({ name, path }) => (
            <li key={name}>
              <NavLink
                to={path}
                end={path === "/"}
                className={({ isActive }) =>
                  isActive
                    ? "text-[#8B9B68] border-b-2 border-[#8B9B68] pb-1"
                    : "text-amber-900 hover:text-[#8B9B68] pb-1"
                }
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Sliding Nav */}
      <div
        className={`md:hidden overflow-hidden bg-white border-b border-gray-200
          transition-all duration-500 ease-in-out
          ${open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <ul className="flex flex-col items-center gap-6 py-6 text-sm font-body font-medium">
          {navLinks.map(({ name, path }) => (
            <li key={name}>
              <NavLink
                to={path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "text-[#8B9B68]"
                    : "text-amber-900 hover:text-[#8B9B68]"
                }
              >
                {name}
              </NavLink>
            </li>
          ))}

          {/* Mobile Contact Info */}
          <div className="pt-4 border-t border-gray-200 w-full flex justify-center">
            <div className="font-MeaCulpa-regular text-gray-700 flex flex-col items-center gap-3 text-xs">
              {contactLinks.map((contact) => {
                const Icon = contact.icon;
                return (
                  <a
                    key={contact.label}
                    href={contact.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-[#8B9B68]"
                    aria-label={contact.ariaLabel}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{contact.label}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </ul>
      </div>
    </header>
  );
}
