import React from "react";
import backgroundImageMobile from "/img/background-about-us-mobile.png";
import backgroundImageDesktop from "/img/background-about-us.png";
import { Typography } from "@material-tailwind/react";
import { Footer } from "@/widgets/layout";
import ContactUsRow from "./ContactUsRow";
import MapAndSendUsRow from "./MapAndSendUsRow";

export const ContactUs = () => {
  return (
    <div className="relative flex min-h-screen flex-col">
      <div className="absolute inset-0 w-full object-cover">
        <img
          src={backgroundImageMobile}
          alt="Background"
          className="absolute inset-0 w-full object-cover sm:hidden"
        />
        <img
          src={backgroundImageDesktop}
          alt="Background"
          className="absolute inset-0 hidden w-full sm:block"
        />
      </div>

      <section className="z-9 relative mt-24 flex w-full flex-1 flex-col items-center justify-start bg-white">
        <Typography
          className="mt-8 text-center text-4xl font-bold lg:mt-16 lg:text-7xl"
          style={{ color: "#F6871F" }}
        >
          Contact Us
        </Typography>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:mt-24 lg:grid-cols-3">
          <ContactUsRow />
        </div>

        <div
          className="mb-20 mt-16 w-full py-16"
          style={{ backgroundColor: "#2E294E" }}
        >
          <MapAndSendUsRow />
        </div>
      </section>

      <div className="w-full" style={{ backgroundColor: "#2E294E" }}>
        <Footer />
      </div>
    </div>
  );
};

export default ContactUs;
