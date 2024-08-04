import React from "react";
import { Typography, Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

const CTASection = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-orange-700 px-4 pb-20 pt-4 text-center text-white">
      <Typography
        className="mb-4 text-4xl"
        style={{ fontFamily: "Gilroy", fontWeight: "550" }}
      >
        Ready to Move Your Freight?
      </Typography>
      <Typography
        variant="lead"
        className="mb-8"
        style={{ fontFamily: "Gilroy" }}
      >
        Contact us today for a free estimate and more information.
      </Typography>
      <Button
        className="rounded-full bg-white px-10 py-3 text-lg font-normal normal-case text-orange-700 hover:bg-gray-200 lg:py-5 lg:text-xl"
        style={{ fontFamily: "Gilroy" }}
        onClick={() => navigate("/contact-us")}
      >
        Get a Free Estimate
      </Button>
    </section>
  );
};

export default CTASection;
