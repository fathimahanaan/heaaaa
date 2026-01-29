import React from "react";

const founderImage = "/shefeeja.jpeg"; // replace with Shefeeja's photo

export default function FounderVision() {
  return (
    <section className="bg-[#D8E2C4]/60 px-4 sm:px-6 md:px-12 py-36 space-y-32">
      {/* Header */}
      <div className="max-w-3xl mx-auto text-center mb-24">
        <h1 className="text-4xl md:text-6xl font-MeaCulpa-regular text-[#3A3F1F] mb-6 tracking-wide">
          About Our Boutique
        </h1>
        <p className="text-[#3A3F1F]/80 md:text-lg leading-relaxed tracking-wide">
          Discover the story behind <strong>Hea By Pink Bubbles</strong>, the vision of our founder Shefeeja Nizar, 
          and our mission to craft handpicked, elegant collections for every special moment.
        </p>
      </div>

      {/* Founder Section */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center bg-white/90   shadow-2xl p-10 md:p-16 gap-12 md:gap-20">
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
          <p className="text-[#3A3F1F]/80 leading-relaxed tracking-wide">
            What began as "Pink Bubbles" has blossomed into the boutique <strong>Hea By Pink Bubbles</strong>. 
            Shefeeja’s vision is simple yet powerful: to create collections that make every occasion memorable 
            and every outfit unforgettable.
          </p>
          <p className="text-[#3A3F1F]/80 leading-relaxed tracking-wide italic">
            “Fashion is not just what we wear—it’s how we celebrate life’s moments.” — Shefeeja Nizar
          </p>
        </div>
      </div>

      {/* Vision Section */}
      <div className="max-w-5xl mx-auto text-center space-y-10">
        <h2 className="text-4xl md:text-5xl font-MeaCulpa-regular text-[#3A3F1F] mb-6 tracking-wide">
          Our Mission
        </h2>
        <p className="text-[#3A3F1F]/80 md:text-lg leading-relaxed tracking-wide max-w-3xl mx-auto">
         Our mission is to provide high-quality, custom-tailored garments that bring our clients’ clothing visions to life
        </p>
      </div>


   
  
    </section>
  );
}
