import React from "react";

const shefijaImage = "/shefeeja.jpeg"; // replace with Shefija's photo
const roppaImage = "/roopa.jpeg"; // replace with Roopa's photo

export default function FounderVision() {
  return (
    <section className="bg-gradient-to-b from-[#f6efe5]/50 via-[#f6efe5]/50 to-[#f6efe5]/20 px-4 sm:px-6 md:px-12 py-24 md:py-36 space-y-32">

      {/* Header */}
      <div className="max-w-3xl mx-auto text-center mb-24">
        <h1 className="text-4xl md:text-6xl font-MeaCulpa-regular text-amber-900 mb-6 tracking-wide">
          About Our Boutique
        </h1>
        <p className="text-[#3A3F1F]/80 md:text-lg leading-relaxed tracking-wide">
          Discover the story behind <strong>Hea By Pink Bubbles</strong>. Shefija, the inventor of <strong>Pink Bubbles</strong>, expanded her vision with Roopa to create Hea By Pink Bubbles, crafting handpicked, elegant collections for every special moment.
        </p>
      </div>

      {/* Founders Section */}
      <div className="max-w-6xl mx-auto bg-white/80 shadow-2xl p-10 md:p-16 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20">

        {/* Shefija */}
        <div className="flex flex-col items-center text-center md:items-start md:text-left space-y-6">
          <div className="w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden shadow-xl border-4 border-[#D8E2C4] flex items-center justify-center mb-4">
            <img
              src={shefijaImage}
              alt="Shefija, Founder & Creative Director"
              className="w-full h-full object-contain"
            />
          </div>
          <h2 className="text-3xl md:text-4xl text-amber-900 font-semibold tracking-wide">
            SHEFIJA
          </h2>
          <p className="text-amber-900 font-medium text-sm md:text-xl">
            Founder & Creative Director
          </p>
          <p className="text-[#3A3F1F]/80 leading-relaxed tracking-wide">
            Shefija is the inventor of Pink Bubbles and the creative force behind Hea By Pink Bubbles. Her vision is to design collections that suit real occasions, reflect personal style, and help individuals feel confident in what they wear.
          </p>
        </div>

        {/* Roopa */}
        <div className="flex flex-col items-center text-center md:items-start md:text-left space-y-6">
          <div className="w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden shadow-xl border-4 border-[#D8E2C4] flex items-center justify-center mb-4">
            <img
              src={roppaImage}
              alt="Roopa, Co-Founder & Brand Director"
              className="w-full h-full object-contain"
            />
          </div>
          <h2 className="text-3xl md:text-4xl text-amber-900 font-semibold tracking-wide">
            ROOPA MANOHARI
          </h2>
          <p className="text-amber-900 font-medium text-sm md:text-xl">
            Co-Founder & Brand Director
          </p>
          <p className="text-[#3A3F1F]/80 leading-relaxed tracking-wide">
            Roopa partnered with Shefija to expand Pink Bubbles into Hea By Pink Bubbles. They focus on brand strategy, client experience, and building the boutique into a stylish, elegant destination.
          </p>
        </div>

      </div>

      {/* Vision Section */}
      <div className="max-w-5xl mx-auto text-center space-y-10">
        <h2 className="text-4xl md:text-5xl font-MeaCulpa-regular text-amber-900 mb-6 tracking-wide">
          Our Mission
        </h2>
        <p className="text-[#3A3F1F]/80 md:text-lg leading-relaxed tracking-wide max-w-3xl mx-auto italic">
          “Our mission is to deliver beautifully custom-tailored garments that bring our clients’ clothing vision to life.”
        </p>
      </div>
    </section>
  );
}
