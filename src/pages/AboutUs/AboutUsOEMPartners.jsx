import { Footer } from "@/widgets/layout";
import React from "react";
import backgroundImageMobile from "/img/background-about-us-mobile-3.png";
import backgroundImageDesktop from "/img/background-about-us-3.png";
import OEMPartners from "./OEMPartners";

export const AboutUsOEMPartners = () => {
  return (
    <>
      <div className="">
        <img
          src={backgroundImageMobile}
          alt="Background"
          className="inset-0 w-full object-cover"
        />
        <img
          src={backgroundImageDesktop}
          alt="Background"
          className="absolute inset-0 hidden w-full sm:block"
        />
      </div>

      <section className="flex items-center justify-center px-12 py-16 sm:px-20 sm:py-28  ">
        <OEMPartners />
      </section>

      <div style={{ backgroundColor: "#2E294E" }}>
        <Footer />
      </div>
    </>
  );
};

export default AboutUsOEMPartners;
