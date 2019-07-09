/**
 * Kinda inspired from formidable
 */
import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

function HomeProjects(props) {
  const { projectTitle, projectType, projectDescription, projectImage } = props;
  return (
    <Container>
      <InfoContainer>
        <div>
          <h2>{projectTitle}</h2>
          <ProjectType>{projectType}</ProjectType>
          <ProjectInfo>{projectDescription}</ProjectInfo>
        </div>
        <ProjectLink
          aria-label="Navigate to Projects page"
          to={"/projects/slps"}
        >
          <span id="caselink">View Case Study</span>
          <span id="linkarrow">&#10140;</span>
        </ProjectLink>
      </InfoContainer>
      <ImageContainer>
        <img src={projectImage} alt="Project Screenshot" />
      </ImageContainer>
    </Container>
  );
}

const Container = styled.div`
  background-color: ${props => props.theme.backgroundColorAlt};
  border-radius: 5px 5px 0 0;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  flex-wrap: wrap;
  box-shadow: 0 0 20px -5px rgba(0, 0, 0, 0.1);
`;

const InfoContainer = styled.div`
  max-width: 95%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

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

const ProjectLink = styled(props => <Link {...props} />)`
  margin-bottom: 2rem;
  height: 4rem;
  width: 60%;
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

const ProjectType = styled.p`
  font-size: 1.8rem;
  font-family: "inconsolata";
`;

const ProjectInfo = styled.p`
  font-size: 1.4rem;
  font-family: "inconsolata";
`;

const ImageContainer = styled.div`
  max-width: 550px;
`;

export default HomeProjects;
