import React from "react";
import { Button, Typography } from "@material-tailwind/react";

const ServiceCard = ({ imageSrc, title, description }) => {
  return (
    <div
      className="mx-4 my-4 flex w-[300px] flex-col items-center justify-between overflow-hidden rounded-lg shadow-lg"
      style={{ backgroundColor: "#2E294E" }}
    >
      <img
        src={imageSrc}
        alt="Service"
        className="h-60 w-full object-cover object-center"
      />
      <div className="inset-0 mt-4 flex flex-col items-center justify-center px-6">
        <Typography
          variant="h3"
          className="mb-2 text-center text-lg font-normal"
          style={{ color: "#F6871F" }}
        >
          {title.toUpperCase()}
        </Typography>
        <Typography className="text-center text-sm text-white">
          {description}
        </Typography>
      </div>
      <div className=" bottom-0 left-0 right-0 p-4">
        <Button
          className="w-full rounded-full bg-orange-700 hover:bg-orange-800"
          ripple="light"
        >
          Learn More
        </Button>
      </div>
    </div>
  );
};

export default ServiceCard;
