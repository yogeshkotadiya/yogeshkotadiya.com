import * as React from "react";
import Img from "gatsby-image";
import { graphql } from "gatsby";
import styled from "styled-components";

import { scale, rhythm } from "utils/typography";
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
            I&apos;m a 23 yr old Front-End developer focuses on performace and
            design, and loves tweaking and discovering new things on web.
          </p>
          <p>
            I specialize in React development with Typescript,Node.js and
            GraphQL.
          </p>
          <p>
            In my self time i contribute to open source projects and also manage
            my <a href="https://www.npmjs.com/~yogeshkotadiya">npm</a> packages.
          </p>
          <p>
            You can contact me on Twitter or say hi directly to my mail{" "}
            <a href="mailto:hiyogeshkotadiya@gmail.com">
              hiyogeshkotadiya@gmail.com
            </a>
          </p>
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
  }
`;
