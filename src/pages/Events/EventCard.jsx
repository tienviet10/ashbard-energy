import { Typography } from "@material-tailwind/react";
import React from "react";

const EventCard = ({ imageSrc, title, description }) => {
  return (
    <div className="mb-16 mt-6 flex w-full flex-col items-center justify-between overflow-hidden rounded-lg shadow-lg">
      <img
        src={imageSrc}
        alt="Service"
        className="h-auto w-full object-cover object-center"
      />
      <div className="inset-0 mt-4 flex flex-col items-center justify-center px-6">
        <div className="mb-2 flex w-full flex-col justify-between sm:flex-row">
          <Typography
            variant="h3"
            className="text-bold mb-2 w-full text-center text-lg font-normal sm:w-[70%] sm:text-left lg:text-2xl"
          >
            {title}
          </Typography>
          <div className="flex flex-row justify-center gap-2 ">
            <img src="/img/calendar.svg" alt="Heart" className="h-6 w-6" />
            <Typography className="text-bold">May 12, 2024</Typography>
          </div>
        </div>
        <div className="mb-8 w-full sm:mb-16">
          <Typography className="text-normal w-full text-left text-sm sm:w-[70%]">
            {description}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
