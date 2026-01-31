import React, { useState } from "react";
import { Phone, Mail, Instagram, MapPin } from "lucide-react";

export default function VisitUsPage() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const whatsappNumber = "917356524462";
  const emailAddress = "heabypinkbubbles@gmail.com";
  const instagramProfile = "hea_bypinkbubbles";
  const address = "Sana Arcade, Chittilappally, Thrissur - 680551";

  const whatsappText = `Hi, my name is ${name}. ${message}`;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="relative bg-[#D8E2C4] min-h-screen">
      <section className="px-4 sm:px-6 md:px-12 py-32">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-6xl font-MeaCulpa-regular text-amber-900 mb-6 tracking-wide">
            Visit Us
          </h1>
          <p className="text-[#3A3F1F]/80 md:text-lg leading-relaxed tracking-wide mt-4">
            Come explore our curated collection in person. Our boutique offers a
            calm, intimate shopping experience with handpicked pieces for every
            special moment.
          </p>
        </div>

        {/* Contact Card */}
        <div className="max-w-3xl mx-auto bg-white/40 rounded-md p-12 shadow-lg backdrop-blur-sm mb-16">
          {/* Contact Info */}
          <div className="flex flex-col gap-4 mb-8 text-[#556B2F] font-semibold text-center">
            <div className="flex items-center justify-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>{address}</span>
            </div>

            <div className="flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" />
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                +91 73565 24462
              </a>
            </div>

            <div className="flex items-center justify-center gap-2">
              <Mail className="w-5 h-5" />
              <a href={`mailto:${emailAddress}`} className="hover:underline">
                {emailAddress}
              </a>
            </div>

            <div className="flex items-center justify-center gap-2">
              <Instagram className="w-5 h-5" />
              <a
                href={`https://www.instagram.com/${instagramProfile}/`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                @{instagramProfile}
              </a>
            </div>
          </div>

          {/* Form */}
          <h2 className="text-2xl md:text-3xl text-amber-900 mb-6 font-MeaCulpa-regular text-center">
            Send Us a Message
          </h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border border-amber-900/30 p-2 rounded-md focus:outline-none"
              required
            />

            <textarea
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="border border-amber-900/30 p-2 rounded-md resize-none focus:outline-none"
              rows={4}
              required
            />

            <button
              type="submit"
              className="bg-none  border border-amber-900 text-amber-900 font-semibold py-2 px-4 rounded-md hover:bg-amber-800/50 hover:text-white  transition"
            >
              Message
            </button>
          </form>

          {/* Success + Platform Buttons */}
          {submitted && (
            <div className="mt-8 text-center">
              <p className="text-[#556B2F] font-medium mb-4">
                Your message is ready! Choose how you’d like to send it:
              </p>

              <div className="flex justify-center gap-4 flex-wrap">
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                    whatsappText,
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-green-900   px-4 py-2 rounded-md hover:text-green-400"
                >
                  <Phone className="w-4 h-4" />
                  WhatsApp
                </a>

                <a
                  href={`mailto:${emailAddress}?subject=Inquiry from ${name}&body=${encodeURIComponent(
                    message,
                  )}`}
                  className="flex items-center gap-2 text-blue-900  px-4 py-2 rounded-md hover:text-blue-400"
                >
                  <Mail className="w-4 h-4" />
                  Email
                </a>

                <a
                  href={`https://www.instagram.com/${instagramProfile}/`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-pink-900  px-4 py-2 rounded-md hover:text-pink-400"
                >
                  <Instagram className="w-4 h-4" />
                  Instagram
                </a>
              </div>
            </div>
          )}
        </div>

        {/* Map */}
        <div className="max-w-5xl mx-auto rounded-md overflow-hidden shadow-xl mb-32">
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
    </div>
  );
}
