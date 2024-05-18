import React from "react";
import ProjectCard from "./ProjectCard";
import Proj1 from "/img/proj1.png";
import Logo1 from "/img/northstar-logo.png";
import Proj2 from "/img/proj2.png";
import Logo2 from "/img/merla-logo.png";

const ProjectContent = () => {
  return (
    <>
      <ProjectCard
        imageSrc1={Proj1}
        imageSrc2={Logo1}
        description="Pipe installation for Northstar downhole specialist in Calgary"
      />
      <ProjectCard
        imageSrc1={Proj2}
        imageSrc2={Logo2}
        description="Pipe installation for Northstar downhole specialist in Calgary"
      />
    </>
  );
};

export default ProjectContent;
