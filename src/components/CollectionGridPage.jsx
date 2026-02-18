import React from "react";

const products = [
  {
    id: 1,
    name: "Bridal Couture",
    price: "$1,200",
    image: "/sResize.jpg",
  },
  {
    id: 2,
    name: "Party Gown",
    price: "$420",
    image: "/blackResize.jpg",
  },
  {
    id: 3,
    name: "Statement Jewelry",
    price: "$180",
    image: "/mohammed.jpeg",
  },
  {
    id: 4,
    name: "Kids Festive Wear",
    price: "$95",
    image: "/neeenuResize.jpg",
  },
  {
    id: 5,
    name: "Leisure Suit",
    price: "$210",
    image: "/aroResize.jpg",
  },
  {
    id: 6,
    name: "Loungewear Set",
    price: "$130",
    image: "/sResize.jpg",
  },
];

export default function CollectionGridPage() {
  return (
    <section className="mt-20">
      {/* Header */}
      <div className="max-w-5xl mx-auto text-center mb-14">
        <h1 className="text-3xl md:text-4xl font-MeaCulpa-regular text-amber-900 mb-4">
          Featured Pieces
        </h1>
        <p className="text-[#556B2F] md:text-lg max-w-2xl mx-auto">
          A curated grid highlighting signature styles and pricing.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {products.map((item) => (
          <div
            key={item.id}
            className="bg-[#EEF3E3] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="p-5 space-y-3">
              <div>
                <h2 className="text-lg font-semibold text-amber-900">
                  {item.name}
                </h2>
                <p className="text-[#556B2F]">{item.price}</p>
              </div>

              <button className="w-full rounded-xl bg-amber-900 text-[#F4F3EF] py-2 hover:bg-amber-800 transition">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
