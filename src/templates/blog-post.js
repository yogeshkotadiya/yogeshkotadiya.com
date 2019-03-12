import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import Img from "gatsby-image";
import Helmet from "react-helmet";
import { MDXRenderer } from "gatsby-mdx";
import Markdown from "react-markdown";

import { rhythm, scale } from "utils/typography";
import BlogTheme from "components/blogTheme";

function BlogPostTemplate(props) {
  const { frontmatter, code } = props.data.mdx;
  const siteTitle = props.data.site.siteMetadata.title;
  const { previous, next } = props.pageContext;

  return (
    <>
      <Helmet>
        <title>
          {frontmatter.title} | {siteTitle}
        </title>
      </Helmet>
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(40),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          ...scale(0.6),
        }}
      >
        <h1
          style={{
            ...scale(1.2),
            marginBottom: rhythm(2),
            marginTop: 0,
            color: "#ef5350",
            fontWeight: 600,
            textAlign: "center",
          }}
        >
          {frontmatter.title}
        </h1>
        <p
          style={{
            ...scale(3 / 5),
            display: `block`,
            marginBottom: rhythm(1.5),
            marginTop: rhythm(-1),
            opacity: 0.65,
            textAlign: "center",
          }}
        >
          Yogesh Kotadiya -{frontmatter.date} ⏳ {frontmatter.readLength}
        </p>
        <div
          style={{
            textAlign: "center",
            marginBottom: rhythm(1.2),
          }}
        >
          <Img
            fluid={frontmatter.banner.childImageSharp.fluid}
            alt="Post Banner"
          />
          {frontmatter.bannerCredit ? (
            <Markdown>{frontmatter.bannerCredit}</Markdown>
          ) : null}
        </div>
        <BlogTheme>
          <MDXRenderer>{code.body}</MDXRenderer>
        </BlogTheme>
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />

        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </div>
    </>
  );
}

export default BlogPostTemplate;

BlogPostTemplate.propTypes = {
  data: PropTypes.any,
  location: PropTypes.object,
  pageContext: PropTypes.object,
};

export const pageQuery = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        readLength
        banner {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
        bannerCredit
      }
      code {
        body
      }
    }
  }
`;
