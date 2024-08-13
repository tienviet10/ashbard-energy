import { Typography } from "@material-tailwind/react";
import React from "react";
import backgroundImageMobile from "/img/consulting_bg.png";
import backgroundImageDesktop from "/img/consulting_bg.png";
import { Footer } from "@/widgets/layout";

export const Consulting = () => {
  return (
    <div className="relative flex min-h-screen flex-col">
      <div className="absolute inset-0 h-full w-full">
        <img
          src={backgroundImageMobile}
          alt="Background"
          className="h-full w-full object-cover sm:hidden"
        />
        <img
          src={backgroundImageDesktop}
          alt="Background"
          className="hidden h-full w-full object-cover sm:block"
        />
      </div>

      <div className="relative flex flex-grow flex-col items-center justify-center text-white">
        <Typography
          className=" mt-8 text-center text-4xl font-bold lg:mt-16 lg:text-7xl"
          style={{ fontFamily: "Gilroy", fontWeight: "550" }}
        >
          Consulting
        </Typography>
        <Typography
          className="mb-6 mt-14 max-w-7xl text-center text-3xl  lg:text-4xl"
          style={{ fontFamily: "Gilroy" }}
        >
          Coming Soon!
        </Typography>
      </div>

      <div className="relative" style={{ backgroundColor: "#2E294E" }}>
        <Footer />
      </div>
    </div>
  );
};

export default Consulting;
