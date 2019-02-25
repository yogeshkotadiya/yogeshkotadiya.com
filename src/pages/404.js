import React from "react";
import Layout from "components/layout";
import NotFound from "components/404";

const NotFoundPage = () => (
  <Layout>
    <NotFound />
  </Layout>
);

export default React.memo(NotFoundPage);
