/**
 * Kinda inspired from formidable
 */
import React from "react";
import Img from "gatsby-image";
import styled from "styled-components";

function MajorProjects(props) {
  const {
    projectTitle,
    projectType,
    projectDescription,
    projectImage,
    projectCaseLink,
  } = props;

  return (
    <Container>
      <InfoContainer>
        <div>
          <h2>{projectTitle}</h2>
          <ProjectType>{projectType}</ProjectType>
          <ProjectInfo>{projectDescription}</ProjectInfo>
        </div>
        {projectCaseLink && (
          <ProjectLink
            aria-label="Navigate to Projects page"
            href={projectCaseLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span id="caselink">View Case Study</span>
            <span id="linkarrow">&#10140;</span>
          </ProjectLink>
        )}
      </InfoContainer>
      <ImageContainer
        fluid={projectImage.childImageSharp.fluid}
        alt="Project Screenshot"
      />
    </Container>
  );
}

export default MajorProjects;

const Container = styled.div`
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0 auto;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* flex-grow: 1; */
  padding: 1.5rem 2rem;
  /* margin: 0 auto; */
  max-width: 55rem;
  width: 100%;
  background-color: ${props => props.theme.backgroundColorAlt};
  box-shadow: 0 0 20px -5px rgba(0, 0, 0, 0.1);
  & > div {
    border-bottom: 1px solid #ef5350;
    margin-bottom: 1rem;
  }
  h2 {
    color: ${props => props.theme.textColor};
    font-size: 5.5rem;
    font-family: "lato";
  }
`;

const ProjectType = styled.p`
  font-size: 1.8rem;
  font-family: "inconsolata";
`;

const ProjectInfo = styled.p`
  font-size: 1.6rem;
  font-family: "inconsolata";
`;

const ImageContainer = styled(Img)`
  width: 100%;
  max-width: 550px;
  box-shadow: 0 0 20px -5px rgba(0, 0, 0, 0.1);
`;

const ProjectLink = styled.a`
  margin-bottom: 2rem;
  height: 4rem;
  width: 22rem;
  align-items: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #ef5350;
  overflow: hidden;
  cursor: pointer;
  #caselink {
    color: #fff;
    font-size: 1.5em;
    font-weight: 600;
    padding: 1rem;
    position: relative;
    transition: all 0.3s cubic-bezier(0.77, 0, 0.175, 1);
    background: linear-gradient(to right, #cc132e 50%, #ef5350 50%);
    background-size: 200% 100%;
    background-position: right bottom;
  }
  #linkarrow {
    transition: all 0.3s cubic-bezier(0.77, 0, 0.175, 1) 0.1s;
    transform: translateX(-10px);
    color: #fff;
    font-size: 1.8rem;
    padding: 0 2rem;
  }
  &:hover {
    #caselink {
      background-position: left bottom;
    }
    #linkarrow {
      transform: translateX(-3px);
    }
  }
  @media screen and (max-width: 400px) {
    width: 80%;
  }
`;
