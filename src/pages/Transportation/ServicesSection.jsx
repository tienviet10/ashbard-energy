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
  {
        imgURL: "/img/moving.jpg",
        title: "Residential Moving Services",
        description:
          "We offer comprehensive residential moving solutions, ensuring your belongings are safely and efficiently transported to your new home. Our team handles every aspect of the move with care, making your transition as smooth as possible."
      },
      {
        imgURL: "/img/officemoving.jpg",
        title: "Office Moving Services",
        description:
          "Our office moving services are designed to minimize downtime and disruption. We manage everything from packing to setup, ensuring your business is up and running quickly in your new location."
      },
      {
        imgURL: "/img/trucking.jpg",
        title: "Delivery Partnership Services",
        description:
          "Partner with us for reliable and timely delivery services. We offer customized logistics solutions that align with your business needs, ensuring your products reach their destination safely and on schedule."
      }
    
  
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
