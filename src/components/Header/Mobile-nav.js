import * as React from "react";
import { css } from "styled-components";

import { Nav } from "./index";

const Menu = ({ color = "white" }) => {
  const [isToggledOn, setToggle] = React.useState(false);
  const toggle = () => setToggle(!isToggledOn);
  return (
    <div className="mobile-nav">
      <button
        onClick={toggle}
        aria-label={`${isToggledOn ? "close menu" : "open menu"}`}
        css={css`
          z-index: 30;
          top: ${isToggledOn ? "5%" : 0};
          right: ${isToggledOn ? "15%" : 0};
          position: relative;
          background: transparent;
          border: none;
          cursor: pointer;
          position: ${isToggledOn ? "fixed" : "relative"};
          width: 24px;
          height: 24px;
          :hover:not(.touch),
          :focus {
            background: transparent;
            border: none;
            outline: none;
          }
        `}
      >
        <div
          css={css`
            width: 24px;
            height: 2px;
            background: ${color};
            position: absolute;
            left: 0;
            ${isToggledOn ? "background: transparent" : `background: ${color}`};
            transition: all 250ms cubic-bezier(0.86, 0, 0.07, 1);
            ::before {
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
            ::after {
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
            position: fixed;
            z-index: 20;
            left: 0;
            top: -1rem;
            width: 100vw;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow-x: hidden;
            nav {
              display: flex;
              justify-content: center;
              flex-direction: column;
              align-items: center;
            }
            a {
              font-weight: 600;
            }
            .toggleWrapper {
              right: -1rem;
              bottom: 2rem;
            }
            background: ${props => props.theme.primary}60;
            backdrop-filter: blur(1.5rem);
          `}
        >
          <Nav toggle={toggle} />
        </div>
      )}
    </div>
  );
};

export default Menu;
