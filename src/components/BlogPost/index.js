import React from "react";
import BlogStyled from "./BlogStyled";

const BlogPost = ({ markdownRemark }) => {
  return (
    <BlogStyled>
      <h1>{markdownRemark.frontmatter.title}</h1>
      <p id="blog-date">{markdownRemark.frontmatter.date}</p>
      <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
    </BlogStyled>
  );
};

export default BlogPost;
