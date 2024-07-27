import React from "react";
import { Typography, Button } from "@material-tailwind/react";
import { Footer } from "@/widgets/layout";
import trucking from "/img/trucking.jpg";
import VisionMissionSection from "./VisionMissionSection";
// import ServicesSection from "./ServicesSection";
// import CTASection from "./CTASection";

export const TransportationServices = () => {
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
                Welcome to Ashbard Transportation
              </Typography>
              <Typography
                variant="lead"
                className="text-xl font-normal opacity-80 lg:text-2xl"
                style={{ color: "white" }}
              >
                We provide short and long-haul trucking services across Canada
                and the US and we are committed to moving your freight as
                efficiently and safely as possible. Contact us today for a free
                estimate and more information. Your freight trucking solutions
                start here!
              </Typography>
              <Button className="mt-10 rounded-full bg-orange-700 px-10 py-3 text-lg font-normal normal-case text-white hover:bg-orange-800 lg:py-5 lg:text-xl">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Vision and Mission Section */}
      <VisionMissionSection />

      {/* Services Section */}
      {/* <ServicesSection /> */}

      {/* Call to Action Section */}
      {/* <CTASection /> */}

      {/* Footer */}
      <div
        className="mt-10 pb-10 lg:pb-20"
        style={{ backgroundColor: "#2E294E" }}
      >
        <Footer />
      </div>
    </>
  );
};

export default TransportationServices;
