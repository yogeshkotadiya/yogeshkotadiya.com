import React from "react";

import Layout from "components/layout";
import Project from "components/Projects";

const Projects = ({ location }) => (
  <Layout location={location}>
    <Project />
  </Layout>
);

export default Projects;
