import * as React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import Img from "gatsby-image";
import { rhythm, scale } from "utils/typography";
import styled from "styled-components";

import Container from "./Container";

const BlogListStyled = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: ${rhythm(40)};
  height: 100%;
  display: flex;
  flex-direction: row;
  padding: ${rhythm(2 / 4)} ${rhythm(3 / 4)};
  background-color: ${props => props.theme.backgroundColorAlt};
  border-bottom: 2px dashed ${props => props.theme.primary};
  .blog-date {
    color: ${props => props.theme.textColor};
  }
  .blogList-container {
    width: 100%;
  }
  .blogList-imageContainer {
    width: 60%;
  }
  .gatsby-image-wrapper {
    max-width: ${rhythm(25)};
    height: 200px;
  }
  @media screen and (max-width: 560px) {
    .blogList-imageContainer {
      display: none;
    }
  }
`;

const BlogList = ({ posts }) => (
  <Container>
    {posts.map(({ node }) => {
      const title = node.frontmatter.title || node.fields.slug;
      const blogLink = node.fields.slug;
      const blogImage = node.frontmatter.banner.childImageSharp.fluid;
      return (
        <BlogListStyled
          style={{
            ...scale(0.6),
          }}
          key={node.fields.slug}
        >
          <div className="blogList-container">
            <h1
              style={{
                margin: `${rhythm(2 / 4)} 0`,
              }}
            >
              <Link style={{ boxShadow: `none` }} to={blogLink}>
                {title}
              </Link>
            </h1>
            <small className="blog-date">
              {node.frontmatter.date} &#9679;
              <span>⏳ {node.frontmatter.readLength}</span>
            </small>
            <p>{node.frontmatter.description}</p>
            <Link style={{ boxShadow: `none` }} to={blogLink}>
              Read &#10140;
            </Link>
          </div>
          <div className="blogList-imageContainer">
            <Img fluid={blogImage} alt="Post Image" />
          </div>
        </BlogListStyled>
      );
    })}
  </Container>
);

export default BlogList;

BlogList.propTypes = {
  posts: PropTypes.any,
};
