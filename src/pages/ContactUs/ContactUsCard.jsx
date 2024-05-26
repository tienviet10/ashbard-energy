import { Typography } from "@material-tailwind/react";
import React from "react";

const ContactUsCard = ({ icon, title, description1, description2 }) => {
  return (
    <div className="flex w-full max-w-sm items-center rounded-lg">
      <div className="mr-4">
        <img src={icon} alt="Icon" className="h-12 w-12 object-cover" />
      </div>
      <div>
        <Typography variant="h6" className="text-lg font-bold">
          {title}
        </Typography>
        <Typography className="text-sm text-gray-700">
          {description1}
        </Typography>
        <Typography className="text-sm text-gray-700">
          {description2}
        </Typography>
      </div>
    </div>
  );
};

export default ContactUsCard;
