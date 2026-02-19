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
  {
    id: 2,
    name: "Chanderi Silk with Embroidery",
    Price: "₹2,700",
    image: "/yellow.jpeg",
    description: "Elegant handcrafted traditional wear",
  },
  {
    id: 3,
    name: "Chanderi Silk with Embroidery Green",
    Price: "₹2,700",
    image: "/green.jpeg",
    description: "Elegant handcrafted traditional wear",
  },
  {
    id: 4,
    name: "Linen Cotton",
    Price: "₹2,599",
    image: "/lavender.jpeg",
    description: "Elegant handcrafted traditional wear",
  },
  {
    id: 5,
    name: "Linen Cotton",
    Price: "₹2,599",
    image: "/blue.jpeg",
    description: "Elegant handcrafted traditional wear",
  },
  {
    id: 6,
    name: "Linen Cotton",
    Price: "₹2,599",
    image: "/white.jpeg",
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
    <section className="mt-20 bg-gradient-to-r from-white via-white to-white p-8 rounded-xl shadow-lg">
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
<div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
  {products.map((item) => (
    <div
      key={item.id}
      className="bg-gradient-to-b from-amber-50 to-white rounded-lg shadow-md hover:shadow-xl transition flex flex-col"
    >
      {/* Image + WhatsApp Icon */}
      <div className="relative overflow-hidden rounded-t-lg">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-48 sm:h-56 md:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <a
          href={createWhatsAppLink(item.name)}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-3 right-3 bg-white p-2.5 rounded-full shadow-md 
          hover:bg-[#556B2F] hover:text-white transition-all duration-300 flex items-center justify-center"
        >
          <AiOutlineShopping size={20} />
        </a>
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col justify-between flex-1">
        <div className="space-y-2">
          <h2 className="text-lg font-semibold text-amber-900">{item.name}</h2>
          <p className="text-sm text-[#556B2F]/90">{item.description}</p>

          <div className="text-amber-900 font-medium space-y-1">
            {item.stitchedPrice && <p>Stitched: {item.stitchedPrice}</p>}
            {item.unstitchedPrice && <p>Unstitched: {item.unstitchedPrice}</p>}
            {item.Price && <p>Price: {item.Price}</p>}
          </div>
        </div>

        <a
          href={createWhatsAppLink(item.name)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 block w-full text-center bg-amber-700/50 text-white rounded-md
          hover:bg-[#556B2F]/50 hover:text-white p-2.5 font-medium transition-all duration-300"
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
