import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";

const TOP_PROJECTS_Query = graphql`
  {
    github {
      viewer {
        pinnedRepositories(
          first: 3
          orderBy: { direction: DESC, field: STARGAZERS }
        ) {
          edges {
            node {
              name
              url
              description
              stargazers {
                totalCount
              }
            }
          }
        }
      }
    }
  }
`;

const PinnedProjects = () => {
  const data = useStaticQuery(TOP_PROJECTS_Query);
  const nodes = data.github.viewer.pinnedRepositories.edges;
  return (
    <TopStyled>
      <div className="containerProject">
        {nodes.map(({ node }) => (
          <React.Fragment key={node.url}>
            <a
              className="singleProject"
              target="_blank"
              rel="noopener noreferrer"
              href={node.url}
            >
              {node.name}
              <p>{node.description}</p>
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
              <p className="starCount">{node.stargazers.totalCount}</p>
            </a>
          </React.Fragment>
        ))}
      </div>
    </TopStyled>
  );
};

export default PinnedProjects;

const TopStyled = styled.div`
  font-family: "montserrat", "lato", "sans-serif";
  margin: 20px auto;
  max-width: ${props => props.theme.maxWidth};
  .containerProject {
    margin: 0 20px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    grid-template-rows: auto;
    grid-gap: 20px;

    .singleProject {
      height: 100%;
      border-radius: 5px;
      padding: 10px;
      transition: all 0.2s;
      background-color: ${props => props.theme.backgroundColorAlt};
      box-shadow: 0px 20px 40px -25px ${props => props.theme.dropShadow};
      font-size: 2.2rem;
      line-height: 2rem;
      a {
        text-decoration: none;
      }
      p {
        margin-top: 5px;
        font-size: 1.6rem;
      }
      &:hover {
        transform: scale(0.95) translateY(5px);
        box-shadow: 0 4px 20px ${props => props.theme.dropShadow};
      }
      .starCount {
        display: inline-block;
      }
      .octicon {
        fill: ${props => props.theme.textColor};
      }
    }
  }
`;
