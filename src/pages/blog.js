import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import BlogList from "components/Bloglist";
import SEO from "components/SEO";
import PageHeading from "components/PageHeading";

import "styles/pages/blog.css";

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allMdx.edges;
  return (
    <>
      <SEO title={`Blog | ${siteTitle}`} />
      <div className="blog-page">
        <PageHeading headingName="Blog">Blog</PageHeading>
        <BlogList location={location} title={siteTitle} posts={posts} />
      </div>
    </>
  );
};

export default BlogIndex;

BlogIndex.propTypes = {
  data: PropTypes.any,
  location: PropTypes.object,
};

export const pageQuery = graphql`
  {
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
            description
            banner {
              childImageSharp {
                gatsbyImageData(width: 300, layout: CONSTRAINED)
              }
            }
          }
        }
      }
    }
  }
`;
