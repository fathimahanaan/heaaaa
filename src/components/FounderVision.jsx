import React from "react";

const founderImage = "/shefeeja.jpeg"; // replace with Shefeeja's photo

export default function FounderVision() {
  return (
    <section className="bg-[#D8E2C4]/60 px-4 sm:px-6 md:px-12 py-36">
      {/* Header */}
      <div className="max-w-3xl mx-auto text-center mb-24">
        <h1 className="text-4xl md:text-6xl font-MeaCulpa-regular text-[#3A3F1F] mb-6 tracking-wide">
          Meet the Founder
        </h1>
        <p className="text-[#3A3F1F]/80 md:text-lg leading-relaxed tracking-wide">
          Shefeeja Nizar is the heart and vision behind <strong>Hea By Pink Bubbles</strong>, 
          a boutique collection where timeless elegance meets playful sophistication. 
          Her passion for curated, handcrafted fashion ensures each piece tells a story and celebrates life’s special moments.
        </p>
      </div>

      {/* Founder Card */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center bg-white/90 rounded shadow-2xl p-10 md:p-16 gap-12 md:gap-20">
        {/* Founder Photo */}
        <div className="flex-shrink-0 w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden shadow-xl border-4 border-[#D8E2C4] flex items-center justify-center">
          <img
            src={founderImage}
            alt="Shefeeja Nizar"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Founder Bio */}
        <div className="text-center md:text-left space-y-4 md:space-y-6">
          <h2 className="text-3xl md:text-4xl text-[#556B2F] font-semibold tracking-wide">
            Shefeeja Nizar
          </h2>
          <p className="text-[#556B2F] font-medium text-lg md:text-xl">
            Founder & Creative Director
          </p>
          <p className="text-[#3A3F1F]/80 leading-relaxed  tracking-wide">
            What began as "Pink Bubbles" has blossomed into the boutique 
            <strong> Hea By Pink Bubbles</strong>. Shefeeja’s vision is simple yet powerful: 
            to create collections that make every occasion memorable and every outfit unforgettable.
          </p>
         
          <p className="text-[#3A3F1F]/80 leading-relaxed md:text-lg tracking-wide italic">
            “Fashion is not just what we wear, but how we express joy, celebration, and individuality.” — Shefeeja Nizar
          </p>
        </div>
      </div>
    </section>
  );
}
