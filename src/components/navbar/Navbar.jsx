import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Collections", path: "/collections" },
  { name: "Lookbook", path: "/lookbook" },
  { name: "Visit Us", path: "/visit" },
  { name: "Our Story", path: "/about" },
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
        <span className="hidden md:block font-MeaCulpa-regular">Search</span>

        <span className="font-Lato text-amber-600 text-2xl">Hea</span>

        <span className="hidden md:block font-MeaCulpa-regular text-gray-700">
          Email | WhatsApp
        </span>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex w-full h-20 border-b border-gray-200 items-center">
        <ul className="max-w-7xl mx-auto w-full flex items-center justify-center gap-10 text-sm font-body font-medium">
          {navLinks.map(({ name, path }) => (
            <li key={name}>
              <NavLink
                to={path}
                end={path === "/"}
                className={({ isActive }) =>
                  isActive
                    ? "text-[#8B9B68] border-b-2 border-[#8B9B68]"
                    : "text-amber-900 hover:text-[#8B9B68]"
                }
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Nav */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <ul className="flex flex-col items-center gap-6 py-6 text-sm font-body font-medium">
            {navLinks.map(({ name, path }) => (
              <li key={name}>
                <NavLink
                  to={path}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#8B9B68]"
                      : "text-amber-900"
                  }
                >
                  {name}
                </NavLink>
              </li>
            ))}
            <li className="text-gray-500 text-xs pt-2">
              Email • WhatsApp
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
