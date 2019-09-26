import * as React from "react";
import PropTypes from "prop-types";
import { graphql, Link } from "gatsby";
import styled from "styled-components";
import Typed from "react-typed";

import BlogList from "components/Bloglist";
import SEO from "components/SEO";
import Container from "components/Container";
import PageHeading from "components/PageHeading";
import MajorProject from "components/MajorProject";

import { rhythm } from "../utils/typography";
import HeroBG from "Images/heroBg.svg";
import "./styles/index.css";

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
          <TypedStyle>&#123; Web Developer &#125;</TypedStyle>
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
          <SubTypedStyle>
            &#8725;&#8725;
            <Typed
              strings={[
                "React",
                "React Native",
                "Javascript",
                "Typescript",
                "Node.js",
                "GraphQL",
              ]}
              typeSpeed={70}
              backSpeed={70}
              className="type-text_sub"
              style={{
                fontSize: 32,
              }}
              loop
            />
          </SubTypedStyle>
          <MailMe href="mailto:hi@yogeshkotadiya.com">
            hi@yogeshkotadiya.com
          </MailMe>
        </div>
        <HeroBackground src={HeroBG} alt="Hero Background" />
      </IndexStyled>
      <SectionStyled>
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
      </SectionStyled>
    </Container>
  );
}

IndexPage.propTypes = {
  data: PropTypes.any,
  location: PropTypes.object,
};

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

const MailMe = styled.a`
  font-size: 2.6rem;
`;

const HeroBackground = styled.img`
  max-width: 50rem;
  z-index: 10;
  @media screen and (max-width: 1040px) {
    display: none;
  }
`;

const SectionStyled = styled.div`
  .btn-link {
    margin: 4rem auto;
    text-align: center;
    font-size: 1.8rem;
  }
`;

const SubTypedStyle = styled.p`
  font-size: 3.2rem;
  color: ${props => props.theme.primary};
`;

const TypedStyle = styled.p`
  font-size: 2.8rem;
  color: ${props => props.theme.primary};
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
