import { Typography } from "@material-tailwind/react";
import React from "react";

const StatsRow = () => {
  return (
    <>
      <div
        className="mb-4 flex min-w-[250px] flex-col items-center"
        style={{ color: "#F6871F" }}
      >
        <Typography className="mb-2 text-7xl font-normal">19</Typography>
        <Typography className="text-center text-2xl font-normal">
          Years of Experience
        </Typography>
      </div>
      <div
        className="mb-4 flex min-w-[250px] flex-col items-center"
        style={{ color: "#F6871F" }}
      >
        <Typography className="mb-2 text-7xl font-normal">502</Typography>
        <Typography className="text-center text-2xl font-normal">
          Completed Projects
        </Typography>
      </div>
      <div
        className="mb-4 flex min-w-[250px] flex-col items-center"
        style={{ color: "#F6871F" }}
      >
        <Typography className="mb-2  text-7xl font-normal">120</Typography>
        <Typography className="text-center text-2xl font-normal">
          Construction
        </Typography>
      </div>
      <div
        className="mb-4 flex min-w-[250px] flex-col items-center"
        style={{ color: "#F6871F" }}
      >
        <Typography className="mb-2 text-7xl font-normal">12</Typography>
        <Typography className="text-center text-2xl font-normal">
          Running Projects
        </Typography>
      </div>
    </>
  );
};

export default StatsRow;
