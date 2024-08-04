import { Typography } from "@material-tailwind/react";
import React from "react";

const displayData = [
  {
    icon: "/img/creation.svg",
    title: "Teamwork & Value Creation",
    description:
      "Our experience has helped us develop sustainable processes for transforming problems into solutions.",
  },
  {
    icon: "/img/honesty.svg",
    title: "Integrity and Commitment",
    description:
      "Our core values lies with the vision to be the choice provider of efficient technology focused support.",
  },
  {
    icon: "/img/worker.svg",
    title: "QHSE",
    description: "Being of excellent quality while we put safety first.",
  },
  {
    icon: "/img/satisfaction.svg",
    title: "Customer Satisfaction",
    description:
      "The needs, wants and visions of our customers remains our priority. We pay attention to the details of our jobs, making our results globally rated.",
  },
  {
    icon: "/img/ecology.svg",
    title: "Business Sustainability",
    description:
      "We prioritize sustainable practices to ensure long-term business success, environmental responsibility, and positive community impact.",
  },
  {
    icon: "/img/badge.svg",
    title: "Professionalism",
    description:
      "Our team is dedicated to maintaining the highest standards of professionalism, ensuring exceptional service and client satisfaction.",
  },
];

const Values = () => {
  return (
    <div className="grid h-full w-full max-w-[1500px] grid-cols-1 gap-20 md:grid-cols-2">
      {displayData.map(({ icon, title, description }) => (
        <div className="flex flex-col items-center justify-center">
          <img src={icon} width="100px" height="100px" />
          <Typography className="mt-8 max-w-[550px] text-center text-3xl font-medium">
            {title}
          </Typography>
          <Typography className="mt-3 max-w-[550px] text-center">
            {description}
          </Typography>
        </div>
      ))}
    </div>
  );
};

export default Values;
