import react from "react";
import { Card, Typography } from "@material-tailwind/react";

const TransportationInfo = () => {
  return (
    <div className="mt-40 grid h-full w-full max-w-[1500px] grid-cols-1 gap-10 lg:grid-cols-2">
      <div className="order-1 flex w-full flex-col items-center justify-center md:order-none">
        <Typography
          className="font-semi-bold mb-6 text-5xl lg:text-6xl"
          style={{
            color: "#F6871F",
            fontFamily: "Gilroy",
            fontWeight: "550",
          }}
        >
          Ashbard Transportation
        </Typography>
      </div>
      <div className="order-2 flex h-full w-full flex-col items-center justify-center md:order-none">
        <Card
          className="flex flex-col rounded-3xl border p-8 shadow-lg shadow-gray-500/10 lg:flex-row lg:p-14"
          style={{ backgroundColor: "#F6871F" }}
        >
          <Typography
            className="font-semi-bold mb-6 px-8 py-8 text-5xl lg:text-2xl"
            style={{
              color: "white",
              fontFamily: "Gilroy",
              fontWeight: "550",
            }}
          >
            Ashbard Development Inc. provides commercial freight trucking
            services across North America, serving Canada and the US markets. We
            provides trucking services to a wide range of clients -
            Construction, Agricultural, and food processing, e-Commerce business
            etc.
          </Typography>
        </Card>
      </div>
    </div>
  );
};

export default TransportationInfo;
