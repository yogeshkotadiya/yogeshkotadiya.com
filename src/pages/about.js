import * as React from "react";
import Img from "gatsby-image";
import { graphql } from "gatsby";
import styled from "styled-components";

import SEO from "components/SEO";
import Container from "components/Container";

function About(props) {
  return (
    <Container>
      <SEO title={`About ${props.data.site.siteMetadata.title}`} />
      <AboutStyled>
        <Img fluid={props.data.profile.childImageSharp.fluid} alt="Profile" />
        <p>Hello</p>
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
  .gatsby-image-wrapper {
    width: 200px;
    display: block;
    margin: 0 auto;
    margin-bottom: 20px;
    border-radius: 50%;
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.3);
  }
`;
