import React from "react";
import { Link } from "gatsby";
import { withTheme } from "styled-components";
import { ThemeContext } from "components/GlobalTheme";

import Toggle from "./Toggle";
import Menu from "./Mobile-nav";
import "styles/header.css";

const Nav = ({ toggle, theme }) => {
  const colorPickerRef = React.useRef(null);
  const { updateTheme } = React.useContext(ThemeContext);

  /**
   * Change the Primary Color of Global Theme
   */
  const handleOnChangeColor = (e) => {
    updateTheme({
      primary: e.target.value,
    });
  };

  return (
    <>
      <div className="nav">
        <Link
          onClick={toggle}
          aria-label="Navigate to Projects page"
          className="nav__link"
          css={css`
            color: ${(props) => props.theme.lightBlack};
          `}
          to={"/projects"}
        >
          Projects
        </Link>
        <Link
          onClick={toggle}
          className="nav__link"
          css={css`
            color: ${(props) => props.theme.lightBlack};
          `}
          aria-label="Navigate to Blog page"
          to={"/blog"}
        >
          Blog
        </Link>
        <Link
          onClick={toggle}
          className="nav__link"
          css={css`
            color: ${(props) => props.theme.lightBlack};
          `}
          aria-label="Navigate to About page"
          to={"/about"}
        >
          About
        </Link>

        <input
          type="color"
          id="color-picker"
          name="color-picker"
          ref={colorPickerRef}
          value={theme.primary}
          onInput={handleOnChangeColor}
          onChange={handleOnChangeColor}
        />
      </div>
      <Toggle />
    </>
  );
};

export { Nav };

function Header({ theme }) {
  return (
    <nav className="header">
      <div className="headerContent">
        <Link to={"/"} className="header-name">
          @yogeshkotadiya
        </Link>
        <div className="desktop-nav">
          <Nav theme={theme} />
        </div>
        <Menu color={theme.primary} />
      </div>
    </nav>
  );
}

export default withTheme(Header);
