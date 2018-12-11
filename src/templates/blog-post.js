import React, { Component } from "react";
import Helmet from "react-helmet";
import { graphql, Link } from "gatsby";

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
        <ul
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            listStyle: "none",
            padding: 0
          }}
        >
          <li>
            {previous && (
              <Link to={`/blog/${previous.frontmatter.slug}`} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={`/blog/${next.frontmatter.slug}`} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </Layout>
    );
  }
}

export default BlogPost;
