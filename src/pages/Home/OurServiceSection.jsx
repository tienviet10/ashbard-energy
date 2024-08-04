import { FeatureCard } from "@/widgets/cards";
import { Button, Typography } from "@material-tailwind/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const OurServiceSection = ({ featuresData }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="mt-20 lg:mt-24">
        <Typography
          className="mb-6 text-center text-4xl font-bold lg:text-7xl lg:font-light"
          style={{ fontFamily: "Gilroy" }}
        >
          Our Services
        </Typography>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:mt-24 lg:grid-cols-3">
          {featuresData.map(({ color, title, icon, description, style }) => (
            <FeatureCard
              key={title}
              color={color}
              title={title}
              icon={icon}
              description={description}
              style={{ fontFamily: "Gilroy" }}
            />
          ))}
        </div>
      </div>
      <div className="mt-0 flex flex-wrap items-center lg:mt-20">
        <div className="mx-auto mt-14 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
          <img
            alt="Card Image"
            src="/img/Oil-and-Gas-Image.svg"
            className="h-full w-full rounded-3xl"
          />
        </div>
        <div className="mx-auto mt-8 flex w-full flex-col items-center px-4 md:w-5/12">
          <Typography
            variant="h3"
            className="bg-red mb-5 text-center text-4xl font-normal"
            style={{ color: "#F6871F", fontFamily: "Gilroy" }}
          >
            Oil and Gas
          </Typography>
          <Typography
            className="mb-8 text-center font-normal text-blue-gray-300"
            style={{ fontFamily: "Gilroy" }}
          >
            Comprehensive support for drilling, exploration, and production,
            enhancing efficiency and safety in the oil and gas industry.
          </Typography>
          <div className="flex">
            <Button
              className="rounded-full bg-orange-700 px-10 py-4 text-xl font-light normal-case text-white hover:bg-orange-800"
              style={{ fontFamily: "Gilroy" }}
              onClick={() => navigate("/oil-and-gas")}
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap items-center lg:mt-20">
        <div className="mx-auto mt-8 flex w-full flex-col items-center px-4 md:w-5/12">
          <Typography
            variant="h3"
            className="bg-red mb-5 text-center text-4xl font-normal"
            style={{ color: "#F6871F", fontFamily: "Gilroy" }}
          >
            Transportation & Logistics
          </Typography>
          <Typography
            className="mb-8 text-center font-normal text-blue-gray-300"
            style={{ fontFamily: "Gilroy" }}
          >
            End-to-end logistics solutions with advanced fleet management and
            real-time tracking for seamless transportation.
          </Typography>
          <div className="flex">
            <Button
              className="rounded-full bg-orange-700 px-10 py-4 text-xl font-light normal-case text-white hover:bg-orange-800"
              style={{ fontFamily: "Gilroy" }}
              onClick={() => navigate("/transportation-services")}
            >
              Learn More
            </Button>
          </div>
        </div>
        <div
          className="order-first mx-auto mt-14 flex w-full justify-center px-4 md:order-none md:w-4/12 lg:mt-0"
          style={{ fontFamily: "Gilroy" }}
        >
          <img
            alt="Card Image"
            src="/img/transportation-logistic.svg"
            className="h-full w-full rounded-3xl"
          />
        </div>
      </div>
      <div className="flex flex-wrap items-center lg:mt-20">
        <div className="mx-auto mt-14 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
          <img
            alt="Card Image"
            src="/img/consulting-service.svg"
            className="h-full w-full rounded-3xl"
          />
        </div>
        <div
          className="mx-auto mt-8 flex w-full flex-col items-center px-4 md:w-5/12"
          style={{ fontFamily: "Gilroy" }}
        >
          <Typography
            variant="h3"
            className="bg-red mb-5 text-center text-4xl font-normal"
            style={{ color: "#F6871F", fontFamily: "Gilroy" }}
          >
            Consulting
          </Typography>
          <Typography
            className="mb-8 text-center font-normal text-blue-gray-300"
            style={{ fontFamily: "Gilroy" }}
          >
            Expert guidance in operational improvement, compliance, and risk
            management, tailored to drive business success.
          </Typography>
          <div className="flex">
            <Button
              className="rounded-full bg-orange-700 px-10 py-4 text-xl font-light normal-case text-white hover:bg-orange-800"
              style={{ fontFamily: "Gilroy" }}
              onClick={() => navigate("/consulting")}
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurServiceSection;
