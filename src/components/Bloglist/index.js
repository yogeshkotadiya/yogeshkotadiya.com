import React from "react";
import { Link } from "gatsby";
import { rhythm, scale } from "../../utils/typography";
import styled from "styled-components";

const BlogListStyled = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: ${rhythm(40)};
  padding: ${rhythm(2 / 4)} ${rhythm(3 / 4)};
  .blog-date {
    color: ${props => props.theme.textColor};
  }
`;

const BlogList = ({ posts }) => (
  <>
    {posts.map(({ node }) => {
      const title = node.frontmatter.title || node.fields.slug;
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
            <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
              {title}
            </Link>
          </h1>
          <small className="blog-date">
            {node.frontmatter.date},{" "}
            <span>⏳ {node.frontmatter.readLength}</span>
          </small>
          <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
          <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
            Read More &#10140;
          </Link>
        </BlogListStyled>
      );
    })}
  </>
);

export default BlogList;
