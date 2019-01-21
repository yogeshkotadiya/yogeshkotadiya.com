import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import BlogList from "../components/Bloglist";

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;
    const posts = data.allMdx.edges;
    return (
      <Layout>
        <BlogList
          location={this.props.location}
          title={siteTitle}
          posts={posts}
        />
      </Layout>
    );
  }
}

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
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
          }
        }
      }
    }
  }
`;
