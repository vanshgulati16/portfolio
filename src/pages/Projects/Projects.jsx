
import React, { useRef } from "react";
import { Page } from "../../components/Page";
import { projects } from "../../data";
import { NextButton } from "./carasoulButton";
import { ProjectItem } from "./ProjectItem";
import { Carasoul, ProjectContainer } from "./Projects.styled";

export const Projects = () => {
  const scrollContainerRef = useRef(null);

  const scrollAmount = 600; 
  const moveLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const moveRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <Page header="Projects">
      <ProjectContainer>
        <div className="wrapper" ref={scrollContainerRef}>
          {projects.map((data, index) => (
            <ProjectItem data={data} key={index} index={index} />
          ))}
        </div>
      </ProjectContainer>
      <Carasoul>
        <NextButton flip onClick={moveRight} />
        <NextButton onClick={moveLeft} />
      </Carasoul>
    </Page>
  );
};