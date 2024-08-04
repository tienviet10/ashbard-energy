import { Typography } from "@material-tailwind/react";
import React from "react";

const displayData = [
  {
    title: "20 YEARS OF EXPERIENCE",
    description:
      "Our cumulative projects man-hours to date have given us a strategic edge in service delivery.",
  },
  {
    title: "QHSE COMPLIANCE",
    description:
      "Committed to maintaining an impressive record in safety compliance having zero fatality & LTI.",
  },
  {
    title: "BUSINESS SUSTAINABILITY",
    description:
      "With sound business models in place, our business is poised to be consistently relevant in the industry.",
  },
  {
    title: "BEST IN THE MARKET",
    description:
      "Promoting excellence in our people, technology and service, making us stand out among our competitors.",
  },
];

const Description = () => {
  return (
    <div className="grid h-full w-full max-w-[1500px] grid-cols-1 gap-20 md:grid-cols-2">
      {displayData.map(({ title, description }) => (
        <div className="flex flex-col items-center justify-center">
          <Typography
            className="w-[100%] max-w-[550px] text-xl font-medium"
            style={{
              color: "#F6871F",
            }}
          >
            {title}
          </Typography>
          <Typography color="white" className="mt-3 max-w-[550px]">
            {description}
          </Typography>
        </div>
      ))}
    </div>
  );
};

export default Description;
