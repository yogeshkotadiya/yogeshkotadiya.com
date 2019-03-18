import * as React from "react";
import PropTypes from "prop-types";
import { graphql, useStaticQuery } from "gatsby";

import GlobalTheme from "./GlobalTheme";
import Header from "./Header";
import Footer from "./Footer";

// components is its own object outside of render so that the references to
// components are stable

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <GlobalTheme>
      <Header />
      {children}
      <Footer />
    </GlobalTheme>
  );
};
Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
