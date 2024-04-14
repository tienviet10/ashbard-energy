import { Profile, Home } from "@/pages";

export const routes = [
  {
    name: "HOME",
    path: "/home",
    element: <Home />,
  },
  {
    name: "ABOUT US",
    path: "/profile",
    element: <Home />,
  },
  {
    name: "SERVICES",
    path: "/profile",
    element: <Home />,
  },
  {
    name: "PROJECTS",
    path: "/profile",
    element: <Home />,
  },
  {
    name: "EVENTS",
    path: "/profile",
    element: <Home />,
  },
  {
    name: "CAREERS",
    path: "/profile",
    element: <Profile />,
  },
  {
    name: "CONTACT US",
    path: "/profile",
    element: <Home />,
  },
  // {
  //   name: "Sign In",
  //   path: "/sign-in",
  //   element: <SignIn />,
  // },
  // {
  //   name: "Sign Up",
  //   path: "/sign-up",
  //   element: <SignUp />,
  // },
  // {
  //   name: "Docs",
  //   href: "https://www.material-tailwind.com/docs/react/installation",
  //   target: "_blank",
  //   element: "",
  // },
];

export default routes;
