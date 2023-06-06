import React from "react";
import { useSpring, animated } from "react-spring";
import Button from "./button";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "react-scroll";

const BannerSection = () => {
  const animation = useSpring({
    opacity: 1,
    transform: "translateY(0)",
    from: { opacity: 0, transform: "translateY(50px)" },
    config: { duration: 800 },
  });

  return (
    <section className="relative w-full h-screen">
      <div className="absolute inset-0">
        <StaticImage
          src="../images/delish.png"
          alt="food"
          className="object-cover w-full h-full"
          imgClassName="object-cover w-full h-full"
        />
      </div>
      <animated.div
        style={animation}
        className="absolute inset-0 flex flex-col items-center justify-center text-white text-center"
      >
        <Link smooth={true} duration={500} to="#menu">
          <Button
            link="#menu"
            label="Explore Our Menu"
            size="lg"
            className="cursor-pointer"
            //   className="bg-primary-600 text-black rounded-full py-3 px-6 shadow-lg font-bold uppercase tracking-wide hover:bg-gray-200"
          >
            Explore Our Menu
          </Button>
        </Link>
      </animated.div>
    </section>
  );
};

export default BannerSection;
