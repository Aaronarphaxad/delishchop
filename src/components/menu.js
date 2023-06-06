import React from "react";
import { useTrail, animated } from "react-spring";
import { useStaticQuery } from "gatsby";
import menuData from "../data/menu.json";

const MenuSection = () => {
  console.log(menuData);

  const trail = useTrail(menuData.length, {
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0)" },
  });
  return (
    <section className="py-12 bg-gray-100">
      <div id="#menu" className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center">Menu</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trail.map((props, index) => (
            <animated.div
              key={index}
              style={props}
              className="bg-white rounded-lg shadow-lg p-6 cursor-pointer hover:bg-neutral-200"
            >
              <h3 className="text-xl font-bold mb-2">{menuData[index].name}</h3>
              <p className="text-gray-700 mb-4">
                {menuData[index].description}
              </p>
              <span className="text-green-600 font-bold">
                {menuData[index].price}
              </span>
            </animated.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
