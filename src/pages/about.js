import * as React from "react";
import Img from "gatsby-image";
import { graphql } from "gatsby";
import styled from "styled-components";

import { rhythm } from "utils/typography";
import SEO from "components/SEO";
import Container from "components/Container";

function About(props) {
  return (
    <Container>
      <SEO title={`About ${props.data.site.siteMetadata.title}`} />
      <AboutStyled>
        <Img fluid={props.data.profile.childImageSharp.fluid} alt="Profile" />
        <div className="aboutContainer">
          <p id="intro">
            Hi,
            <span role="img" aria-label="Wave Emoji">
              👋
            </span>{" "}
            I&apos;m <span id="name">Yogesh Kotadiya</span>
          </p>
          <p>
            I&apos;m a Web developer focuses on performace and design, and loves
            tweaking and discovering and building things to make better web. I
            play video games for fun, listens to music (Sheerios) and build
            stupid stuffs.
          </p>
          <p>Here&apos;s a tech stack that i incorporate into my work.</p>
          <ul>
            <li>
              <strong>TypeScript</strong>: Typescript is Godsent for me when I
              first heard that you can now write fully typed Javascript and I
              was so excited and really curious to try it out and now I
              can&apos;t imagine writing production Javascript without
              Typescript.
            </li>
            <li>
              <strong>Node.js</strong>: As web developer today it&apos;s
              impossible that you have not used Node in your project or at least
              heard of it. Node opened a wide door for Front-end developers to
              enter into server realm.
            </li>
            <li>
              <strong>GraphQL</strong>: GraphQL is a new query language intended
              to replace traditional RESTful API, GraphQL allows you to request
              data only that you required and perform CRUD operations using the
              single endpoint.
            </li>
            <li>
              <strong>GoLang</strong>: Having a knowledge of good performance
              centric language for backend can really save you hustle of
              optimizing server load, Go is fast, typed safe and has amazing
              concurrency modal allows me to write great web services and it
              also integrates with GraphQL nicely. I&apos;m currently learning
              Go and building scalable web and micro services.
            </li>
          </ul>
          <p>
            You can contact me on Twitter or say hi directly to my mail{" "}
            <a href="mailto:hi@yogeshkotadiya.com">hi@yogeshkotadiya.com</a>
          </p>
          <QuickLinks>
            <p>Some quick links to reach out to me.</p>
            <a href="https://github.com/yogeshkotadiya">Github</a>
            <a href="https://twitter.com/yogeshkotadiya">Twitter</a>
            <a href="https://www.linkedin.com/in/yogeshkotadiya/">LinkedIn</a>
          </QuickLinks>
        </div>
      </AboutStyled>
    </Container>
  );
}

export default About;

export const PageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    profile: file(relativePath: { eq: "profile.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

const AboutStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  font-size: 1.8rem;
  margin: 0 auto;
  min-height: 60vh;
  #intro {
    font-size: ${rhythm(1.7)};
    color: ${props => props.theme.primary};
    font-weight: 600;
  }
  .gatsby-image-wrapper {
    height: 200px;
    width: 200px;
    margin-bottom: 20px;
    border-radius: 50%;
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.3);
  }
  .aboutContainer {
    max-width: calc(${props => props.theme.maxWidth} - 300px);
    width: 100%;
    padding: 0 ${rhythm(1.5)};

    li {
      color: ${props => props.theme.textColor};
    }
  }
`;

const QuickLinks = styled.div`
  display: flex;
  border-top: 2px solid ${props => props.theme.primary};
  flex-direction: column;
  padding: 2rem;
`;
