import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Ballpit from "./Ballpit";

const images = ["/s.jpeg", "/mohammed.jpeg", "/neeenu.jpeg", "/aro.jpeg"];

export default function Collections() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <section className="bg-[#D8E2C4] py-20 px-4 sm:px-6 md:px-12">
      {/* Header */}
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-MeaCulpa-regular   text-amber-900 mb-4">
          The Collections
        </h1>
        <div
          style={{
            position: "relative",
            overflow: "hidden",
            minHeight: "500px",
            maxHeight: "500px",
            width: "100%",
          }}
        >
          <Ballpit
            count={200}
            gravity={0.01}
            friction={0.9975}
            wallBounce={0.95}
            followCursor={false}
            colors={[0xa8e6cf, 0xffffff, 0xffc0cb]} // <-- pastel green and white
          />
        </div>
        <p className="text-[#556B2F] md:text-lg leading-relaxed tracking-wide  text-opacity-90 max-w-3xl mx-auto text-center">
          Bridal and Casual Couture, Party wears and gowns, Statement and Rental
          jewelleries, Kids festive attires, Loungewear, Leisure suits —
          handpicked and custom made for your special moments.
        </p>
      </div>
      {/* Image Carousel */}
      <div className="max-w-4xl mx-auto">
        <Slider {...settings}>
          {images.map((src, index) => (
            <div key={index}>
              <img
                src={src}
                alt={`collection-${index}`}
                className="mx-auto rounded-lg max-h-96 w-auto max-w-full object-cover"
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
