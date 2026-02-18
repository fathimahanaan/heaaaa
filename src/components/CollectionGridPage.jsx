import React from "react";
import { AiOutlineShopping } from "react-icons/ai";
 

const whatsappNumber = "917356524462";

const products = [
  {
    id: 1,
    name: "Pakisthani",
    stitchedPrice: "₹2,000",
    unstitchedPrice: "₹1,500",
    image: "/image1.jpeg",
    description: "Elegant handcrafted traditional wear",
  },
];

export default function CollectionGridPage() {
  const createWhatsAppLink = (productName) => {
    const message = encodeURIComponent(
      `Hi! I'm interested in ${productName}. Please share more details.`
    );
    return `https://wa.me/${whatsappNumber}?text=${message}`;
  };

  return (
    <section className="mt-20">
      {/* Header */}
      <div className="max-w-5xl mx-auto text-center mb-14">
        <h1 className="text-3xl md:text-4xl font-MeaCulpa-regular text-amber-900 mb-4">
          In Store
        </h1>
        <p className="text-[#556B2F] md:text-lg max-w-2xl mx-auto">
          Explore our signature styles and transparent pricing, crafted to
          celebrate elegance, individuality, and unforgettable moments.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {products.map((item) => (
          <div
            key={item.id}
            className="bg-[#EEF3E3]   overflow-hidden shadow-lg 
            hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group"
          >
            {/* Image + WhatsApp via Shopping Icon */}
            <div className="relative overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* Shopping Icon linking to WhatsApp */}
              <a
                href={createWhatsAppLink(item.name)}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 right-4 bg-white p-3 rounded-full shadow-md 
                hover:bg-[#556B2F] hover:text-white transition-all duration-300 flex items-center justify-center"
              >
                 <AiOutlineShopping size={22} />
 
              </a>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-4">
              <h2 className="text-xl font-semibold text-amber-900">
                {item.name}
              </h2>

              <p className="text-sm text-[#556B2F]/90">{item.description}</p>

              <div className="text-[#556B2F] font-medium space-y-1">
                <p>Stitched: {item.stitchedPrice}</p>
                <p>Unstitched: {item.unstitchedPrice}</p>
              </div>

              {/* More Info Button linking to WhatsApp */}
              <a
                href={createWhatsAppLink(item.name)}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-white text-amber-900
                hover:bg-[#556B2F]/50 hover:text-white p-3 font-medium  
                transition-all duration-300"
              >
                More Info
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
