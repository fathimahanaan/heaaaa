import React from "react";
import { Phone, Mail, Instagram } from "lucide-react";

export default function VisitUs() {
  const contacts = [
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
      className: "hidden md:flex",
    },
  ];

  return (
    <section className="bg-[#D8E2C4] px-4 sm:px-6 md:px-12 py-32">
      {/* Header */}
      <div className="max-w-3xl mx-auto text-center mb-20">
        <h1 className="text-4xl md:text-6xl font-MeaCulpa-regular text-amber-900 mb-6 tracking-wide">
          Visit Us
        </h1>
        <p className="text-[#3A3F1F]/80 md:text-lg leading-relaxed tracking-wide">
          Come explore our curated collection in person. Our boutique offers a
          calm, intimate shopping experience with handpicked pieces for every
          special moment.
        </p>
      </div>

      {/* Contact Info */}
      <div className="max-w-3xl mx-auto bg-white/40 rounded-md p-12 shadow-lg backdrop-blur-sm mb-16 transition-all hover:scale-105 duration-300 text-center">
        <h2 className="text-2xl md:text-3xl text-[#556B2F] mb-4 font-MeaCulpa-regular">
          Hea By Pink Bubbles
        </h2>
        <p className="text-[#556B2F] font-medium text-base mb-6">
          Sana Arcade, Chittilappally, Thrissur - 680551
        </p>

        {/* Render Contacts Dynamically */}
        <div className="flex flex-col items-center gap-4">
          {contacts.map((contact, idx) => {
            const Icon = contact.icon;
            return (
              <a
                key={idx}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={contact.ariaLabel}
                className={`flex items-center gap-2 hover:text-[#8B9B68] transition ${contact.className || ""}`}
              >
                <Icon className="w-4 h-4" />
                <span>{contact.label}</span>
              </a>
            );
          })}
        </div>
      </div>

      {/* Map */}
      <div className="max-w-5xl mx-auto rounded-md overflow-hidden shadow-xl">
        <iframe
          title="Hea By Pink Bubbles Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.123456789!2d76.223456!3d10.523456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7abc123456789%3A0x123456789abcdef!2sSana%20Arcade%2C%20Chittilappally%2C%20Thrissur!5e0!3m2!1sen!2sin!4v1698765432100!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
}
