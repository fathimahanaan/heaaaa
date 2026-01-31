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
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 grid gap-10 md:grid-cols-3 text-center md:text-left">
        {/* Brand */}
        <div className="space-y-4">
          <h2 className="font-MeaCulpa-regular text-3xl">
            Hea By Pink Bubbles
          </h2>
          <p className="text-sm leading-relaxed text-[#2E3A16]">
            A boutique dedicated to thoughtfully designed and custom-tailored
            garments, created to bring your clothing ideas to life.
          </p>
        </div>

        {/* Contact */}
        <div className="space-y-4">
          <h3 className="font-semibold tracking-wide">Contact</h3>

          {contactLinks.map((contact, idx) => {
            const Icon = contact.icon;
            return contact.href ? (
              <a
                key={idx}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center md:justify-start gap-3 text-sm hover:text-[#8B9B68]"
              >
                <Icon className="w-4 h-4" />
                <span>{contact.text}</span>
              </a>
            ) : (
              <div
                key={idx}
                className="flex items-center justify-center md:justify-start gap-3 text-sm"
              >
                <Icon className="w-4 h-4" />
                <span>{contact.text}</span>
              </div>
            );
          })}
        </div>

        {/* Social */}
        <div className="space-y-4">
          <h3 className="font-semibold tracking-wide">Follow Us</h3>

          {socialLinks.map((social, idx) => {
            const Icon = social.icon;
            return (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-sm hover:text-[#8B9B68]"
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
