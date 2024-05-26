import { Button, Typography } from "@material-tailwind/react";
import React from "react";

const MapAndSendUsRow = () => {
  return (
    <div className="container mx-auto grid grid-cols-1 gap-8 lg:grid-cols-2">
      <div className="mx-8 flex items-center justify-center">
        <img
          src="/img/map.png"
          alt="Contact Us"
          className="h-auto w-full max-w-[400px] rounded-lg"
        />
      </div>
      <div className="mx-8 rounded-lg bg-white p-8">
        <Typography variant="h4" className="mb-6 text-center text-gray-800">
          Send Us Message
        </Typography>
        <form>
          <div className="mb-4 flex gap-4">
            <div className="w-1/2">
              <input
                type="text"
                id="fullName"
                placeholder="Full Name"
                className="w-full rounded border p-3 text-gray-700 focus:outline-none focus:ring-2"
              />
            </div>
            <div className="w-1/2">
              <input
                type="email"
                id="email"
                placeholder="Email"
                className="w-full rounded border p-3 text-gray-700 focus:outline-none focus:ring-2"
              />
            </div>
          </div>
          <div className="mb-4 flex gap-4">
            <div className="w-1/2">
              <input
                type="tel"
                id="phone"
                placeholder="Phone Number"
                className="w-full rounded border p-3 text-gray-700 focus:outline-none focus:ring-2"
              />
            </div>
            <div className="w-1/2">
              <input
                type="text"
                id="subject"
                placeholder="Subject"
                className="w-full rounded border p-3 text-gray-700 focus:outline-none focus:ring-2"
              />
            </div>
          </div>
          <div className="mb-4">
            <textarea
              id="message"
              placeholder="Your Message"
              className="w-full rounded border p-3 text-gray-700 focus:outline-none focus:ring-2"
            />
          </div>
          <div className="text-center">
            <Button
              className="w-full max-w-[200px] rounded-full bg-orange-700 hover:bg-orange-800"
              ripple="light"
              type="submit"
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MapAndSendUsRow;
