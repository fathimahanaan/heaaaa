import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CollectionGridPage from "./CollectionGridPage";
 

const images = ["/sResize.jpg","blackResize.jpg", "/mohammed.jpeg",  "/neeenuResize.jpg", "/aroResize.jpg"];

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
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-MeaCulpa-regular text-amber-900 mb-4">
          The Collections
        </h1>

        <p className="text-[#556B2F] md:text-lg leading-relaxed tracking-wide text-opacity-90 max-w-3xl mx-auto">
          
        </p>
      </div>

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
