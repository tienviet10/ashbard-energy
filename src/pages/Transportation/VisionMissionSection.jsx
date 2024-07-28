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
            <Typography
              className="mb-12 text-center text-4xl font-normal"
              style={{ fontFamily: "Gilroy" }}
            >
              Vision
            </Typography>
            <Typography variant="paragraph" style={{ fontFamily: "Gilroy" }}>
              To be the leading provider of trucking solutions in Canada and the
              United States of America.
            </Typography>
          </div>
          <div className="p-6 text-center">
            <FlagIcon className="mx-auto mb-4 h-12 w-12 text-orange-700" />
            <Typography
              className="mb-12 text-center text-4xl font-normal"
              style={{ fontFamily: "Gilroy" }}
            >
              Mission
            </Typography>
            <Typography variant="paragraph" style={{ fontFamily: "Gilroy" }}>
              We aim to surpass the expectations of our customers by providing
              quality service, excellent working environment for our employees
              while maintaining high ethical standards, compliance with required
              laws and regulations and creating consistent value for our
              shareholders
            </Typography>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection;
