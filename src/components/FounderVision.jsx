import React from "react";

const founderImage = "/shefeeja.jpeg"; // replace with Shefeeja's photo

export default function FounderVision() {
  return (
    <section className="bg-gradient-to-b from-[#f6efe5]/50 via-[#f6efe5]/50 to-[#f6efe5]/20 px-4 sm:px-6 md:px-12 py-36 space-y-32">

      {/* Header */}
      <div className="max-w-3xl mx-auto text-center mb-24">
        <h1 className="text-4xl md:text-6xl font-MeaCulpa-regular text-amber-900 mb-6 tracking-wide">
          About Our Boutique
        </h1>
        <p className="text-[#3A3F1F]/80 md:text-lg leading-relaxed tracking-wide">
          Discover the story behind <strong>Hea By Pink Bubbles</strong>, the
          vision of our founder Shafeeja Nizar, and our mission to craft
          handpicked, elegant collections for every special moment.
        </p>
      </div>

      {/* Founder Section */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center bg-white/80 shadow-2xl  p-10 md:p-16 gap-12 md:gap-20">
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
          <h2 className="text-3xl md:text-4xl text-amber-900 font-semibold tracking-wide">
            SHAFEEJA
          </h2>
          <p className="text-amber-900  font-medium text-sm md:text-xl">
            Founder & Creative Director
          </p>
          <p className="text-[#3A3F1F]/80 leading-relaxed tracking-wide">
            What began as Pink Bubbles has grown into Hea By Pink Bubbles, built
            on the idea of creating clothing that truly matters to people.
            Shafeeja’s vision is to design collections that suit real occasions,
            reflect personal style, and help individuals feel confident in what
            they wear.
          </p>
        </div>
      </div>

      {/* Vision Section */}
      <div className="max-w-5xl mx-auto text-center space-y-10">
        <h2 className="text-4xl md:text-5xl font-MeaCulpa-regular text-amber-900 mb-6 tracking-wide">
          Our Mission
        </h2>
        <p className="text-[#3A3F1F]/80 md:text-lg leading-relaxed tracking-wide max-w-3xl mx-auto">
          “Our mission is to deliver beautifully custom-tailored garments that
          bring our clients’ clothing vision to life.”
        </p>
      </div>
    </section>
  );
}
