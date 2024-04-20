import { Typography } from "@material-tailwind/react";
import React from "react";

const ArrayOfTeamMembers = [
  "/img/person1.png",
  "/img/person2.png",
  "/img/person3.png",
  "/img/person1.png",
  "/img/person2.png",
  "/img/person3.png",
];

const Team = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Typography className="mb-6 text-xl font-medium sm:mb-16">
        Our core global team brings a wealth of knowledge and experience to your
        project.
      </Typography>
      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
        {ArrayOfTeamMembers.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index}`}
            className="aspect-auto h-full"
          />
        ))}
      </div>
    </div>
  );
};

export default Team;
