import React from "react";

import Layout from "../components/layout";
import Blogs from "../components/Bloglist";

const Blog = () => (
  <Layout>
    <Blogs BlogLimit={500} />
  </Layout>
);

export default Blog;
