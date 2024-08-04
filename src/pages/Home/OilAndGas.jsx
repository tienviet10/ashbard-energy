import { Typography } from "@material-tailwind/react";
import React from "react";
import backgroundImageMobile from "/img/background-about-us-mobile.png";
import backgroundImageDesktop from "/img/background-about-us.png";
import valveImage from "/img/valve.jpg";
import actuatorImage from "/img/Actuator.png";
import controlValveImage from "/img/ControlValve.jpg";
import wellServicesImage from "/img/cased-hole-wire-line-service.jpg";
import merlaImage from "/img/merla-logo.svg";
import manpowerImage from "/img/manpower.jpg";
import { Footer } from "@/widgets/layout";

export const OilAndGas = () => {
  return (
    <>
      {/* Hero/Header Section */}
      <div>
        <img
          src={backgroundImageMobile}
          alt="Background"
          className="absolute inset-0 w-full object-cover sm:hidden"
        />
        <img
          src={backgroundImageDesktop}
          alt="Background"
          className="absolute inset-0 hidden w-full sm:block"
        />
      </div>

      <section className="absolute z-0 mt-24 flex w-full flex-col items-center justify-center bg-white">
        <Typography
          className="mb-6 mt-8 text-center text-4xl lg:mt-16 lg:text-7xl"
          style={{ color: "#F6871F", fontFamily: "Gilroy", fontWeight: "550" }}
        >
          Oil and Gas Services
        </Typography>
        <Typography
          className="mb-8 mt-2 max-w-7xl text-center text-lg font-normal lg:text-xl"
          style={{ fontFamily: "Gilroy" }}
        >
          Ashbard Platinum, your premier partner in the oil and gas industry. We
          specialize in delivering exceptional services across multiple sectors,
          including well services such as well testing and e-line services. Our
          expertise extends to the procurement and supply of high-quality
          valves, ensuring your operations run smoothly and efficiently.
          Additionally, we provide skilled manpower for projects, meeting the
          industry's diverse needs with professionalism and reliability. Trust
          Ashbard Platinum for top-notch solutions that drive success in the oil
          and gas sector.
        </Typography>

        {/* Valve Procurement & Maintenance Section */}
        <div className="mt-16 grid max-w-7xl grid-cols-1 gap-16 lg:grid-cols-2">
          <div>
            <img
              src={merlaImage}
              alt="Additional Image"
              className="mt-4 h-auto w-60 rounded-lg pb-8 shadow-md"
            />
            <img
              src={valveImage}
              alt="Valve Procurement"
              className="h-auto w-full rounded-lg shadow-md"
            />
            {/* Additional image added here */}
          </div>
          <div>
            <Typography
              className="text-3xl font-medium lg:text-4xl"
              style={{
                color: "#F6871F",
                fontFamily: "Gilroy",
                fontWeight: "550",
              }}
            >
              Valve Procurement & Maintenance
            </Typography>
            <Typography
              className="mt-4 text-lg font-normal lg:text-xl"
              style={{ fontFamily: "Gilroy" }}
            >
              Ashbard Platinum has global partnerships with industry leaders,
              including Merla LLC, experts in valve production, repair, training
              and maintenance. With exclusive franchise and distribution rights
              in Canada, Ashbard Platinum plans to provide these valves to the
              Canadian Oil & Gas Industry.
            </Typography>
            <Typography
              className="mt-4 text-lg font-normal lg:text-xl"
              style={{ fontFamily: "Gilroy" }}
            >
              Merla LLC specializes in the production, maintenance, training,
              and repair of valves. They are experts in designing customized
              valve technology such as control & choke valves and actuators,
              based on customer desires, and offer comprehensive services to
              ensure optimal performance and longevity of valves used in the oil
              and gas sector.
            </Typography>
          </div>
        </div>

        {/* Control Valves Section */}
        <div className="mt-16 grid max-w-7xl grid-cols-1 gap-16 lg:grid-cols-2">
          <div>
            <Typography
              className="text-3xl font-medium lg:text-4xl"
              style={{
                color: "#F6871F",
                fontFamily: "Gilroy",
                fontWeight: "550",
              }}
            >
              Control Valves
            </Typography>
            <div
              className="mt-4 space-y-2 text-lg font-normal lg:text-xl"
              style={{ fontFamily: "Gilroy" }}
            >
              <Typography>Customizable designs</Typography>
              <Typography>Accurate Flow Control</Typography>
              <Typography>Quality</Typography>
              <Typography>Long Service Life</Typography>
              <Typography>Flexibility</Typography>
              <Typography>Shorter Delivery Times/Fast Response</Typography>
              <Typography>Low Torque Operation</Typography>
              <Typography>Easily Automatable</Typography>
            </div>
          </div>
          <div>
            <img
              src={controlValveImage}
              alt="Control Valves"
              className="h-auto w-full rounded-lg shadow-md"
            />
          </div>
        </div>

        {/* Actuators Section */}
        <div className="mt-16 grid max-w-7xl grid-cols-1 gap-16 lg:grid-cols-2">
          <div>
            <img
              src={actuatorImage}
              alt="Actuators"
              className="h-auto w-full rounded-lg shadow-md"
            />
          </div>
          <div>
            <Typography
              className="text-3xl font-medium lg:text-4xl"
              style={{
                color: "#F6871F",
                fontFamily: "Gilroy",
                fontWeight: "550",
              }}
            >
              Actuators
            </Typography>
            <Typography
              className="mt-4 text-lg font-normal lg:text-xl"
              style={{ fontFamily: "Gilroy" }}
            >
              Merla LLC offers a unique core range of actuators, which can be
              designed for purposes in oil & gas (ex. Choke valve control),
              water, power, bulk materials, and nuclear handling sectors. These
              actuators are designed, developed & can be standardized or
              customized for clients' specific needs & requirements.
            </Typography>
            <Typography
              className="mt-4 text-lg font-normal lg:text-xl"
              style={{ fontFamily: "Gilroy" }}
            >
              As mentioned, Ashbard platinum inc and Merla LLC will be
              responsible for the supply, calibration, installation, repair, and
              maintenance of the valves or actuators customized to satisfy the
              needs of your projects when cost optimization and efficiency is a
              priority.
            </Typography>
          </div>
        </div>

        {/* Well Services Section */}
        <div className="mt-16 grid max-w-7xl grid-cols-1 gap-16 lg:grid-cols-2">
          <div>
            <Typography
              className="text-3xl font-medium lg:text-4xl"
              style={{
                color: "#F6871F",
                fontFamily: "Gilroy",
                fontWeight: "550",
              }}
            >
              Well Services
            </Typography>
            <Typography
              className="mt-4 text-lg font-normal lg:text-xl"
              style={{ fontFamily: "Gilroy" }}
            >
              Ashbard Platinum offers a comprehensive range of well services,
              including the supply of cased & open hole logging tools and
              production logging tools. In partnership with PNNplus, we provide
              advanced tools and solutions for oil wells, ensuring precise and
              efficient operations.
            </Typography>
            <Typography
              className="mt-4 text-lg font-normal lg:text-xl"
              style={{ fontFamily: "Gilroy" }}
            >
              Our services encompass:
              <ul className="ml-5 mt-2 list-disc space-y-2">
                <li>Cased Hole Logging (PNN/PNNplus)</li>
                <li>Well Integrity</li>
                <li>Production Logging Tools</li>
                <li>Standard Analog and Digital Cased and Open Hole Tools</li>
              </ul>
            </Typography>
          </div>
          <div>
            <img
              src={wellServicesImage}
              alt="Well Services"
              className="h-auto w-full rounded-lg shadow-md"
            />
          </div>
        </div>

        {/* International Technical Manpower Services Section */}
        <div className="mt-16 grid max-w-7xl grid-cols-1 gap-16 lg:grid-cols-2">
          <div>
            <img
              src={manpowerImage}
              alt="International Technical Manpower Services"
              className="h-auto w-full rounded-lg shadow-md"
            />
          </div>
          <div>
            <Typography
              className="text-3xl font-medium lg:text-4xl"
              style={{
                color: "#F6871F",
                fontFamily: "Gilroy",
                fontWeight: "550",
              }}
            >
              International Technical Manpower Services
            </Typography>
            <Typography
              className="mt-4 text-lg font-normal lg:text-xl"
              style={{ fontFamily: "Gilroy" }}
            >
              Ashbard offers international manpower services, providing
              qualified personnel for projects from startup to commissioning.
              With expertise in supplying personnel ranging from unskilled to
              managerial and expat professionals, we ensure seamless staffing
              solutions for both onshore and offshore roles. Maintaining a
              comprehensive database of skilled personnel, we align staffing
              with project goals and operational requirements.
            </Typography>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-24 w-full" style={{ backgroundColor: "#2E294E" }}>
          <Footer />
        </div>
      </section>
    </>
  );
};

export default OilAndGas;
