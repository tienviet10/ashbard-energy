import React from "react";
import { Button, Typography } from "@material-tailwind/react";

const ProjectCard = ({ imageSrc1, imageSrc2, description }) => {
  return (
    <div className="mx-4 my-4 flex w-[100%] max-w-[300px] flex-col items-center justify-between lg:max-w-[400px]">
      <img
        src={imageSrc1}
        alt="Project"
        className="mb-6 object-cover object-center"
      />
      <img
        src={imageSrc2}
        alt="Logo"
        className="mb-4 max-h-[40px] max-w-[200px]"
      />
      {description && (
        <Typography className="mb-6 mt-2 px-4 text-center text-lg font-normal lg:text-xl">
          {description}
        </Typography>
      )}
    </div>
  );
};

export default ProjectCard;
