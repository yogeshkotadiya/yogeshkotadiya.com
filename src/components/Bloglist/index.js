import React from "react";
import { StaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import Blog from "./BlogPost";

const BlogListStyled = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 20px auto;
  display: flex;
  flex-direction: column;
`;

const BlogListQuery = graphql`
  query BlogListQuery {
    allMarkdownRemark(
      limit: 500
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            title
            author
            slug
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;

const Bloglist = () => (
  <StaticQuery
    query={BlogListQuery}
    render={({ allMarkdownRemark: { edges } }) => (
      <BlogListStyled>
        <h1 id="page-heading">Blog</h1>
        {edges.map(({ node }) => (
          <Blog
            frontmatter={node.frontmatter}
            excerpt={node.excerpt}
            key={node.frontmatter.slug}
          />
        ))}
      </BlogListStyled>
    )}
  />
);

export default Bloglist;
