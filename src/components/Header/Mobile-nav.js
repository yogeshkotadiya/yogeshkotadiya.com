import React, { useState } from "react";
import { css } from "styled-components";

import { Nav } from "./index";
import "styles/mobile-nav.css";

const Menu = ({ color = "white" }) => {
  const [isToggledOn, setToggle] = useState(false);
  const toggle = () => setToggle(!isToggledOn);
  return (
    <div className="mobile-nav">
      <button
        onClick={toggle}
        aria-label={`${isToggledOn ? "close menu" : "open menu"}`}
        className="mobile-nav__button"
        css={css`
          top: ${isToggledOn ? "5%" : 0};
          right: ${isToggledOn ? "15%" : 0};
          position: ${isToggledOn ? "fixed" : "relative"};
        `}
      >
        <div
          className="mobile-nav__button--ghost"
          css={css`
            background: ${color};
            ${isToggledOn ? "background: transparent" : `background: ${color}`};
            &::before {
              content: "";
              top: -8px;
              width: 24px;
              height: 2px;
              background: ${isToggledOn ? "white" : `${color}`};
              position: absolute;
              left: 0;
              ${isToggledOn
                ? "transform: rotate(45deg); top: 0; "
                : "transform: rotate(0)"};
              transition: all 250ms cubic-bezier(0.86, 0, 0.07, 1);
            }
            &::after {
              top: 8px;
              content: "";
              width: 24px;
              height: 2px;
              background: ${isToggledOn ? "white" : `${color}`};
              position: absolute;
              left: 0;
              ${isToggledOn
                ? "transform: rotate(-45deg); top: 0;"
                : "transform: rotate(0)"};
              transition: all 250ms cubic-bezier(0.86, 0, 0.07, 1);
            }
          `}
        />
      </button>
      {isToggledOn && (
        <div
          css={css`
            background: ${props => props.theme.primary}60;
          `}
          className="nav__container"
        >
          <Nav toggle={toggle} />
        </div>
      )}
    </div>
  );
};

export default Menu;
