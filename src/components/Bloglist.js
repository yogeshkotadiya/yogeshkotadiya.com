import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { rhythm, scale } from "utils/typography";
import styled from "styled-components";

import Container from "./Container";

const BlogList = ({ posts }) => (
  <Container>
    {posts.map(({ node }) => {
      const title = node.frontmatter.title || node.fields.slug;
      const blogLink = node.fields.slug;
      const blogImage = node.frontmatter.banner.childImageSharp.gatsbyImageData;
      return (
        <BlogListStyled
          style={{
            ...scale(0.6),
          }}
          key={node.fields.slug}
        >
          <div className="blogList-container">
            <Link style={{ boxShadow: `none` }} to={blogLink}>
              <h1
                style={{
                  margin: `${rhythm(2 / 4)} 0`,
                }}
              >
                {title}
              </h1>
              <small className="blog-date">
                {node.frontmatter.date} &#9679;
                <span>⏳ {node.frontmatter.readLength}</span>
              </small>
              <p>{node.frontmatter.description}</p>
              <p>Read &#10140;</p>
            </Link>
          </div>
          <div className="blogList-imageContainer">
            <GatsbyImage image={blogImage} alt="Post Image" />
          </div>
        </BlogListStyled>
      );
    })}
  </Container>
);

export default React.memo(BlogList);

BlogList.propTypes = {
  posts: PropTypes.any,
};

const BlogListStyled = styled.div`
  margin: 0 auto;
  max-width: ${rhythm(45)};
  height: 100%;
  display: flex;
  flex-direction: row;
  background-color: ${(props) => props.theme.backgroundColorAlt};
  border-bottom: 2px dashed ${(props) => props.theme.primary};
  &:hover {
    .gatsby-image-wrapper {
      transform: scale(1.1);
      filter: contrast(80%);
    }
  }
  .blog-date {
    color: ${(props) => props.theme.textColor};
  }
  .blogList-container {
    width: 100%;
    padding: ${rhythm(2 / 4)} ${rhythm(3 / 4)};
    h1 {
      color: ${(props) => props.theme.primary};
      font-weight: 800;
    }
    p {
      font-family: "inconsolata";
    }
  }
  .blogList-imageContainer {
    width: 60%;
    overflow: hidden;
  }
  .gatsby-image-wrapper {
    max-width: ${rhythm(30)};
    height: 200px;
    transition: all 0.3s ease;
  }
  @media screen and (max-width: 560px) {
    .blogList-imageContainer {
      display: none;
    }
  }
`;
