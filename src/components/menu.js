import React from "react";
import { useTrail, animated } from "react-spring";
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
        <h1 className="display-xl font-bold mb-8 text-center title">Menu</h1>
        <p className="px-10 text-center pb-10">
          Looking for authentic Nigerian food in Louisville, KY and neighboring
          cities? Look no more! At Delishchops, we cater to birthday parties,
          weddings, church programs, and other events. With our diverse and
          extensive menu, you're sure to find something for everyone and every
          occasion. Order from Delishchops todayand chop till you belleful!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trail.map((props, index) => (
            <animated.div
              key={index}
              style={props}
              className="bg-white rounded-lg shadow-lg p-6 cursor-pointer hover:bg-neutral-200"
            >
              <h3 className="text-xl font-bold mb-2">{menuData[index].name}</h3>
              {menuData[index]?.info?.text && (
                <p className="body-sm mb-2">{menuData[index]?.info?.text}</p>
              )}
              <p className="text-gray-700 mb-2">
                {menuData[index]?.info?.desc}:{" "}
                <span className="text-green-600 font-bold">
                  {menuData[index]?.info?.price}
                </span>
              </p>
              <p className="text-gray-700 mb-4">
                {menuData[index]?.info?.desc2}:{" "}
                <span className="text-green-600 font-bold">
                  {menuData[index]?.info?.price2}
                </span>
              </p>
            </animated.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
