import {
  Profile,
  Home,
  AboutUs,
  Services,
  Projects,
  Events,
  Careers,
  ContactUs,
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
        path: "/services",
        element: <Services />,
      },
      {
        name: "Transportation",
        path: "/transportation",
        element: <Transportation />,
      },
      {
        name: "Consulting",
        path: "/consulting",
        element: <Consulting />,
      },
    ],
  },
  {
    name: "PROJECTS",
    path: "/profile",
    element: <Projects />,
  },
  {
    name: "EVENTS",
    path: "/events",
    element: <Events />,
  },
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
  {
    name: "TRANSPORTATION SERVICES",
    path: "/transportation-services",
    element: <TransportationServices />,
  },
];

export default routes;
