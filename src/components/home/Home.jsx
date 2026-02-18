import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const handleVisitClick = () => {
    navigate("/visit"); // navigate to the VisitUs page
  };

  return (
    <section
      className="w-full h-screen flex items-center justify-center text-center px-6 
                 bg-center bg-no-repeat bg-cover  sm:bg-white md:bg-contain"
      style={{ backgroundImage: "url('kidResize.jpeg')" }}
    >
      <div className="max-w-xl bg-white/30 p-10">
        <h1 className="font-Lato text-[#3A3F1F] text-3xl md:text-6xl tracking-wide mb-6">
          Hea
        </h1>

        <p className="text-gray-700/90 mb-8">
          A thoughtfully curated boutique celebrating timeless silhouettes and
          quiet elegance.
        </p>

        <button
          onClick={handleVisitClick}
          className="text-sm font-semibold tracking-widest text-[#3A3F1F] hover:text-[#556B2F] transition-colors"
        >
          VISIT OUR STORE
        </button>
      </div>
    </section>
  );
}
