import React from "react";
import { graphql } from "gatsby";
import PropTypes from "prop-types";

import Layout from "components/layout";
import Home from "components/Home";

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(limit: 3, sort: { fields: [frontmatter___date], order: DESC }) {
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

const IndexPage = ({ location, data }) => (
  <Layout location={location}>
    <Home data={data} />
  </Layout>
);

IndexPage.propTypes = {
  data: PropTypes.node.required,
  location: PropTypes.string,
};

export default IndexPage;
