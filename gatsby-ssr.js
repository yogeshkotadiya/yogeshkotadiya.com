import * as React from "react";

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      rel="preconnect dns-prefetch"
      key="dns-prefetch-google-analytics"
      href="https://www.google-analytics.com"
    />,
  ]);
};
