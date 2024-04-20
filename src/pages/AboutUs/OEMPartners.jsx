import React from "react";

const LogoArray = [
  "/img/pnnplus.svg",
  "/img/sstgr.svg",
  "/img/Brace-Tool-inc.svg",
  "/img/northstar_logo_black.svg",
  "/img/Taylr-Valve-Tech.svg",
  "/img/Wolftank-Group-Logo.svg",
  "/img/klinger-international-logo.svg",
  "/img/adisa.svg",
  "/img/ozna_logo_new_eng.svg",
  "/img/merla-logo.svg",
];

const OEMPartners = () => {
  return (
    <div className="flex max-w-[2900px] flex-wrap justify-center">
      {LogoArray.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Image ${index}`}
          className="m-2 my-8 max-h-[100px] px-10"
        />
      ))}
    </div>
  );
};

export default OEMPartners;
