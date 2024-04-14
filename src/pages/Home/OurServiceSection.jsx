import { FeatureCard } from "@/widgets/cards";
import { Button, Typography } from "@material-tailwind/react";
import React from "react";

const OurServiceSection = ({ featuresData }) => {
  return (
    <>
      <div className="mt-10 lg:mt-24">
        <Typography className="mb-6 text-center text-7xl font-light">
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
      <div className="mt-32 flex flex-wrap items-center">
        <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
          <img
            alt="Card Image"
            src="/img/Oil-and-Gas-Image.svg"
            className="h-full w-full rounded-3xl"
          />
        </div>
        <div className="mx-auto mt-8 w-full px-4 md:w-5/12">
          <Typography
            variant="h3"
            className="mb-3 text-4xl font-bold"
            style={{ color: "#F6871F" }}
          >
            Oil and Gas
          </Typography>
          <Typography className="mb-8 font-normal text-blue-gray-500">
            Don't let your uses guess by attaching tooltips and popoves to any
            element. Just make sure you enable them first via JavaScript.
            <br />
            <br />
            The kit comes with three pre-built pages to help you get started
            faster. You can change the text and images and you're good to go.
            Just make sure you enable them first via JavaScript.
          </Typography>
          <Button className="rounded-full bg-orange-700 px-10 py-4 text-xl font-light normal-case text-white hover:bg-orange-800">
            Learn More
          </Button>
        </div>
      </div>
    </>
  );
};

export default OurServiceSection;
