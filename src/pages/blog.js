import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Layout from "components/layout";
import BlogList from "components/Bloglist";

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allMdx.edges;
  return (
    <Layout>
      <BlogList location={location} title={siteTitle} posts={posts} />
    </Layout>
  );
};

export default BlogIndex;

BlogIndex.propTypes = {
  data: PropTypes.node.required,
  location: PropTypes.string,
};

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
