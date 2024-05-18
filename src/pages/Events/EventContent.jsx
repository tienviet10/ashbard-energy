import React from "react";
import EventCard from "./EventCard";
import EventImg from "/img/event.png";

const EventContent = () => {
  return (
    <div className="max-w-[1000px] px-6">
      <EventCard
        imageSrc={EventImg}
        title="Calgary Oil and Gas Exp"
        description="Eget aliquet nibh praesent tristique magna sit amet purus gravida quis blandit turpis cursus in hac habitasse platea dictumst quisque sagittis purus sit amet volutpat consequat."
      />

      <EventCard
        imageSrc={EventImg}
        title="2024 Edmonton Conference"
        description="Eget aliquet nibh praesent tristique magna sit amet purus gravida quis blandit turpis cursus in hac habitasse platea dictumst quisque sagittis purus sit amet volutpat consequat."
      />
    </div>
  );
};

export default EventContent;
