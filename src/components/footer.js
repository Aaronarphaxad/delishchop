import React from "react";
import phone from "../images/service-icons/phone.svg";
import email from "../images/service-icons/email.svg";

const Footer = () => {
  const social = [
    { name: "Instagram", href: "#" },
    { name: "Facebook", href: "#" },
  ];
  return (
    <footer id="#footer" className="bg-black text-white">
      <div className="container mx-auto">
        <div className="flex flex-col md:py-30 pt-12 pb-20 md:gap-24 gap-16">
          <div>
            <h3 className="md:text-display-xl text-display-md font-semibold pb-4">
              Want to place an order?
            </h3>
            <a
              href="tel:+1234567890"
              className="md:text-display-xl text-display-md font-normal hover:text-primary-600 hover:underline"
            >
              Let’s talk ↗
            </a>
          </div>
          <div className="flex md:flex-row flex-col md:gap-8 gap-12 justify-between">
            <div>
              <a
                href="mailto:Ojimaebigurl06@gmail.com"
                className="md:text-display-xs text-body-xl font-medium text-neutral-200 hover:text-primary-600 hover:underline"
              >
                Ojimaebigurl06@gmail.com
              </a>
            </div>
            <div className="grid md:grid-cols-3 grid-cols-2 md:gap-12 gap-3 md:pl-32">
              <a
                href="tel:+1234567890"
                className="md:text-body-xl text-body-md font-normal text-neutral-200 hover:text-primary-100"
              >
                Call me
              </a>
              {social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="md:text-body-xl text-body-md font-normal text-neutral-200 hover:text-primary-100"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
