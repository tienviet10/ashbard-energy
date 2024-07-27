import React from "react";
import { Typography } from "@material-tailwind/react";
import { EyeIcon, FlagIcon } from "@heroicons/react/24/outline";

const VisionMissionSection = () => {
  return (
    <section className="bg-white px-4 pb-20 pt-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <div className="p-6 text-center">
            <EyeIcon className="mx-auto mb-4 h-12 w-12 text-orange-700" />
            <Typography className="mb-4 text-3xl font-semibold">
              Vision
            </Typography>
            <Typography variant="paragraph">
              Our vision is to be the leading transportation service provider,
              known for our commitment to efficiency, safety, and customer
              satisfaction.
            </Typography>
          </div>
          <div className="p-6 text-center">
            <FlagIcon className="mx-auto mb-4 h-12 w-12 text-orange-700" />
            <Typography className="mb-4 text-3xl font-semibold">
              Mission
            </Typography>
            <Typography variant="paragraph">
              Our mission is to deliver top-notch transportation solutions that
              meet the diverse needs of our clients, through innovation,
              technology, and dedicated service.
            </Typography>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection;
