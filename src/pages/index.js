import * as React from "react";
import { graphql, Link } from "gatsby";
import styled, { css } from "styled-components";
import Typed from "react-typed";

import BlogList from "components/Bloglist";
import SEO from "components/SEO";
import Container from "components/Container";
import PageHeading from "components/PageHeading";
import MajorProject from "components/MajorProject";

import { rhythm } from "../utils/typography";
import HeroBG from "Images/heroBg.svg";
import "styles/pages/index.css";

function IndexPage({ data }) {
  const { site, slpsBanner, allMdx } = data;
  return (
    <Container>
      <SEO title={site.siteMetadata.title} />
      <IndexStyled>
        <div className="indexPattern-1 circles" />
        <div className="indexPattern-2 circles" />
        <div className="introduction">
          <Intro id="intro">
            Hi,
            <span id="wave-emoji" role="img" aria-label="Wave Emoji">
              👋
            </span>{" "}
            I&apos;m <span id="name">Yogesh</span>
          </Intro>
          <p
            css={css`
              font-size: 2.8rem;
              color: ${props => props.theme.primary};
            `}
          >
            &#123; Web Developer &#125;
          </p>
          <Intro id="intro-bottom">
            From India <span>🇮🇳</span>
          </Intro>
          <p style={{ fontSize: 22 }}>
            Founder{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://fregmaa.com"
            >
              @fregmaa
            </a>
          </p>
          <p style={{ fontSize: 24 }}>exploring</p>
          <p
            css={css`
              font-size: 3rem;
              color: ${props => props.theme.primary};
            `}
          >
            &#8725;&#8725;
            <Typed
              strings={[
                "Javascript",
                "Typescript",
                "React",
                "React Native",
                "Node.js",
                "GraphQL",
                "Golang",
              ]}
              typeSpeed={70}
              backSpeed={70}
              className="type-text_sub"
              style={{
                fontSize: 32,
              }}
              loop
            />
          </p>
          <a style={{ fontSize: "2.2rem" }} href="mailto:hi@yogeshkotadiya.com">
            hi@yogeshkotadiya.com
          </a>
        </div>
        <img className="hero_bg" src={HeroBG} alt="Hero Background" />
      </IndexStyled>
      <div>
        <PageHeading headingName="Projects">Projects</PageHeading>
        <MajorProject
          projectTitle="SLPS"
          projectType="React Native Application"
          projectDescription="SLPS is a mobile application built on React Native"
          projectCaseLink="https://fregmaa.com/projects/slps"
          projectImage={slpsBanner}
        />
        <div className="btn-link">
          <Link to="/projects">All Projects &#10140;</Link>
        </div>
        <PageHeading headingName="Blog">Blog</PageHeading>
        <BlogList title={site.siteMetadata.title} posts={allMdx.edges} />
        <div className="btn-link">
          <Link to="/blog">Checkout all Posts &#10140;</Link>
        </div>
      </div>
    </Container>
  );
}

export default IndexPage;

const IndexStyled = styled.div`
  margin: 0 auto;
  margin-bottom: 15rem;
  padding: 20px;
  max-width: ${rhythm(70)};
  border-radius: 1rem;
  box-shadow: 0px 2rem 40px -15px ${props => props.theme.primaryLight};
  background-color: ${props => props.theme.backgroundColorAlt};
  color: ${props => props.theme.lightBlack};
  display: flex;
  justify-content: center;
  line-height: 1.5;
  .introduction {
    p {
      color: ${props => props.theme.lightBlack};
    }
  }
`;

const Intro = styled.p`
  color: ${props => props.theme.textColor};
`;

export const pageQuery = graphql`
  query {
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
    allMdx(limit: 3, sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            readLength
            description
            banner {
              childImageSharp {
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`;
