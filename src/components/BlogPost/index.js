import React from "react";

const BlogPost = ({ markdownRemark }) => {
  return (
    <div>
      <h1>{markdownRemark.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
    </div>
  );
};

export default BlogPost;
