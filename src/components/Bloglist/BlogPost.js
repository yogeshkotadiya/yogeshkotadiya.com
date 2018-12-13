import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const BlogStyled = styled.li`
  list-style: none;
  padding: 15px;
  height: 100%;
  border-radius: 10px;
  transition: 0.2s all;
  a {
    text-decoration: none;
    color: ${props => props.theme.primary};
  }
  &:hover {
    /* box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2); */
    background-color: ${props => props.theme.primaryLight};
  }
  p {
    font-size: 1.8rem;
  }
  #blog-date {
    font-size: 1.4rem;
    color: ${props => props.theme.lightBlack};
  }
  h1 {
    font-size: 3rem;
  }
`;

function BlogPost({ frontmatter, excerpt }) {
  return (
    <BlogStyled>
      <h1>
        <Link to={`/blog/${frontmatter.slug}`}>{frontmatter.title}</Link>
      </h1>
      <p>
        <span id="blog-date">
          <strong>{frontmatter.date}</strong> ⏳ {frontmatter.readtime || 5} min
          read
        </span>
      </p>
      <p>{excerpt}</p>
    </BlogStyled>
  );
}

export default BlogPost;
