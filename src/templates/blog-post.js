import React, { Component } from "react";
import Helmet from "react-helmet";
import { graphql, Link } from "gatsby";
import styled from "styled-components";
import Blog from "../components/BlogPost";
import Layout from "../components/layout";

export const pageQuery = graphql`
  query BlogPosts($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      id
      excerpt
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;

const Style = styled.ul`
  max-width: 960px;
  margin: 20px auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  padding: 0 20px;
  font-size: 2rem;

  a {
    text-decoration: none;
    color: #e53935;
  }
`;

const LinkStyle = {};
class BlogPost extends Component {
  render() {
    const { markdownRemark } = this.props.data;
    const { previous, next } = this.props.pageContext;
    return (
      <Layout>
        <Helmet>
          <title>{markdownRemark.frontmatter.title}</title>
        </Helmet>
        <Blog markdownRemark={markdownRemark} />
        <Style>
          <li>
            {previous && (
              <Link
                style={LinkStyle}
                to={`/blog/${previous.frontmatter.slug}`}
                rel="prev"
              >
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link
                style={LinkStyle}
                to={`/blog/${next.frontmatter.slug}`}
                rel="next"
              >
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </Style>
      </Layout>
    );
  }
}

export default BlogPost;
