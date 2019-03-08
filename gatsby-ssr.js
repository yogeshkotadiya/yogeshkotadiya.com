import React from "react";
import { wrapRootElement as wrap } from "./wrap-root-element";

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      rel="dns-prefetch"
      key="dns-prefetch-google-analytics"
      href="https://www.google-analytics.com"
    />,
  ]);
};

export const wrapRootElement = wrap;
