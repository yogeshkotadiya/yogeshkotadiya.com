import * as React from "react";
import PropTypes from "prop-types";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";

import { rhythm } from "utils/typography";
import Container from "components/Container";
import SEO from "components/SEO";
import PageHeading from "components/PageHeading";
import ProjectList from "components/ProjectList";
import MajorProject from "components/MajorProject";

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
        <OpenSource className="openSource-background">
          <PageHeading className="page-heading" headingName="Open Source">
            ❤ open source
          </PageHeading>
          <div>
            <OpenSourceIntro>
              Open Source is huge part of Web today as most of our development
              liberaries are free and open source possible by lots of developers
              so as a fellow developer In my self time I contribute to open
              source projects and also manage my
              <a href="https://www.npmjs.com/~yogeshkotadiya"> npm</a> packages.
            </OpenSourceIntro>
            <OpenSourceIntro>
              Below are some of my github projects feel free to dig around.
            </OpenSourceIntro>
          </div>
          <OpenSourceImage src={openSourceBackground} />
        </OpenSource>
        <ProjectList repos={repos} />
        <ProjectFooter>
          <RepoLink href="https://github.com/yogeshkotadiya">
            All Repositories
          </RepoLink>
        </ProjectFooter>
      </ProjectStyled>
    </Container>
  );
}

export default Projects;

Projects.propTypes = {
  location: PropTypes.object,
};

const OpenSource = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  margin-bottom: 1.5rem;
  @media screen and (max-width: 500px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
`;

const OpenSourceIntro = styled.p`
  font-size: 1.8rem;
  width: 100%;
  min-width: 250px;
  font-family: "inconsolata";
`;

const OpenSourceImage = styled.img`
  background-size: contain;
  background-repeat: no-repeat;
  background-position: right;
  height: 300px;
`;

const ProjectStyled = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: 0 ${rhythm(2 / 4)};
  h2 {
    margin-top: ${rhythm(2 / 4)};
  }
`;

const ProjectFooter = styled.div`
  margin: 3rem auto 0;
  display: flex;
  justify-content: center;
`;

const RepoLink = styled.a`
  font-size: 1.4rem;
  color: #fff;
  border: 2px solid #ef5350;
  padding: 1rem;
  transition: 0.2s all;
  color: #ef5350;
  &:hover {
    background-color: #ef5350;
    color: #fff;
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
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid_withWebp
        }
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
