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
            }
          }
        }
      }
    }
  }
`;
const listStyle = {
  margin: "10px 0",
  padding: "5px",
  listStyle: "none",
  fontSize: "1.4rem",
  height: "100%",
  backgroundColor: "#ffebee",
  borderRadius: "10px"
};
const Projects = () => {
  return (
    <ProjectStyled>
      <h1 id="page-heading">Projects</h1>
      <TopProjects />
      <h1 id="page-heading">All Projects</h1>
      <StaticQuery
        query={AllProjectQuery}
        render={data => {
          const repos = data.github.viewer.repositories.edges;
          return repos.map(({ node }) => (
            <li style={listStyle} key={node.url}>
              <h2>
                <a target="_blank" rel="noopener noreferrer" href={node.url}>
                  {node.name}
                </a>
              </h2>
              <p>{node.description}</p>
            </li>
          ));
        }}
      />
    </ProjectStyled>
  );
};

export default Projects;
