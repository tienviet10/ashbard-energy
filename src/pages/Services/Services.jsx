import { Footer } from "@/widgets/layout";
import React from "react";
import backgroundImageMobile from "/img/background-about-us-mobile.png";
import backgroundImageDesktop from "/img/background-about-us.png";

export const Services = () => {
  return (
    <>
      <div className="">
        <img
          src={backgroundImageDesktop}
          alt="Background"
          className="absolute inset-0 hidden w-full sm:block"
        />
      </div>

      <section
        className="z-100 absolute mt-24 flex w-[100%] items-center justify-center px-12 py-16 sm:px-20 sm:py-28"
        style={{ backgroundColor: "white" }}
      >
        Hello
      </section>
      <section
        className="flex items-center justify-center px-12 py-16 sm:px-20 sm:py-28"
        style={{ backgroundColor: "#2E294E" }}
      ></section>
      <section className="flex items-center justify-center px-12 py-16 sm:px-20 sm:py-28"></section>
      <div style={{ backgroundColor: "#2E294E" }}>
        <Footer />
      </div>
    </>
  );
};

export default Services;
