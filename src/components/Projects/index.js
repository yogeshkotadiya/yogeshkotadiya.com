import React from "react";
import { StaticQuery, graphql } from "gatsby";
import TopProjects from "./TopProjects";
import ProjectStyled from "./ProjectStyled";

const AllProjectQuery = graphql`
  query AllProjectQuery {
    github {
      viewer {
        repositories(
          first: 30
          orderBy: { field: STARGAZERS, direction: DESC }
          affiliations: COLLABORATOR
        ) {
          edges {
            node {
              name
              description
              url
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
const Projects = () => {
  return (
    <ProjectStyled>
      <h1 className="page-heading">Projects</h1>
      <TopProjects />
      <h1 className="page-heading">All Projects</h1>
      <StaticQuery
        query={AllProjectQuery}
        render={data => {
          const repos = data.github.viewer.repositories.edges;
          return repos.map(({ node }) => (
            <li className="listStyle" key={node.url}>
              <h2>
                <a target="_blank" rel="noopener noreferrer" href={node.url}>
                  {node.name}
                </a>
              </h2>
              <p className="stargazer">
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
              </p>
              <p>{node.description}</p>
            </li>
          ));
        }}
      />
    </ProjectStyled>
  );
};

export default Projects;
