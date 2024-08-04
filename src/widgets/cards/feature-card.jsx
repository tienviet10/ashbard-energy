import PropTypes from "prop-types";
import {
  Card,
  CardBody,
  Typography,
  IconButton,
} from "@material-tailwind/react";

export function FeatureCard({ color, icon, title, description }) {
  return (
    <Card
      className="mt-5 rounded-3xl p-6 shadow-lg shadow-gray-500/10 lg:mt-0"
      style={{ backgroundColor: "#F5F4F4" }}
    >
      <CardBody className="flex flex-col items-center">
        <img
          src={icon}
          className="mb-5"
          style={{ maxWidth: "100px", maxHeight: "100px" }}
        />
        <Typography
          variant="h5"
          className="mb-8 text-justify text-2xl "
          color="blue-gray"
          style={{ fontFamily: "Gilroy", fontWeight: "550" }}
        >
          {title}
        </Typography>
        <Typography
          className="text-justify font-normal text-black"
          style={{ fontFamily: "Gilroy" }}
        >
          {description}
        </Typography>
      </CardBody>
    </Card>
  );
}

FeatureCard.defaultProps = {
  color: "blue",
};

FeatureCard.propTypes = {
  color: PropTypes.oneOf([
    "blue-gray",
    "gray",
    "brown",
    "deep-orange",
    "orange",
    "amber",
    "yellow",
    "lime",
    "light-green",
    "green",
    "teal",
    "cyan",
    "light-blue",
    "blue",
    "indigo",
    "deep-purple",
    "purple",
    "pink",
    "red",
  ]),
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.node.isRequired,
};

FeatureCard.displayName = "/src/widgets/layout/feature-card.jsx";

export default FeatureCard;
