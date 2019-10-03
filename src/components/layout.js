import * as React from "react";
import PropTypes from "prop-types";

import GlobalTheme from "./GlobalTheme";
import Header from "./Header";
import Footer from "./Footer";

import "styles/layout.css";
// components is its own object outside of render so that the references to
// components are stable

const Layout = ({ children }) => {
  return (
    <GlobalTheme>
      <Header />
      <main>{children}</main>
      <Footer />
    </GlobalTheme>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
