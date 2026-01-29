import React from "react";

export default function Home() {
  return (
    <section
      className="w-full h-screen flex items-center justify-center text-center px-6 
                 bg-center bg-no-repeat bg-cover md:bg-contain"
      style={{ backgroundImage: "url('/kid.jpeg')" }}
    >
      <div className="max-w-xl   bg-white/30 p-10">
        <h1 className="font-Lato text-[#3A3F1F] text-3xl md:text-6xl tracking-wide mb-6">
          Hea
        </h1>

        <p className="text-gray-700/90 mb-8">
          A thoughtfully curated boutique celebrating timeless silhouettes and
          quiet elegance.
        </p>

        <span className="text-sm font-semibold tracking-widest text-[#3A3F1F]">
          VISIT OUR STORE
        </span>
      </div>
    </section>
  );
}
