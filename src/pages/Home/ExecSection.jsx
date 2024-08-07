import { Card, Typography } from "@material-tailwind/react";
import React from "react";

const ExecSection = () => {
  return (
    <div className="mx-auto mt-10 w-full flex-1 justify-center lg:mt-24">
      <div className="mx-auto ">
        <Card
          className="flex flex-col rounded-3xl border p-8 shadow-lg shadow-gray-500/10 lg:flex-row lg:p-14"
          style={{ backgroundColor: "#2E294E" }}
        >
          {/* Left Side */}
          <div className="flex flex-col justify-between lg:mr-14">
            <div className="flex flex-col items-center lg:items-start">
              {/* <img
                alt="Card Image"
                src="/img/engr-adelaja-photo.png"
                className="mb-6 rounded-3xl lg:mb-0"
                style={{ maxHeight: "300px", maxWidth: "300px" }}
              /> */}
              {/* <div className="flex w-full flex-col items-center justify-center">
                <Typography
                  variant="small"
                  className="mt-3 text-center text-4xl font-normal lg:mt-10 lg:text-left"
                  color="white"
                  style={{ fontFamily: "Gilroy" }}
                >
                  Engr. Adelaja
                </Typography>
                <Typography
                  variant="h5"
                  color="white"
                  className="mt-2 text-center text-lg font-normal lg:text-left"
                  style={{ fontFamily: "Gilroy" }}
                >
                  CEO Ashbard Platinum Inc.
                </Typography>
              </div> */}
            </div>
          </div>

          {/* Right Side */}
          <div className="flex flex-col pl-0 lg:pl-14">
            <Typography
              variant="h5"
              color="white"
              className="mb-2 mt-10 text-center text-4xl  lg:mt-0 lg:text-left lg:text-6xl"
              style={{
                color: "#F6871F",
                fontFamily: "Gilroy",
                fontWeight: "550",
              }}
            >
              Welcome to Ashbard
            </Typography>
            <Typography
              color="white"
              className="mt-6 text-center text-lg font-normal leading-9 lg:mt-10 lg:text-left lg:text-2xl lg:leading-10"
              style={{ fontFamily: "Gilroy" }}
            >
              Incorporated in 2004, Ashbard Energy Company Limited is an
              indigenous engineering services provider A 100% Nigerian company,
              registered and prequalified with the Nigerian Content Development
              & Monitoring Board (NCDMB). We are prequalified on the NIPEX
              portal with about 30 service/product codes showcasing our
              capability and readiness to work and provide these services.
            </Typography>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ExecSection;
