import React from "react";
import phone from "../images/service-icons/phone.svg";
import email from "../images/service-icons/email.svg";

const ContactPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Contact Me</h1>
      <p className="mb-6">
        Reach out to me for enquiries and to place orders using the following
        options:
      </p>

      <div className="flex items-center mb-4">
        <img src={phone} alt="phone" className="mr-2" width={"50px"} />
        <a href="tel:+1234567890" className="text-blue-500 hover:underline">
          +1 (234) 567-890
        </a>
      </div>

      <div className="flex items-center">
        <img src={email} alt="phone" className="mr-2" width={"50px"} />
        <a
          href="mailto:info@example.com"
          className="text-blue-500 hover:underline"
        >
          info@example.com
        </a>
      </div>
    </div>
  );
};

export default ContactPage;
