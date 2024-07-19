import { Typography } from "@material-tailwind/react";
import React from "react";
import backgroundImageMobile from "/img/background-about-us-mobile.png";
import backgroundImageDesktop from "/img/background-about-us.png";
import OilAndGasServiceServices from "../Services/OilAndGasServiceServices";
import { Footer } from "@/widgets/layout";

export const Consulting = () => {
  return (
    <>
      <div>
        <img
          src={backgroundImageMobile}
          alt="Background"
          className="absolute inset-0 w-full object-cover"
        />
        <img
          src={backgroundImageDesktop}
          alt="Background"
          className="absolute inset-0 hidden w-full sm:block"
        />
      </div>

      <section className="z-9 absolute mt-24 flex w-[100%] flex-col items-center justify-center bg-white">
        <Typography
          className="mb-6 mt-8 text-center text-4xl font-bold lg:mt-16 lg:text-7xl"
          style={{ color: "#F6871F" }}
        >
          Consulting
        </Typography>

        <Typography className="mb-6 mt-24 h-[100vh] max-w-7xl text-3xl font-normal lg:text-4xl">
          Coming Soon!
        </Typography>

        <div className="w-[100%]" style={{ backgroundColor: "#2E294E" }}>
          <Footer />
        </div>
      </section>
    </>
  );
};

export default Consulting;
