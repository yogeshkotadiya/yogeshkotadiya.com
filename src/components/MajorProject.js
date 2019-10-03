/**
 * Kinda inspired from formidable
 */
import React from "react";
import Img from "gatsby-image";
import { css } from "styled-components";

import "styles/primaryProject.css";

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
          background-color: ${props => props.theme.backgroundColorAlt};
        `}
      >
        <div
          css={css`
            border-bottom: 1px solid #ef5350;
            margin-bottom: 1rem;
          `}
        >
          <h2
            css={css`
              color: ${props => props.theme.textColor};
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
          <a
            className="projectLink"
            aria-label="Navigate to Projects page"
            href={projectCaseLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span id="caselink">View Case Study</span>
            <span id="linkarrow">&#10140;</span>
          </a>
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
