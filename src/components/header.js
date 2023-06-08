import React from "react";
import Button from "./button";
import { Link } from "react-scroll";
import logo from "../images/work-images/dcnewlgo.webp";

const Header = () => {
  const navigation = [
    { name: "Menu", href: "#menu" },
    { name: "Services", href: "#services" },
    // { name: "About", href: "#about" },
  ];
  return (
    <header>
      <div className="container mx-auto">
        <div className="flex py-6 justify-between items-center">
          <div className="flex flex-row gap-8 items-center">
            <Link to="/">
              <img
                src={logo}
                alt="logo"
                style={{ height: "70px", width: "100px" }}
                className="cursor-pointer"
              />
              {/* <p className="text-body-lg font-bold text-neutral-900 cursor-pointer">
                Delish Chop
              </p> */}
            </Link>
          </div>
          <div className="flex flex-row gap-6">
            <div className="md:flex hidden flex-row gap-6 items-center">
              {navigation.map((item) => (
                <Link
                  spy={true}
                  smooth={true}
                  duration={500}
                  key={item.name}
                  to={item.href}
                  className="text-body-sm font-medium text-neutral-700 hover:text-primary-600 px-4 cursor-pointer"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <Link
              spy={true}
              smooth={true}
              duration={500}
              to="#footer"
              className="text-body-sm font-medium text-neutral-700 hover:text-primary-600 px-4 cursor-pointer"
            >
              <Button label="CONTACT" link="#footer" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
