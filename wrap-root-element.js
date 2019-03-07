import React from "react";
import { MDXProvider } from "@mdx-js/tag";
import { preToCodeBlock } from "mdx-utils";
import Code from "./src/components/mdxComponents/Code";
import GlobalTheme from "./src/components/GlobalTheme";

// components is its own object outside of render so that the references to
// components are stable
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

const wrapRootElement = ({ element }) => {
  return (
    <GlobalTheme>
      <MDXProvider components={components}>{element}</MDXProvider>
    </GlobalTheme>
  );
};

export { wrapRootElement };