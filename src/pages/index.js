import * as React from "react";
import PropTypes from "prop-types";
import { graphql, Link } from "gatsby";
import styled from "styled-components";
import Typed from "react-typed";

import BlogList from "components/Bloglist";
import SEO from "components/SEO";
import Container from "components/Container";
import PageHeading from "components/PageHeading";
import HomeProjects from "components/HomeProjects";

import openSourceBackground from "Images/openSourceBackground.svg";
import HeroBG from "Images/heroBg.svg";
import "./styles/index.css";

const IndexPage = ({ data }) => {
  return (
    <Container>
      <SEO title={data.site.siteMetadata.title} />
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
          <TypedStyle>
            &#123;
            <Typed
              strings={["Web Developer", "Designer", "Open Source Wizard"]}
              typeSpeed={70}
              backSpeed={30}
              className="type-text"
              style={{
                fontSize: 32,
              }}
              loop
            />
            &#125;
          </TypedStyle>
          <Intro id="intro-bottom">From India</Intro>
          <p style={{ fontSize: 26 }}>exploring</p>
          <SubTypedStyle>
            &#8725;&#8725;
            <Typed
              strings={[
                "React",
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
        </div>
        <HeroBackground src={HeroBG} alt="Hero Background" />
      </IndexStyled>
      <SectionStyled>
        <PageHeading headingName="Projects">Projects</PageHeading>
        <HomeProjects
          projectTitle="SLPS"
          projectType="React Native Application"
          projectDescription="SLPS is a mobile application built on React Native"
          projectCaseLink="/projects/slps"
          projectImage={openSourceBackground}
        />
        {/* <HomeProjects /> */}
        {/* <HomeProjects /> */}
        <div className="btn-link">
          <Link to="/projects">All Projects &#10140;</Link>
        </div>
        <PageHeading headingName="Blog">Blog</PageHeading>
        <BlogList
          title={data.site.siteMetadata.title}
          posts={data.allMdx.edges}
        />
        <div className="btn-link">
          <Link to="/blog">Checkout all Posts &#10140;</Link>
        </div>
      </SectionStyled>
    </Container>
  );
};
IndexPage.propTypes = {
  data: PropTypes.any,
  location: PropTypes.object,
};

export default IndexPage;

const IndexStyled = styled.div`
  margin: 0 auto;
  padding: 20px;
  /* background: linear-gradient(to right, #acb6e5, #86fde8); */
  box-shadow: 0px 0px 20px 15px #00000010;
  border-radius: 1rem;
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

const HeroBackground = styled.img`
  max-width: 50rem;
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
