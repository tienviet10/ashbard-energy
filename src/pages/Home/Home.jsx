import React, { useState, useEffect } from "react";
import { Typography, Button } from "@material-tailwind/react";
import { Footer } from "@/widgets/layout";
import { featuresData } from "@/data";
import ExecSection from "./ExecSection";
import OurServiceSection from "./OurServiceSection";
import ClientTestimonials from "./ClientTestimonials";
import PartnerSection from "./PartnerSection";
import { useNavigate } from "react-router-dom";

const bgImg = [
  {
    imgURL: "/img/background-3.png",
    title: "Oil and Gas",
    detail:
      "We offer focused expert and support services in the oil and gas industry designed with cost-effective structures to adequately facilitate clients’ operations for continuous performance.",
    link: "/oil-and-gas",
  },
  {
    imgURL: "/img/transportation_bg.png",
    title: "Transportation",
    detail:
      "We excel through our complimented personnel, innovative technology, and high quality well services, setting us apart from competitors and earning trust as industry leaders.",
    link: "/transportation",
  },
  {
    imgURL: "/img/consulting_bg.png",
    title: "Consulting",
    detail:
      "While enhancing our reputation, we prioritize QHSE compliance for safety, efficiency, cost reduction, and maintain a culture of accountability and responsibility through continuous improvement.",
    link: "/consulting",
  },
];

export function Home() {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % bgImg.length);
      document
        .getElementById(`slide-${(currentIndex + 1) % bgImg.length}`)
        .scrollIntoView({ behavior: "smooth" });
    }, 10000); // Change image every 10 seconds

    return () => clearInterval(interval);
  }, [currentIndex]);

  const scrollToSlide = (index) => {
    setCurrentIndex(index);
    document
      .getElementById(`slide-${index}`)
      .scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="relative flex h-screen content-center items-center justify-center pb-32 pt-16">
        <div className="absolute">
          <div
            className="no-scrollbar relative flex snap-x snap-mandatory overflow-x-scroll"
            style={{
              paddingBottom: "-5px",
              clipPath: "inset(0 0 -5px 0)",
            }}
          >
            {bgImg.map((item, index) => (
              <section
                id={`slide-${index}`}
                className="relative w-full flex-shrink-0 snap-center items-center justify-center"
                key={index}
              >
                <img
                  className="top-0 h-full w-full snap-center bg-cover bg-center"
                  src={item?.imgURL}
                  alt={item?.title}
                />
                <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center bg-black/20">
                  <div className="max-w-8xl container mx-auto text-center lg:text-left">
                    <div className="mx-auto w-full px-4 lg:w-8/12">
                      <Typography
                        className="mb-6 text-5xl font-normal lg:text-8xl"
                        style={{ color: "white", fontFamily: "Gilroy" }}
                      >
                        {item?.title}
                      </Typography>
                      <Typography
                        variant="lead"
                        className="text-xl font-normal opacity-80 lg:text-2xl"
                        style={{ color: "white", fontFamily: "Gilroy" }}
                      >
                        {item?.detail}
                      </Typography>
                      <Button
                        className="mt-10 rounded-full bg-orange-700 px-10 py-3 text-lg font-normal normal-case text-white hover:bg-orange-800 lg:py-5 lg:text-xl"
                        onClick={() => navigate(item?.link)}
                        style={{ fontFamily: "Gilroy" }}
                      >
                        Learn More
                      </Button>
                    </div>
                  </div>
                </div>
              </section>
            ))}
          </div>
          <div className="absolute bottom-10 left-1/2 flex -translate-x-1/2 transform space-x-3">
            {bgImg.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToSlide(index)}
                className={`h-3 w-3 rounded-full ${
                  currentIndex === index ? "bg-white" : "bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <section className="mt-20 bg-white px-4 pb-20 pt-4">
        <div className="container mx-auto">
          <ExecSection />
          <OurServiceSection featuresData={featuresData} />
        </div>
      </section>

      <section className="bg-white px-4 pb-20 pt-4">
        <PartnerSection />
      </section>

      <div
        className="mt-10 pb-10 lg:pb-20"
        style={{ backgroundColor: "#2E294E" }}
      >
        <Footer />
      </div>
    </>
  );
}

export default Home;
