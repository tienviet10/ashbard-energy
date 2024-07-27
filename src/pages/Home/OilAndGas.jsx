import { Typography } from "@material-tailwind/react";
import React from "react";
import backgroundImageMobile from "/img/background-about-us-mobile.png";
import backgroundImageDesktop from "/img/background-about-us.png";
import OilAndGasServiceServices from "../Services/OilAndGasServiceServices";
import { Footer } from "@/widgets/layout";

export const OilAndGas = () => {
  return (
    <>
      <div>
        <img
          src={backgroundImageMobile}
          alt="Background"
          className="absolute inset-0 w-full object-cover"
        />
        <img
          src={backgroundImageDesktop}
          alt="Background"
          className="absolute inset-0 hidden w-full sm:block"
        />
      </div>

      <section className="z-9 absolute mt-24 flex w-[100%] flex-col items-center justify-center bg-white">
        <Typography
          className="mb-6 mt-8 text-center text-4xl font-bold lg:mt-16 lg:text-7xl"
          style={{ color: "#F6871F" }}
        >
          Oil and Gas Services
        </Typography>

        <Typography className="mb-6 mt-2 max-w-7xl text-xl font-normal lg:text-2xl">
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

        <Typography
          className="mt-8 w-[100%] max-w-7xl text-left text-4xl font-medium"
          style={{
            color: "#F6871F",
          }}
        >
          Valve Procurement & Maintenance
        </Typography>

        <Typography className="mb-6 mt-2 max-w-7xl text-xl font-normal lg:text-2xl">
          Ashbard Platinum has global partnerships with industry leaders,
          including Merla LLC, experts in valve production, repair, training and
          maintenance. With exclusive franchise and distribution rights in
          Canada, Ashbard Platinum plans to provide these valves to the Canadian
          Oil & Gas Indsutry.
        </Typography>

        <Typography className="mb-6 mt-2 max-w-7xl text-xl font-normal lg:text-2xl">
          Merla LLC specializes in the production, maintenance, training, and
          repair of valves. They are experts in designing customised valve
          technology such as control & choke valves and actuators, based on
          customers desires and offer comprehensive services to ensure optimal
          performance and longevity of valves used in the oil and gas sector.
        </Typography>

        <Typography
          className="mt-8 w-[100%] max-w-7xl text-left text-3xl font-medium"
          style={{
            color: "#F6871F",
          }}
        >
          Control Valves
        </Typography>

        <div className="w-[100%] max-w-7xl text-left">
          <Typography className=" mt-2 text-left text-xl font-normal lg:text-2xl">
            - Customizable designs
          </Typography>
          <Typography className=" text-left text-xl font-normal lg:text-2xl">
            - Accurate Flow Control
          </Typography>
          <Typography className=" text-left text-xl font-normal lg:text-2xl">
            - Quality
          </Typography>
          <Typography className=" text-left text-xl font-normal lg:text-2xl">
            - Long Service Life
          </Typography>
          <Typography className=" text-left text-xl font-normal lg:text-2xl">
            - Flexibility
          </Typography>
          <Typography className=" text-left text-xl font-normal lg:text-2xl">
            - Shorter Delivery Times/Fast Response
          </Typography>
          <Typography className=" text-left text-xl font-normal lg:text-2xl">
            - Low Torque Operation
          </Typography>
          <Typography className=" text-left text-xl font-normal lg:text-2xl">
            - Easily Automatable
          </Typography>
        </div>

        <div className="mt-8 w-[100%] max-w-7xl text-left">
          <Typography className="mt-2 text-left text-xl font-bold lg:text-2xl">
            OPTIONS AVAILABLE
          </Typography>
          <Typography className=" text-left text-xl font-normal lg:text-2xl">
            <strong>Flow Control Tools:</strong> Landing Nipples & Lock
            Mandrels, Control Line & Accessories, Standing Valves & Seating
            Nipples.
          </Typography>
          <Typography className=" text-left text-xl font-normal lg:text-2xl">
            <strong>Gas Lift Tools:</strong> Side Pocket Mandrel, Orifice
            Valves, Conventional Mandrels.
          </Typography>
          <Typography className=" text-left text-xl font-normal lg:text-2xl">
            <strong>Flowline Valves:</strong> Gate Valves, Positive Choke
            Valves, Adjustable Choke Valves
          </Typography>
          <Typography className=" text-left text-xl font-normal lg:text-2xl">
            <strong>Completion Tools:</strong> Permanent, Hydraulic & Mechanical
            Packers, Bridge Plugs, Cement Retaines.
          </Typography>
          <Typography className=" text-left text-xl font-normal lg:text-2xl">
            <strong>Workover Tools:</strong> Crossover Connectors, Drill Collars
            Grooves Heavy Wall Drill Pipe.
          </Typography>
          <Typography className=" text-left text-xl font-normal lg:text-2xl">
            <strong>B.O.P System & Manifolds</strong>
          </Typography>
        </div>

        <Typography
          className="mt-8 w-[100%] max-w-7xl text-left text-3xl font-medium"
          style={{
            color: "#F6871F",
          }}
        >
          Actuators
        </Typography>

        <Typography className="mb-6 mt-2 max-w-7xl text-xl font-normal lg:text-2xl">
          Merla LLC offers a unique core range of actuators, which can be
          designed for purposes In oil & gas (ex. Choke valve control), water,
          power, bulk materials and nuclear handling sectors. These actuators
          are designed, developed & canbe standardised or customised for clients
          specific needs & requirements.
        </Typography>

        <Typography className="mb-6 mt-2 max-w-7xl text-xl font-normal lg:text-2xl">
          As mentioned, Ashbard platinum inc and Merla LLC will be responsible
          for the supply, calibration, Installation, repair and maintenance of
          the valves or actuators customised to satisfy the needs of your
          projects when cost optimization and efficiency is a priority.
        </Typography>

        <Typography
          className="mt-8 w-[100%] max-w-7xl text-left text-4xl font-medium"
          style={{
            color: "#F6871F",
          }}
        >
          Well Services
        </Typography>

        <Typography className="mb-6 mt-2 max-w-7xl text-xl font-normal lg:text-2xl">
          Ashbard Platinum offers a comprehensive range of well services,
          including the supply of cased & open hole logging tools and production
          logging tools. In partnership with PNNplus, we provide advanced tools
          and solutions for oil wells, ensuring precise and efficient
          operations.
        </Typography>

        <div className="mt-8 w-[100%] max-w-7xl text-left">
          <Typography className=" text-left text-xl font-normal lg:text-2xl">
            Our services encompass:
          </Typography>
          <Typography className=" text-left text-xl font-normal lg:text-2xl">
            - Cased Hole Logging (PNN/PNNplus)
          </Typography>
          <Typography className=" text-left text-xl font-normal lg:text-2xl">
            - Well Integrity
          </Typography>
          <Typography className=" text-left text-xl font-normal lg:text-2xl">
            - Production Logging Tools
          </Typography>
          <Typography className=" text-left text-xl font-normal lg:text-2xl">
            - Standard Analog and Digital Cased and Open Hole Tools
          </Typography>
        </div>

        <Typography className="mb-6 mt-2 max-w-7xl text-xl font-normal lg:text-2xl">
          PNNplus designs and builds these tools, offering expertise in both
          cased and open hole services, ensuring reliable performance and
          enhanced well management.
        </Typography>

        <Typography
          className="mt-8 w-[100%] max-w-7xl text-left text-3xl font-medium"
          style={{
            color: "#F6871F",
          }}
        >
          Cased Hole Logging
        </Typography>

        <Typography className="mb-6 mt-2 max-w-7xl text-xl font-normal lg:text-2xl">
          Ashbard & PNNplus offers advanced cased hole saturation logging
          services, including Pulsed Neutron Neutron (PNN) logging. These
          services provide detailed formation evaluation and reservoir
          saturation analysis, essential for determining hydrocarbon saturation
          levels. The PNN tools are designed for accurate data acquisition in
          various well conditions, facilitating effective reservoir management
          and decision-making. They are compatible with both standard and
          specialized logging operations, ensuring versatile and reliable
          performance.
        </Typography>

        <Typography
          className="mt-8 w-[100%] max-w-7xl text-left text-3xl font-medium"
          style={{
            color: "#F6871F",
          }}
        >
          Well Integrity
        </Typography>

        <Typography className="mb-6 mt-2 max-w-7xl text-xl font-normal lg:text-2xl">
          Ashbard, along with PNNPlus, offers high-quality well integrity
          surveys for various downhole conditions. Our tools, available in
          different sizes, can be deployed in SRO/Memory modes and are
          combinable for comprehensive well assessments.
        </Typography>

        <div className="mt-8 w-[100%] max-w-7xl text-left">
          <Typography className=" text-left text-xl font-normal lg:text-2xl">
            We provide
          </Typography>
          <Typography className=" text-left text-xl font-normal lg:text-2xl">
            - Radial Bond Tools,
          </Typography>
          <Typography className=" text-left text-xl font-normal lg:text-2xl">
            - Multifinger Calipers,
          </Typography>
          <Typography className=" text-left text-xl font-normal lg:text-2xl">
            - EMDS (Corrosion Tools),
          </Typography>
          <Typography className=" text-left text-xl font-normal lg:text-2xl">
            - Dual Spectral Noise Tools
          </Typography>
        </div>

        <Typography
          className="mt-8 w-[100%] max-w-7xl text-left text-3xl font-medium"
          style={{
            color: "#F6871F",
          }}
        >
          Production Logging Tools
        </Typography>

        <div className="mt-8 w-[100%] max-w-7xl text-left">
          <Typography className=" text-left text-xl font-normal lg:text-2xl">
            Ashbard & PNNPlus, offers high-quality well production logging suite
            that help to:
          </Typography>
          <Typography className=" text-left text-xl font-normal lg:text-2xl">
            - Identify the type of fluid flow in the pipe
          </Typography>
          <Typography className=" text-left text-xl font-normal lg:text-2xl">
            - Detect fluid entry and exit points
          </Typography>
          <Typography className=" text-left text-xl font-normal lg:text-2xl">
            - Identify behind-pipe flow
          </Typography>
          <Typography className=" text-left text-xl font-normal lg:text-2xl">
            - Detect the presence of sand
          </Typography>
          <Typography className=" text-left text-xl font-normal lg:text-2xl">
            - Determine appropriate gas flow rates
          </Typography>
          <Typography className=" text-left text-xl font-normal lg:text-2xl">
            - Analyze production and injection profiles by zone
          </Typography>
        </div>

        <div className="mt-8 w-[100%] max-w-7xl text-left">
          <Typography className=" text-left text-xl font-normal lg:text-2xl">
            The Production Logging Suite Includes
          </Typography>
          <Typography className=" text-left text-xl font-normal lg:text-2xl">
            - Temperature
          </Typography>
          <Typography className=" text-left text-xl font-normal lg:text-2xl">
            - Pressure
          </Typography>
          <Typography className=" text-left text-xl font-normal lg:text-2xl">
            - Water Hold-Up
          </Typography>
          <Typography className=" text-left text-xl font-normal lg:text-2xl">
            - Fluid density
          </Typography>
          <Typography className=" text-left text-xl font-normal lg:text-2xl">
            - Flow-meter
          </Typography>
        </div>

        <Typography className="mb-24 mt-8 max-w-7xl text-xl font-normal lg:text-2xl">
          These tools provide comprehensive data for optimizing well performance
          and ensuring efficient reservoir management.
        </Typography>

        <div className="w-[100%]" style={{ backgroundColor: "#2E294E" }}>
          <Footer />
        </div>
      </section>
    </>
  );
};

export default OilAndGas;
