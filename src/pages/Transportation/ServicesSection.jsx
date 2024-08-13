import React from "react";
import { Typography, Card } from "@material-tailwind/react";

const services = [
  {
    imgURL: "/img/short-haul-truck.jpg",
    title: "Short Haul Trucking",
    description:
      "We offer professional refrigerated truck services with advanced temperature monitoring, maintaining frozen and fresh produce quality. Our trained staff ensures exceptional professionalism and customer service.",
  },
  {
    imgURL: "/img/long-haul-truck.jpg",
    title: "Long Haul Trucking",
    description:
      "Our short and long-haul freight services offered in Canada and USA are equipped with experienced drivers for hauling dry goods and other retail products from supply chains.",
  },
  {
    imgURL: "/img/freight.jpg",
    title: "Specialized Freight Handling",
    description:
      "We handle a diverse range of flatbed freight and our drivers are highly proficient in managing wide load transportation.",
  },
  
];

const ServicesSection = () => {
  return (
    <section className="bg-gray-100 px-4 pb-20 pt-4">
      <div className="container mx-auto">
        <Typography
          className="mb-12 text-center text-4xl font-normal"
          style={{ fontFamily: "Gilroy" }}
        >
          Our Services
        </Typography>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {services.map((service, index) => (
            <Card key={index} className="p-6">
              <img
                src={service.imgURL}
                alt={service.title}
                className="mb-4 h-40 w-full object-cover"
              />
              <Typography
                className="mb-2 text-2xl"
                style={{ fontFamily: "Gilroy", fontWeight: 550 }}
              >
                {service.title}
              </Typography>
              <Typography variant="paragraph" style={{ fontFamily: "Gilroy" }}>
                {service.description}
              </Typography>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
