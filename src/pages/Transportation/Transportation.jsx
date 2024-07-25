import { Footer } from "@/widgets/layout";
import { Button, Typography } from "@material-tailwind/react";
import React from "react";

export const Transportation = () => {
  return (
    <>
      <div className="relative flex h-screen content-center items-center justify-center pb-32 pt-16">
        <div className="absolute top-0 h-full w-full bg-[url('/img/transportation_bg.png')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/20 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="mx-auto w-full px-4 text-center lg:w-8/12 lg:text-left">
              <Typography
                className="mb-6 text-5xl font-normal lg:text-8xl"
                style={{ color: "white" }}
              >
                Transportation
              </Typography>
              <Typography
                variant="lead"
                className="text-xl font-normal opacity-80 lg:text-2xl"
                style={{ color: "white" }}
              >
                Ashbard Platinum specializes in transportation and logistics,
                providing FTL, LTL, expedited shipping, specialized freight
                handling, and distribution services. Our modern fleet, skilled
                drivers, advanced tracking, and nationwide coverage ensure
                customized, efficient delivery solutions.
              </Typography>
              <Button className="mt-10 rounded-full bg-orange-700 px-10 py-3 text-lg font-normal normal-case text-white hover:bg-orange-800 lg:py-5 lg:text-xl">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* 
      <div
        className="mt-10 pb-10 lg:pb-20"
        style={{ backgroundColor: "#2E294E" }}
      >
        <Footer />
      </div> */}
    </>
  );
};

export default Transportation;
