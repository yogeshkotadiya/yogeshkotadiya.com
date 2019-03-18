import * as React from "react";
import PropTypes from "prop-types";
import Markdown from "react-markdown";
import Img from "gatsby-image";
import Helmet from "react-helmet";
import { Link, graphql } from "gatsby";
import { MDXRenderer } from "gatsby-mdx";
import { MDXProvider } from "@mdx-js/tag";
import { preToCodeBlock } from "mdx-utils";

import { rhythm, scale } from "utils/typography";
import BlogTheme from "components/blogTheme";
import Code from "components/mdxComponents/Code";

function BlogPostTemplate(props) {
  const { frontmatter, code, fields } = props.data.mdx;
  const { previous, next } = props.pageContext;
  const siteTitle = props.data.site.siteMetadata.title;

  const components = {
    pre: preProps => {
      const props = preToCodeBlock(preProps);
      // if there's a codeString and some props, we passed the test
      if (props) {
        return <Code {...props} />;
      } else {
        // it's possible to have a pre without a code in it
        return <pre {...preProps} />;
      }
    },
  };

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
          {frontmatter.banner && (
            <Img
              fluid={frontmatter.banner.childImageSharp.fluid}
              alt="Post Banner"
            />
          )}
          {frontmatter.bannerCredit && (
            <Markdown className="banner-credit">
              {frontmatter.bannerCredit}
            </Markdown>
          )}
        </div>
        <MDXProvider components={components}>
          <BlogTheme>
            <MDXRenderer>{code.body}</MDXRenderer>
          </BlogTheme>
        </MDXProvider>
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
        <div
          style={{
            ...scale(1.5),
          }}
        >
          <a
            style={{
              fontSize: "1.8rem",
            }}
            href={fields.editBlog}
            target="_blank"
            rel="noopener noreferrer"
          >
            Edit this on Github
          </a>
        </div>

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
      fields {
        editBlog
      }
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
