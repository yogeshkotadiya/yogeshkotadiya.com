import React from "react";
import { Link, graphql } from "gatsby";
import Helmet from "react-helmet";
import { MDXRenderer } from "gatsby-mdx";

import Layout from "components/layout";
import { rhythm, scale } from "utils/typography";
import BlogTheme from "components/blogTheme";

function BlogPostTemplate(props) {
  const post = props.data.mdx;
  const siteTitle = props.data.site.siteMetadata.title;
  const { previous, next } = props.pageContext;

  return (
    <Layout location={props.location} title={siteTitle}>
      <Helmet>
        <title>
          {post.frontmatter.title} | {siteTitle}
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
            ...scale(1.3),
            marginBottom: rhythm(2),
            marginTop: 0,
            color: "#ef5350",
          }}
        >
          {post.frontmatter.title}
        </h1>
        <p
          style={{
            ...scale(3 / 5),
            display: `block`,
            marginBottom: rhythm(1.5),
            marginTop: rhythm(-1),
          }}
        >
          {post.frontmatter.date} ⏳ {post.frontmatter.readLength}
        </p>
        <BlogTheme>
          <MDXRenderer>{post.code.body}</MDXRenderer>
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
    </Layout>
  );
}

export default BlogPostTemplate;

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
      }
      code {
        body
      }
    }
  }
`;
