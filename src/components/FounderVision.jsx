import React from "react";

const shefijaImage = "/whaaResize.jpg"; // Shefija's photo
const roppaImage = "/roopaResize.jpg"; // Roopa's photo

export default function FounderVision() {
  return (
    <section className="bg-gradient-to-b from-[#f6efe5]/50 via-[#f6efe5]/50 to-[#f6efe5]/20 px-4 sm:px-6 md:px-12 py-24 md:py-36 space-y-32">
      {/* Header */}
      <div className="max-w-3xl mx-auto text-center mb-24">
        <h1 className="text-4xl md:text-6xl font-MeaCulpa-regular text-amber-900 mb-6 tracking-wide">
          About Our Boutique
        </h1>
       <p className="text-[#3A3F1F]/80 md:text-lg leading-relaxed tracking-wide">
  Discover the story behind <strong>Hea By Pink Bubbles</strong>. Shefija, the creator of <strong>Pink Bubbles</strong>
</p>
      </div>

      {/* Founders Section */}
      <div className="max-w-4xl mx-auto bg-white/80 shadow-2xl p-10 md:p-16 flex flex-col items-center space-y-16">
        {/* Shefija (Primary Founder) */}
        <div className="flex flex-col items-center text-center space-y-6">
          <div className="w-52 h-52 md:w-60 md:h-60 rounded-full overflow-hidden shadow-xl border-4 border-[#D8E2C4] flex items-center justify-center mb-4 group">
            <img
              src={shefijaImage}
              alt="Shefija, Founder & Creative Director"
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-amber-900 font-bold tracking-wide">
            SHEFIJA
          </h2>
          <p className="text-amber-900 font-semibold text-sm md:text-xl">
            Founder & Creative Director
          </p>
          <p className="text-[#3A3F1F]/80 leading-relaxed tracking-wide max-w-2xl">
            Shefija is the inventor of Pink Bubbles and the creative force
            behind Hea By Pink Bubbles. Her vision is to design collections that
            suit real occasions, reflect personal style, and help individuals
            feel confident in what they wear.
          </p>
        </div>

        
        
        
      </div>

      {/* Vision Section */}
      <div className="max-w-5xl mx-auto text-center space-y-10">
        <h2 className="text-4xl md:text-5xl font-MeaCulpa-regular text-amber-900 mb-6 tracking-wide">
          Our Mission
        </h2>
        <p className="text-[#3A3F1F]/80 md:text-lg leading-relaxed tracking-wide max-w-3xl mx-auto italic">
          “Our mission is to deliver beautifully custom-tailored garments that
          bring our clients’ clothing vision to life.”
        </p>
      </div>
    </section>
  );
}
