import { Typography } from "@material-tailwind/react";
import React from "react";

const VisionMission = () => {
  return (
    <div className="grid h-full w-full max-w-[1500px] grid-cols-1 gap-10 md:grid-cols-2">
      <div className="order-1 flex flex-col items-center justify-center md:order-none">
        <Typography
          className="mt-8 w-[100%] max-w-[550px] text-left text-3xl font-medium"
          style={{
            color: "#F6871F",
          }}
        >
          OUR VISION
        </Typography>
        <Typography className="mt-6 w-[100%] max-w-[550px]">
          Our vision is to be the choice provider of efficient
          technology-focused support services and ancillary products in the
          industry.
        </Typography>
      </div>

      <div className="order-2 flex h-full w-full items-center justify-center md:order-none">
        <img src="/img/our-vision.png" />
      </div>

      <div className="order-4 flex h-full w-full items-center justify-center md:order-3">
        <img src="/img/our-mission.png" />
      </div>

      <div className="order-3 flex flex-col items-center justify-center md:order-4">
        <Typography
          className="mt-8 w-[100%] max-w-[550px] text-left text-3xl font-medium"
          style={{
            color: "#F6871F",
          }}
        >
          OUR MISSION
        </Typography>
        <Typography className="mt-6 max-w-[550px] text-left">
          Our vision is to be the choice provider of efficient
          technology-focused support services and ancillary products in the
          industry.
        </Typography>
      </div>
    </div>
  );
};

export default VisionMission;
