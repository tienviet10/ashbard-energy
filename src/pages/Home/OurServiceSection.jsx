import { FeatureCard } from "@/widgets/cards";
import { Button, Typography } from "@material-tailwind/react";
import React from "react";

const OurServiceSection = ({ featuresData }) => {
  return (
    <>
      <div className="mt-20 lg:mt-24">
        <Typography className="mb-6 text-center text-4xl font-bold lg:text-7xl lg:font-light">
          Our Services
        </Typography>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:mt-24 lg:grid-cols-3">
          {featuresData.map(({ color, title, icon, description }) => (
            <FeatureCard
              key={title}
              color={color}
              title={title}
              icon={icon}
              description={description}
            />
          ))}
        </div>
      </div>
      <div className="mt-0 flex flex-wrap items-center lg:mt-20">
        <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
          <img
            alt="Card Image"
            src="/img/Oil-and-Gas-Image.svg"
            className="h-full w-full rounded-3xl"
          />
        </div>
        <div className="mx-auto mt-8 flex w-full flex-col items-center px-4 md:w-5/12">
          <Typography
            variant="h3"
            className="bg-red mb-5 text-center text-4xl font-normal"
            style={{ color: "#F6871F" }}
          >
            Oil and Gas
          </Typography>
          <Typography className="mb-8 text-center font-normal text-blue-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra
            orci sagittis eu volutpat odio facilisis mauris.
          </Typography>
          <div className="flex">
            <Button className="rounded-full bg-orange-700 px-10 py-4 text-xl font-light normal-case text-white hover:bg-orange-800">
              Learn More
            </Button>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap items-center lg:mt-20">
        <div className="mx-auto mt-8 flex w-full flex-col items-center px-4 md:w-5/12">
          <Typography
            variant="h3"
            className="bg-red mb-5 text-center text-4xl font-normal"
            style={{ color: "#F6871F" }}
          >
            Transportation & Logistics
          </Typography>
          <Typography className="mb-8 text-center font-normal text-blue-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra
            orci sagittis eu volutpat odio facilisis mauris.
          </Typography>
          <div className="flex">
            <Button className="rounded-full bg-orange-700 px-10 py-4 text-xl font-light normal-case text-white hover:bg-orange-800">
              Learn More
            </Button>
          </div>
        </div>
        <div className="order-first mx-auto mt-24 flex w-full justify-center px-4 md:order-none md:w-4/12 lg:mt-0">
          <img
            alt="Card Image"
            src="/img/transportation-logistic.svg"
            className="h-full w-full rounded-3xl"
          />
        </div>
      </div>
      <div className="flex flex-wrap items-center lg:mt-20">
        <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
          <img
            alt="Card Image"
            src="/img/consulting-service.svg"
            className="h-full w-full rounded-3xl"
          />
        </div>
        <div className="mx-auto mt-8 flex w-full flex-col items-center px-4 md:w-5/12">
          <Typography
            variant="h3"
            className="bg-red mb-5 text-center text-4xl font-normal"
            style={{ color: "#F6871F" }}
          >
            Consulting
          </Typography>
          <Typography className="mb-8 text-center font-normal text-blue-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra
            orci sagittis eu volutpat odio facilisis mauris.
          </Typography>
          <div className="flex">
            <Button className="rounded-full bg-orange-700 px-10 py-4 text-xl font-light normal-case text-white hover:bg-orange-800">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurServiceSection;
