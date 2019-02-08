// custom typefaces
import React from "react";
import "typeface-montserrat";
import "typeface-merriweather";
import "./src/utils/theme.css";
import { wrapRootElement as Wrap } from "./wrap-root-element";
import GlobalTheme from "./src/components/GlobalTheme";

export const wrapRootElement = ({ element }) => (
  <GlobalTheme>
    <Wrap element={element} />
  </GlobalTheme>
);
