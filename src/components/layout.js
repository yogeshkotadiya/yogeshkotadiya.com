import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";

import Header from "./Header";
import Footer from "./Footer";
import Metadata from "./Metadata";

const ThemeContext = React.createContext();

const Layout = ({ children }) => {
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <>
          <Metadata title={data.site.siteMetadata.title} />
          <Header />
          {children}
          <Footer />
        </>
      )}
    />
  );
};
Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
export { ThemeContext };
