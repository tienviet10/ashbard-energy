import PropTypes from "prop-types";
import { Typography, IconButton } from "@material-tailwind/react";

const year = new Date().getFullYear();

export function Footer({ title, description, socials, menus, copyright }) {
  return (
    <footer className="relative px-4 pb-6 pt-8">
      <div className="container mx-auto">
        <div className="flex flex-wrap pt-6 text-center lg:text-left">
          <div className="flex w-full flex-row items-center justify-center px-4 lg:w-3/12 lg:justify-start">
            <img src="/img/logo-footer.png" style={{ maxWidth: "405px" }} />
          </div>
          <div className="mx-auto mt-12 grid gap-8 lg:max-w-screen-lg lg:grid-cols-3 lg:gap-24 xl:max-w-screen-xl">
            {menus.map(({ name, items }) => (
              <div key={name} className="text-center lg:text-left">
                <Typography
                  variant="medium"
                  className="mb-2 block font-medium uppercase"
                  style={{
                    color: "#FF8600",
                    fontFamily: "Gilroy",
                    fontWeight: "550",
                  }}
                >
                  {name}
                </Typography>
                <ul className="mt-3">
                  {items.map((item) => (
                    <li key={item.name}>
                      <Typography
                        as="a"
                        href={item.path}
                        target="_blank"
                        rel="noreferrer"
                        variant="small"
                        className="mb-2 block font-normal text-white hover:text-blue-gray-700"
                        style={{ fontFamily: "Gilroy", fontWeight: "500" }}
                      >
                        {item.name}
                      </Typography>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

Footer.defaultProps = {
  title: "Material Tailwind",
  description:
    "Easy to use React components for Tailwind CSS and Material Design.",
  socials: [
    {
      color: "gray",
      name: "twitter",
      path: "https://www.twitter.com/creativetim",
    },
    {
      color: "gray",
      name: "youtube",
      path: "https://www.youtube.com/channel/UCVyTG4sCw-rOvB9oHkzZD1w",
    },
    {
      color: "gray",
      name: "instagram",
      path: "https://www.instagram.com/creativetimofficial/",
    },
    {
      color: "black",
      name: "github",
      path: "https://github.com/creativetimofficial/material-tailwind",
    },
  ],
  menus: [
    {
      name: "IMPORTANT LINKS",
      items: [
        {
          name: "About Us",
          path: "",
        },
        {
          name: "Services",
          path: "",
        },
        {
          name: "Updates",
          path: "",
        },
        {
          name: "Testimonials",
          path: "",
        },
      ],
    },
    {
      name: "IMPORTANT LINKS",
      items: [
        {
          name: "About Us",
          path: "",
        },
        {
          name: "Services",
          path: "",
        },
        {
          name: "Updates",
          path: "",
        },
        {
          name: "Testimonials",
          path: "",
        },
      ],
    },
    {
      name: "CONTACT US",
      items: [
        {
          name: "info@ashbardplatinum.ca",
          path: "",
        },
        {
          name: "(403) 123 000",
          path: "",
        },
        {
          name: "Calgary, Alberta, Canada",
          path: "",
        },
      ],
    },
  ],
  copyright: (
    <>
      Copyright © {year} Material Tailwind by{" "}
      <a
        href="https://www.creative-tim.com?ref=mtk"
        target="_blank"
        className="text-blue-gray-500 transition-colors hover:text-blue-500"
      >
        Creative Tim
      </a>
      .
    </>
  ),
};

Footer.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  socials: PropTypes.arrayOf(PropTypes.object),
  menus: PropTypes.arrayOf(PropTypes.object),
  copyright: PropTypes.node,
};

Footer.displayName = "/src/widgets/layout/footer.jsx";

export default Footer;
