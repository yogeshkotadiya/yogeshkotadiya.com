import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
import Img from "gatsby-image";
import TopProjects from "./Projects/TopProjects";
import BlogList from "./Bloglist";

const ImgQuery = graphql`
  {
    profile: file(relativePath: { eq: "profile.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

const Home = ({ data }) => {
  const image = useStaticQuery(ImgQuery);
  return (
    <>
      <IndexStyled>
        <div className="introduction">
          <Img fluid={image.profile.childImageSharp.fluid} alt="Profile" />
          <p id="intro">
            Hi!
            <span role="img" aria-label="Wave Emoji">
              👋
            </span>{" "}
            I'm <span id="name">Yogesh Kotadiya</span>
          </p>
          <p>
            I'm a Javascript Developer from India
            <span role="img" aria-label="India Flag Emoji">
              🇮🇳
            </span>
            . I work with React,Typescript,GraphQL and Javascript(ES8+).
          </p>
          <p>
            You can follow me on twitter{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.twitter.com/yogeshkotadiya"
            >
              @yogeshkotadiya
            </a>
            , I mostly tinker with new things in Javascript when i'm not doing
            anything, you can find my Open Source Porjects on{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/yogeshkotadiya"
            >
              Github
            </a>
            .
          </p>
        </div>
      </IndexStyled>
      <h1 className="page-heading">Projects</h1>
      <TopProjects />
      <h1 className="page-heading">Blog</h1>
      <BlogList
        title={data.site.siteMetadata.title}
        posts={data.allMdx.edges}
      />
    </>
  );
};
export default Home;

const IndexStyled = styled.div`
  font-family: "montserrat";
  margin: 0 auto;
  padding: 20px;
  font-size: 1.8rem;
  background-color: ${props => props.theme.backgroundColor};
  color: ${props => props.theme.lightBlack};
  display: flex;
  justify-content: center;
  line-height: 1.5;
  .introduction {
    width: 680px;
    #intro {
      text-align: center;
    }
    .gatsby-image-wrapper {
      width: 200px;
      display: block;
      margin: 0 auto;
      margin-bottom: 20px;
      border-radius: 50%;
      box-shadow: 0 3px 8px rgba(0, 0, 0, 0.3);
    }
    a {
      color: ${props => props.theme.primary};
    }
    p {
      color: ${props => props.theme.lightBlack};
    }
    h2 {
      font-size: 2.5rem;
    }
    h3 {
      font-size: 2rem;
    }
    #name {
      display: block;
      color: #ef5350;
      font-weight: 800;
      font-size: 3.4rem;
    }
  }
`;
