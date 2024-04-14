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
    element: <Profile />,
  },
  {
    name: "SERVICES",
    path: "/profile",
    element: <Profile />,
  },
  {
    name: "PROJECTS",
    path: "/profile",
    element: <Profile />,
  },
  {
    name: "EVENTS",
    path: "/profile",
    element: <Profile />,
  },
  {
    name: "CAREERS",
    path: "/profile",
    element: <Profile />,
  },
  {
    name: "CONTACT US",
    path: "/profile",
    element: <Profile />,
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
