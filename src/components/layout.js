import React from "react";
import PropTypes from "prop-types";
import { graphql, useStaticQuery } from "gatsby";
import { MDXProvider } from "@mdx-js/tag";
import { preToCodeBlock } from "mdx-utils";

import Code from "./mdxComponents/Code";
import GlobalTheme from "./GlobalTheme";
import Header from "./Header";
import Footer from "./Footer";

// components is its own object outside of render so that the references to
// components are stable

const Layout = ({ children }) => {
  const components = {
    pre: preProps => {
      const props = preToCodeBlock(preProps);
      // if there's a codeString and some props, we passed the test
      if (props) {
        return <Code {...props} />;
      } else {
        // it's possible to have a pre without a code in it
        return <pre {...preProps} />;
      }
    },
  };
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
      <MDXProvider components={components}>{children}</MDXProvider>
      <Footer />
    </GlobalTheme>
  );
};
Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
