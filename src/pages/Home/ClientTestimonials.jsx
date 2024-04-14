import { Typography } from "@material-tailwind/react";
import React from "react";

const ClientTestimonials = () => {
  return (
    <div className="container mx-auto text-center">
      <Typography className="mb-14 text-6xl font-normal">
        What our clients say
      </Typography>
      <div className="flex w-full flex-row items-center justify-center">
        <Typography className="max-w-lg text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet nisl
          suscipit adipiscing bibendum est ultricies integer quis.
        </Typography>
      </div>

      <Typography className="mt-8 text-lg font-bold">- David Barnes</Typography>
      <Typography className="text-md">Lead Engineer at Suncor</Typography>
    </div>
  );
};

export default ClientTestimonials;
