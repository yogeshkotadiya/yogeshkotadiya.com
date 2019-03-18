import * as React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { rhythm, scale } from "utils/typography";
import styled from "styled-components";

import Container from "./Container";

const BlogListStyled = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: ${rhythm(40)};
  padding: ${rhythm(2 / 4)} ${rhythm(3 / 4)};
  background-color: ${props => props.theme.backgroundColorAlt};
  border-bottom: 2px dashed ${props => props.theme.primary};
  .blog-date {
    color: ${props => props.theme.textColor};
  }
`;

const BlogList = ({ posts }) => (
  <Container>
    {posts.map(({ node }) => {
      const title = node.frontmatter.title || node.fields.slug;
      const blogLink = node.fields.slug;
      return (
        <BlogListStyled
          style={{
            ...scale(0.6),
          }}
          key={node.fields.slug}
        >
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
            {node.frontmatter.date},{" "}
            <span>⏳ {node.frontmatter.readLength}</span>
          </small>
          <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
          <Link style={{ boxShadow: `none` }} to={blogLink}>
            Read &#10140;
          </Link>
        </BlogListStyled>
      );
    })}
  </Container>
);

export default BlogList;

BlogList.propTypes = {
  posts: PropTypes.any,
};
