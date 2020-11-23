/**
 * Kinda inspired from formidable
 */
import React from "react";
import Img from "gatsby-image";
import styled, { css } from "styled-components";

import "styles/primaryProject.css";

const CaseLink = styled.a`
  margin-bottom: 2rem;
  height: 4rem;
  width: 22rem;
  align-items: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.primary};
  overflow: hidden;
  cursor: pointer;

  & > #caselink {
    color: #fff;
    font-size: 1.5em;
    font-weight: 800;
    padding: 1rem;
    position: relative;
    transition: all 0.3s cubic-bezier(0.77, 0, 0.175, 1);
    background: ${(props) =>
      `linear-gradient(to right, #cc132e 50%, ${props.primary} 50%)`};
    background-size: 200% 100%;
    background-position: right bottom;
  }

  & #linkarrow {
    transition: all 0.3s cubic-bezier(0.77, 0, 0.175, 1) 0.1s;
    transform: translateX(-10px);
    color: #fff;
    font-size: 1.8rem;
    padding: 0 2rem;
  }

  &:hover #caselink {
    background-position: left bottom;
  }

  &:hover #linkarrow {
    transform: translateX(-3px);
  }

  @media screen and (max-width: 400px) {
    & {
      width: 80%;
    }
  }
`;

function MajorProjects(props) {
  const {
    projectTitle,
    projectType,
    projectDescription,
    projectImage,
    projectCaseLink,
  } = props;

  return (
    <div className="primaryProjectContainer">
      <div
        className="projectInfoContainer"
        css={css`
          background-color: ${(props) => props.theme.backgroundColorAlt};
        `}
      >
        <div
          css={css`
            border-bottom: 1px solid ${(props) => props.theme.primary};
            margin-bottom: 1rem;
          `}
        >
          <h2
            css={css`
              color: ${(props) => props.theme.textColor};
              font-size: 5.5rem;
              font-family: "lato";
            `}
          >
            {projectTitle}
          </h2>
          <p
            css={css`
              font-size: 1.8rem;
            `}
          >
            {projectType}
          </p>
          <p
            css={css`
              font-size: 1.6rem;
            `}
          >
            {projectDescription}
          </p>
        </div>
        {projectCaseLink && (
          <CaseLink
            className="projectLink"
            aria-label="Navigate to Projects page"
            href={projectCaseLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span id="caselink">View Case Study</span>
            <span id="linkarrow">&#10140;</span>
          </CaseLink>
        )}
      </div>
      <Img
        css={css`
          width: 100%;
          max-width: 550px;
          box-shadow: 0 0 20px -5px rgba(0, 0, 0, 0.1);
        `}
        fluid={projectImage.childImageSharp.fluid}
        alt="Project Screenshot"
      />
    </div>
  );
}

export default MajorProjects;
