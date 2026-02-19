import React from "react";
import CollectionGridPage from "./CollectionGridPage";

const lookbookItems = [
  {
    type: "image",
    src: "/aResize.jpg",
    title: "Soft Presence",
    description: "Light textures and calm tones create an effortlessly refined look.",
  },
  {
    type: "image",
    src: "/sResize.jpg",
    title: "Modern Ease",
    description: "Relaxed styling designed for everyday elegance and comfort.",
  },
  {
    type: "video",
    src: "/aysha.mp4",
    title: "Natural Motion",
    description: "Movement reveals the garment’s fluid and graceful character.",
  },
  {
    type: "image",
    src: "/mannaResize.jpeg",
    title: "Balanced Style",
    description: "Clean proportions and subtle detail shape a timeless silhouette.",
  },
  {
    type: "video",
    src: "/manna.mp4",
    title: "Flow State",
    description: "A gentle rhythm that highlights softness and natural movement.",
  },
  {
    type: "image",
    src: "/nResize.jpeg",
    title: "Quiet Confidence",
    description: "Minimal lines express effortless sophistication.",
  },
  {
    type: "video",
    src: "/c.mp4",
    title: "Living Fabric",
    description: "Texture and motion bring depth and character to the look.",
  },
  {
    type: "image",
    src: "/naahri.jpeg",
    title: "Understated Charm",
    description: "Soft styling that feels calm, wearable, and refined.",
  },
  {
    type: "image",
    src: "/kResize.jpeg",
    title: "Everyday Grace",
    description: "Simple design elevated through thoughtful detail.",
  },
  {
    type: "video",
    src: "/neenu.mp4",
    title: "Effortless Flow",
    description: "Movement enhances the garment’s natural elegance.",
  },
  {
    type: "image",
    src: "/ayResize.jpg",
    title: "Modern Calm",
    description: "A relaxed composition that blends style and comfort.",
  },
  {
    type: "video",
    src: "/adu.mp4",
    title: "Fluid Expression",
    description: "Dynamic motion captures the spirit of ease and freedom.",
  },
  {
    type: "image",
    src: "/mmResize.jpeg",
    title: "Timeless Form",
    description: "Classic structure meets contemporary softness.",
  },
  {
    type: "image",
    src: "/miResize.jpeg",
    title: "Soft Statement",
    description: "Gentle styling that speaks through simplicity.",
  },
  {
    type: "image",
    src: "/muResize.jpeg",
    title: "Refined Comfort",
    description: "Designed for everyday wear with elevated detail.",
  },
  {
    type: "video",
    src: "/fathi.mp4",
    title: "Grace in Motion",
    description: "A flowing silhouette that moves with natural ease.",
  },
  {
    type: "image",
    src: "/mohammed.jpeg",
    title: "Subtle Elegance",
    description: "Quiet tones and clean styling create lasting appeal.",
  },
];


export default function ElegantLookbook() {
  return (
    <section className="bg-gradient-to-b from-[#F4F3EF] to-[#E8E7E2] px-4 sm:px-6 md:px-12 py-24">
      {/* Header */}
      <div className="max-w-3xl mx-auto text-center mb-20">
        <h1 className="text-4xl md:text-6xl font-MeaCulpa-regular text-amber-900 mb-6 tracking-tight">
          The Look Book
        </h1>
        <p className="text-[#3A3F1F]/70 leading-loose md:text-lg">
          A fashion lookbook blending timeless aesthetics with modern,
          expressive styling.
        </p>
      </div>

      {/* Masonry Grid */}
      <div className="max-w-4xl mx-auto columns-2 sm:columns-2 lg:columns-3 gap-8 [column-fill:_balance]">
        {lookbookItems.map((item, i) => (
          <div
            key={i}
            className="mb-6 sm:mb-8 break-inside-avoid rounded-2xl bg-[#F8F7F3] shadow-sm hover:shadow-lg transition-shadow duration-500"
          >
            <div className="overflow-hidden rounded-t-2xl">
              {item.type === "image" ? (
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                />
              ) : (
                <video
                  src={item.src}
                  className="w-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              )}
            </div>

            <div className="p-6 text-[#262A12]">
              <h2 className="text-xl md:text-2xl font-Lato mb-3 tracking-wide">
                {item.title}
              </h2>
              <p className="text-[#3A3F1F]/80 leading-relaxed text-sm md:text-base">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
       
    </section>
  );
}
