import React from "react";
import styled, { css } from "styled-components";

function ProjectList(props) {
  const { repos } = props;
  return (
    <div className="projectContainer">
      {repos.map(({ node }) => (
        <ProjectTile
          key={node.url}
          href={node.url}
          target="_blank"
          rel="noopener noreferrer"
          className="projectCard"
        >
          <h2 className="projectTitle">
            <p
              css={css`
                color: ${props => props.theme.primary};
              `}
            >
              {node.name}
            </p>
            <span
              className="stargazer"
              css={css`
                color: ${props => props.theme.primary};
              `}
            >
              <svg
                className="octicon octicon-star v-align-text-bottom"
                viewBox="0 0 14 16"
                version="1.1"
                width="16"
                height="14"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"
                />
              </svg>
              {node.stargazers.totalCount}
            </span>
          </h2>
          <p id="description">{node.description}</p>
        </ProjectTile>
      ))}
    </div>
  );
}

export default ProjectList;

const ProjectTile = styled.a`
  font-size: 1.4rem;
  position: relative;
  padding: 1.5rem 2.5rem;
  /* height: 100%; */
  background-color: ${props => props.theme.backgroundColorAlt};
  border-radius: 10px;
  box-shadow: 0 0 5px 0px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease;
  &:hover {
    background-color: ${props => props.theme.primaryExtraLight};
    p#description {
      color: #222222;
    }
    &:before,
    &:after {
      z-index: 0;
    }
  }
  .octicon {
    fill: ${props => props.theme.primary};
  }
`;
