import * as React from "react";
import PropTypes from "prop-types";
import { graphql, Link } from "gatsby";
import styled from "styled-components";
import Typed from "react-typed";

import PinnedProjects from "components/PinnedProjects";
import BlogList from "components/Bloglist";
import SEO from "components/SEO";
import Container from "components/Container";

import "./styles/index.css";

const IndexPage = ({ data }) => {
  return (
    <Container>
      <SEO title={data.site.siteMetadata.title} />
      <IndexStyled>
        <div className="indexPattern-1 circles" />
        <div className="indexPattern-2 circles" />
        <div className="introduction">
          <p id="intro">
            Hi,
            <span role="img" aria-label="Wave Emoji">
              👋
            </span>{" "}
            I&apos;m <span id="name">Yogesh</span>
          </p>
          <Typed
            strings={["FrontEnd Developer", "Open Source Contributor"]}
            typeSpeed={70}
            backSpeed={40}
            style={{
              fontSize: 32,
            }}
            loop
          />
        </div>
      </IndexStyled>
      <SectionStyled>
        <h1 className="page-heading">Projects</h1>
        <PinnedProjects />
        <div className="btn-link">
          <Link to="/projects">All Projects &#10140;</Link>
        </div>
        <h1 className="page-heading">Blog</h1>
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

const IndexStyled = styled.div`
  margin: 0 auto;
  padding: 20px;
  background-color: aquamarine;
  box-shadow: 0px 0px 20px 15px #00000010;
  border-radius: 1rem;
  /* background-color: ${props => props.theme.backgroundColor}; */
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

const SectionStyled = styled.div`
  .btn-link {
    margin: 4rem auto;
    text-align: center;
    font-size: 1.8rem;
  }
`;
