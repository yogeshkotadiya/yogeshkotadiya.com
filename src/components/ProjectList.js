import React from "react";
import styled from "styled-components";

function ProjectList(props) {
  const { repos } = props;
  return (
    <ProjectListContainer>
      {repos.map(({ node }) => (
        <ProjectTile
          key={node.url}
          href={node.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <ProjectTitle>
            <p>{node.name}</p>
            <span className="stargazer">
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
          </ProjectTitle>
          <p id="description">{node.description}</p>
        </ProjectTile>
      ))}
    </ProjectListContainer>
  );
}

export default ProjectList;

const ProjectListContainer = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  grid-template-rows: minmax(150px, 1fr);
  grid-auto-rows: minmax(min-content, max-content);
  grid-auto-flow: dense;
`;

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
    &:before,
    &:after {
      z-index: 0;
    }
  }
  .octicon {
    fill: ${props => props.theme.primary};
  }
  #description {
    padding: 0 1rem;
  }
  &:nth-child(2n) {
    &:before {
      background-color: #aaffcc;
    }
  }
  &:before {
    content: "";
    width: 2rem;
    top: 0;
    left: 0;
    bottom: 0;
    position: absolute;
    border-radius: 1rem 0 0 1rem;
    background-color: #ffff99;
  }
  &:after {
    content: "Project";
    position: absolute;
    left: 0;
    bottom: 0;
    color: #663399;
    transform: rotate(-90deg) translate(2rem, 0);
    transform-origin: top left;
  }
`;

const ProjectTitle = styled.h2`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  font-family: "lato";
  p,
  span {
    color: ${props => props.theme.primary};
  }
`;
