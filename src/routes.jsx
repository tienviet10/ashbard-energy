import {
  Profile,
  Home,
  AboutUs,
  Services,
  //   Projects,
  //   Events,
  Careers,
  ContactUs,
  OilAndGas,
  Transportation,
  Consulting,
  TransportationServices,
} from "@/pages";

export const routes = [
  {
    name: "HOME",
    path: "/home",
    element: <Home />,
  },
  {
    name: "ABOUT US",
    path: "/about-us",
    element: <AboutUs />,
    // element: <AboutUsTheTeam />,
    // element: <AboutUsOEMPartners />,
  },
  {
    name: "SERVICES",
    subRoutes: [
      {
        name: "Oil and Gas",
        path: "/oil-and-gas",
        element: <OilAndGas />,
      },
      {
        name: "Transportation",
        path: "/transportation",
        element: <TransportationServices />,
      },
      {
        name: "Consulting",
        path: "/consulting",
        element: <Consulting />,
      },
    ],
  },
  //   {
  //     name: "PROJECTS",
  //     path: "/profile",
  //     element: <Projects />,
  //   },
  //   {
  //     name: "EVENTS",
  //     path: "/events",
  //     element: <Events />,
  //   },
  {
    name: "CAREERS",
    path: "/careers",
    element: <Careers />,
  },
  {
    name: "CONTACT US",
    path: "/contact-us",
    element: <ContactUs />,
  },
];

export default routes;
