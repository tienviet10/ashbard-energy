// import { Typography } from "@material-tailwind/react";
// import React from "react";
// import backgroundImageMobile from "/img/background-about-us-mobile.png";
// import backgroundImageDesktop from "/img/background-about-us.png";
// import OilAndGasServiceServices from "../Services/OilAndGasServiceServices";
// import { Footer } from "@/widgets/layout";

// export const Transportation = () => {
//   return (
//     <>
//       <div>
//         <img
//           src={backgroundImageMobile}
//           alt="Background"
//           className="absolute inset-0 w-full object-cover"
//         />
//         <img
//           src={backgroundImageDesktop}
//           alt="Background"
//           className="absolute inset-0 hidden w-full sm:block"
//         />
//       </div>

//       <section className="z-9 absolute mt-24 flex w-[100%] flex-col items-center justify-center bg-white">
//         <Typography
//           className="mb-6 mt-8 text-center text-4xl font-bold lg:mt-16 lg:text-7xl"
//           style={{ color: "#F6871F" }}
//         >
//           Transportation
//         </Typography>

//         <Typography className="mb-6 mt-24 h-[100vh] max-w-7xl text-3xl font-normal lg:text-4xl">
//           Coming Soon!
//         </Typography>

//         <div className="w-[100%]" style={{ backgroundColor: "#2E294E" }}>
//           <Footer />
//         </div>
//       </section>
//     </>
//   );
// };

// export default Transportation;

import React from "react";
import { Typography, Button } from "@material-tailwind/react";
import { Footer } from "@/widgets/layout";
import trucking from "/img/trucking.jpg";
import VisionMissionSection from "../Transportation/VisionMissionSection";
import ServicesSection from "../Transportation/ServicesSection";
import CTASection from "../Transportation/CTASection";
import { useNavigate } from "react-router-dom";

export const Transportation = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="relative flex h-screen content-center items-center justify-center pb-32 pt-16">
        <div className="absolute top-0 h-full w-full bg-[url('/img/trucking.jpg')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/20 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="mx-auto w-full px-4 text-center lg:w-8/12 lg:text-left">
              <Typography
                className="mb-6 text-5xl  lg:text-6xl"
                style={{
                  color: "white",
                  fontFamily: "Gilroy",
                  fontWeight: "550",
                }}
              >
                Welcome to Ashbard Transportation
              </Typography>
              <Typography
                variant="lead"
                className=" opacity-100 "
                style={{
                  color: "white",
                  fontFamily: "Gilroy",
                  fontSize: "18px",
                }}
              >
                We provide short and long-haul trucking services across Canada
                and the US and we are committed to moving your freight as
                efficiently and safely as possible. Contact us today for a free
                estimate and more information. Your freight trucking solutions
                start here!
              </Typography>
              <Button
                className="mt-10 rounded-full bg-orange-700 px-10 py-3 text-lg font-normal normal-case text-white hover:bg-orange-800 lg:py-5 lg:text-xl"
                onClick={() => navigate("/contact-us")}
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Vision and Mission Section */}
      <VisionMissionSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Call to Action Section */}
      <CTASection />

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

export default Transportation;
