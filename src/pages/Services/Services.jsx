import { Footer } from "@/widgets/layout";
import React from "react";
import backgroundImageMobile from "/img/background-about-us-mobile.png";
import backgroundImageDesktop from "/img/background-about-us.png";
import { Typography } from "@material-tailwind/react";

export const Services = () => {
  return (
    <>
      <div className="">
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
          Our Services
        </Typography>
        <Typography className="mb-6 mt-2 px-4 text-center text-xl font-normal lg:text-2xl">
          We offer a wide range of services to meed your needs
        </Typography>

        <div className="mb-32 mt-20 flex w-full max-w-[1500px] justify-between px-4">
          <div
            className="flex flex-col items-center"
            style={{ color: "#F6871F" }}
          >
            <Typography className="mb-2 text-7xl font-normal">19</Typography>
            <Typography className="text-center text-2xl font-normal">
              Years of Experience
            </Typography>
          </div>
          <div
            className="flex flex-col items-center"
            style={{ color: "#F6871F" }}
          >
            <Typography className="mb-2 text-7xl font-normal">502</Typography>
            <Typography className="text-center text-2xl font-normal">
              Completed Projects
            </Typography>
          </div>
          <div
            className="flex flex-col items-center"
            style={{ color: "#F6871F" }}
          >
            <Typography className="mb-2  text-7xl font-normal">120</Typography>
            <Typography className="text-center text-2xl font-normal">
              Construction
            </Typography>
          </div>
          <div
            className="flex flex-col items-center"
            style={{ color: "#F6871F" }}
          >
            <Typography className="mb-2 text-7xl font-normal">12</Typography>
            <Typography className="text-center text-2xl font-normal">
              Running Projects
            </Typography>
          </div>
        </div>

        <div className="w-[100%]" style={{ backgroundColor: "#2E294E" }}>
          <Footer />
        </div>
      </section>
    </>
  );
};

export default Services;
