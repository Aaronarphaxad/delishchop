import React from "react";

import dish from "../images/service-icons/dish.svg";
import menu from "../images/service-icons/food-menu.svg";
import truck from "../images/service-icons/food-truck.svg";
import Button from "./button";
import { Link } from "react-scroll";

const Services = () => {
  return (
    <div id="#services">
      <div className="md:container md:mx-auto">
        <div className="lg:py-30 md:py-16 pt-5 pb-12">
          <div className="flex flex-col relative bg-secondary-100 lg:py-0 py-10">
            <div className="absolute lg:block hidden h-16 bg-white bottom-0 left-0 right-0"></div>
            <div className="absolute lg:block hidden h-16 bg-white top-0 left-0 right-0"></div>
            <div className="grid lg:grid-cols-12 grid-cols-1 xl:gap-8 items-center  relative">
              <div className="lg:col-span-5 flex flex-col items-start xl:px-18 lg:px-10 md:px-8 px-5 lg:py-32 md:pb-4 pb-10">
                <h2 className="lg:text-display-md text-display-md font-semibold pb-4">
                  Delish Chops - Authentic Nigerian Cuisine
                </h2>
                <p className="text-body-md font-normal text-neutral-600 pb-8">
                  At Delish Chops, we are passionate about serving the finest
                  and most authentic Nigerian cuisine.
                </p>
                <Link
                  spy={true}
                  smooth={true}
                  duration={500}
                  to={"#footer"}
                  className="text-body-sm font-medium text-neutral-700 hover:text-primary-600 px-4 cursor-pointer"
                >
                  <Button label="CONTACT ME" link="/" size="lg" />
                </Link>
              </div>
              <div className="lg:col-span-7 flex md:flex-row flex-col lg:gap-8 gap-6 items-center xl:pr-16 lg:pr-10 lg:pl-0 md:px-8 px-5 relative">
                <div className="flex flex-col basis-1/2 lg:gap-8 gap-6 relative">
                  <div className="bg-white p-8 shadow-xl">
                    <img src={dish} alt="UI" className="pb-5" width={"50px"} />
                    <p className="text-display-xs font-semibold pb-4">
                      Catering Services
                    </p>
                    <p className="text-body-md font-normal text-neutral-600">
                      Let us elevate your special occasion with the authentic
                      taste of Nigerian cuisine.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col basis-1/2 lg:gap-8 gap-6 relative">
                  <div className="bg-white p-8 shadow-xl">
                    <img
                      src={menu}
                      alt="Motion"
                      className="pb-5"
                      width={"40px"}
                    />
                    <p className="text-display-xs font-semibold pb-4">
                      Online Ordering
                    </p>
                    <p className="text-body-md font-normal text-neutral-600">
                      ndulge in the authentic flavors of Nigeria at your
                      convenience, wherever you are.
                    </p>
                  </div>
                  <div className="bg-white p-8 shadow-xl">
                    <img
                      src={truck}
                      alt="truck"
                      className="pb-5"
                      width={"40px"}
                    />
                    <p className="text-display-xs font-semibold pb-4">
                      Takeaway and Delivery
                    </p>
                    <p className="text-body-md font-normal text-neutral-600">
                      Treat yourself to a culinary journey through Nigeria
                      without leaving your couch.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
