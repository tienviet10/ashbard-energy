import { Footer } from "@/widgets/layout";
import React from "react";
import backgroundImageMobile from "/img/background-about-us-mobile.png";
import backgroundImageDesktop from "/img/background-about-us.png";
import { Typography } from "@material-tailwind/react";
import StatsRow from "./StatsRow";
import ServiceCard from "./ServiceCard";

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

        <div className="mb-32 mt-20 flex w-full max-w-[1000px] flex-wrap justify-between px-4">
          <ServiceCard
            imageSrc="/img/service2.png"
            title="OIL & GAS SERVICES"
            description="Providing unique oil and gas services to you with quality and satisfaction in mind."
          />
          <ServiceCard
            imageSrc="/img/service1.png"
            title="TRANSPORTATION & LOGISTICS"
            description="Providing unique oil and gas services to you with quality and satisfaction in mind."
          />
          <ServiceCard
            imageSrc="/img/service3.png"
            title="CONSULTATION"
            description="Providing unique oil and gas services to you with quality and satisfaction in mind."
          />
        </div>

        <div className="mb-32 flex w-full max-w-[1000px] flex-wrap justify-between px-4">
          <StatsRow />
        </div>

        <div className="w-[100%]" style={{ backgroundColor: "#2E294E" }}>
          <Footer />
        </div>
      </section>
    </>
  );
};

export default Services;
