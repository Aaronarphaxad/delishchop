import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import foodImage1 from "../images/work-images/rice.jpg";
import foodImage2 from "../images/work-images/logopic.jpg";
import foodImage3 from "../images/work-images/rice.jpg";
import foodImage4 from "../images/work-images/jollof.jpeg";
import foodImage5 from "../images/work-images/rice.jpg";

const FoodSection = () => {
  const foodImages = [
    foodImage1,
    foodImage2,
    foodImage3,
    foodImage4,
    foodImage5,
  ];

  const isBrowser = () => typeof window !== "undefined";
  const isMobile = isBrowser() && isBrowser() && window.innerWidth <= 768;

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Food Gallery</h1>
        <Carousel
          showArrows={true}
          showThumbs={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={3000}
          transitionTime={500}
          swipeable={true}
          emulateTouch={true}
          centerMode={!isMobile}
          centerSlidePercentage={40}
          dynamicHeight={false}
          className="carousel-wrapper"
        >
          {foodImages.map((image, index) => (
            <div key={index} className="carousel-item">
              <img
                src={image}
                alt="Food"
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default FoodSection;
