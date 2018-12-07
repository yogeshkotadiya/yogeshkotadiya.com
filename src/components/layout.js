import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import { ThemeProvider } from "styled-components";

import GlobalStyles, { theme } from "./styles/globalStyles";

import Header from "./Header";
import Footer from "./Footer";
import Metadata from "./Metadata";

const Layout = ({ children }) => (
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
      <ThemeProvider theme={theme}>
        <>
          <Metadata title={data.site.siteMetadata.title} />
          <Header />
          {children}
          <Footer />
          <GlobalStyles />
        </>
      </ThemeProvider>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
