import {
  Profile,
  Home,
  AboutUs,
  Services,
  Projects,
  Events,
  Careers,
} from "@/pages";
import ContactUs from "./pages/ContactUs/ContactUs";

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
    path: "/services",
    element: <Services />,
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
];

export default routes;
