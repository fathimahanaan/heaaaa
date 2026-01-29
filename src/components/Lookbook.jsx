import React from "react";

 

const lookbookItems = [
  {
    type: "image",
    src: "/a.jpeg",
    title: "Soft Layers",
    description:
      "Soft layers and warm tones styled for an effortless seasonal look.",
  },
  {
    type: "image",
    src: "/s.jpeg",
    title: "Relaxed Silhouette",
    description:
      "A relaxed silhouette highlighting comfort, texture, and everyday elegance.",
  },
  {
    type: "video",
    src: "/aysha.mp4",
    title: "In Motion",
    description:
      "Subtle motion reveals how the look moves naturally with the body.",
  },
  {
    type: "image",
    src: "/manna.jpeg",
    title: "Balanced Form",
    description:
      "Balanced proportions and muted details create a timeless, easygoing style.",
  },
  {
    type: "video",
    src: "/video.mp4",
    title: "Natural Flow",
    description:
      "Captured in motion, emphasizing fluidity and natural rhythm.",
  },
  {
    type: "image",
    src: "/n.jpeg",
    title: "Clean Lines",
    description:
      "Clean lines and soft fabrics come together in a refined casual look.",
  },
  {
    type: "video",
    src: "/c.mp4",
    title: "Details in Motion",
    description:
      "A brief moment of movement that brings texture and form to life.",
  },
  {
    type: "image",
    src: "/nh.jpeg",
    title: "Understated Ease",
    description:
      "An understated composition focused on comfort, tone, and detail.",
  },
  {
    type: "image",
    src: "/k.jpeg",
    title: "Everyday Edit",
    description:
      "Simple styling that highlights the beauty of everyday wear.",
  },
  {
    type: "video",
    src: "/neenu.mp4",
    title: "Effortless Movement",
    description:
      "Gentle motion showcasing ease, flow, and effortless styling.",
  },
    {
    type: "image",
    src: "/ay.jpeg",
    title: "Everyday Edit",
    description:
      "Simple styling that highlights the beauty of everyday wear.",
  },
     {
    type: "image",
    src: "/adu.jpeg",
    title: "Everyday Edit",
    description:
      "Simple styling that highlights the beauty of everyday wear.",
  },
       {
    type: "image",
    src: "/mm.jpeg",
    title: "Everyday Edit",
    description:
      "Simple styling that highlights the beauty of everyday wear.",
  },
    {
    type: "image",
    src: "/mi.jpeg",
    title: "Everyday Edit",
    description:
      "Simple styling that highlights the beauty of everyday wear.",
  },
     {
    type: "image",
    src: "/mu.jpeg",
    title: "Everyday Edit",
    description:
      "Simple styling that highlights the beauty of everyday wear.",
  },
];


export default function ElegantLookbook() {
  return (
    <section className="bg-gradient-to-b from-[#F4F3EF] to-[#E8E7E2] px-4 sm:px-6 md:px-12 py-24">
      {/* Header */}
      <div className="max-w-3xl mx-auto text-center mb-20">
        <h1 className="text-4xl md:text-6xl font-MeaCulpa-regular text-[#262A12] mb-6 tracking-tight">
          The Look Book
        </h1>
        <p className="text-[#3A3F1F]/70 leading-loose md:text-lg">
          A curated showcase of editorial photography and videos capturing
          timeless style and playful, modern fashion energy.
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
 
 