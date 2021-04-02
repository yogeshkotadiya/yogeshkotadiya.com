import React from "react";
import PropTypes from "prop-types";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";

import { rhythm } from "utils/typography";
import Container from "components/Container";
import SEO from "components/SEO";
import PageHeading from "components/PageHeading";
import ProjectList from "components/ProjectList";
import MajorProject from "components/MajorProject";

import "styles/pages/project.css";

import openSourceBackground from "Images/openSourceBackground.svg";

function Projects() {
  const data = useStaticQuery(AllProjectQuery);
  const repos = data.github.viewer.repositories.edges;
  return (
    <Container>
      <SEO title={`Projects | ${data.site.siteMetadata.title}`} />
      <ProjectStyled>
        <PageHeading className="page-heading" headingName="Projects">
          Projects
        </PageHeading>
        <MajorProject
          projectTitle="SLPS"
          projectType="React Native Application"
          projectDescription="SLPS is a mobile application built on React Native"
          projectCaseLink="https://fregmaa.com/projects/slps"
          projectImage={data.slpsBanner}
        />
        <div className="openSource">
          <PageHeading className="page-heading" headingName="Open Source">
            ❤ open source
          </PageHeading>
          <div>
            <p className="openSource__intro">
              Open Source is huge part of Web today as most of our development
              liberaries are free and open source possible by lots of developers
              so as a fellow developer In my self time I contribute to open
              source projects and also manage my
              <a href="https://www.npmjs.com/~yogeshkotadiya"> npm</a> packages.
            </p>
            <p className="openSource__intro">
              Below are some of my github projects feel free to dig around.
            </p>
          </div>
          <img className="openSourceBg" src={openSourceBackground} />
        </div>
        <ProjectList repos={repos} />
        <div className="projectFooter">
          <a className="repoLink" href="https://github.com/yogeshkotadiya">
            All Repositories
          </a>
        </div>
      </ProjectStyled>
    </Container>
  );
}

export default Projects;

Projects.propTypes = {
  location: PropTypes.object,
};

const ProjectStyled = styled.div`
  max-width: ${(props) => props.theme.maxWidth};
  margin: 0 auto;
  padding: 0 ${rhythm(2 / 4)};
  h2 {
    margin-top: ${rhythm(2 / 4)};
  }
`;

const AllProjectQuery = graphql`
  query AllProjectQuery {
    site {
      siteMetadata {
        title
      }
    }
    slpsBanner: file(relativePath: { eq: "slps-project-banner_new.webp" }) {
      childImageSharp {
        gatsbyImageData(width: 800, layout: CONSTRAINED)
      }
    }
    github {
      viewer {
        repositories(
          first: 12
          isFork: false
          orderBy: { field: STARGAZERS, direction: DESC }
          affiliations: COLLABORATOR
          privacy: PUBLIC
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
