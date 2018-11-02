import React from 'react';
import { Link, graphql } from 'gatsby';
import Header from '../components/Header';
const Blog = ({ data }) => {
  const { edges: posts } = data.allMdx;
  return (
    <React.Fragment>
      <Header />
      <h1>My Blogs</h1>
      {posts.map(({ node: page }) => {
        const { path, title, date, excerpt } = page.frontmatter;
        return (
          <>
            <h2>
              <Link id={page.id} to={path}>
                {title}
              </Link>
            </h2>
            <p>{date}</p>
            <p>{excerpt}</p>
          </>
        );
      })}
    </React.Fragment>
  );
};

export const blogQuery = graphql`
  query BLOG_QUERY {
    allMdx {
      edges {
        node {
          id
          frontmatter {
            path
            title
            date
            author
          }
          excerpt
        }
      }
    }
  }
`;
export default Blog;
