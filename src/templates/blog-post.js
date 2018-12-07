import React, { Component } from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";

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
    return (
      <Layout>
        <Helmet>
          <title>{markdownRemark.frontmatter.title}</title>
        </Helmet>
        <h1>{markdownRemark.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
      </Layout>
    );
  }
}

export default BlogPost;
