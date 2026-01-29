import React from "react";
import { NavLink } from "react-router-dom";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Collections", path: "/collections" },
  { name: "Lookbook", path: "/lookbook" },
  { name: "Visit Us", path: "/visit" },
  { name: "Our Story", path: "/about" },
];

export default function Navbar() {
  return (
    <header className="w-full fixed top-0 z-50">
      <div className="w-full bg-[#8B9B68] text-white h-11 flex items-center justify-center px-4">
        <div className="flex flex-wrap items-center gap-4 text-m md:text-base font-MeaCulpa-regular tracking-wide text-center">
          <span className="text-lg ">Hea By Pink Bubbles</span>
          <span className="hidden sm:inline-block opacity-70"> | </span>
          <span className="opacity-90">Curated Styles • Timeless Pieces</span>
          <span className="hidden sm:inline-block opacity-70">|</span>
          <span className="opacity-90">Visit Us In-Store</span>
        </div>
      </div>

      <div className="w-full flex items-center justify-between px-[70px] py-4 text-sm font-body font-medium bg-white">
        <span className="font-MeaCulpa-regular">Search</span>
        <span className="font-Lato text-amber-600 text-2xl">Hea </span>
        <span className="font-MeaCulpa-regular text-gray-700">
          Email | WhatsApp
        </span>
      </div>

      <nav className="w-full bg-white h-20 border-b border-gray-200   flex items-center">
        <ul className="max-w-7xl mx-auto w-full flex items-center justify-center gap-10 text-sm font-body font-medium">
          {navLinks.map(({ name, path }) => (
            <li key={name}>
              <NavLink
                to={path}
                end={path === "/"}
                className={({ isActive }) =>
                  isActive
                    ? "text-m text-[#8B9B68] border-b-2 border-[#8B9B68]"
                    : "text-m text-amber-900 hover:text-[#8B9B68]"
                }
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
