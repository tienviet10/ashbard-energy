import { Footer } from "@/widgets/layout";
import { Button, Typography } from "@material-tailwind/react";
import React from "react";
import Description from "./Description";
import backgroundImageMobile from "/img/background-about-us-mobile.png";
import backgroundImageDesktop from "/img/background-about-us.png";
import VisionMission from "./VisionMission";
import Values from "./Values";

export const AboutUs = () => {
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
        <VisionMission />
      </section>

      <section
        className="flex items-center justify-center px-12 py-16 sm:px-20 sm:py-28"
        style={{ backgroundColor: "#2E294E" }}
      >
        <Description />
      </section>

      <section className="flex items-center justify-center px-12 py-16 sm:px-20 sm:py-28">
        <Values />
      </section>

      <div style={{ backgroundColor: "#2E294E" }}>
        <Footer />
      </div>
    </>
  );
};

export default AboutUs;
