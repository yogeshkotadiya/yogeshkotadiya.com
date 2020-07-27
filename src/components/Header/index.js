import React from "react";
import { Link } from "gatsby";
import styled, { withTheme } from "styled-components";
import { ThemeContext } from "components/GlobalTheme";

import Toggle from "./Toggle";
import Menu from "./Mobile-nav";
import "styles/header.css";

const StyledLink = styled(Link)`
  position: relative;
  text-align: center;
  padding: 10px;
  transition: 0.2s all ease-in;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 1px;
    bottom: 0;
    margin: 4px -10px;
    background-color: ${(props) => props.theme.primary};
    visibility: hidden;
    transform: scaleX(0);
    transition: all 0.25s ease-in-out 0s;
  }
`;

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
        <StyledLink
          onClick={toggle}
          aria-label="Navigate to Projects page"
          className="nav__link"
          css={css`
            color: ${(props) => props.theme.lightBlack};
          `}
          to={"/projects"}
        >
          Projects
        </StyledLink>
        <StyledLink
          onClick={toggle}
          className="nav__link"
          css={css`
            color: ${(props) => props.theme.lightBlack};
          `}
          aria-label="Navigate to Blog page"
          to={"/blog"}
        >
          Blog
        </StyledLink>
        <StyledLink
          onClick={toggle}
          className="nav__link"
          css={css`
            color: ${(props) => props.theme.lightBlack};
          `}
          aria-label="Navigate to About page"
          to={"/about"}
        >
          About
        </StyledLink>

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
        <Menu color={theme.primary} theme={theme} />
      </div>
    </nav>
  );
}

export default withTheme(Header);
