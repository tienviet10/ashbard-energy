import { Typography } from "@material-tailwind/react";
import React from "react";

const PartnerSection = () => {
  return (
    <div className="container mx-auto">
      <div className="mt-10 lg:mt-24">
        <Typography
          className="mb-16 text-center text-4xl font-bold lg:text-7xl lg:font-light"
          style={{ fontFamily: "Gilroy" }}
        >
          Our Partners
        </Typography>
        <div className="mt-10 flex flex-wrap items-center justify-center">
          <img
            src="/img/merla-logo.svg"
            className="mb-4 mr-4 h-12 rounded-l lg:mb-0 lg:mr-12 lg:h-16"
          />
          <img
            src="/img/pnnplus.svg"
            className="mb-4 mr-4 h-12 rounded-l lg:mb-0 lg:mr-12 lg:h-16"
          />
          {/* <img
            src="/img/Enbridge.png"
            className="mb-4 mr-4 h-12 rounded-l lg:mb-0 lg:mr-12 lg:h-16"
          />
          <img
            src="/img/TC-Energy.png"
            className="mb-4 mr-4 h-12 rounded-l lg:mb-0 lg:mr-12 lg:h-16"
          />
          <img
            src="/img/Imperial-Oil.png"
            className="mb-4 mr-4 h-12 rounded-l lg:mb-0 lg:h-16"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default PartnerSection;
